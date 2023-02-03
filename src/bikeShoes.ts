import { BikeShoe } from "./types";

export const bikeShoes: ReadonlyArray<BikeShoe> = (
  [
    [138403836, "Alpine", "Lederhose2022"],
    [560768614, "Zwift Beta Shoe", "zwiftbetashoe"],
    [725344338, "Zwift Black", "zwiftblack"],
    [1039719545, "Tour Of Watopia", "TourOfWatopia2020"],
    [
      1424136009,
      "Tour of Watopia 2023",
      "CyclingShoes_TourofWatopia2023_thumb",
    ],
    [1614109799, "Sworks SP7", "SworksSpSeven"],
    [1982081400, "Adidas Indoor Cycling Shoes", "Adidas2021"],
    [2095963351, "Bont Helix", "BontHelix"],
    [2136843441, "Zwift Academy Men", "ShoesZwiftAcademyMen2019"],
    [2209271558, "Zwift Academy Women", "ShoesZwiftAcademyWomen2019"],
    [2635788984, "Zwift Academy Tri 2019", "ShoesZwiftAcademyTri2020"],
    [2659789772, "2021 Neokyo Shoes", "Neokyoshoe"],
    [3128704198, "Tour of Watopia 2022", "TOWCyclingShoe2022"],
    [3238688697, "Mavic Cosmic", "MavicCosmic"],
    [3251024571, "Fizik Vento Infinito Carbon", "FizikVentoInfinitoCarbon2021"],
    [3547687330, "Zwift Shoe", "zwiftshoe"],
    [3595139078, "Ride With Reason", "CyclingShoe_RideWithReason2018"],
    [3764859895, "Vintage Leather", "ZwiftLeather"],
    [4004475280, "Specialized Mix Tape", "SpecializedMixTape2019"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
