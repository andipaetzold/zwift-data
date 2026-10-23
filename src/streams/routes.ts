import type { StreamData } from "./types.js";
import stream0 from "./routes/2015-uci-worlds-course.js";
import stream1 from "./routes/2018-uci-worlds-course-short-lap.js";
import stream2 from "./routes/2022-bambino-fondo.js";
import stream3 from "./routes/2022-cycling-esports-world-championships-route.js";
import stream4 from "./routes/2022-gran-fondo.js";
import stream5 from "./routes/2022-medio-fondo.js";
import stream6 from "./routes/2023-continental-qualifiers.js";
import stream7 from "./routes/5k-loop.js";
import stream8 from "./routes/accelerate-to-elevate.js";
import stream9 from "./routes/achterbahn.js";
import stream10 from "./routes/astoria-line-8.js";
import stream11 from "./routes/avon-flyer.js";
import stream12 from "./routes/avon-flyer-run.js";
import stream13 from "./routes/bambino-fondo.js";
import stream14 from "./routes/beach-island-loop.js";
import stream15 from "./routes/beach-island-loop-run.js";
import stream16 from "./routes/bell-lap.js";
import stream17 from "./routes/big-flat-8.js";
import stream18 from "./routes/big-foot-hills.js";
import stream19 from "./routes/big-loop.js";
import stream20 from "./routes/big-loop-rev.js";
import stream21 from "./routes/bigger-loop.js";
import stream22 from "./routes/bon-voyage.js";
import stream23 from "./routes/braek-fast-crits-and-grits.js";
import stream24 from "./routes/bridges-and-boardwalks.js";
import stream25 from "./routes/caldera-coaster.js";
import stream26 from "./routes/california-dreamin.js";
import stream27 from "./routes/california-roll.js";
import stream28 from "./routes/canopies-and-coastlines.js";
import stream29 from "./routes/casse-pattes.js";
import stream30 from "./routes/castle-crit.js";
import stream31 from "./routes/castle-crit-run.js";
import stream32 from "./routes/castle-to-castle.js";
import stream33 from "./routes/chain-chomper.js";
import stream34 from "./routes/champs-elysees.js";
import stream35 from "./routes/champs-elysees-run.js";
import stream36 from "./routes/chasing-the-sun.js";
import stream37 from "./routes/chili-pepper.js";
import stream38 from "./routes/cirque-du-suffer.js";
import stream39 from "./routes/city-and-the-sgurr.js";
import stream40 from "./routes/classique-rev.js";
import stream41 from "./routes/climb-control.js";
import stream42 from "./routes/climbers-gambit.js";
import stream43 from "./routes/coast-crusher.js";
import stream44 from "./routes/coast-to-coast.js";
import stream45 from "./routes/coastal-crown-loop.js";
import stream46 from "./routes/cobbled-climbs.js";
import stream47 from "./routes/cobbled-climbs-rev.js";
import stream48 from "./routes/cobbled-climbs-run.js";
import stream49 from "./routes/cobbled-crown.js";
import stream50 from "./routes/couch-to-sky-k.js";
import stream51 from "./routes/country-to-coastal.js";
import stream52 from "./routes/countryside-tour.js";
import stream53 from "./routes/crepe-escape.js";
import stream54 from "./routes/croissant.js";
import stream55 from "./routes/danger-noodle.js";
import stream56 from "./routes/deca-dash.js";
import stream57 from "./routes/double-espresso.js";
import stream58 from "./routes/double-parked.js";
import stream59 from "./routes/double-span-spin.js";
import stream60 from "./routes/douce-france.js";
import stream61 from "./routes/downtown-dolphin.js";
import stream62 from "./routes/downtown-eruoption.js";
import stream63 from "./routes/downtown-titans.js";
import stream64 from "./routes/duchy-estate.js";
import stream65 from "./routes/dun-dash.js";
import stream66 from "./routes/dust-in-the-wind.js";
import stream67 from "./routes/eastern-eight.js";
import stream68 from "./routes/electric-break.js";
import stream69 from "./routes/electric-loop.js";
import stream70 from "./routes/elevation-evaluation.js";
import stream71 from "./routes/empire-elevation.js";
import stream72 from "./routes/epic-run.js";
import stream73 from "./routes/everything-bagel.js";
import stream74 from "./routes/farmland-loop.js";
import stream75 from "./routes/figure-8.js";
import stream76 from "./routes/figure-8-reverse.js";
import stream77 from "./routes/fine-and-sandy.js";
import stream78 from "./routes/flat-irons.js";
import stream79 from "./routes/flat-out-fast.js";
import stream80 from "./routes/flat-route.js";
import stream81 from "./routes/flat-route-rev.js";
import stream82 from "./routes/flat-route-run.js";
import stream83 from "./routes/flatland-loop.js";
import stream84 from "./routes/four-foalsmen.js";
import stream85 from "./routes/four-horsemen.js";
import stream86 from "./routes/france-classic-fondo.js";
import stream87 from "./routes/fuhgeddaboudit.js";
import stream88 from "./routes/gentil-8.js";
import stream89 from "./routes/glasgow-crit-circuit.js";
import stream90 from "./routes/glasgow-crit-circuit-run.js";
import stream91 from "./routes/glasgow-crit-six.js";
import stream92 from "./routes/glasgow-reverse.js";
import stream93 from "./routes/glyph-heights.js";
import stream94 from "./routes/going-coastal.js";
import stream95 from "./routes/going-coastal-run.js";
import stream96 from "./routes/gotham-grind.js";
import stream97 from "./routes/gotham-grind-rev.js";
import stream98 from "./routes/gran-fondo.js";
import stream99 from "./routes/grand-central-circuit.js";
import stream100 from "./routes/grand-central-circuit-rev.js";
import stream101 from "./routes/greater-london-8.js";
import stream102 from "./routes/greater-london-flat.js";
import stream103 from "./routes/greater-london-loop.js";
import stream104 from "./routes/greater-london-loop-rev.js";
import stream105 from "./routes/greatest-london-flat.js";
import stream106 from "./routes/greatest-london-loop.js";
import stream107 from "./routes/greatest-london-loop-rev.js";
import stream108 from "./routes/green-to-screen.js";
import stream109 from "./routes/handful-of-gravel.js";
import stream110 from "./routes/harrogate-circuit.js";
import stream111 from "./routes/harrogate-circuit-rev.js";
import stream112 from "./routes/heart-of-montmartre.js";
import stream113 from "./routes/hell-of-the-north.js";
import stream114 from "./routes/hilltop-hustle-run.js";
import stream115 from "./routes/hilly-route.js";
import stream116 from "./routes/hilly-route-rev.js";
import stream117 from "./routes/hilly-route-rev-run.js";
import stream118 from "./routes/hot-laps.js";
import stream119 from "./routes/hudson-hustle.js";
import stream120 from "./routes/innsbruck-kom-after-party.js";
import stream121 from "./routes/innsbruckring.js";
import stream122 from "./routes/island-hopper.js";
import stream123 from "./routes/island-outskirts.js";
import stream124 from "./routes/issendorf-express.js";
import stream125 from "./routes/italian-villas-circuit.js";
import stream126 from "./routes/itza-climb-finish.js";
import stream127 from "./routes/itza-party.js";
import stream128 from "./routes/jarvis-seaside-sprint.js";
import stream129 from "./routes/jons-route.js";
import stream130 from "./routes/jungle-circuit.js";
import stream131 from "./routes/jungle-circuit-rev.js";
import stream132 from "./routes/jungle-circuit-reverse-run.js";
import stream133 from "./routes/jungle-circuit-run.js";
import stream134 from "./routes/jurassic-coast.js";
import stream135 from "./routes/kappa-quest.js";
import stream136 from "./routes/kappa-quest-reverse.js";
import stream137 from "./routes/kaze-kicker.js";
import stream138 from "./routes/keith-hill-after-party.js";
import stream139 from "./routes/knickerbocker.js";
import stream140 from "./routes/knickerbocker-reverse.js";
import stream141 from "./routes/knights-of-the-roundabout.js";
import stream142 from "./routes/la-boucle.js";
import stream143 from "./routes/la-reine.js";
import stream144 from "./routes/lady-liberty.js";
import stream145 from "./routes/laguardia-after-party.js";
import stream146 from "./routes/laguardia-loop.js";
import stream147 from "./routes/laguardia-loop-reverse.js";
import stream148 from "./routes/laps-camera-traction.js";
import stream149 from "./routes/lava-legs.js";
import stream150 from "./routes/legends-and-lava.js";
import stream151 from "./routes/leith-hill-after-party.js";
import stream152 from "./routes/libby-hill-after-party.js";
import stream153 from "./routes/loch-loop.js";
import stream154 from "./routes/loch-loop-run.js";
import stream155 from "./routes/london-8.js";
import stream156 from "./routes/london-8-rev.js";
import stream157 from "./routes/london-calling.js";
import stream158 from "./routes/london-classique.js";
import stream159 from "./routes/london-flat.js";
import stream160 from "./routes/london-loop.js";
import stream161 from "./routes/london-loop-rev.js";
import stream162 from "./routes/london-the-prl-full.js";
import stream163 from "./routes/london-triple-loops.js";
import stream164 from "./routes/london-uprising.js";
import stream165 from "./routes/loop-de-loop.js";
import stream166 from "./routes/loop-de-loop-de-loop.js";
import stream167 from "./routes/loop-de-loop-run.js";
import stream168 from "./routes/loopin-lava.js";
import stream169 from "./routes/lutece-express.js";
import stream170 from "./routes/lutece-express-run.js";
import stream171 from "./routes/lutscher.js";
import stream172 from "./routes/lutscher-ccw.js";
import stream173 from "./routes/macaron.js";
import stream174 from "./routes/makuri-40.js";
import stream175 from "./routes/makuri-madness.js";
import stream176 from "./routes/makuri-pretzel.js";
import stream177 from "./routes/may-field.js";
import stream178 from "./routes/mayan-8.js";
import stream179 from "./routes/mayan-bridge-loop.js";
import stream180 from "./routes/mayan-mash.js";
import stream181 from "./routes/mayan-san-remo.js";
import stream182 from "./routes/mech-isle-loop.js";
import stream183 from "./routes/mech-isle-loop-run.js";
import stream184 from "./routes/mech-isle-mayhem.js";
import stream185 from "./routes/medio-fondo.js";
import stream186 from "./routes/mighty-metropolitan.js";
import stream187 from "./routes/montmartre-mixer.js";
import stream188 from "./routes/mountain-8.js";
import stream189 from "./routes/mountain-mash.js";
import stream190 from "./routes/mountain-mash-run.js";
import stream191 from "./routes/mountain-route.js";
import stream192 from "./routes/muir-and-the-mountain.js";
import stream193 from "./routes/navig8.js";
import stream194 from "./routes/neokyo-all-nighter.js";
import stream195 from "./routes/neokyo-crit-course.js";
import stream196 from "./routes/neon-after-party.js";
import stream197 from "./routes/neon-flats.js";
import stream198 from "./routes/neon-shore-loop.js";
import stream199 from "./routes/new-york-kom-after-party.js";
import stream200 from "./routes/no-sleep-till-brooklyn.js";
import stream201 from "./routes/ocean-blvd.js";
import stream202 from "./routes/ocean-lava-cliffside-loop.js";
import stream203 from "./routes/oh-hill-no.js";
import stream204 from "./routes/oh-hill-no-run.js";
import stream205 from "./routes/out-and-back-again.js";
import stream206 from "./routes/outer-scotland.js";
import stream207 from "./routes/pacific-pursuit.js";
import stream208 from "./routes/paris-pacer.js";
import stream209 from "./routes/paris-toujours.js";
import stream210 from "./routes/park-perimeter-loop.js";
import stream211 from "./routes/park-perimeter-rev.js";
import stream212 from "./routes/park-to-peak.js";
import stream213 from "./routes/peak-performance.js";
import stream214 from "./routes/peaky-pave.js";
import stream215 from "./routes/petit-boucle.js";
import stream216 from "./routes/petite-douleur.js";
import stream217 from "./routes/power-punches.js";
import stream218 from "./routes/power-to-the-tower.js";
import stream219 from "./routes/prospect-park-loop.js";
import stream220 from "./routes/prospect-park-loop-run.js";
import stream221 from "./routes/quatch-quest.js";
import stream222 from "./routes/queens-highway.js";
import stream223 from "./routes/queens-highway-after-party.js";
import stream224 from "./routes/queens-highway-run.js";
import stream225 from "./routes/radio-rendezvous.js";
import stream226 from "./routes/railways-and-rooftops.js";
import stream227 from "./routes/red-zone-repeats.js";
import stream228 from "./routes/repack-rush.js";
import stream229 from "./routes/rgv.js";
import stream230 from "./routes/richmond-loop-around.js";
import stream231 from "./routes/richmond-rollercoaster.js";
import stream232 from "./routes/richmond-uci-rev.js";
import stream233 from "./routes/rising-empire.js";
import stream234 from "./routes/road-to-ruins.js";
import stream235 from "./routes/road-to-ruins-rev.js";
import stream236 from "./routes/road-to-sky.js";
import stream237 from "./routes/road-to-sky-run.js";
import stream238 from "./routes/rolling-highlands.js";
import stream239 from "./routes/rooftop-rendezvous.js";
import stream240 from "./routes/roule-ma-poule.js";
import stream241 from "./routes/royal-pump-room-8.js";
import stream242 from "./routes/rues-in-rythme.js";
import stream243 from "./routes/sacre-bleu.js";
import stream244 from "./routes/sand-and-sequoias.js";
import stream245 from "./routes/scotland-after-party.js";
import stream246 from "./routes/scotland-smash.js";
import stream247 from "./routes/sea-to-tree.js";
import stream248 from "./routes/seafoam-circuit.js";
import stream249 from "./routes/seafoam-scamper.js";
import stream250 from "./routes/seaside-sprint.js";
import stream251 from "./routes/seaside-sprint-run.js";
import stream252 from "./routes/serpentine-8.js";
import stream253 from "./routes/shisa-shakedown.js";
import stream254 from "./routes/shorelines-and-summits.js";
import stream255 from "./routes/sleepless-city.js";
import stream256 from "./routes/snowman.js";
import stream257 from "./routes/southern-coast-cruise.js";
import stream258 from "./routes/spinfinity.js";
import stream259 from "./routes/spinfinity-ultra.js";
import stream260 from "./routes/spiral-into-the-volcano.js";
import stream261 from "./routes/spiral-summit.js";
import stream262 from "./routes/spirit-forest.js";
import stream263 from "./routes/splash-and-dash.js";
import stream264 from "./routes/sprinters-playground.js";
import stream265 from "./routes/stay-puft-pursuit.js";
import stream266 from "./routes/sugar-cookie.js";
import stream267 from "./routes/sukis-playground.js";
import stream268 from "./routes/surrey-hills.js";
import stream269 from "./routes/tair-dringfa-fechan.js";
import stream270 from "./routes/temple-trek.js";
import stream271 from "./routes/temple-trek-run.js";
import stream272 from "./routes/temples-and-towers.js";
import stream273 from "./routes/tempus-fugit.js";
import stream274 from "./routes/thats-amore.js";
import stream275 from "./routes/the-6-train.js";
import stream276 from "./routes/the-6-train-rev.js";
import stream277 from "./routes/the-big-ring.js";
import stream278 from "./routes/the-classic.js";
import stream279 from "./routes/the-classic-run.js";
import stream280 from "./routes/the-double-borough.js";
import stream281 from "./routes/the-epiloch.js";
import stream282 from "./routes/the-fan-flats.js";
import stream283 from "./routes/the-greenway.js";
import stream284 from "./routes/the-highline.js";
import stream285 from "./routes/the-highline-rev.js";
import stream286 from "./routes/the-london-pretzel.js";
import stream287 from "./routes/the-magnificent-8.js";
import stream288 from "./routes/the-mega-pretzel.js";
import stream289 from "./routes/the-muckle-yin.js";
import stream290 from "./routes/the-pretzel.js";
import stream291 from "./routes/the-prl-half.js";
import stream292 from "./routes/the-uber-pretzel.js";
import stream293 from "./routes/the-watopia-150.js";
import stream294 from "./routes/three-little-sisters.js";
import stream295 from "./routes/three-musketeers.js";
import stream296 from "./routes/three-sisters.js";
import stream297 from "./routes/three-sisters-rev.js";
import stream298 from "./routes/three-step-sisters.js";
import stream299 from "./routes/three-village-loop.js";
import stream300 from "./routes/tick-tock.js";
import stream301 from "./routes/tides-and-temples.js";
import stream302 from "./routes/time-trial.js";
import stream303 from "./routes/times-square-circuit.js";
import stream304 from "./routes/times-square-circuit-run.js";
import stream305 from "./routes/tire-bouchon.js";
import stream306 from "./routes/titans-run.js";
import stream307 from "./routes/toefield-tornado.js";
import stream308 from "./routes/toefield-tornado-run.js";
import stream309 from "./routes/tour-of-fire-and-ice.js";
import stream310 from "./routes/tour-of-tewit-well.js";
import stream311 from "./routes/triple-flat-loops.js";
import stream312 from "./routes/triple-twist.js";
import stream313 from "./routes/tropic-rush.js";
import stream314 from "./routes/turf-n-surf.js";
import stream315 from "./routes/twilight-crit.js";
import stream316 from "./routes/twilight-harbor.js";
import stream317 from "./routes/two-bridges-loop.js";
import stream318 from "./routes/two-bridges-loop-run.js";
import stream319 from "./routes/two-village-loop.js";
import stream320 from "./routes/urumaze.js";
import stream321 from "./routes/valley-to-mountaintop.js";
import stream322 from "./routes/ven-10.js";
import stream323 from "./routes/ven-10-run.js";
import stream324 from "./routes/ven-top.js";
import stream325 from "./routes/volcano-circuit.js";
import stream326 from "./routes/volcano-circuit-ccw.js";
import stream327 from "./routes/volcano-circuit-ccw-run.js";
import stream328 from "./routes/volcano-circuit-run.js";
import stream329 from "./routes/volcano-climb.js";
import stream330 from "./routes/volcano-climb-after-party.js";
import stream331 from "./routes/volcano-flat.js";
import stream332 from "./routes/volcano-flat-rev.js";
import stream333 from "./routes/volcano-flat-run.js";
import stream334 from "./routes/waisted-8.js";
import stream335 from "./routes/wandering-flats.js";
import stream336 from "./routes/watopias-waistband.js";
import stream337 from "./routes/watt-goes-up-must-come-down.js";
import stream338 from "./routes/watts-of-the-wild.js";
import stream339 from "./routes/watts-the-limit.js";
import stream340 from "./routes/wbr-climbing-series.js";
import stream341 from "./routes/what-yumezi-were-lost.js";
import stream342 from "./routes/whole-lotta-lava.js";
import stream343 from "./routes/whole-lotta-lava-run.js";
import stream344 from "./routes/yorkshire-double-loop.js";
import stream345 from "./routes/yumezi-grit.js";
import stream346 from "./routes/zg25-climb-champs.js";
import stream347 from "./routes/zg25-queen.js";
import stream348 from "./routes/zwift-games-2024-epic.js";
export const routes: Readonly<Record<string, StreamData | undefined>> = {
  "2015-uci-worlds-course": stream0,
  "2018-uci-worlds-course-short-lap": stream1,
  "2022-bambino-fondo": stream2,
  "2022-cycling-esports-world-championships-route": stream3,
  "2022-gran-fondo": stream4,
  "2022-medio-fondo": stream5,
  "2023-continental-qualifiers": stream6,
  "5k-loop": stream7,
  "accelerate-to-elevate": stream8,
  achterbahn: stream9,
  "astoria-line-8": stream10,
  "avon-flyer": stream11,
  "avon-flyer-run": stream12,
  "bambino-fondo": stream13,
  "beach-island-loop": stream14,
  "beach-island-loop-run": stream15,
  "bell-lap": stream16,
  "big-flat-8": stream17,
  "big-foot-hills": stream18,
  "big-loop": stream19,
  "big-loop-rev": stream20,
  "bigger-loop": stream21,
  "bon-voyage": stream22,
  "braek-fast-crits-and-grits": stream23,
  "bridges-and-boardwalks": stream24,
  "caldera-coaster": stream25,
  "california-dreamin": stream26,
  "california-roll": stream27,
  "canopies-and-coastlines": stream28,
  "casse-pattes": stream29,
  "castle-crit": stream30,
  "castle-crit-run": stream31,
  "castle-to-castle": stream32,
  "chain-chomper": stream33,
  "champs-elysees": stream34,
  "champs-elysees-run": stream35,
  "chasing-the-sun": stream36,
  "chili-pepper": stream37,
  "cirque-du-suffer": stream38,
  "city-and-the-sgurr": stream39,
  "classique-rev": stream40,
  "climb-control": stream41,
  "climbers-gambit": stream42,
  "coast-crusher": stream43,
  "coast-to-coast": stream44,
  "coastal-crown-loop": stream45,
  "cobbled-climbs": stream46,
  "cobbled-climbs-rev": stream47,
  "cobbled-climbs-run": stream48,
  "cobbled-crown": stream49,
  "couch-to-sky-k": stream50,
  "country-to-coastal": stream51,
  "countryside-tour": stream52,
  "crepe-escape": stream53,
  croissant: stream54,
  "danger-noodle": stream55,
  "deca-dash": stream56,
  "double-espresso": stream57,
  "double-parked": stream58,
  "double-span-spin": stream59,
  "douce-france": stream60,
  "downtown-dolphin": stream61,
  "downtown-eruoption": stream62,
  "downtown-titans": stream63,
  "duchy-estate": stream64,
  "dun-dash": stream65,
  "dust-in-the-wind": stream66,
  "eastern-eight": stream67,
  "electric-break": stream68,
  "electric-loop": stream69,
  "elevation-evaluation": stream70,
  "empire-elevation": stream71,
  "epic-run": stream72,
  "everything-bagel": stream73,
  "farmland-loop": stream74,
  "figure-8": stream75,
  "figure-8-reverse": stream76,
  "fine-and-sandy": stream77,
  "flat-irons": stream78,
  "flat-out-fast": stream79,
  "flat-route": stream80,
  "flat-route-rev": stream81,
  "flat-route-run": stream82,
  "flatland-loop": stream83,
  "four-foalsmen": stream84,
  "four-horsemen": stream85,
  "france-classic-fondo": stream86,
  fuhgeddaboudit: stream87,
  "gentil-8": stream88,
  "glasgow-crit-circuit": stream89,
  "glasgow-crit-circuit-run": stream90,
  "glasgow-crit-six": stream91,
  "glasgow-reverse": stream92,
  "glyph-heights": stream93,
  "going-coastal": stream94,
  "going-coastal-run": stream95,
  "gotham-grind": stream96,
  "gotham-grind-rev": stream97,
  "gran-fondo": stream98,
  "grand-central-circuit": stream99,
  "grand-central-circuit-rev": stream100,
  "greater-london-8": stream101,
  "greater-london-flat": stream102,
  "greater-london-loop": stream103,
  "greater-london-loop-rev": stream104,
  "greatest-london-flat": stream105,
  "greatest-london-loop": stream106,
  "greatest-london-loop-rev": stream107,
  "green-to-screen": stream108,
  "handful-of-gravel": stream109,
  "harrogate-circuit": stream110,
  "harrogate-circuit-rev": stream111,
  "heart-of-montmartre": stream112,
  "hell-of-the-north": stream113,
  "hilltop-hustle-run": stream114,
  "hilly-route": stream115,
  "hilly-route-rev": stream116,
  "hilly-route-rev-run": stream117,
  "hot-laps": stream118,
  "hudson-hustle": stream119,
  "innsbruck-kom-after-party": stream120,
  innsbruckring: stream121,
  "island-hopper": stream122,
  "island-outskirts": stream123,
  "issendorf-express": stream124,
  "italian-villas-circuit": stream125,
  "itza-climb-finish": stream126,
  "itza-party": stream127,
  "jarvis-seaside-sprint": stream128,
  "jons-route": stream129,
  "jungle-circuit": stream130,
  "jungle-circuit-rev": stream131,
  "jungle-circuit-reverse-run": stream132,
  "jungle-circuit-run": stream133,
  "jurassic-coast": stream134,
  "kappa-quest": stream135,
  "kappa-quest-reverse": stream136,
  "kaze-kicker": stream137,
  "keith-hill-after-party": stream138,
  knickerbocker: stream139,
  "knickerbocker-reverse": stream140,
  "knights-of-the-roundabout": stream141,
  "la-boucle": stream142,
  "la-reine": stream143,
  "lady-liberty": stream144,
  "laguardia-after-party": stream145,
  "laguardia-loop": stream146,
  "laguardia-loop-reverse": stream147,
  "laps-camera-traction": stream148,
  "lava-legs": stream149,
  "legends-and-lava": stream150,
  "leith-hill-after-party": stream151,
  "libby-hill-after-party": stream152,
  "loch-loop": stream153,
  "loch-loop-run": stream154,
  "london-8": stream155,
  "london-8-rev": stream156,
  "london-calling": stream157,
  "london-classique": stream158,
  "london-flat": stream159,
  "london-loop": stream160,
  "london-loop-rev": stream161,
  "london-the-prl-full": stream162,
  "london-triple-loops": stream163,
  "london-uprising": stream164,
  "loop-de-loop": stream165,
  "loop-de-loop-de-loop": stream166,
  "loop-de-loop-run": stream167,
  "loopin-lava": stream168,
  "lutece-express": stream169,
  "lutece-express-run": stream170,
  lutscher: stream171,
  "lutscher-ccw": stream172,
  macaron: stream173,
  "makuri-40": stream174,
  "makuri-madness": stream175,
  "makuri-pretzel": stream176,
  "may-field": stream177,
  "mayan-8": stream178,
  "mayan-bridge-loop": stream179,
  "mayan-mash": stream180,
  "mayan-san-remo": stream181,
  "mech-isle-loop": stream182,
  "mech-isle-loop-run": stream183,
  "mech-isle-mayhem": stream184,
  "medio-fondo": stream185,
  "mighty-metropolitan": stream186,
  "montmartre-mixer": stream187,
  "mountain-8": stream188,
  "mountain-mash": stream189,
  "mountain-mash-run": stream190,
  "mountain-route": stream191,
  "muir-and-the-mountain": stream192,
  navig8: stream193,
  "neokyo-all-nighter": stream194,
  "neokyo-crit-course": stream195,
  "neon-after-party": stream196,
  "neon-flats": stream197,
  "neon-shore-loop": stream198,
  "new-york-kom-after-party": stream199,
  "no-sleep-till-brooklyn": stream200,
  "ocean-blvd": stream201,
  "ocean-lava-cliffside-loop": stream202,
  "oh-hill-no": stream203,
  "oh-hill-no-run": stream204,
  "out-and-back-again": stream205,
  "outer-scotland": stream206,
  "pacific-pursuit": stream207,
  "paris-pacer": stream208,
  "paris-toujours": stream209,
  "park-perimeter-loop": stream210,
  "park-perimeter-rev": stream211,
  "park-to-peak": stream212,
  "peak-performance": stream213,
  "peaky-pave": stream214,
  "petit-boucle": stream215,
  "petite-douleur": stream216,
  "power-punches": stream217,
  "power-to-the-tower": stream218,
  "prospect-park-loop": stream219,
  "prospect-park-loop-run": stream220,
  "quatch-quest": stream221,
  "queens-highway": stream222,
  "queens-highway-after-party": stream223,
  "queens-highway-run": stream224,
  "radio-rendezvous": stream225,
  "railways-and-rooftops": stream226,
  "red-zone-repeats": stream227,
  "repack-rush": stream228,
  rgv: stream229,
  "richmond-loop-around": stream230,
  "richmond-rollercoaster": stream231,
  "richmond-uci-rev": stream232,
  "rising-empire": stream233,
  "road-to-ruins": stream234,
  "road-to-ruins-rev": stream235,
  "road-to-sky": stream236,
  "road-to-sky-run": stream237,
  "rolling-highlands": stream238,
  "rooftop-rendezvous": stream239,
  "roule-ma-poule": stream240,
  "royal-pump-room-8": stream241,
  "rues-in-rythme": stream242,
  "sacre-bleu": stream243,
  "sand-and-sequoias": stream244,
  "scotland-after-party": stream245,
  "scotland-smash": stream246,
  "sea-to-tree": stream247,
  "seafoam-circuit": stream248,
  "seafoam-scamper": stream249,
  "seaside-sprint": stream250,
  "seaside-sprint-run": stream251,
  "serpentine-8": stream252,
  "shisa-shakedown": stream253,
  "shorelines-and-summits": stream254,
  "sleepless-city": stream255,
  snowman: stream256,
  "southern-coast-cruise": stream257,
  spinfinity: stream258,
  "spinfinity-ultra": stream259,
  "spiral-into-the-volcano": stream260,
  "spiral-summit": stream261,
  "spirit-forest": stream262,
  "splash-and-dash": stream263,
  "sprinters-playground": stream264,
  "stay-puft-pursuit": stream265,
  "sugar-cookie": stream266,
  "sukis-playground": stream267,
  "surrey-hills": stream268,
  "tair-dringfa-fechan": stream269,
  "temple-trek": stream270,
  "temple-trek-run": stream271,
  "temples-and-towers": stream272,
  "tempus-fugit": stream273,
  "thats-amore": stream274,
  "the-6-train": stream275,
  "the-6-train-rev": stream276,
  "the-big-ring": stream277,
  "the-classic": stream278,
  "the-classic-run": stream279,
  "the-double-borough": stream280,
  "the-epiloch": stream281,
  "the-fan-flats": stream282,
  "the-greenway": stream283,
  "the-highline": stream284,
  "the-highline-rev": stream285,
  "the-london-pretzel": stream286,
  "the-magnificent-8": stream287,
  "the-mega-pretzel": stream288,
  "the-muckle-yin": stream289,
  "the-pretzel": stream290,
  "the-prl-half": stream291,
  "the-uber-pretzel": stream292,
  "the-watopia-150": stream293,
  "three-little-sisters": stream294,
  "three-musketeers": stream295,
  "three-sisters": stream296,
  "three-sisters-rev": stream297,
  "three-step-sisters": stream298,
  "three-village-loop": stream299,
  "tick-tock": stream300,
  "tides-and-temples": stream301,
  "time-trial": stream302,
  "times-square-circuit": stream303,
  "times-square-circuit-run": stream304,
  "tire-bouchon": stream305,
  "titans-run": stream306,
  "toefield-tornado": stream307,
  "toefield-tornado-run": stream308,
  "tour-of-fire-and-ice": stream309,
  "tour-of-tewit-well": stream310,
  "triple-flat-loops": stream311,
  "triple-twist": stream312,
  "tropic-rush": stream313,
  "turf-n-surf": stream314,
  "twilight-crit": stream315,
  "twilight-harbor": stream316,
  "two-bridges-loop": stream317,
  "two-bridges-loop-run": stream318,
  "two-village-loop": stream319,
  urumaze: stream320,
  "valley-to-mountaintop": stream321,
  "ven-10": stream322,
  "ven-10-run": stream323,
  "ven-top": stream324,
  "volcano-circuit": stream325,
  "volcano-circuit-ccw": stream326,
  "volcano-circuit-ccw-run": stream327,
  "volcano-circuit-run": stream328,
  "volcano-climb": stream329,
  "volcano-climb-after-party": stream330,
  "volcano-flat": stream331,
  "volcano-flat-rev": stream332,
  "volcano-flat-run": stream333,
  "waisted-8": stream334,
  "wandering-flats": stream335,
  "watopias-waistband": stream336,
  "watt-goes-up-must-come-down": stream337,
  "watts-of-the-wild": stream338,
  "watts-the-limit": stream339,
  "wbr-climbing-series": stream340,
  "what-yumezi-were-lost": stream341,
  "whole-lotta-lava": stream342,
  "whole-lotta-lava-run": stream343,
  "yorkshire-double-loop": stream344,
  "yumezi-grit": stream345,
  "zg25-climb-champs": stream346,
  "zg25-queen": stream347,
  "zwift-games-2024-epic": stream348,
};
