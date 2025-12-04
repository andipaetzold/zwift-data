// TODO: Lint?
import fs from "fs";
import xmlJs from "xml-js";
import glob from "glob";
import json2csv from "json2csv";

const EXTRACTED_DATA_DIR = "PATH_TO_FOLDER_WITH_DECODED_WAD_FILES" // TODO: replace with your path

/**
 * Unwrap xml-js output
 * From: { a: { _text: 'b' }, b: { d: { _text: 'bar' } } }
 * To: { a: 'b', b: { d: 'bar' } }
 * BEWARE: Mutates the input object
 */
function unwrapObjectValues(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      unwrapObjectValues(obj[key]);
      if (Object.keys(obj[key]).length === 1 && obj[key]._text !== undefined) {
        obj[key] = obj[key]._text;
      } else if (Object.keys(obj[key]).length === 0) {
        obj[key] = undefined
      }
    }
  }
}

/**
 * Load an XML file and parse it into a JS object, with some convenience post-processing
 */
function loadXmlFile(filepath, postProcess = () => {}) {
  const fileContent = fs.readFileSync(resolve(EXTRACTED_DATA_DIR, filepath), "utf8")
  const parsed = xmlJs.xml2js(fileContent, {compact: true, nativeType: true})
  postProcess(parsed) // BEWARE: Mutates the input object
  unwrapObjectValues(parsed) // BEWARE: Mutates the input object
  return parsed
}

/**
 * Resolve XML references
 * From: <Frame>data/bikes/Frames/BridgestoneOVS2021/frame.xml</Frame>
 * To: <Frame> ... actual data ...</Frame>
 * @param obj
 */
function resolveXmlReferences(obj) {
  for (const key in obj) { // beware: only in root level, that's enough for us
    let val = obj[key]
    if (typeof val === 'string' && val.includes('.xml')) {
      val = val.replace(/^"(.*)"$/, '$1') // trim quotes, sometimes they are there, see README
      const relPath = val.replace(/^data\//, ``) // -> trim "data/" prefix, sometimes it's there, see README
      let reffed = loadXmlFile(relPath);
      obj[key] = reffed.Component ?? {} // Mutate the input object
    }
  }
}

// Load locales, needed for bike names
const localesFileContent = fs.readFileSync(`${EXTRACTED_DATA_DIR}/Noesis/Blend_Data/Language_EN.xaml`, "utf8")
const localesParsed = xmlJs.xml2js(localesFileContent, {compact: true})
const localesMap = {} // { LOC_HOMESCREEN_EARN_XP_POINTS: 'Earn %d XP' }
for (const item of localesParsed.ResourceDictionary['sys:String']) {
  localesMap[item._attributes['x:Key']] = item._text
}

const output = []
const bikeXmlFilepaths = glob.sync(`${EXTRACTED_DATA_DIR}/bikes/*.xml`)
for (const filepath of bikeXmlFilepaths) {
  const parsed = loadXmlFile(filepath, (parsed) => {
    ;['Name', 'Price', 'Level'].forEach(key => {
      if (Array.isArray(parsed?.Bike?.[key])) {
        // ./data/raw/bikes/CanyonAeroadTeamEditionConfig.xml
        // contains two root "name" elements: Aeroad Team Edition and Canyon Aeroad Team
        // contains two root "price" elements: 15000 and 0
        // contains two root "level" elements: -1 and -1
        console.warn(`🔢 Multiple definitions in "${filepath}" for "${key}" attribute, using the first one`)
        parsed.Bike[key] = parsed.Bike[key][0]
      }
    })
  })

  if (!parsed.Bike) {
    // bikes/BikeConfigurations.xml is not a bike definition
    console.warn(`🙈 Missing bike definition in ${filepath}, probably some other file`)
    continue
  }

  resolveXmlReferences(parsed.Bike) // Mutates the input object

  const item = {
      make: parsed.Bike.Make,
      name: localesMap[parsed.Bike.NameLoc] ?? parsed.Bike.Name, // localesMap[parsed.Bike.NameLoc] should be always defined
      year: parsed.Bike.Year,
      price: parsed.Bike.Price,
      level: parsed.Bike.Level,
    }

  ;[
    'Frame',
    'Fork',
    'Handlebars',
    'Crank',
    'FrontDerailleur',
    'RearDerailleur',
  ].forEach(key => {
    const camelKey = key[0].toLowerCase() + key.slice(1) // Frame -> frame
    const nestedDef = parsed.Bike[key] // Frame -> parsed.Bike.Frame
    for (const [from, to] of Object.entries({
      WeightGrams: 'Weight',
      CdABias: 'CdA',
      Price: 'Price',
      Name: 'Name',
    })) {
      if (key === 'Frame' && to === 'Price') continue // Frame has no price
      if (key === 'Fork' && to === 'Price') continue // Fork has no price
      if (key === 'Fork' && to === 'CdA') continue // Fork has no CdA
      if (key === 'Handlebars' && to === 'CdA') continue // Fork has no CdA
      if (key === "Crank" && to === "CdA") continue // Crank has no CdA
      if (key === "FrontDerailleur" && to === "CdA") continue // FrontDerailleur has no CdA
      if (key === "RearDerailleur" && to === "CdA") continue // RearDerailleur has no CdA

      // item.frameWeight = parsed.Bike.Frame.WeightGrams
      item[`${camelKey}${to}`] = nestedDef?.[from]
    }
  })

  // Delete data that are present, but actually is not meaningful
  delete item.price // does not match the sweat-points price, find out why?
  delete item.handlebarsPrice
  delete item.handlebarsName
  delete item.frameName
  delete item.forkName
  delete item.crankPrice
  delete item.crankName
  delete item.frontDerailleurPrice
  delete item.frontDerailleurName
  delete item.rearDerailleurPrice
  delete item.rearDerailleurName

  output.push(item)
}

const csv = json2csv.parse(output);
fs.writeFileSync("./data/bikes.csv", csv); // Store CSV for easier inspection, git ignored
fs.writeFileSync("./data/bikes.json", JSON.stringify(output, null, 2)); // Store JSON for publishing
