import { RunShoe } from "./types";

export const runShoes: ReadonlyArray<RunShoe> = (
  [
    [144280537, "ASICS METASPEED™ Sky+", "RunningShoesAsics_2022_thumb"],
    [
      176985884,
      "Zwift Academy Tri 2019",
      "RunningShoesZwiftAcademyTri2020_thumb",
    ],
    [490801384, "Under Armour Hovr", ""],
    [647806661, "Run Festival Shoes", "RunningShoesRunFestival2021_thumb"],
    [712146150, "Tour of Watopia 2022", "RunningShoe_TOW2022"],
    [798247478, "Zwift Academy Tri 2022", "RunningShoesZATri2022_thumb"],
    [888731925, "Zwift Black", "RunningShoe_Black"],
    [1031530322, "Tour Of Watopia", "RunningShoe_TourOfWatopia2020"],
    [1100805829, "Zwift Academy 2023", "RunningShoesZARun2022_thumb"],
    [1385330702, "Fuel Cell", "RunningShoe_NewBalanceFuelCell"],
    [1612131925, "2021 ZA Run Shoes", "RunningShoesZARun2021_thumb"],
    [1784111512, "Zante V4", ""],
    [2031493632, "Alpine", "Runningshoe_Lederhose2022_thumb"],
    [
      2061213058,
      "Tour of Watopia 2023",
      "RunningShoes_TourofWatopia2023_thumb",
    ],
    [
      2337041824,
      "Tour of Watopia Fall 2023 Run Shoes",
      "RunningShoes_ToWFall2023_thumb",
    ],
    [2457594239, "Zwift Blue", "RunningShoe_Blue"],
    [2810712238, "adidas ULTRABOOST 22", "RunningShoesRFTO2022_thumb"],
    [3055713810, "HOVR Machina 2", ""],
    [3086387372, "Adidas UB19", ""],
    [3303617268, "Zwift White", "RunningShoe_White"],
    [3413023141, "ZRS Running Shoes 1", "RunningShoe_ZRSKit012021"],
    [3589642520, "4DFWD", "RunningShoesAdidas4DFWD_2021_thumb"],
    [3662000114, "Tour De Zwift 2020", "RunningShoe_TourDeZwift2020_thumb"],
    [3760745086, "UB21 Primeblue Shoes", "RunningShoesRFTO2021_thumb"],
    [3778542725, "Adios Pro", ""],
    [3851989283, "ZRS Running Shoes 3", "RunningShoe_ZRSKit032021"],
    [3913112068, "Saucony Endorphin", ""],
    [3939519764, "Hoka Clifton 5", ""],
    [4075005280, "ZRS Running Shoes 2", "RunningShoe_ZRSKit022021"],
    [4228783761, "Zwift Magenta", "RunningShoe_Magenta"],
    [4255700797, "Zwift Green", "RunningShoe_Green"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
