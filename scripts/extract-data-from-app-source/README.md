Script to extract data from Zwift app source files.
It requires setting EXTRACTED_DATA_DIR in index.mjs to a directory with extracted Zwift WAD files 
– that is out of scope for this repository, see https://github.com/andipaetzold/zwift-data/issues/42

## Things to about "raw" extracted data

##### Some tags are duplicated

```xml
<Bike>
  <Make>Canyon</Make>
  <Name>Aeroad Team Edition</Name>
  <!-- ... -->
  <Name>Canyon Aeroad Team</Name>
```

##### Booleans are stored in various ways

```xml
<Cassette>true</Cassette>
<Cassette>True</Cassette>
<Cassette>TRUE</Cassette>
```

##### References to files are stored in various ways and with various relative paths

```xml
data/bikes/Components/Shimano/DuraAce/FrontDerailleur.xml
bikes/Wheels/Zwift/ZwiftMountain/Front.xml
"bikes/Components/Sram/SramMTBHandlebars/SramMTBHandlebars.xml"
```

##### Some empty tags are self-closing, some are not

```xml
<Brake/>
<Brake></Brake>
<!-- and sometimes Brake is missing completely -->
```
