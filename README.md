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
  notableMomentTypes,
  paintJobs,
  routes,
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

The package is ESM-only and also exports TypeScript types.

The data structure is documented [here](https://andipaetzold.github.io/zwift-data).

### Route and segment streams

Raw route and segment streams are available through a separate entry point:

```typescript
import { routes, segments } from "zwift-data/streams";

const stream = routes["lady-liberty"];
const coordinates = stream?.latlng; // [latitude, longitude] pairs in degrees
const distance = stream?.distance; // cumulative distance in meters
const altitude = stream?.altitude; // altitude in meters
```

Both exports are readonly maps keyed by the same slugs as the route and segment
metadata. Each value contains three readonly arrays: `latlng`, `distance`, and
`altitude`. Values at the same index describe the same point. All values come
from the corresponding Strava segment stream, preserving source order and
precision without rounding, deduplication, or altitude corrections. Entries
without a Strava mapping are omitted, and missing lookups return `undefined`.

The entry point also exports the `StreamData`, `Coordinate`, and `Coordinates`
TypeScript types. If you also need metadata, alias the stream imports:

```typescript
import { routes } from "zwift-data";
import { routes as routeStreams } from "zwift-data/streams";
```

Stream files are committed to the repository and refreshed by
`npm run update-data`, using the `STRAVA_COOKIE` environment variable. Consumers
do not need to fetch streams or provide Strava credentials.

Importing `zwift-data` does not load the stream data. Importing
`zwift-data/streams` includes the combined stream dataset. The installed package
includes both entry points, so its download and disk size are larger.

## Data source

Some data is automatically fetched and updated from Zwift's public API.

Data was also manually collected from

- [Strava](https://strava.com/)
- [What's on Zwift](https://whatsonzwift.com/)
- [ZwiftHub](https://zwifthub.com/)
- [Zwift Power](https://zwiftpower.com/)

## License

[MIT](LICENSE)
