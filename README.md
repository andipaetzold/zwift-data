[![npm](https://img.shields.io/npm/v/zwift-data)](https://www.npmjs.com/package/zwift-data)
[![tests](https://github.com/andipaetzold/zwift-data/actions/workflows/build-release.yml/badge.svg?branch=main)](https://github.com/andipaetzold/zwift-data/actions/workflows/build-release.yml?query=branch%3Amain)
[![downloads](https://img.shields.io/npm/dm/zwift-data)](https://www.npmjs.com/package/zwift-data)
[![license](https://img.shields.io/github/license/andipaetzold/zwift-data)](https://github.com/andipaetzold/zwift-data/blob/main/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Zwift Data

The `zwift-data` npm package provides data about Zwift
* worlds,
* routes, and
* segments.

## Installation

```
npm install zwift-data
```

or

```
yarn add zwift-data
```

## Usage

`zwift-data` exports three datasets:
* `worlds`: an array of all Zwift worlds
* `routes`: an array of all public and event-only Zwift routes
* `segments`: an array of all official Zwift segments

```javascript
import { worlds, routes, segments } from 'zwift-data';

console.log({
    worlds,
    routes,
    segments
})
```

The package also exports TypeScript types.

The data structure is documented [here](https://andipaetzold.github.io/andipaetzold/zwift-data).

## Data source

The data was manually collected from
* [Strava](https://strava.com/)
* [What's on Zwift](https://whatsonzwift.com/)
* [Zwift](https://zwift.com/)
* [ZwiftHub](https://zwifthub.com/)
* [Zwift Power](https://zwiftpower.com/)

## License

[MIT](LICENSE)