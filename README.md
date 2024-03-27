[![npm](https://img.shields.io/npm/v/zwift-data)](https://www.npmjs.com/package/zwift-data)
[![tests](https://github.com/andipaetzold/zwift-data/actions/workflows/build-release.yml/badge.svg?branch=main)](https://github.com/andipaetzold/zwift-data/actions/workflows/build-release.yml?query=branch%3Amain)
[![downloads](https://img.shields.io/npm/dm/zwift-data)](https://www.npmjs.com/package/zwift-data)
[![license](https://img.shields.io/github/license/andipaetzold/zwift-data)](https://github.com/andipaetzold/zwift-data/blob/main/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Zwift Data

The `zwift-data` npm package provides data about Zwift:

- Achievements
- Bike Frames
- Bike Front Wheels
- Bike Rear Wheels
- Bike Shoes
- Challenges
- Glasses
- Headgear
- Jerseys
- Paint Job
- Routes
- Run Shirts
- Run Shoes
- Run Shorts
- Segments
- Socks
- Training Plans
- Notable Moment Types
- Unlockable Categories
- Worlds

## Installation

```
npm install zwift-data
```

or

```
yarn add zwift-data
```

## Usage

```javascript
import {
  achievements,
  bikeFrames,
  bikeFrontWheels,
  bikeRearWheels,
  bikeShoes,
  challenges,
  glasses,
  headgears,
  jerseys,
  notableMomentTypes
  paintJobs
  routes
  runShirts,
  runShoes,
  runShorts,
  segments,
  socks,
  trainingPlans,
  unlockableCategories,
  worlds,
 } from "zwift-data";
```

The package also exports TypeScript types.

The data structure is documented [here](https://andipaetzold.github.io/zwift-data).

## Data source

Some data is automatically fetched and updated from Zwift's public API.

Data was also manually collected from

- [Strava](https://strava.com/)
- [What's on Zwift](https://whatsonzwift.com/)
- [ZwiftHub](https://zwifthub.com/)
- [Zwift Power](https://zwiftpower.com/)

## License

[MIT](LICENSE)
