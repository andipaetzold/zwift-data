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
import stream25 from "./routes/canopies-and-coastlines.js";
import stream26 from "./routes/casse-pattes.js";
import stream27 from "./routes/castle-crit.js";
import stream28 from "./routes/castle-crit-run.js";
import stream29 from "./routes/castle-to-castle.js";
import stream30 from "./routes/chain-chomper.js";
import stream31 from "./routes/champs-elysees.js";
import stream32 from "./routes/champs-elysees-run.js";
import stream33 from "./routes/chasing-the-sun.js";
import stream34 from "./routes/chili-pepper.js";
import stream35 from "./routes/cirque-du-suffer.js";
import stream36 from "./routes/city-and-the-sgurr.js";
import stream37 from "./routes/classique-rev.js";
import stream38 from "./routes/climb-control.js";
import stream39 from "./routes/climbers-gambit.js";
import stream40 from "./routes/coast-crusher.js";
import stream41 from "./routes/coast-to-coast.js";
import stream42 from "./routes/coastal-crown-loop.js";
import stream43 from "./routes/cobbled-climbs.js";
import stream44 from "./routes/cobbled-climbs-rev.js";
import stream45 from "./routes/cobbled-climbs-run.js";
import stream46 from "./routes/cobbled-crown.js";
import stream47 from "./routes/couch-to-sky-k.js";
import stream48 from "./routes/country-to-coastal.js";
import stream49 from "./routes/countryside-tour.js";
import stream50 from "./routes/crepe-escape.js";
import stream51 from "./routes/croissant.js";
import stream52 from "./routes/danger-noodle.js";
import stream53 from "./routes/deca-dash.js";
import stream54 from "./routes/double-espresso.js";
import stream55 from "./routes/double-parked.js";
import stream56 from "./routes/double-span-spin.js";
import stream57 from "./routes/douce-france.js";
import stream58 from "./routes/downtown-dolphin.js";
import stream59 from "./routes/downtown-eruoption.js";
import stream60 from "./routes/downtown-titans.js";
import stream61 from "./routes/duchy-estate.js";
import stream62 from "./routes/dun-dash.js";
import stream63 from "./routes/dust-in-the-wind.js";
import stream64 from "./routes/eastern-eight.js";
import stream65 from "./routes/electric-break.js";
import stream66 from "./routes/electric-loop.js";
import stream67 from "./routes/elevation-evaluation.js";
import stream68 from "./routes/empire-elevation.js";
import stream69 from "./routes/epic-run.js";
import stream70 from "./routes/everything-bagel.js";
import stream71 from "./routes/farmland-loop.js";
import stream72 from "./routes/figure-8.js";
import stream73 from "./routes/figure-8-reverse.js";
import stream74 from "./routes/fine-and-sandy.js";
import stream75 from "./routes/flat-irons.js";
import stream76 from "./routes/flat-out-fast.js";
import stream77 from "./routes/flat-route.js";
import stream78 from "./routes/flat-route-rev.js";
import stream79 from "./routes/flat-route-run.js";
import stream80 from "./routes/flatland-loop.js";
import stream81 from "./routes/four-horsemen.js";
import stream82 from "./routes/france-classic-fondo.js";
import stream83 from "./routes/fuhgeddaboudit.js";
import stream84 from "./routes/gentil-8.js";
import stream85 from "./routes/glasgow-crit-circuit.js";
import stream86 from "./routes/glasgow-crit-circuit-run.js";
import stream87 from "./routes/glasgow-crit-six.js";
import stream88 from "./routes/glasgow-reverse.js";
import stream89 from "./routes/glyph-heights.js";
import stream90 from "./routes/going-coastal.js";
import stream91 from "./routes/going-coastal-run.js";
import stream92 from "./routes/gotham-grind.js";
import stream93 from "./routes/gotham-grind-rev.js";
import stream94 from "./routes/gran-fondo.js";
import stream95 from "./routes/grand-central-circuit.js";
import stream96 from "./routes/grand-central-circuit-rev.js";
import stream97 from "./routes/greater-london-8.js";
import stream98 from "./routes/greater-london-flat.js";
import stream99 from "./routes/greater-london-loop.js";
import stream100 from "./routes/greater-london-loop-rev.js";
import stream101 from "./routes/greatest-london-flat.js";
import stream102 from "./routes/greatest-london-loop.js";
import stream103 from "./routes/greatest-london-loop-rev.js";
import stream104 from "./routes/green-to-screen.js";
import stream105 from "./routes/handful-of-gravel.js";
import stream106 from "./routes/harrogate-circuit.js";
import stream107 from "./routes/harrogate-circuit-rev.js";
import stream108 from "./routes/heart-of-montmartre.js";
import stream109 from "./routes/hell-of-the-north.js";
import stream110 from "./routes/hilltop-hustle-run.js";
import stream111 from "./routes/hilly-route.js";
import stream112 from "./routes/hilly-route-rev.js";
import stream113 from "./routes/hilly-route-rev-run.js";
import stream114 from "./routes/hot-laps.js";
import stream115 from "./routes/hudson-hustle.js";
import stream116 from "./routes/innsbruck-kom-after-party.js";
import stream117 from "./routes/innsbruckring.js";
import stream118 from "./routes/island-hopper.js";
import stream119 from "./routes/island-outskirts.js";
import stream120 from "./routes/issendorf-express.js";
import stream121 from "./routes/italian-villas-circuit.js";
import stream122 from "./routes/itza-climb-finish.js";
import stream123 from "./routes/itza-party.js";
import stream124 from "./routes/jarvis-seaside-sprint.js";
import stream125 from "./routes/jons-route.js";
import stream126 from "./routes/jungle-circuit.js";
import stream127 from "./routes/jungle-circuit-rev.js";
import stream128 from "./routes/jungle-circuit-reverse-run.js";
import stream129 from "./routes/jungle-circuit-run.js";
import stream130 from "./routes/jurassic-coast.js";
import stream131 from "./routes/kappa-quest.js";
import stream132 from "./routes/kappa-quest-reverse.js";
import stream133 from "./routes/kaze-kicker.js";
import stream134 from "./routes/keith-hill-after-party.js";
import stream135 from "./routes/knickerbocker.js";
import stream136 from "./routes/knickerbocker-reverse.js";
import stream137 from "./routes/knights-of-the-roundabout.js";
import stream138 from "./routes/la-boucle.js";
import stream139 from "./routes/la-reine.js";
import stream140 from "./routes/lady-liberty.js";
import stream141 from "./routes/laguardia-after-party.js";
import stream142 from "./routes/laguardia-loop.js";
import stream143 from "./routes/laguardia-loop-reverse.js";
import stream144 from "./routes/legends-and-lava.js";
import stream145 from "./routes/leith-hill-after-party.js";
import stream146 from "./routes/libby-hill-after-party.js";
import stream147 from "./routes/loch-loop.js";
import stream148 from "./routes/loch-loop-run.js";
import stream149 from "./routes/london-8.js";
import stream150 from "./routes/london-8-rev.js";
import stream151 from "./routes/london-calling.js";
import stream152 from "./routes/london-classique.js";
import stream153 from "./routes/london-flat.js";
import stream154 from "./routes/london-loop.js";
import stream155 from "./routes/london-loop-rev.js";
import stream156 from "./routes/london-the-prl-full.js";
import stream157 from "./routes/london-triple-loops.js";
import stream158 from "./routes/london-uprising.js";
import stream159 from "./routes/loop-de-loop.js";
import stream160 from "./routes/loop-de-loop-de-loop.js";
import stream161 from "./routes/loop-de-loop-run.js";
import stream162 from "./routes/loopin-lava.js";
import stream163 from "./routes/lutece-express.js";
import stream164 from "./routes/lutece-express-run.js";
import stream165 from "./routes/lutscher.js";
import stream166 from "./routes/lutscher-ccw.js";
import stream167 from "./routes/macaron.js";
import stream168 from "./routes/makuri-40.js";
import stream169 from "./routes/makuri-madness.js";
import stream170 from "./routes/makuri-pretzel.js";
import stream171 from "./routes/may-field.js";
import stream172 from "./routes/mayan-8.js";
import stream173 from "./routes/mayan-bridge-loop.js";
import stream174 from "./routes/mayan-mash.js";
import stream175 from "./routes/mayan-san-remo.js";
import stream176 from "./routes/mech-isle-loop.js";
import stream177 from "./routes/mech-isle-loop-run.js";
import stream178 from "./routes/mech-isle-mayhem.js";
import stream179 from "./routes/medio-fondo.js";
import stream180 from "./routes/mighty-metropolitan.js";
import stream181 from "./routes/montmartre-mixer.js";
import stream182 from "./routes/mountain-8.js";
import stream183 from "./routes/mountain-mash.js";
import stream184 from "./routes/mountain-mash-run.js";
import stream185 from "./routes/mountain-route.js";
import stream186 from "./routes/muir-and-the-mountain.js";
import stream187 from "./routes/navig8.js";
import stream188 from "./routes/neokyo-all-nighter.js";
import stream189 from "./routes/neokyo-crit-course.js";
import stream190 from "./routes/neon-after-party.js";
import stream191 from "./routes/neon-flats.js";
import stream192 from "./routes/neon-shore-loop.js";
import stream193 from "./routes/new-york-kom-after-party.js";
import stream194 from "./routes/no-sleep-till-brooklyn.js";
import stream195 from "./routes/ocean-blvd.js";
import stream196 from "./routes/ocean-lava-cliffside-loop.js";
import stream197 from "./routes/oh-hill-no.js";
import stream198 from "./routes/oh-hill-no-run.js";
import stream199 from "./routes/out-and-back-again.js";
import stream200 from "./routes/outer-scotland.js";
import stream201 from "./routes/paris-pacer.js";
import stream202 from "./routes/paris-toujours.js";
import stream203 from "./routes/park-perimeter-loop.js";
import stream204 from "./routes/park-perimeter-rev.js";
import stream205 from "./routes/park-to-peak.js";
import stream206 from "./routes/peak-performance.js";
import stream207 from "./routes/peaky-pave.js";
import stream208 from "./routes/petit-boucle.js";
import stream209 from "./routes/petite-douleur.js";
import stream210 from "./routes/power-punches.js";
import stream211 from "./routes/power-to-the-tower.js";
import stream212 from "./routes/prospect-park-loop.js";
import stream213 from "./routes/prospect-park-loop-run.js";
import stream214 from "./routes/quatch-quest.js";
import stream215 from "./routes/queens-highway.js";
import stream216 from "./routes/queens-highway-after-party.js";
import stream217 from "./routes/queens-highway-run.js";
import stream218 from "./routes/radio-rendezvous.js";
import stream219 from "./routes/railways-and-rooftops.js";
import stream220 from "./routes/red-zone-repeats.js";
import stream221 from "./routes/repack-rush.js";
import stream222 from "./routes/rgv.js";
import stream223 from "./routes/richmond-loop-around.js";
import stream224 from "./routes/richmond-rollercoaster.js";
import stream225 from "./routes/richmond-uci-rev.js";
import stream226 from "./routes/rising-empire.js";
import stream227 from "./routes/road-to-ruins.js";
import stream228 from "./routes/road-to-ruins-rev.js";
import stream229 from "./routes/road-to-sky.js";
import stream230 from "./routes/road-to-sky-run.js";
import stream231 from "./routes/rolling-highlands.js";
import stream232 from "./routes/rooftop-rendezvous.js";
import stream233 from "./routes/roule-ma-poule.js";
import stream234 from "./routes/royal-pump-room-8.js";
import stream235 from "./routes/rues-in-rythme.js";
import stream236 from "./routes/sacre-bleu.js";
import stream237 from "./routes/sand-and-sequoias.js";
import stream238 from "./routes/scotland-after-party.js";
import stream239 from "./routes/scotland-smash.js";
import stream240 from "./routes/sea-to-tree.js";
import stream241 from "./routes/seaside-sprint.js";
import stream242 from "./routes/seaside-sprint-run.js";
import stream243 from "./routes/serpentine-8.js";
import stream244 from "./routes/shisa-shakedown.js";
import stream245 from "./routes/shorelines-and-summits.js";
import stream246 from "./routes/sleepless-city.js";
import stream247 from "./routes/snowman.js";
import stream248 from "./routes/southern-coast-cruise.js";
import stream249 from "./routes/spinfinity.js";
import stream250 from "./routes/spinfinity-ultra.js";
import stream251 from "./routes/spiral-into-the-volcano.js";
import stream252 from "./routes/spiral-summit.js";
import stream253 from "./routes/spirit-forest.js";
import stream254 from "./routes/splash-and-dash.js";
import stream255 from "./routes/sprinters-playground.js";
import stream256 from "./routes/stay-puft-pursuit.js";
import stream257 from "./routes/sugar-cookie.js";
import stream258 from "./routes/sukis-playground.js";
import stream259 from "./routes/surrey-hills.js";
import stream260 from "./routes/tair-dringfa-fechan.js";
import stream261 from "./routes/temple-trek.js";
import stream262 from "./routes/temple-trek-run.js";
import stream263 from "./routes/temples-and-towers.js";
import stream264 from "./routes/tempus-fugit.js";
import stream265 from "./routes/thats-amore.js";
import stream266 from "./routes/the-6-train.js";
import stream267 from "./routes/the-6-train-rev.js";
import stream268 from "./routes/the-big-ring.js";
import stream269 from "./routes/the-classic.js";
import stream270 from "./routes/the-classic-run.js";
import stream271 from "./routes/the-double-borough.js";
import stream272 from "./routes/the-epiloch.js";
import stream273 from "./routes/the-fan-flats.js";
import stream274 from "./routes/the-greenway.js";
import stream275 from "./routes/the-highline.js";
import stream276 from "./routes/the-highline-rev.js";
import stream277 from "./routes/the-london-pretzel.js";
import stream278 from "./routes/the-magnificent-8.js";
import stream279 from "./routes/the-mega-pretzel.js";
import stream280 from "./routes/the-muckle-yin.js";
import stream281 from "./routes/the-pretzel.js";
import stream282 from "./routes/the-prl-half.js";
import stream283 from "./routes/the-uber-pretzel.js";
import stream284 from "./routes/three-little-sisters.js";
import stream285 from "./routes/three-musketeers.js";
import stream286 from "./routes/three-sisters.js";
import stream287 from "./routes/three-sisters-rev.js";
import stream288 from "./routes/three-step-sisters.js";
import stream289 from "./routes/three-village-loop.js";
import stream290 from "./routes/tick-tock.js";
import stream291 from "./routes/tides-and-temples.js";
import stream292 from "./routes/time-trial.js";
import stream293 from "./routes/times-square-circuit.js";
import stream294 from "./routes/times-square-circuit-run.js";
import stream295 from "./routes/tire-bouchon.js";
import stream296 from "./routes/titans-run.js";
import stream297 from "./routes/toefield-tornado.js";
import stream298 from "./routes/toefield-tornado-run.js";
import stream299 from "./routes/tour-of-fire-and-ice.js";
import stream300 from "./routes/tour-of-tewit-well.js";
import stream301 from "./routes/triple-flat-loops.js";
import stream302 from "./routes/triple-twist.js";
import stream303 from "./routes/tropic-rush.js";
import stream304 from "./routes/turf-n-surf.js";
import stream305 from "./routes/twilight-crit.js";
import stream306 from "./routes/twilight-harbor.js";
import stream307 from "./routes/two-bridges-loop.js";
import stream308 from "./routes/two-bridges-loop-run.js";
import stream309 from "./routes/two-village-loop.js";
import stream310 from "./routes/urumaze.js";
import stream311 from "./routes/valley-to-mountaintop.js";
import stream312 from "./routes/ven-10.js";
import stream313 from "./routes/ven-10-run.js";
import stream314 from "./routes/ven-top.js";
import stream315 from "./routes/volcano-circuit.js";
import stream316 from "./routes/volcano-circuit-ccw.js";
import stream317 from "./routes/volcano-circuit-ccw-run.js";
import stream318 from "./routes/volcano-circuit-run.js";
import stream319 from "./routes/volcano-climb.js";
import stream320 from "./routes/volcano-climb-after-party.js";
import stream321 from "./routes/volcano-flat.js";
import stream322 from "./routes/volcano-flat-rev.js";
import stream323 from "./routes/volcano-flat-run.js";
import stream324 from "./routes/waisted-8.js";
import stream325 from "./routes/wandering-flats.js";
import stream326 from "./routes/watopias-waistband.js";
import stream327 from "./routes/watts-of-the-wild.js";
import stream328 from "./routes/watts-the-limit.js";
import stream329 from "./routes/wbr-climbing-series.js";
import stream330 from "./routes/what-yumezi-were-lost.js";
import stream331 from "./routes/whole-lotta-lava.js";
import stream332 from "./routes/whole-lotta-lava-run.js";
import stream333 from "./routes/yorkshire-double-loop.js";
import stream334 from "./routes/yumezi-grit.js";
import stream335 from "./routes/zg25-climb-champs.js";
import stream336 from "./routes/zg25-queen.js";
import stream337 from "./routes/zwift-games-2024-epic.js";
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
  "canopies-and-coastlines": stream25,
  "casse-pattes": stream26,
  "castle-crit": stream27,
  "castle-crit-run": stream28,
  "castle-to-castle": stream29,
  "chain-chomper": stream30,
  "champs-elysees": stream31,
  "champs-elysees-run": stream32,
  "chasing-the-sun": stream33,
  "chili-pepper": stream34,
  "cirque-du-suffer": stream35,
  "city-and-the-sgurr": stream36,
  "classique-rev": stream37,
  "climb-control": stream38,
  "climbers-gambit": stream39,
  "coast-crusher": stream40,
  "coast-to-coast": stream41,
  "coastal-crown-loop": stream42,
  "cobbled-climbs": stream43,
  "cobbled-climbs-rev": stream44,
  "cobbled-climbs-run": stream45,
  "cobbled-crown": stream46,
  "couch-to-sky-k": stream47,
  "country-to-coastal": stream48,
  "countryside-tour": stream49,
  "crepe-escape": stream50,
  croissant: stream51,
  "danger-noodle": stream52,
  "deca-dash": stream53,
  "double-espresso": stream54,
  "double-parked": stream55,
  "double-span-spin": stream56,
  "douce-france": stream57,
  "downtown-dolphin": stream58,
  "downtown-eruoption": stream59,
  "downtown-titans": stream60,
  "duchy-estate": stream61,
  "dun-dash": stream62,
  "dust-in-the-wind": stream63,
  "eastern-eight": stream64,
  "electric-break": stream65,
  "electric-loop": stream66,
  "elevation-evaluation": stream67,
  "empire-elevation": stream68,
  "epic-run": stream69,
  "everything-bagel": stream70,
  "farmland-loop": stream71,
  "figure-8": stream72,
  "figure-8-reverse": stream73,
  "fine-and-sandy": stream74,
  "flat-irons": stream75,
  "flat-out-fast": stream76,
  "flat-route": stream77,
  "flat-route-rev": stream78,
  "flat-route-run": stream79,
  "flatland-loop": stream80,
  "four-horsemen": stream81,
  "france-classic-fondo": stream82,
  fuhgeddaboudit: stream83,
  "gentil-8": stream84,
  "glasgow-crit-circuit": stream85,
  "glasgow-crit-circuit-run": stream86,
  "glasgow-crit-six": stream87,
  "glasgow-reverse": stream88,
  "glyph-heights": stream89,
  "going-coastal": stream90,
  "going-coastal-run": stream91,
  "gotham-grind": stream92,
  "gotham-grind-rev": stream93,
  "gran-fondo": stream94,
  "grand-central-circuit": stream95,
  "grand-central-circuit-rev": stream96,
  "greater-london-8": stream97,
  "greater-london-flat": stream98,
  "greater-london-loop": stream99,
  "greater-london-loop-rev": stream100,
  "greatest-london-flat": stream101,
  "greatest-london-loop": stream102,
  "greatest-london-loop-rev": stream103,
  "green-to-screen": stream104,
  "handful-of-gravel": stream105,
  "harrogate-circuit": stream106,
  "harrogate-circuit-rev": stream107,
  "heart-of-montmartre": stream108,
  "hell-of-the-north": stream109,
  "hilltop-hustle-run": stream110,
  "hilly-route": stream111,
  "hilly-route-rev": stream112,
  "hilly-route-rev-run": stream113,
  "hot-laps": stream114,
  "hudson-hustle": stream115,
  "innsbruck-kom-after-party": stream116,
  innsbruckring: stream117,
  "island-hopper": stream118,
  "island-outskirts": stream119,
  "issendorf-express": stream120,
  "italian-villas-circuit": stream121,
  "itza-climb-finish": stream122,
  "itza-party": stream123,
  "jarvis-seaside-sprint": stream124,
  "jons-route": stream125,
  "jungle-circuit": stream126,
  "jungle-circuit-rev": stream127,
  "jungle-circuit-reverse-run": stream128,
  "jungle-circuit-run": stream129,
  "jurassic-coast": stream130,
  "kappa-quest": stream131,
  "kappa-quest-reverse": stream132,
  "kaze-kicker": stream133,
  "keith-hill-after-party": stream134,
  knickerbocker: stream135,
  "knickerbocker-reverse": stream136,
  "knights-of-the-roundabout": stream137,
  "la-boucle": stream138,
  "la-reine": stream139,
  "lady-liberty": stream140,
  "laguardia-after-party": stream141,
  "laguardia-loop": stream142,
  "laguardia-loop-reverse": stream143,
  "legends-and-lava": stream144,
  "leith-hill-after-party": stream145,
  "libby-hill-after-party": stream146,
  "loch-loop": stream147,
  "loch-loop-run": stream148,
  "london-8": stream149,
  "london-8-rev": stream150,
  "london-calling": stream151,
  "london-classique": stream152,
  "london-flat": stream153,
  "london-loop": stream154,
  "london-loop-rev": stream155,
  "london-the-prl-full": stream156,
  "london-triple-loops": stream157,
  "london-uprising": stream158,
  "loop-de-loop": stream159,
  "loop-de-loop-de-loop": stream160,
  "loop-de-loop-run": stream161,
  "loopin-lava": stream162,
  "lutece-express": stream163,
  "lutece-express-run": stream164,
  lutscher: stream165,
  "lutscher-ccw": stream166,
  macaron: stream167,
  "makuri-40": stream168,
  "makuri-madness": stream169,
  "makuri-pretzel": stream170,
  "may-field": stream171,
  "mayan-8": stream172,
  "mayan-bridge-loop": stream173,
  "mayan-mash": stream174,
  "mayan-san-remo": stream175,
  "mech-isle-loop": stream176,
  "mech-isle-loop-run": stream177,
  "mech-isle-mayhem": stream178,
  "medio-fondo": stream179,
  "mighty-metropolitan": stream180,
  "montmartre-mixer": stream181,
  "mountain-8": stream182,
  "mountain-mash": stream183,
  "mountain-mash-run": stream184,
  "mountain-route": stream185,
  "muir-and-the-mountain": stream186,
  navig8: stream187,
  "neokyo-all-nighter": stream188,
  "neokyo-crit-course": stream189,
  "neon-after-party": stream190,
  "neon-flats": stream191,
  "neon-shore-loop": stream192,
  "new-york-kom-after-party": stream193,
  "no-sleep-till-brooklyn": stream194,
  "ocean-blvd": stream195,
  "ocean-lava-cliffside-loop": stream196,
  "oh-hill-no": stream197,
  "oh-hill-no-run": stream198,
  "out-and-back-again": stream199,
  "outer-scotland": stream200,
  "paris-pacer": stream201,
  "paris-toujours": stream202,
  "park-perimeter-loop": stream203,
  "park-perimeter-rev": stream204,
  "park-to-peak": stream205,
  "peak-performance": stream206,
  "peaky-pave": stream207,
  "petit-boucle": stream208,
  "petite-douleur": stream209,
  "power-punches": stream210,
  "power-to-the-tower": stream211,
  "prospect-park-loop": stream212,
  "prospect-park-loop-run": stream213,
  "quatch-quest": stream214,
  "queens-highway": stream215,
  "queens-highway-after-party": stream216,
  "queens-highway-run": stream217,
  "radio-rendezvous": stream218,
  "railways-and-rooftops": stream219,
  "red-zone-repeats": stream220,
  "repack-rush": stream221,
  rgv: stream222,
  "richmond-loop-around": stream223,
  "richmond-rollercoaster": stream224,
  "richmond-uci-rev": stream225,
  "rising-empire": stream226,
  "road-to-ruins": stream227,
  "road-to-ruins-rev": stream228,
  "road-to-sky": stream229,
  "road-to-sky-run": stream230,
  "rolling-highlands": stream231,
  "rooftop-rendezvous": stream232,
  "roule-ma-poule": stream233,
  "royal-pump-room-8": stream234,
  "rues-in-rythme": stream235,
  "sacre-bleu": stream236,
  "sand-and-sequoias": stream237,
  "scotland-after-party": stream238,
  "scotland-smash": stream239,
  "sea-to-tree": stream240,
  "seaside-sprint": stream241,
  "seaside-sprint-run": stream242,
  "serpentine-8": stream243,
  "shisa-shakedown": stream244,
  "shorelines-and-summits": stream245,
  "sleepless-city": stream246,
  snowman: stream247,
  "southern-coast-cruise": stream248,
  spinfinity: stream249,
  "spinfinity-ultra": stream250,
  "spiral-into-the-volcano": stream251,
  "spiral-summit": stream252,
  "spirit-forest": stream253,
  "splash-and-dash": stream254,
  "sprinters-playground": stream255,
  "stay-puft-pursuit": stream256,
  "sugar-cookie": stream257,
  "sukis-playground": stream258,
  "surrey-hills": stream259,
  "tair-dringfa-fechan": stream260,
  "temple-trek": stream261,
  "temple-trek-run": stream262,
  "temples-and-towers": stream263,
  "tempus-fugit": stream264,
  "thats-amore": stream265,
  "the-6-train": stream266,
  "the-6-train-rev": stream267,
  "the-big-ring": stream268,
  "the-classic": stream269,
  "the-classic-run": stream270,
  "the-double-borough": stream271,
  "the-epiloch": stream272,
  "the-fan-flats": stream273,
  "the-greenway": stream274,
  "the-highline": stream275,
  "the-highline-rev": stream276,
  "the-london-pretzel": stream277,
  "the-magnificent-8": stream278,
  "the-mega-pretzel": stream279,
  "the-muckle-yin": stream280,
  "the-pretzel": stream281,
  "the-prl-half": stream282,
  "the-uber-pretzel": stream283,
  "three-little-sisters": stream284,
  "three-musketeers": stream285,
  "three-sisters": stream286,
  "three-sisters-rev": stream287,
  "three-step-sisters": stream288,
  "three-village-loop": stream289,
  "tick-tock": stream290,
  "tides-and-temples": stream291,
  "time-trial": stream292,
  "times-square-circuit": stream293,
  "times-square-circuit-run": stream294,
  "tire-bouchon": stream295,
  "titans-run": stream296,
  "toefield-tornado": stream297,
  "toefield-tornado-run": stream298,
  "tour-of-fire-and-ice": stream299,
  "tour-of-tewit-well": stream300,
  "triple-flat-loops": stream301,
  "triple-twist": stream302,
  "tropic-rush": stream303,
  "turf-n-surf": stream304,
  "twilight-crit": stream305,
  "twilight-harbor": stream306,
  "two-bridges-loop": stream307,
  "two-bridges-loop-run": stream308,
  "two-village-loop": stream309,
  urumaze: stream310,
  "valley-to-mountaintop": stream311,
  "ven-10": stream312,
  "ven-10-run": stream313,
  "ven-top": stream314,
  "volcano-circuit": stream315,
  "volcano-circuit-ccw": stream316,
  "volcano-circuit-ccw-run": stream317,
  "volcano-circuit-run": stream318,
  "volcano-climb": stream319,
  "volcano-climb-after-party": stream320,
  "volcano-flat": stream321,
  "volcano-flat-rev": stream322,
  "volcano-flat-run": stream323,
  "waisted-8": stream324,
  "wandering-flats": stream325,
  "watopias-waistband": stream326,
  "watts-of-the-wild": stream327,
  "watts-the-limit": stream328,
  "wbr-climbing-series": stream329,
  "what-yumezi-were-lost": stream330,
  "whole-lotta-lava": stream331,
  "whole-lotta-lava-run": stream332,
  "yorkshire-double-loop": stream333,
  "yumezi-grit": stream334,
  "zg25-climb-champs": stream335,
  "zg25-queen": stream336,
  "zwift-games-2024-epic": stream337,
};
