import { routes } from "../../data/routes.mjs";
import { worlds } from "../../data/worlds.mjs";
import { findSegmentsOnRoute } from "./find-segments-on-route.mjs";
import { formatDistance, formatElevation } from "./format.mjs";

export async function prepareRoute(item, segmentsWithLatLng) {
    if (
        item.map === "" ||
        item.map === "GRAVEL MOUNTAIN" || // skip until release or map bounds are available
        item.name === "Critcade Test" || // skip test route
        item.name === "Hilltop Hustle" // not enough data
    ) {
        return
    }

    const manualRouteData = routes.find((r) => r.id === +item.signature);

    if (!manualRouteData) {
        console.warn(`Missing manual data for "${item.name}"`);
    }

    const manualWorldData = worlds.find((w) => w.gameDictionary === item.map);
    if (!manualWorldData) {
        throw new Error(`Unknown world: "${item.map}"`);
    }

    let segmentsOnRoute = [];
    if (manualRouteData?.stravaSegmentId) {
        segmentsOnRoute = await findSegmentsOnRoute(
            manualRouteData,
            segmentsWithLatLng.filter((s) => s.world === manualWorldData.slug)
        );
    }

    return {
        id: +item.signature,
        name: item.name,
        slug: manualRouteData?.slug ?? item.signature,
        world: manualWorldData.slug,
        eventOnly: item.eventOnly === "1",
        distance: formatDistance(item.distanceInMeters),
        elevation: formatElevation(item.ascentInMeters),
        leadInDistance: formatDistance(item.leadinDistanceInMeters),
        leadInElevation: formatElevation(item.leadinAscentInMeters),
        leadInDistanceFreeRide: formatDistance(
            item.freeRideLeadinDistanceInMeters
        ),
        leadInElevationFreeRide: formatElevation(
            item.freeRideLeadinAscentInMeters
        ),
        leadInDistanceMeetups: formatDistance(
            item.meetupLeadinDistanceInMeters
        ),
        leadInElevationInMeetups: formatElevation(
            item.meetupLeadinAscentInMeters
        ),
        segments: manualRouteData?.segments ?? [],
        segmentsOnRoute,
        levelLocked: item.levelLocked === "1",
        lap: item.supportedLaps === "1",
        supportsTT: item.supportsTimeTrialMode === "1",
        supportsMeetups: item.blockedForMeetups === "0",
        sports: item.sports === "2" ? ["running"] : ["running", "cycling"],
        experience:
            item.xp && +item.xp > 10
                ? +item.xp
                : (manualRouteData?.experience ?? undefined),
        stravaSegmentId: manualRouteData?.stravaSegmentId ?? undefined,
        stravaSegmentUrl: manualRouteData?.stravaSegmentId
            ? `https://www.strava.com/segments/${manualRouteData.stravaSegmentId}`
            : undefined,
        zwiftInsiderUrl: manualRouteData?.zwiftInsiderUrl ?? undefined,
        whatsOnZwiftUrl: manualRouteData?.whatsOnZwiftUrl ?? undefined,
        zwifterBikesUrl: manualRouteData?.zwifterBikesPath
            ? `https://zwifterbikes.web.app/route/${manualRouteData.zwifterBikesPath}`
            : undefined,
    }
}