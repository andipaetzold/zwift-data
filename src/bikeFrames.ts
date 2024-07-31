import { BikeFrame } from "./types";

export const bikeFrames: ReadonlyArray<BikeFrame> = (
  [
    [2454550, "Ventum One", 2018, true],
    [11394848, "Felt Felt TT 2021", 2021, true],
    [43434703, "Scott ScottFoil2022", 2022, false],
    [57842352, "Liv LivLangma2021", 2021, false],
    [103914490, "Giant Propel Advanced SL Disc", 2018, false],
    [106535518, "Cervelo R5", 2016, false],
    [123106780, "Cervelo PX-Series", 2017, true],
    [142926447, "Trek Emonda", undefined, false],
    [166263359, "Specialized Roubaix", 2015, false],
    [206931035, "DiamondBack Andean", 2017, true],
    [270803031, "Zwift Skeletal", undefined, false],
    [291034584, "Trek Speed Concept 2021", 2021, true],
    [385270250, "Zwift Mountain", 2019, false],
    [389045293, "BMC SLR01", 2015, false],
    [390579581, "Canyon Aeroad Team Edition", 2021, false],
    [427028396, "Zwift Buffalo Qhubeka", 2015, false],
    [430380910, "Pinarello Dogma F12", 2020, false],
    [431820725, "Allied AlliedAble2022", 2021, false],
    [529764489, "Cannondale Super Six Evo", 2020, false],
    [594642753, "Trek Super Caliber 2020", 2020, false],
    [601769019, "Scott Plasma", 2019, true],
    [785070754, "Specialized Ruby S-Works", undefined, false],
    [790618803, "Canyon Speedmax", 2015, true],
    [807787291, "Specialized Roubaix S-Works", undefined, false],
    [833740600, "Pinarello F8", 2015, false],
    [835142897, "Ventum VentumNS12022", 2022, false],
    [935373427, "Specialized Tarmac SL7", 2021, false],
    [940439989, "Specialized Epic S-Works", 2020, false],
    [973848540, "Specialized Venge", 2015, false],
    [988819017, "Ridley Helium", 2018, false],
    [1000176255, "Parlee ESX", 2015, false],
    [1029279076, "Zwift Steel", 2015, false],
    [1122831861, "Canyon AeroadSRAM2024", 2024, false],
    [1133663232, "Specialized SpecializedDiverge2022", 2022, false],
    [1152794347, "QuintanaRoo QuintanaVPR2022", 2022, true],
    [1169494001, "Pinarello Espada", 1995, true],
    [1174020494, "Chapter2 Chapter2TOA2021", 2021, false],
    [1188190925, "Specialized Tarmac SL7 Sram", 2021, false],
    [1254205148, "Scott Spark RC", 2019, false],
    [1315158373, "Scott Foil", 2015, false],
    [1381140630, "Canyon Grail", 2019, false],
    [1409258486, "Zwift BigSpinCruiser2024", 1885, false],
    [1418783338, "Specialized Shiv S-Works", undefined, true],
    [1433973142, "Felt IA", 2019, true],
    [1444415023, "Zwift DefaultOrange", undefined, false],
    [1456463855, "Zwift Concept Z1", 2115, false],
    [1520594784, "Canyon Aeroad 2015", 2015, false],
    [1532698216, "Cannondale EVO", 2015, false],
    [1592822481, "Canyon Lux", 2019, false],
    [1639102673, "Specialized Specialized Crux 2022", 2022, false],
    [1675779900, "Canyon CanyonUltimate2021", 2021, false],
    [1703496698, "Cube CubeLitening2021", 2021, false],
    [1756027350, "Canyon Inflite", 2019, false],
    [1767548815, "Cube Cube Litening", 2018, false],
    [1806040170, "Canyon Ultimate", 2015, false],
    [1821736990, "Mosaic MosaicRT12022", 2022, false],
    [1874220070, "Moots MootsVamoots2021", 2021, false],
    [1928137471, "Trek Emonda SL", undefined, false],
    [1936733870, "Chapter2 Chapter2KOKO2022", 2022, false],
    [1972610461, "Cervelo CerveloS52021", 2021, false],
    [2002850191, "Scott ScottPlasma2022", 2022, true],
    [2005280203, "Cannondale System Six", 2019, false],
    [2029842509, "Zwift BigWheel-Concept", undefined, false],
    [2044307781, "Specialized Amira", 2015, false],
    [2059853947, "Cannondale Synapse", 2018, false],
    [2076241890, "Specialized Tarmac Pro", 2019, false],
    [2106340733, "Zwift Carbon", undefined, false],
    [2130784714, "Zwift Buffalo Fahrrad", 2015, false],
    [2132445842, "Uranium UraniumNuclear2021", 2021, false],
    [2162282312, "Liv LivDevote2022", 2021, false],
    [2205705045, "Giant TCR Advanced SL", 2015, false],
    [2346116422, "Specialized SpecializedAethos2021", 2021, false],
    [2360271970, "Giant GiantRevolt2022", 2022, false],
    [2373108361, "Pinarello Dogma 65.1", 2015, false],
    [2397946994, "Specialized Allez Sprint", 2019, false],
    [2439776613, "Chapter2 Tere", 2019, false],
    [2442494761, "Specialized Tarmac", 2015, false],
    [2459800850, "VanRysel VanRyselEDR2021", 2021, false],
    [2460287610, "Specialized Shiv Disc", 2019, true],
    [2513788321, "Canyon CanyonSpeedmaxCRSLXDisc2021", 2021, true],
    [2583787351, "Giant GiantTCRAdvancedSL", 2021, false],
    [2629993294, "Canyon Aeroad2024", 2024, false],
    [2650592817, "Cervelo S5", 2015, false],
    [2654154998, "Zwift Gravel", 2019, false],
    [2662728556, "Specialized Amira S-Works", undefined, false],
    [2668672480, "Chapter2 Rere", 2019, false],
    [2699673850, "Parlee RZ7", 2020, false],
    [2884593499, "Canyon CanyonSRAMUltimate2022", 2022, false],
    [2943880629, "Cello Team", 2015, false],
    [2949471782, "Specialized Tarmac Mixtape", 2015, false],
    [2985335789, "BMC BMCRoadMachine2021", 2021, false],
    [3002729519, "Felt AR", 2018, false],
    [3033010663, "Merida Scultura", 2020, false],
    [3078441697, "Trek Team", undefined, false],
    [3079625256, "Zwift BigWheel", undefined, false],
    [3133382714, "Scott ScottSparkMTB2022", 2022, false],
    [3186772618, "Pinarello Dogma F10", 2019, false],
    [3247466139, "Ribble Endurance", 2019, false],
    [3284970806, "Zwift Aero", undefined, false],
    [3367169312, "Pinarello Bolide", 2015, true],
    [3373750102, "BMC Timemachine01", 2015, true],
    [3402382031, "Cadex CadexTri2022", 2022, true],
    [3469325930, "Factor One", 2020, false],
    [3483005256, "Canyon Speedmax Team Edition", 2015, true],
    [3495124341, "Liv Langma Advanced SL", 2018, false],
    [3523334161, "Specialized Venge S-Works", 2019, false],
    [3572756959, "Zwift TT", undefined, true],
    [3583022399, "Cervelo Aspero", 2020, false],
    [3628259811, "Colnago Colnago V3RS", 2020, false],
    [3660740142, "Felt FeltFR2022", 2022, false],
    [3710262807, "Zwift Safety", 1885, false],
    [3713154300, "Pinarello DogmaX2024", 2023, false],
    [3772124007, "Specialized Shiv", 2015, true],
    [3787085621, "Lauf Lauf True Grit", 2021, false],
    [3814159195, "Zwift Handcycle", undefined, false],
    [3867639546, "Focus Izalco Max 2020", 2020, false],
    [3868468027, "BMC BmcTeamMachine2022", 2022, false],
    [3914093169, "Specialized Ruby", 2015, false],
    [3920433954, "Pinarello Bolide TT", 2018, true],
    [3928995152, "Bridgestone BridgestoneOVS2021", 2021, false],
    [3932292289, "Cervelo P5", 2015, true],
    [3943092814, "Cannondale CAAD12", 2015, false],
    [3985977100, "Canyon Aeroad 2021", 2021, false],
    [3998075483, "Cube Aerium", 2019, true],
    [4048415486, "Cervelo S3D", 2015, false],
    [4100131524, "Scott ScottAddict2021", 2021, false],
    [4129467727, "Trek Madone", 2015, false],
    [4150853780, "Zwift Bat", undefined, false],
    [4200057616, "Specialized Allez", 2015, false],
    [4208139356, "Pinarello Dogma F", 2021, false],
    [4243692575, "Zwift Concept Z1 Gold", 2115, false],
    [4288910569, "Ridley Noah Fast 2019", 2019, false],
  ] as const
).map(([id, name, modelYear, isTT]) => ({ id, name, modelYear, isTT }));
