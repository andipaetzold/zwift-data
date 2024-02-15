import { BikeFrontWheel } from "./types";

export const bikeFrontWheels: ReadonlyArray<BikeFrontWheel> = (
  [
    [69023253, "Zwift Zwift BW Concept Front Wheel", "Wheel_ZwiftBW"],
    [190867464, "Enve G23", "Wheel_EnveG23"],
    [192959988, "Roval Alpinist CLX", "Wheel_RovalAlpinistCLX"],
    [272842014, "Shimano C60", "Wheel_ShimanoDuraAceC60"],
    [288225210, "Mavic Cosmic CXR60c", "Wheel_MavicCosmicCXR60c"],
    [327143135, "Roval Terra CLX", "Wheel_RovalTerraCLX"],
    [346409677, "DTSwiss ARC 1100 DICUT 62", "Wheel_DTSwissARC62"],
    [442607221, "Zipp 202", "Wheel_Zipp202Firecrest"],
    [567256284, "DTSwiss ARC 1100 DICUT DISC", "Wheel_DTSwissARC1100AeroTT"],
    [613983807, "Zipp 404", "Wheel_Zipp404Firecrest"],
    [635220876, "Reserve Reserve 25 GR", "Wheel_Reserve25GR"],
    [667389725, "Zipp 454", "Wheel_Zipp454"],
    [702195190, "Bontrager Aeolus5", "Wheel_Bontrager"],
    [789015973, "Zipp 858/Super9", "Wheel_ZippZwift858"],
    [
      897949453,
      "Mavic Comete Pro Carbon SL UST",
      "Wheel_MavicCometeProCarbonSLUST",
    ],
    [998391700, "Zwift Concept", "Wheel_ZwiftConcept"],
    [1053884173, "Campagnolo Bora Ultra 35", "Wheel_BoraUltra35"],
    [1324365960, "Zwift Plain", "Wheel_ZwiftPlain"],
    [1344753875, "Zwift Concept", "Wheel_ZwiftConceptGold"],
    [1361038541, "Zwift Zwift Trike", "Wheel_ZwiftBW"],
    [1497226614, "Cadex CADEX 42", "Wheel_Cadex42"],
    [1500161707, "Zipp 808", "Wheel_Zipp808Firecrest"],
    [1544928391, "Zipp 353 NSW", "Wheel_Zipp353"],
    [1547965258, "Zwift Zwift Bat Wheel", ""],
    [1593377918, "Novatec Novatec R4", "Wheel_NovatecR4"],
    [1742598126, "Shimano C50", "Wheel_ShimanoDuraAceC50"],
    [1763482218, "Zwift Safety", "Wheel_ZwiftSafety"],
    [1766659417, "Zwift Supersonic Wheelset", "Wheel_ZwiftFunIsFast"],
    [1767327477, "Enve SES 8.9", "Wheel_Enve89"],
    [1791179228, "HED HED Vanquish RC6 Pro", "Wheel_VanquishRC6"],
    [1820135676, "Zwift Gravel", "Wheel_ZwiftGravel"],
    [1860958943, "Zwift Classic", "Wheel_ZwiftClassic"],
    [1881778071, "Enve SES 2.2", "Wheel_Enve22"],
    [
      2004537892,
      "Zwift LOC_WHEELNAME_ZWIFT_BigSpinCruiser2024",
      "Wheel_BigSpinCruiser2024",
    ],
    [2055468653, "Giant SLR 0", "Wheel_AdvancedPropel"],
    [2060527008, "Zwift 50mm Carbon", "Wheel_CampagnoloHigh"],
    [2181416413, "Roval Rapide CLX", "Wheel_RovalRapide"],
    [2223270801, "Enve SES 3.4", "Wheel_Enve35"],
    [
      2282170788,
      "Lightweight Lightweight Meilenstein",
      "Wheel_LightweightMeilenstein",
    ],
    [2365488570, "Zwift Tri Spoke // Disc Wheel", "Wheel_BigSpin2024"],
    [2568138708, "Zwift Buffalo Fahrrad", "Wheel_BuffaloFahrrad"],
    [2612651137, "Roval CLX64", "Wheel_SpecializedRovalCLX64"],
    [2621265514, "Cadex CADEX 65", "Wheel_Cadex65"],
    [2642167675, "Cadex 36", "Wheel_Cadex36"],
    [2696607407, "Campagnolo Bora Ultra 50", "Wheel_BoraUltra50"],
    [2755992695, "Cadex CADEX AR 35", "Wheel_CadexAR35"],
    [2866818884, "Enve SES 7.8", "Wheel_Enve78"],
    [2907165694, "Zwift 8-Bit", ""],
    [3251069251, "Enve SES 6.7", "Wheel_Enve67"],
    [3787145210, "Zwift Mountain", "Wheel_ZwiftMountain"],
    [3849702821, "Zwift Zwift Skeletal", ""],
    [4029436085, "Zwift 32mm Carbon", "Wheel_CampagnoloLow"],
    [4169703170, "Zipp 858", "Wheel_Zipp858"],
    [4185901178, "Mavic Cosmic Ultimate UST", "Wheel_MavicCosmicUltUST"],
    [4221174482, "Zwift Handcycle", "Wheel_CampagnoloHigh"],
    [4235764609, "Shimano C40", "Wheel_ShimanoDuraAceC40"],
    [4237316283, "FFWD RYOT55", "Wheel_FFWDRYOT55"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
