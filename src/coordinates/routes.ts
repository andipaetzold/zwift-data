import type { Coordinates } from "./types";
import coordinates0 from "./routes/2015-uci-worlds-course";
import coordinates1 from "./routes/2018-uci-worlds-course-short-lap";
import coordinates2 from "./routes/2022-bambino-fondo";
import coordinates3 from "./routes/2022-cycling-esports-world-championships-route";
import coordinates4 from "./routes/2022-gran-fondo";
import coordinates5 from "./routes/2022-medio-fondo";
import coordinates6 from "./routes/2023-continental-qualifiers";
import coordinates7 from "./routes/5k-loop";
import coordinates8 from "./routes/accelerate-to-elevate";
import coordinates9 from "./routes/achterbahn";
import coordinates10 from "./routes/astoria-line-8";
import coordinates11 from "./routes/avon-flyer";
import coordinates12 from "./routes/avon-flyer-run";
import coordinates13 from "./routes/bambino-fondo";
import coordinates14 from "./routes/beach-island-loop";
import coordinates15 from "./routes/beach-island-loop-run";
import coordinates16 from "./routes/bell-lap";
import coordinates17 from "./routes/big-flat-8";
import coordinates18 from "./routes/big-foot-hills";
import coordinates19 from "./routes/big-loop";
import coordinates20 from "./routes/big-loop-rev";
import coordinates21 from "./routes/bigger-loop";
import coordinates22 from "./routes/bon-voyage";
import coordinates23 from "./routes/braek-fast-crits-and-grits";
import coordinates24 from "./routes/bridges-and-boardwalks";
import coordinates25 from "./routes/canopies-and-coastlines";
import coordinates26 from "./routes/casse-pattes";
import coordinates27 from "./routes/castle-crit";
import coordinates28 from "./routes/castle-crit-run";
import coordinates29 from "./routes/castle-to-castle";
import coordinates30 from "./routes/chain-chomper";
import coordinates31 from "./routes/champs-elysees";
import coordinates32 from "./routes/champs-elysees-run";
import coordinates33 from "./routes/chasing-the-sun";
import coordinates34 from "./routes/chili-pepper";
import coordinates35 from "./routes/cirque-du-suffer";
import coordinates36 from "./routes/city-and-the-sgurr";
import coordinates37 from "./routes/classique-rev";
import coordinates38 from "./routes/climb-control";
import coordinates39 from "./routes/climbers-gambit";
import coordinates40 from "./routes/coast-crusher";
import coordinates41 from "./routes/coast-to-coast";
import coordinates42 from "./routes/coastal-crown-loop";
import coordinates43 from "./routes/cobbled-climbs";
import coordinates44 from "./routes/cobbled-climbs-rev";
import coordinates45 from "./routes/cobbled-climbs-run";
import coordinates46 from "./routes/cobbled-crown";
import coordinates47 from "./routes/couch-to-sky-k";
import coordinates48 from "./routes/country-to-coastal";
import coordinates49 from "./routes/countryside-tour";
import coordinates50 from "./routes/crepe-escape";
import coordinates51 from "./routes/croissant";
import coordinates52 from "./routes/danger-noodle";
import coordinates53 from "./routes/deca-dash";
import coordinates54 from "./routes/double-espresso";
import coordinates55 from "./routes/double-parked";
import coordinates56 from "./routes/double-span-spin";
import coordinates57 from "./routes/douce-france";
import coordinates58 from "./routes/downtown-dolphin";
import coordinates59 from "./routes/downtown-eruoption";
import coordinates60 from "./routes/downtown-titans";
import coordinates61 from "./routes/duchy-estate";
import coordinates62 from "./routes/dun-dash";
import coordinates63 from "./routes/dust-in-the-wind";
import coordinates64 from "./routes/eastern-eight";
import coordinates65 from "./routes/electric-break";
import coordinates66 from "./routes/electric-loop";
import coordinates67 from "./routes/elevation-evaluation";
import coordinates68 from "./routes/empire-elevation";
import coordinates69 from "./routes/epic-run";
import coordinates70 from "./routes/everything-bagel";
import coordinates71 from "./routes/farmland-loop";
import coordinates72 from "./routes/figure-8";
import coordinates73 from "./routes/figure-8-reverse";
import coordinates74 from "./routes/fine-and-sandy";
import coordinates75 from "./routes/flat-irons";
import coordinates76 from "./routes/flat-out-fast";
import coordinates77 from "./routes/flat-route";
import coordinates78 from "./routes/flat-route-rev";
import coordinates79 from "./routes/flat-route-run";
import coordinates80 from "./routes/flatland-loop";
import coordinates81 from "./routes/four-horsemen";
import coordinates82 from "./routes/france-classic-fondo";
import coordinates83 from "./routes/fuhgeddaboudit";
import coordinates84 from "./routes/gentil-8";
import coordinates85 from "./routes/glasgow-crit-circuit";
import coordinates86 from "./routes/glasgow-crit-circuit-run";
import coordinates87 from "./routes/glasgow-crit-six";
import coordinates88 from "./routes/glasgow-reverse";
import coordinates89 from "./routes/glyph-heights";
import coordinates90 from "./routes/going-coastal";
import coordinates91 from "./routes/going-coastal-run";
import coordinates92 from "./routes/gotham-grind";
import coordinates93 from "./routes/gotham-grind-rev";
import coordinates94 from "./routes/gran-fondo";
import coordinates95 from "./routes/grand-central-circuit";
import coordinates96 from "./routes/grand-central-circuit-rev";
import coordinates97 from "./routes/greater-london-8";
import coordinates98 from "./routes/greater-london-flat";
import coordinates99 from "./routes/greater-london-loop";
import coordinates100 from "./routes/greater-london-loop-rev";
import coordinates101 from "./routes/greatest-london-flat";
import coordinates102 from "./routes/greatest-london-loop";
import coordinates103 from "./routes/greatest-london-loop-rev";
import coordinates104 from "./routes/green-to-screen";
import coordinates105 from "./routes/handful-of-gravel";
import coordinates106 from "./routes/harrogate-circuit";
import coordinates107 from "./routes/harrogate-circuit-rev";
import coordinates108 from "./routes/heart-of-montmartre";
import coordinates109 from "./routes/hell-of-the-north";
import coordinates110 from "./routes/hilltop-hustle-run";
import coordinates111 from "./routes/hilly-route";
import coordinates112 from "./routes/hilly-route-rev";
import coordinates113 from "./routes/hilly-route-rev-run";
import coordinates114 from "./routes/hot-laps";
import coordinates115 from "./routes/hudson-hustle";
import coordinates116 from "./routes/innsbruck-kom-after-party";
import coordinates117 from "./routes/innsbruckring";
import coordinates118 from "./routes/island-hopper";
import coordinates119 from "./routes/island-outskirts";
import coordinates120 from "./routes/issendorf-express";
import coordinates121 from "./routes/italian-villas-circuit";
import coordinates122 from "./routes/itza-climb-finish";
import coordinates123 from "./routes/itza-party";
import coordinates124 from "./routes/jarvis-seaside-sprint";
import coordinates125 from "./routes/jons-route";
import coordinates126 from "./routes/jungle-circuit";
import coordinates127 from "./routes/jungle-circuit-rev";
import coordinates128 from "./routes/jungle-circuit-reverse-run";
import coordinates129 from "./routes/jungle-circuit-run";
import coordinates130 from "./routes/jurassic-coast";
import coordinates131 from "./routes/kappa-quest";
import coordinates132 from "./routes/kappa-quest-reverse";
import coordinates133 from "./routes/kaze-kicker";
import coordinates134 from "./routes/keith-hill-after-party";
import coordinates135 from "./routes/knickerbocker";
import coordinates136 from "./routes/knickerbocker-reverse";
import coordinates137 from "./routes/knights-of-the-roundabout";
import coordinates138 from "./routes/la-boucle";
import coordinates139 from "./routes/la-reine";
import coordinates140 from "./routes/lady-liberty";
import coordinates141 from "./routes/laguardia-after-party";
import coordinates142 from "./routes/laguardia-loop";
import coordinates143 from "./routes/laguardia-loop-reverse";
import coordinates144 from "./routes/legends-and-lava";
import coordinates145 from "./routes/leith-hill-after-party";
import coordinates146 from "./routes/libby-hill-after-party";
import coordinates147 from "./routes/loch-loop";
import coordinates148 from "./routes/loch-loop-run";
import coordinates149 from "./routes/london-8";
import coordinates150 from "./routes/london-8-rev";
import coordinates151 from "./routes/london-calling";
import coordinates152 from "./routes/london-classique";
import coordinates153 from "./routes/london-flat";
import coordinates154 from "./routes/london-loop";
import coordinates155 from "./routes/london-loop-rev";
import coordinates156 from "./routes/london-the-prl-full";
import coordinates157 from "./routes/london-triple-loops";
import coordinates158 from "./routes/london-uprising";
import coordinates159 from "./routes/loop-de-loop";
import coordinates160 from "./routes/loop-de-loop-de-loop";
import coordinates161 from "./routes/loop-de-loop-run";
import coordinates162 from "./routes/loopin-lava";
import coordinates163 from "./routes/lutece-express";
import coordinates164 from "./routes/lutece-express-run";
import coordinates165 from "./routes/lutscher";
import coordinates166 from "./routes/lutscher-ccw";
import coordinates167 from "./routes/macaron";
import coordinates168 from "./routes/makuri-40";
import coordinates169 from "./routes/makuri-madness";
import coordinates170 from "./routes/makuri-pretzel";
import coordinates171 from "./routes/may-field";
import coordinates172 from "./routes/mayan-8";
import coordinates173 from "./routes/mayan-bridge-loop";
import coordinates174 from "./routes/mayan-mash";
import coordinates175 from "./routes/mayan-san-remo";
import coordinates176 from "./routes/mech-isle-loop";
import coordinates177 from "./routes/mech-isle-loop-run";
import coordinates178 from "./routes/mech-isle-mayhem";
import coordinates179 from "./routes/medio-fondo";
import coordinates180 from "./routes/mighty-metropolitan";
import coordinates181 from "./routes/montmartre-mixer";
import coordinates182 from "./routes/mountain-8";
import coordinates183 from "./routes/mountain-mash";
import coordinates184 from "./routes/mountain-mash-run";
import coordinates185 from "./routes/mountain-route";
import coordinates186 from "./routes/muir-and-the-mountain";
import coordinates187 from "./routes/navig8";
import coordinates188 from "./routes/neokyo-all-nighter";
import coordinates189 from "./routes/neokyo-crit-course";
import coordinates190 from "./routes/neon-after-party";
import coordinates191 from "./routes/neon-flats";
import coordinates192 from "./routes/neon-shore-loop";
import coordinates193 from "./routes/new-york-kom-after-party";
import coordinates194 from "./routes/no-sleep-till-brooklyn";
import coordinates195 from "./routes/ocean-blvd";
import coordinates196 from "./routes/ocean-lava-cliffside-loop";
import coordinates197 from "./routes/oh-hill-no";
import coordinates198 from "./routes/oh-hill-no-run";
import coordinates199 from "./routes/out-and-back-again";
import coordinates200 from "./routes/outer-scotland";
import coordinates201 from "./routes/paris-pacer";
import coordinates202 from "./routes/paris-toujours";
import coordinates203 from "./routes/park-perimeter-loop";
import coordinates204 from "./routes/park-perimeter-rev";
import coordinates205 from "./routes/park-to-peak";
import coordinates206 from "./routes/peak-performance";
import coordinates207 from "./routes/peaky-pave";
import coordinates208 from "./routes/petit-boucle";
import coordinates209 from "./routes/petite-douleur";
import coordinates210 from "./routes/power-punches";
import coordinates211 from "./routes/power-to-the-tower";
import coordinates212 from "./routes/prospect-park-loop";
import coordinates213 from "./routes/prospect-park-loop-run";
import coordinates214 from "./routes/quatch-quest";
import coordinates215 from "./routes/queens-highway";
import coordinates216 from "./routes/queens-highway-after-party";
import coordinates217 from "./routes/queens-highway-run";
import coordinates218 from "./routes/radio-rendezvous";
import coordinates219 from "./routes/railways-and-rooftops";
import coordinates220 from "./routes/red-zone-repeats";
import coordinates221 from "./routes/repack-rush";
import coordinates222 from "./routes/rgv";
import coordinates223 from "./routes/richmond-loop-around";
import coordinates224 from "./routes/richmond-rollercoaster";
import coordinates225 from "./routes/richmond-uci-rev";
import coordinates226 from "./routes/rising-empire";
import coordinates227 from "./routes/road-to-ruins";
import coordinates228 from "./routes/road-to-ruins-rev";
import coordinates229 from "./routes/road-to-sky";
import coordinates230 from "./routes/road-to-sky-run";
import coordinates231 from "./routes/rolling-highlands";
import coordinates232 from "./routes/rooftop-rendezvous";
import coordinates233 from "./routes/roule-ma-poule";
import coordinates234 from "./routes/royal-pump-room-8";
import coordinates235 from "./routes/rues-in-rythme";
import coordinates236 from "./routes/sacre-bleu";
import coordinates237 from "./routes/sand-and-sequoias";
import coordinates238 from "./routes/scotland-after-party";
import coordinates239 from "./routes/scotland-smash";
import coordinates240 from "./routes/sea-to-tree";
import coordinates241 from "./routes/seaside-sprint";
import coordinates242 from "./routes/seaside-sprint-run";
import coordinates243 from "./routes/serpentine-8";
import coordinates244 from "./routes/shisa-shakedown";
import coordinates245 from "./routes/shorelines-and-summits";
import coordinates246 from "./routes/sleepless-city";
import coordinates247 from "./routes/snowman";
import coordinates248 from "./routes/southern-coast-cruise";
import coordinates249 from "./routes/spinfinity";
import coordinates250 from "./routes/spinfinity-ultra";
import coordinates251 from "./routes/spiral-into-the-volcano";
import coordinates252 from "./routes/spiral-summit";
import coordinates253 from "./routes/spirit-forest";
import coordinates254 from "./routes/splash-and-dash";
import coordinates255 from "./routes/sprinters-playground";
import coordinates256 from "./routes/stay-puft-pursuit";
import coordinates257 from "./routes/sugar-cookie";
import coordinates258 from "./routes/sukis-playground";
import coordinates259 from "./routes/surrey-hills";
import coordinates260 from "./routes/tair-dringfa-fechan";
import coordinates261 from "./routes/temple-trek";
import coordinates262 from "./routes/temple-trek-run";
import coordinates263 from "./routes/temples-and-towers";
import coordinates264 from "./routes/tempus-fugit";
import coordinates265 from "./routes/thats-amore";
import coordinates266 from "./routes/the-6-train";
import coordinates267 from "./routes/the-6-train-rev";
import coordinates268 from "./routes/the-big-ring";
import coordinates269 from "./routes/the-classic";
import coordinates270 from "./routes/the-classic-run";
import coordinates271 from "./routes/the-double-borough";
import coordinates272 from "./routes/the-epiloch";
import coordinates273 from "./routes/the-fan-flats";
import coordinates274 from "./routes/the-greenway";
import coordinates275 from "./routes/the-highline";
import coordinates276 from "./routes/the-highline-rev";
import coordinates277 from "./routes/the-london-pretzel";
import coordinates278 from "./routes/the-magnificent-8";
import coordinates279 from "./routes/the-mega-pretzel";
import coordinates280 from "./routes/the-muckle-yin";
import coordinates281 from "./routes/the-pretzel";
import coordinates282 from "./routes/the-prl-half";
import coordinates283 from "./routes/the-uber-pretzel";
import coordinates284 from "./routes/three-little-sisters";
import coordinates285 from "./routes/three-musketeers";
import coordinates286 from "./routes/three-sisters";
import coordinates287 from "./routes/three-sisters-rev";
import coordinates288 from "./routes/three-step-sisters";
import coordinates289 from "./routes/three-village-loop";
import coordinates290 from "./routes/tick-tock";
import coordinates291 from "./routes/tides-and-temples";
import coordinates292 from "./routes/time-trial";
import coordinates293 from "./routes/times-square-circuit";
import coordinates294 from "./routes/times-square-circuit-run";
import coordinates295 from "./routes/tire-bouchon";
import coordinates296 from "./routes/titans-run";
import coordinates297 from "./routes/toefield-tornado";
import coordinates298 from "./routes/toefield-tornado-run";
import coordinates299 from "./routes/tour-of-fire-and-ice";
import coordinates300 from "./routes/tour-of-tewit-well";
import coordinates301 from "./routes/triple-flat-loops";
import coordinates302 from "./routes/triple-twist";
import coordinates303 from "./routes/tropic-rush";
import coordinates304 from "./routes/turf-n-surf";
import coordinates305 from "./routes/twilight-crit";
import coordinates306 from "./routes/twilight-harbor";
import coordinates307 from "./routes/two-bridges-loop";
import coordinates308 from "./routes/two-bridges-loop-run";
import coordinates309 from "./routes/two-village-loop";
import coordinates310 from "./routes/urumaze";
import coordinates311 from "./routes/valley-to-mountaintop";
import coordinates312 from "./routes/ven-10";
import coordinates313 from "./routes/ven-10-run";
import coordinates314 from "./routes/ven-top";
import coordinates315 from "./routes/volcano-circuit";
import coordinates316 from "./routes/volcano-circuit-ccw";
import coordinates317 from "./routes/volcano-circuit-ccw-run";
import coordinates318 from "./routes/volcano-circuit-run";
import coordinates319 from "./routes/volcano-climb";
import coordinates320 from "./routes/volcano-climb-after-party";
import coordinates321 from "./routes/volcano-flat";
import coordinates322 from "./routes/volcano-flat-rev";
import coordinates323 from "./routes/volcano-flat-run";
import coordinates324 from "./routes/waisted-8";
import coordinates325 from "./routes/wandering-flats";
import coordinates326 from "./routes/watopias-waistband";
import coordinates327 from "./routes/watts-of-the-wild";
import coordinates328 from "./routes/watts-the-limit";
import coordinates329 from "./routes/wbr-climbing-series";
import coordinates330 from "./routes/what-yumezi-were-lost";
import coordinates331 from "./routes/whole-lotta-lava";
import coordinates332 from "./routes/whole-lotta-lava-run";
import coordinates333 from "./routes/yorkshire-double-loop";
import coordinates334 from "./routes/yumezi-grit";
import coordinates335 from "./routes/zg25-climb-champs";
import coordinates336 from "./routes/zg25-queen";
import coordinates337 from "./routes/zwift-games-2024-epic";
export const routes: Readonly<Record<string, Coordinates | undefined>> = {
  "2015-uci-worlds-course": coordinates0,
  "2018-uci-worlds-course-short-lap": coordinates1,
  "2022-bambino-fondo": coordinates2,
  "2022-cycling-esports-world-championships-route": coordinates3,
  "2022-gran-fondo": coordinates4,
  "2022-medio-fondo": coordinates5,
  "2023-continental-qualifiers": coordinates6,
  "5k-loop": coordinates7,
  "accelerate-to-elevate": coordinates8,
  achterbahn: coordinates9,
  "astoria-line-8": coordinates10,
  "avon-flyer": coordinates11,
  "avon-flyer-run": coordinates12,
  "bambino-fondo": coordinates13,
  "beach-island-loop": coordinates14,
  "beach-island-loop-run": coordinates15,
  "bell-lap": coordinates16,
  "big-flat-8": coordinates17,
  "big-foot-hills": coordinates18,
  "big-loop": coordinates19,
  "big-loop-rev": coordinates20,
  "bigger-loop": coordinates21,
  "bon-voyage": coordinates22,
  "braek-fast-crits-and-grits": coordinates23,
  "bridges-and-boardwalks": coordinates24,
  "canopies-and-coastlines": coordinates25,
  "casse-pattes": coordinates26,
  "castle-crit": coordinates27,
  "castle-crit-run": coordinates28,
  "castle-to-castle": coordinates29,
  "chain-chomper": coordinates30,
  "champs-elysees": coordinates31,
  "champs-elysees-run": coordinates32,
  "chasing-the-sun": coordinates33,
  "chili-pepper": coordinates34,
  "cirque-du-suffer": coordinates35,
  "city-and-the-sgurr": coordinates36,
  "classique-rev": coordinates37,
  "climb-control": coordinates38,
  "climbers-gambit": coordinates39,
  "coast-crusher": coordinates40,
  "coast-to-coast": coordinates41,
  "coastal-crown-loop": coordinates42,
  "cobbled-climbs": coordinates43,
  "cobbled-climbs-rev": coordinates44,
  "cobbled-climbs-run": coordinates45,
  "cobbled-crown": coordinates46,
  "couch-to-sky-k": coordinates47,
  "country-to-coastal": coordinates48,
  "countryside-tour": coordinates49,
  "crepe-escape": coordinates50,
  croissant: coordinates51,
  "danger-noodle": coordinates52,
  "deca-dash": coordinates53,
  "double-espresso": coordinates54,
  "double-parked": coordinates55,
  "double-span-spin": coordinates56,
  "douce-france": coordinates57,
  "downtown-dolphin": coordinates58,
  "downtown-eruoption": coordinates59,
  "downtown-titans": coordinates60,
  "duchy-estate": coordinates61,
  "dun-dash": coordinates62,
  "dust-in-the-wind": coordinates63,
  "eastern-eight": coordinates64,
  "electric-break": coordinates65,
  "electric-loop": coordinates66,
  "elevation-evaluation": coordinates67,
  "empire-elevation": coordinates68,
  "epic-run": coordinates69,
  "everything-bagel": coordinates70,
  "farmland-loop": coordinates71,
  "figure-8": coordinates72,
  "figure-8-reverse": coordinates73,
  "fine-and-sandy": coordinates74,
  "flat-irons": coordinates75,
  "flat-out-fast": coordinates76,
  "flat-route": coordinates77,
  "flat-route-rev": coordinates78,
  "flat-route-run": coordinates79,
  "flatland-loop": coordinates80,
  "four-horsemen": coordinates81,
  "france-classic-fondo": coordinates82,
  fuhgeddaboudit: coordinates83,
  "gentil-8": coordinates84,
  "glasgow-crit-circuit": coordinates85,
  "glasgow-crit-circuit-run": coordinates86,
  "glasgow-crit-six": coordinates87,
  "glasgow-reverse": coordinates88,
  "glyph-heights": coordinates89,
  "going-coastal": coordinates90,
  "going-coastal-run": coordinates91,
  "gotham-grind": coordinates92,
  "gotham-grind-rev": coordinates93,
  "gran-fondo": coordinates94,
  "grand-central-circuit": coordinates95,
  "grand-central-circuit-rev": coordinates96,
  "greater-london-8": coordinates97,
  "greater-london-flat": coordinates98,
  "greater-london-loop": coordinates99,
  "greater-london-loop-rev": coordinates100,
  "greatest-london-flat": coordinates101,
  "greatest-london-loop": coordinates102,
  "greatest-london-loop-rev": coordinates103,
  "green-to-screen": coordinates104,
  "handful-of-gravel": coordinates105,
  "harrogate-circuit": coordinates106,
  "harrogate-circuit-rev": coordinates107,
  "heart-of-montmartre": coordinates108,
  "hell-of-the-north": coordinates109,
  "hilltop-hustle-run": coordinates110,
  "hilly-route": coordinates111,
  "hilly-route-rev": coordinates112,
  "hilly-route-rev-run": coordinates113,
  "hot-laps": coordinates114,
  "hudson-hustle": coordinates115,
  "innsbruck-kom-after-party": coordinates116,
  innsbruckring: coordinates117,
  "island-hopper": coordinates118,
  "island-outskirts": coordinates119,
  "issendorf-express": coordinates120,
  "italian-villas-circuit": coordinates121,
  "itza-climb-finish": coordinates122,
  "itza-party": coordinates123,
  "jarvis-seaside-sprint": coordinates124,
  "jons-route": coordinates125,
  "jungle-circuit": coordinates126,
  "jungle-circuit-rev": coordinates127,
  "jungle-circuit-reverse-run": coordinates128,
  "jungle-circuit-run": coordinates129,
  "jurassic-coast": coordinates130,
  "kappa-quest": coordinates131,
  "kappa-quest-reverse": coordinates132,
  "kaze-kicker": coordinates133,
  "keith-hill-after-party": coordinates134,
  knickerbocker: coordinates135,
  "knickerbocker-reverse": coordinates136,
  "knights-of-the-roundabout": coordinates137,
  "la-boucle": coordinates138,
  "la-reine": coordinates139,
  "lady-liberty": coordinates140,
  "laguardia-after-party": coordinates141,
  "laguardia-loop": coordinates142,
  "laguardia-loop-reverse": coordinates143,
  "legends-and-lava": coordinates144,
  "leith-hill-after-party": coordinates145,
  "libby-hill-after-party": coordinates146,
  "loch-loop": coordinates147,
  "loch-loop-run": coordinates148,
  "london-8": coordinates149,
  "london-8-rev": coordinates150,
  "london-calling": coordinates151,
  "london-classique": coordinates152,
  "london-flat": coordinates153,
  "london-loop": coordinates154,
  "london-loop-rev": coordinates155,
  "london-the-prl-full": coordinates156,
  "london-triple-loops": coordinates157,
  "london-uprising": coordinates158,
  "loop-de-loop": coordinates159,
  "loop-de-loop-de-loop": coordinates160,
  "loop-de-loop-run": coordinates161,
  "loopin-lava": coordinates162,
  "lutece-express": coordinates163,
  "lutece-express-run": coordinates164,
  lutscher: coordinates165,
  "lutscher-ccw": coordinates166,
  macaron: coordinates167,
  "makuri-40": coordinates168,
  "makuri-madness": coordinates169,
  "makuri-pretzel": coordinates170,
  "may-field": coordinates171,
  "mayan-8": coordinates172,
  "mayan-bridge-loop": coordinates173,
  "mayan-mash": coordinates174,
  "mayan-san-remo": coordinates175,
  "mech-isle-loop": coordinates176,
  "mech-isle-loop-run": coordinates177,
  "mech-isle-mayhem": coordinates178,
  "medio-fondo": coordinates179,
  "mighty-metropolitan": coordinates180,
  "montmartre-mixer": coordinates181,
  "mountain-8": coordinates182,
  "mountain-mash": coordinates183,
  "mountain-mash-run": coordinates184,
  "mountain-route": coordinates185,
  "muir-and-the-mountain": coordinates186,
  navig8: coordinates187,
  "neokyo-all-nighter": coordinates188,
  "neokyo-crit-course": coordinates189,
  "neon-after-party": coordinates190,
  "neon-flats": coordinates191,
  "neon-shore-loop": coordinates192,
  "new-york-kom-after-party": coordinates193,
  "no-sleep-till-brooklyn": coordinates194,
  "ocean-blvd": coordinates195,
  "ocean-lava-cliffside-loop": coordinates196,
  "oh-hill-no": coordinates197,
  "oh-hill-no-run": coordinates198,
  "out-and-back-again": coordinates199,
  "outer-scotland": coordinates200,
  "paris-pacer": coordinates201,
  "paris-toujours": coordinates202,
  "park-perimeter-loop": coordinates203,
  "park-perimeter-rev": coordinates204,
  "park-to-peak": coordinates205,
  "peak-performance": coordinates206,
  "peaky-pave": coordinates207,
  "petit-boucle": coordinates208,
  "petite-douleur": coordinates209,
  "power-punches": coordinates210,
  "power-to-the-tower": coordinates211,
  "prospect-park-loop": coordinates212,
  "prospect-park-loop-run": coordinates213,
  "quatch-quest": coordinates214,
  "queens-highway": coordinates215,
  "queens-highway-after-party": coordinates216,
  "queens-highway-run": coordinates217,
  "radio-rendezvous": coordinates218,
  "railways-and-rooftops": coordinates219,
  "red-zone-repeats": coordinates220,
  "repack-rush": coordinates221,
  rgv: coordinates222,
  "richmond-loop-around": coordinates223,
  "richmond-rollercoaster": coordinates224,
  "richmond-uci-rev": coordinates225,
  "rising-empire": coordinates226,
  "road-to-ruins": coordinates227,
  "road-to-ruins-rev": coordinates228,
  "road-to-sky": coordinates229,
  "road-to-sky-run": coordinates230,
  "rolling-highlands": coordinates231,
  "rooftop-rendezvous": coordinates232,
  "roule-ma-poule": coordinates233,
  "royal-pump-room-8": coordinates234,
  "rues-in-rythme": coordinates235,
  "sacre-bleu": coordinates236,
  "sand-and-sequoias": coordinates237,
  "scotland-after-party": coordinates238,
  "scotland-smash": coordinates239,
  "sea-to-tree": coordinates240,
  "seaside-sprint": coordinates241,
  "seaside-sprint-run": coordinates242,
  "serpentine-8": coordinates243,
  "shisa-shakedown": coordinates244,
  "shorelines-and-summits": coordinates245,
  "sleepless-city": coordinates246,
  snowman: coordinates247,
  "southern-coast-cruise": coordinates248,
  spinfinity: coordinates249,
  "spinfinity-ultra": coordinates250,
  "spiral-into-the-volcano": coordinates251,
  "spiral-summit": coordinates252,
  "spirit-forest": coordinates253,
  "splash-and-dash": coordinates254,
  "sprinters-playground": coordinates255,
  "stay-puft-pursuit": coordinates256,
  "sugar-cookie": coordinates257,
  "sukis-playground": coordinates258,
  "surrey-hills": coordinates259,
  "tair-dringfa-fechan": coordinates260,
  "temple-trek": coordinates261,
  "temple-trek-run": coordinates262,
  "temples-and-towers": coordinates263,
  "tempus-fugit": coordinates264,
  "thats-amore": coordinates265,
  "the-6-train": coordinates266,
  "the-6-train-rev": coordinates267,
  "the-big-ring": coordinates268,
  "the-classic": coordinates269,
  "the-classic-run": coordinates270,
  "the-double-borough": coordinates271,
  "the-epiloch": coordinates272,
  "the-fan-flats": coordinates273,
  "the-greenway": coordinates274,
  "the-highline": coordinates275,
  "the-highline-rev": coordinates276,
  "the-london-pretzel": coordinates277,
  "the-magnificent-8": coordinates278,
  "the-mega-pretzel": coordinates279,
  "the-muckle-yin": coordinates280,
  "the-pretzel": coordinates281,
  "the-prl-half": coordinates282,
  "the-uber-pretzel": coordinates283,
  "three-little-sisters": coordinates284,
  "three-musketeers": coordinates285,
  "three-sisters": coordinates286,
  "three-sisters-rev": coordinates287,
  "three-step-sisters": coordinates288,
  "three-village-loop": coordinates289,
  "tick-tock": coordinates290,
  "tides-and-temples": coordinates291,
  "time-trial": coordinates292,
  "times-square-circuit": coordinates293,
  "times-square-circuit-run": coordinates294,
  "tire-bouchon": coordinates295,
  "titans-run": coordinates296,
  "toefield-tornado": coordinates297,
  "toefield-tornado-run": coordinates298,
  "tour-of-fire-and-ice": coordinates299,
  "tour-of-tewit-well": coordinates300,
  "triple-flat-loops": coordinates301,
  "triple-twist": coordinates302,
  "tropic-rush": coordinates303,
  "turf-n-surf": coordinates304,
  "twilight-crit": coordinates305,
  "twilight-harbor": coordinates306,
  "two-bridges-loop": coordinates307,
  "two-bridges-loop-run": coordinates308,
  "two-village-loop": coordinates309,
  urumaze: coordinates310,
  "valley-to-mountaintop": coordinates311,
  "ven-10": coordinates312,
  "ven-10-run": coordinates313,
  "ven-top": coordinates314,
  "volcano-circuit": coordinates315,
  "volcano-circuit-ccw": coordinates316,
  "volcano-circuit-ccw-run": coordinates317,
  "volcano-circuit-run": coordinates318,
  "volcano-climb": coordinates319,
  "volcano-climb-after-party": coordinates320,
  "volcano-flat": coordinates321,
  "volcano-flat-rev": coordinates322,
  "volcano-flat-run": coordinates323,
  "waisted-8": coordinates324,
  "wandering-flats": coordinates325,
  "watopias-waistband": coordinates326,
  "watts-of-the-wild": coordinates327,
  "watts-the-limit": coordinates328,
  "wbr-climbing-series": coordinates329,
  "what-yumezi-were-lost": coordinates330,
  "whole-lotta-lava": coordinates331,
  "whole-lotta-lava-run": coordinates332,
  "yorkshire-double-loop": coordinates333,
  "yumezi-grit": coordinates334,
  "zg25-climb-champs": coordinates335,
  "zg25-queen": coordinates336,
  "zwift-games-2024-epic": coordinates337,
};
