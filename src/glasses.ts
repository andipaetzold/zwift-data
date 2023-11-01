import { Glass } from "./types";

export const glasses: ReadonlyArray<Glass> = (
  [
    [258033368, "April Fools", "Glasses_TealPink2020Glasses02_thumb"],
    [478032186, "Oakley Radar", "Glasses_Original"],
    [817902595, "Wave Wearers", "Glasses_Generic01"],
    [821811498, "Goodr", "Glasses_Goodr_thumb"],
    [1163597738, "Rearview Mirror Glasses", "Glasses_RearView"],
    [1220623368, "1980s", "Glasses_TealPink2020Glasses02_thumb"],
    [1225125243, "None", "none"],
    [1241540451, "Top Guns", "Glasses_Generic03"],
    [1541295082, "Zwift Glasses #1", "Glasses_Generic04"],
    [1725649243, "Roka GP-1x", "Glasses_Roka01"],
    [1773488310, "LOC_TourDeZwift2024", "Glasses_TourDeZwift2024"],
    [
      1823176845,
      "Watch the Femmes Sunglasses",
      "Glasses_TourDeFranceFemmes2023",
    ],
    [1859702145, "Oakley Flight Jacket", "Glasses_ZA2018Womens"],
    [1988601419, "Tour de Zwift 2022 Sunglasses", "Glasses_TdZGlasses2021"],
    [2002800339, "Weskers", "Glasses_Generic02"],
    [2106991204, "Oakley Flight Jacket", "Glasses_RideWithReason2018"],
    [2289830259, "Retro 80's", "Glasses_80sGlasses"],
    [2344157440, "Oakley Flight Jacket", "Glasses_ZA2018Mens"],
    [2364395919, "ZRS Glasses 2", "Glasses_ZRS2021Glasses02"],
    [2472441074, "POC Clarity Aspire", "Glasses_POCClarityAspire"],
    [2628706018, "Tour of Makuri Islands", "Glasses_TourOfMakuri2022"],
    [2978871359, "ZRS Glasses 3", "Glasses_ZRS2021Glasses03"],
    [3027735239, "Vintage Goggles", "Glasses_Goggles"],
    [3171375327, "Community 101 Sunglasses", "Glasses_Onboarding2023"],
    [3309343427, "Rockstar", "Glasses_Generic06"],
    [3410864991, "ZRS Glasses 1", "Glasses_ZRS2021Glasses01"],
    [3987516741, "Race Trap", "Glasses_100RaceTrap"],
    [4148144169, "Glasses Temp", "Glasses_Temp"],
    [4162894707, "Oversize", "Glasses_Generic05"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
