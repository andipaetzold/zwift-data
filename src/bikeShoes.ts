import { BikeShoe } from "./types";

export const bikeShoes: ReadonlyArray<BikeShoe> = (
  [
    [123888986, "Big Spin Shoes", "BigSpin2024_thumb"],
    [138403836, "Alpine", "Lederhose2022"],
    [
      231828206,
      "Adidas Tempo 3-Stripes BOA Cycling Shoes",
      "AdidasTempoBOA2024",
    ],
    [560768614, "Zwift Beta Shoe", "zwiftbetashoe"],
    [725344338, "Zwift Black", "zwiftblack"],
    [1039719545, "Tour Of Watopia", "TourOfWatopia2020"],
    [1335895262, "Dino Power", "DinoShoes_thumb"],
    [
      1424136009,
      "Tour of Watopia 2023",
      "CyclingShoes_TourofWatopia2023_thumb",
    ],
    [1614109799, "Sworks SP7", "SworksSpSeven"],
    [1796607819, "Pop Art", "CyclingShoes_PopArt_thumb"],
    [1982081400, "Adidas Indoor Cycling Shoes", "Adidas2021"],
    [2095963351, "Bont Helix", "BontHelix"],
    [2136843441, "Zwift Academy Men", "ShoesZwiftAcademyMen2019"],
    [2209271558, "Zwift Academy Women", "ShoesZwiftAcademyWomen2019"],
    [2538059510, "Rapha Pro Team", "RaphaProTeam2023_thumb"],
    [2546048809, "Exploration 101 Shoes", "CyclingShoes_Onboarding2023_thumb"],
    [2635788984, "Zwift Academy Tri 2019", "ShoesZwiftAcademyTri2020"],
    [2659789772, "2021 Neokyo Shoes", "Neokyoshoe"],
    [2733895182, "Giro Imperial", "GiroImperial2023_thumb"],
    [3128704198, "Tour of Watopia 2022", "TOWCyclingShoe2022"],
    [3238688697, "Mavic Cosmic", "MavicCosmic"],
    [3251024571, "Fizik Vento Infinito Carbon", "FizikVentoInfinitoCarbon2021"],
    [3389594817, "Nimbl Ultimate Pro", "NimblFEATUltimate_thumb"],
    [3505437713, "Mirage", "CyclingShoes_Mirage_thumb"],
    [3547687330, "Zwift Shoe", "zwiftshoe"],
    [3595139078, "Ride With Reason", "CyclingShoe_RideWithReason2018"],
    [3764859895, "Vintage Leather", "ZwiftLeather"],
    [
      3822527320,
      "TOW FALL 2023 CYCLING SHOES",
      "CyclingShoes_ToWFall2023_thumb",
    ],
    [4004475280, "Specialized Mix Tape", "SpecializedMixTape2019"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
