import type { StreamData } from "./types.js";
import { distance as routes0 } from "./routes/2015-uci-worlds-course.js";
import { distance as routes1 } from "./routes/2018-uci-worlds-course-short-lap.js";
import { distance as routes2 } from "./routes/2022-bambino-fondo.js";
import { distance as routes3 } from "./routes/2022-cycling-esports-world-championships-route.js";
import { distance as routes4 } from "./routes/2022-gran-fondo.js";
import { distance as routes5 } from "./routes/2022-medio-fondo.js";
import { distance as routes6 } from "./routes/2023-continental-qualifiers.js";
import { distance as routes7 } from "./routes/5k-loop.js";
import { distance as routes8 } from "./routes/accelerate-to-elevate.js";
import { distance as routes9 } from "./routes/achterbahn.js";
import { distance as routes10 } from "./routes/astoria-line-8.js";
import { distance as routes11 } from "./routes/avon-flyer.js";
import { distance as routes12 } from "./routes/avon-flyer-run.js";
import { distance as routes13 } from "./routes/bambino-fondo.js";
import { distance as routes14 } from "./routes/beach-island-loop.js";
import { distance as routes15 } from "./routes/beach-island-loop-run.js";
import { distance as routes16 } from "./routes/bell-lap.js";
import { distance as routes17 } from "./routes/big-flat-8.js";
import { distance as routes18 } from "./routes/big-foot-hills.js";
import { distance as routes19 } from "./routes/big-loop.js";
import { distance as routes20 } from "./routes/big-loop-rev.js";
import { distance as routes21 } from "./routes/bigger-loop.js";
import { distance as routes22 } from "./routes/bon-voyage.js";
import { distance as routes23 } from "./routes/braek-fast-crits-and-grits.js";
import { distance as routes24 } from "./routes/bridges-and-boardwalks.js";
import { distance as routes25 } from "./routes/caldera-coaster.js";
import { distance as routes26 } from "./routes/california-dreamin.js";
import { distance as routes27 } from "./routes/california-roll.js";
import { distance as routes28 } from "./routes/canopies-and-coastlines.js";
import { distance as routes29 } from "./routes/casse-pattes.js";
import { distance as routes30 } from "./routes/castle-crit.js";
import { distance as routes31 } from "./routes/castle-crit-run.js";
import { distance as routes32 } from "./routes/castle-to-castle.js";
import { distance as routes33 } from "./routes/chain-chomper.js";
import { distance as routes34 } from "./routes/champs-elysees.js";
import { distance as routes35 } from "./routes/champs-elysees-run.js";
import { distance as routes36 } from "./routes/chasing-the-sun.js";
import { distance as routes37 } from "./routes/chili-pepper.js";
import { distance as routes38 } from "./routes/cirque-du-suffer.js";
import { distance as routes39 } from "./routes/city-and-the-sgurr.js";
import { distance as routes40 } from "./routes/classique-rev.js";
import { distance as routes41 } from "./routes/climb-control.js";
import { distance as routes42 } from "./routes/climbers-gambit.js";
import { distance as routes43 } from "./routes/coast-crusher.js";
import { distance as routes44 } from "./routes/coast-to-coast.js";
import { distance as routes45 } from "./routes/coastal-crown-loop.js";
import { distance as routes46 } from "./routes/cobbled-climbs.js";
import { distance as routes47 } from "./routes/cobbled-climbs-rev.js";
import { distance as routes48 } from "./routes/cobbled-climbs-run.js";
import { distance as routes49 } from "./routes/cobbled-crown.js";
import { distance as routes50 } from "./routes/couch-to-sky-k.js";
import { distance as routes51 } from "./routes/country-to-coastal.js";
import { distance as routes52 } from "./routes/countryside-tour.js";
import { distance as routes53 } from "./routes/crepe-escape.js";
import { distance as routes54 } from "./routes/croissant.js";
import { distance as routes55 } from "./routes/danger-noodle.js";
import { distance as routes56 } from "./routes/deca-dash.js";
import { distance as routes57 } from "./routes/double-espresso.js";
import { distance as routes58 } from "./routes/double-parked.js";
import { distance as routes59 } from "./routes/double-span-spin.js";
import { distance as routes60 } from "./routes/douce-france.js";
import { distance as routes61 } from "./routes/downtown-dolphin.js";
import { distance as routes62 } from "./routes/downtown-eruoption.js";
import { distance as routes63 } from "./routes/downtown-titans.js";
import { distance as routes64 } from "./routes/duchy-estate.js";
import { distance as routes65 } from "./routes/dun-dash.js";
import { distance as routes66 } from "./routes/dust-in-the-wind.js";
import { distance as routes67 } from "./routes/eastern-eight.js";
import { distance as routes68 } from "./routes/electric-break.js";
import { distance as routes69 } from "./routes/electric-loop.js";
import { distance as routes70 } from "./routes/elevation-evaluation.js";
import { distance as routes71 } from "./routes/empire-elevation.js";
import { distance as routes72 } from "./routes/epic-run.js";
import { distance as routes73 } from "./routes/everything-bagel.js";
import { distance as routes74 } from "./routes/farmland-loop.js";
import { distance as routes75 } from "./routes/figure-8.js";
import { distance as routes76 } from "./routes/figure-8-reverse.js";
import { distance as routes77 } from "./routes/fine-and-sandy.js";
import { distance as routes78 } from "./routes/flat-irons.js";
import { distance as routes79 } from "./routes/flat-out-fast.js";
import { distance as routes80 } from "./routes/flat-route.js";
import { distance as routes81 } from "./routes/flat-route-rev.js";
import { distance as routes82 } from "./routes/flat-route-run.js";
import { distance as routes83 } from "./routes/flatland-loop.js";
import { distance as routes84 } from "./routes/four-foalsmen.js";
import { distance as routes85 } from "./routes/four-horsemen.js";
import { distance as routes86 } from "./routes/france-classic-fondo.js";
import { distance as routes87 } from "./routes/fuhgeddaboudit.js";
import { distance as routes88 } from "./routes/gentil-8.js";
import { distance as routes89 } from "./routes/glasgow-crit-circuit.js";
import { distance as routes90 } from "./routes/glasgow-crit-circuit-run.js";
import { distance as routes91 } from "./routes/glasgow-crit-six.js";
import { distance as routes92 } from "./routes/glasgow-reverse.js";
import { distance as routes93 } from "./routes/glyph-heights.js";
import { distance as routes94 } from "./routes/going-coastal.js";
import { distance as routes95 } from "./routes/going-coastal-run.js";
import { distance as routes96 } from "./routes/gotham-grind.js";
import { distance as routes97 } from "./routes/gotham-grind-rev.js";
import { distance as routes98 } from "./routes/gran-fondo.js";
import { distance as routes99 } from "./routes/grand-central-circuit.js";
import { distance as routes100 } from "./routes/grand-central-circuit-rev.js";
import { distance as routes101 } from "./routes/greater-london-8.js";
import { distance as routes102 } from "./routes/greater-london-flat.js";
import { distance as routes103 } from "./routes/greater-london-loop.js";
import { distance as routes104 } from "./routes/greater-london-loop-rev.js";
import { distance as routes105 } from "./routes/greatest-london-flat.js";
import { distance as routes106 } from "./routes/greatest-london-loop.js";
import { distance as routes107 } from "./routes/greatest-london-loop-rev.js";
import { distance as routes108 } from "./routes/green-to-screen.js";
import { distance as routes109 } from "./routes/handful-of-gravel.js";
import { distance as routes110 } from "./routes/harrogate-circuit.js";
import { distance as routes111 } from "./routes/harrogate-circuit-rev.js";
import { distance as routes112 } from "./routes/heart-of-montmartre.js";
import { distance as routes113 } from "./routes/hell-of-the-north.js";
import { distance as routes114 } from "./routes/hilltop-hustle-run.js";
import { distance as routes115 } from "./routes/hilly-route.js";
import { distance as routes116 } from "./routes/hilly-route-rev.js";
import { distance as routes117 } from "./routes/hilly-route-rev-run.js";
import { distance as routes118 } from "./routes/hot-laps.js";
import { distance as routes119 } from "./routes/hudson-hustle.js";
import { distance as routes120 } from "./routes/innsbruck-kom-after-party.js";
import { distance as routes121 } from "./routes/innsbruckring.js";
import { distance as routes122 } from "./routes/island-hopper.js";
import { distance as routes123 } from "./routes/island-outskirts.js";
import { distance as routes124 } from "./routes/issendorf-express.js";
import { distance as routes125 } from "./routes/italian-villas-circuit.js";
import { distance as routes126 } from "./routes/itza-climb-finish.js";
import { distance as routes127 } from "./routes/itza-party.js";
import { distance as routes128 } from "./routes/jarvis-seaside-sprint.js";
import { distance as routes129 } from "./routes/jons-route.js";
import { distance as routes130 } from "./routes/jungle-circuit.js";
import { distance as routes131 } from "./routes/jungle-circuit-rev.js";
import { distance as routes132 } from "./routes/jungle-circuit-reverse-run.js";
import { distance as routes133 } from "./routes/jungle-circuit-run.js";
import { distance as routes134 } from "./routes/jurassic-coast.js";
import { distance as routes135 } from "./routes/kappa-quest.js";
import { distance as routes136 } from "./routes/kappa-quest-reverse.js";
import { distance as routes137 } from "./routes/kaze-kicker.js";
import { distance as routes138 } from "./routes/keith-hill-after-party.js";
import { distance as routes139 } from "./routes/knickerbocker.js";
import { distance as routes140 } from "./routes/knickerbocker-reverse.js";
import { distance as routes141 } from "./routes/knights-of-the-roundabout.js";
import { distance as routes142 } from "./routes/la-boucle.js";
import { distance as routes143 } from "./routes/la-reine.js";
import { distance as routes144 } from "./routes/lady-liberty.js";
import { distance as routes145 } from "./routes/laguardia-after-party.js";
import { distance as routes146 } from "./routes/laguardia-loop.js";
import { distance as routes147 } from "./routes/laguardia-loop-reverse.js";
import { distance as routes148 } from "./routes/laps-camera-traction.js";
import { distance as routes149 } from "./routes/lava-legs.js";
import { distance as routes150 } from "./routes/legends-and-lava.js";
import { distance as routes151 } from "./routes/leith-hill-after-party.js";
import { distance as routes152 } from "./routes/libby-hill-after-party.js";
import { distance as routes153 } from "./routes/loch-loop.js";
import { distance as routes154 } from "./routes/loch-loop-run.js";
import { distance as routes155 } from "./routes/london-8.js";
import { distance as routes156 } from "./routes/london-8-rev.js";
import { distance as routes157 } from "./routes/london-calling.js";
import { distance as routes158 } from "./routes/london-classique.js";
import { distance as routes159 } from "./routes/london-flat.js";
import { distance as routes160 } from "./routes/london-loop.js";
import { distance as routes161 } from "./routes/london-loop-rev.js";
import { distance as routes162 } from "./routes/london-the-prl-full.js";
import { distance as routes163 } from "./routes/london-triple-loops.js";
import { distance as routes164 } from "./routes/london-uprising.js";
import { distance as routes165 } from "./routes/loop-de-loop.js";
import { distance as routes166 } from "./routes/loop-de-loop-de-loop.js";
import { distance as routes167 } from "./routes/loop-de-loop-run.js";
import { distance as routes168 } from "./routes/loopin-lava.js";
import { distance as routes169 } from "./routes/lutece-express.js";
import { distance as routes170 } from "./routes/lutece-express-run.js";
import { distance as routes171 } from "./routes/lutscher.js";
import { distance as routes172 } from "./routes/lutscher-ccw.js";
import { distance as routes173 } from "./routes/macaron.js";
import { distance as routes174 } from "./routes/makuri-40.js";
import { distance as routes175 } from "./routes/makuri-madness.js";
import { distance as routes176 } from "./routes/makuri-pretzel.js";
import { distance as routes177 } from "./routes/may-field.js";
import { distance as routes178 } from "./routes/mayan-8.js";
import { distance as routes179 } from "./routes/mayan-bridge-loop.js";
import { distance as routes180 } from "./routes/mayan-mash.js";
import { distance as routes181 } from "./routes/mayan-san-remo.js";
import { distance as routes182 } from "./routes/mech-isle-loop.js";
import { distance as routes183 } from "./routes/mech-isle-loop-run.js";
import { distance as routes184 } from "./routes/mech-isle-mayhem.js";
import { distance as routes185 } from "./routes/medio-fondo.js";
import { distance as routes186 } from "./routes/mighty-metropolitan.js";
import { distance as routes187 } from "./routes/montmartre-mixer.js";
import { distance as routes188 } from "./routes/mountain-8.js";
import { distance as routes189 } from "./routes/mountain-mash.js";
import { distance as routes190 } from "./routes/mountain-mash-run.js";
import { distance as routes191 } from "./routes/mountain-route.js";
import { distance as routes192 } from "./routes/muir-and-the-mountain.js";
import { distance as routes193 } from "./routes/navig8.js";
import { distance as routes194 } from "./routes/neokyo-all-nighter.js";
import { distance as routes195 } from "./routes/neokyo-crit-course.js";
import { distance as routes196 } from "./routes/neon-after-party.js";
import { distance as routes197 } from "./routes/neon-flats.js";
import { distance as routes198 } from "./routes/neon-shore-loop.js";
import { distance as routes199 } from "./routes/new-york-kom-after-party.js";
import { distance as routes200 } from "./routes/no-sleep-till-brooklyn.js";
import { distance as routes201 } from "./routes/ocean-blvd.js";
import { distance as routes202 } from "./routes/ocean-lava-cliffside-loop.js";
import { distance as routes203 } from "./routes/oh-hill-no.js";
import { distance as routes204 } from "./routes/oh-hill-no-run.js";
import { distance as routes205 } from "./routes/out-and-back-again.js";
import { distance as routes206 } from "./routes/outer-scotland.js";
import { distance as routes207 } from "./routes/pacific-pursuit.js";
import { distance as routes208 } from "./routes/paris-pacer.js";
import { distance as routes209 } from "./routes/paris-toujours.js";
import { distance as routes210 } from "./routes/park-perimeter-loop.js";
import { distance as routes211 } from "./routes/park-perimeter-rev.js";
import { distance as routes212 } from "./routes/park-to-peak.js";
import { distance as routes213 } from "./routes/peak-performance.js";
import { distance as routes214 } from "./routes/peaky-pave.js";
import { distance as routes215 } from "./routes/petit-boucle.js";
import { distance as routes216 } from "./routes/petite-douleur.js";
import { distance as routes217 } from "./routes/power-punches.js";
import { distance as routes218 } from "./routes/power-to-the-tower.js";
import { distance as routes219 } from "./routes/prospect-park-loop.js";
import { distance as routes220 } from "./routes/prospect-park-loop-run.js";
import { distance as routes221 } from "./routes/quatch-quest.js";
import { distance as routes222 } from "./routes/queens-highway.js";
import { distance as routes223 } from "./routes/queens-highway-after-party.js";
import { distance as routes224 } from "./routes/queens-highway-run.js";
import { distance as routes225 } from "./routes/radio-rendezvous.js";
import { distance as routes226 } from "./routes/railways-and-rooftops.js";
import { distance as routes227 } from "./routes/red-zone-repeats.js";
import { distance as routes228 } from "./routes/repack-rush.js";
import { distance as routes229 } from "./routes/rgv.js";
import { distance as routes230 } from "./routes/richmond-loop-around.js";
import { distance as routes231 } from "./routes/richmond-rollercoaster.js";
import { distance as routes232 } from "./routes/richmond-uci-rev.js";
import { distance as routes233 } from "./routes/rising-empire.js";
import { distance as routes234 } from "./routes/road-to-ruins.js";
import { distance as routes235 } from "./routes/road-to-ruins-rev.js";
import { distance as routes236 } from "./routes/road-to-sky.js";
import { distance as routes237 } from "./routes/road-to-sky-run.js";
import { distance as routes238 } from "./routes/rolling-highlands.js";
import { distance as routes239 } from "./routes/rooftop-rendezvous.js";
import { distance as routes240 } from "./routes/roule-ma-poule.js";
import { distance as routes241 } from "./routes/royal-pump-room-8.js";
import { distance as routes242 } from "./routes/rues-in-rythme.js";
import { distance as routes243 } from "./routes/sacre-bleu.js";
import { distance as routes244 } from "./routes/sand-and-sequoias.js";
import { distance as routes245 } from "./routes/scotland-after-party.js";
import { distance as routes246 } from "./routes/scotland-smash.js";
import { distance as routes247 } from "./routes/sea-to-tree.js";
import { distance as routes248 } from "./routes/seafoam-circuit.js";
import { distance as routes249 } from "./routes/seafoam-scamper.js";
import { distance as routes250 } from "./routes/seaside-sprint.js";
import { distance as routes251 } from "./routes/seaside-sprint-run.js";
import { distance as routes252 } from "./routes/serpentine-8.js";
import { distance as routes253 } from "./routes/shisa-shakedown.js";
import { distance as routes254 } from "./routes/shorelines-and-summits.js";
import { distance as routes255 } from "./routes/sleepless-city.js";
import { distance as routes256 } from "./routes/snowman.js";
import { distance as routes257 } from "./routes/southern-coast-cruise.js";
import { distance as routes258 } from "./routes/spinfinity.js";
import { distance as routes259 } from "./routes/spinfinity-ultra.js";
import { distance as routes260 } from "./routes/spiral-into-the-volcano.js";
import { distance as routes261 } from "./routes/spiral-summit.js";
import { distance as routes262 } from "./routes/spirit-forest.js";
import { distance as routes263 } from "./routes/splash-and-dash.js";
import { distance as routes264 } from "./routes/sprinters-playground.js";
import { distance as routes265 } from "./routes/stay-puft-pursuit.js";
import { distance as routes266 } from "./routes/sugar-cookie.js";
import { distance as routes267 } from "./routes/sukis-playground.js";
import { distance as routes268 } from "./routes/surrey-hills.js";
import { distance as routes269 } from "./routes/tair-dringfa-fechan.js";
import { distance as routes270 } from "./routes/temple-trek.js";
import { distance as routes271 } from "./routes/temple-trek-run.js";
import { distance as routes272 } from "./routes/temples-and-towers.js";
import { distance as routes273 } from "./routes/tempus-fugit.js";
import { distance as routes274 } from "./routes/thats-amore.js";
import { distance as routes275 } from "./routes/the-6-train.js";
import { distance as routes276 } from "./routes/the-6-train-rev.js";
import { distance as routes277 } from "./routes/the-big-ring.js";
import { distance as routes278 } from "./routes/the-classic.js";
import { distance as routes279 } from "./routes/the-classic-run.js";
import { distance as routes280 } from "./routes/the-double-borough.js";
import { distance as routes281 } from "./routes/the-epiloch.js";
import { distance as routes282 } from "./routes/the-fan-flats.js";
import { distance as routes283 } from "./routes/the-greenway.js";
import { distance as routes284 } from "./routes/the-highline.js";
import { distance as routes285 } from "./routes/the-highline-rev.js";
import { distance as routes286 } from "./routes/the-london-pretzel.js";
import { distance as routes287 } from "./routes/the-magnificent-8.js";
import { distance as routes288 } from "./routes/the-mega-pretzel.js";
import { distance as routes289 } from "./routes/the-muckle-yin.js";
import { distance as routes290 } from "./routes/the-pretzel.js";
import { distance as routes291 } from "./routes/the-prl-half.js";
import { distance as routes292 } from "./routes/the-uber-pretzel.js";
import { distance as routes293 } from "./routes/the-watopia-150.js";
import { distance as routes294 } from "./routes/three-little-sisters.js";
import { distance as routes295 } from "./routes/three-musketeers.js";
import { distance as routes296 } from "./routes/three-sisters.js";
import { distance as routes297 } from "./routes/three-sisters-rev.js";
import { distance as routes298 } from "./routes/three-step-sisters.js";
import { distance as routes299 } from "./routes/three-village-loop.js";
import { distance as routes300 } from "./routes/tick-tock.js";
import { distance as routes301 } from "./routes/tides-and-temples.js";
import { distance as routes302 } from "./routes/time-trial.js";
import { distance as routes303 } from "./routes/times-square-circuit.js";
import { distance as routes304 } from "./routes/times-square-circuit-run.js";
import { distance as routes305 } from "./routes/tire-bouchon.js";
import { distance as routes306 } from "./routes/titans-run.js";
import { distance as routes307 } from "./routes/toefield-tornado.js";
import { distance as routes308 } from "./routes/toefield-tornado-run.js";
import { distance as routes309 } from "./routes/tour-of-fire-and-ice.js";
import { distance as routes310 } from "./routes/tour-of-tewit-well.js";
import { distance as routes311 } from "./routes/triple-flat-loops.js";
import { distance as routes312 } from "./routes/triple-twist.js";
import { distance as routes313 } from "./routes/tropic-rush.js";
import { distance as routes314 } from "./routes/turf-n-surf.js";
import { distance as routes315 } from "./routes/twilight-crit.js";
import { distance as routes316 } from "./routes/twilight-harbor.js";
import { distance as routes317 } from "./routes/two-bridges-loop.js";
import { distance as routes318 } from "./routes/two-bridges-loop-run.js";
import { distance as routes319 } from "./routes/two-village-loop.js";
import { distance as routes320 } from "./routes/urumaze.js";
import { distance as routes321 } from "./routes/valley-to-mountaintop.js";
import { distance as routes322 } from "./routes/ven-10.js";
import { distance as routes323 } from "./routes/ven-10-run.js";
import { distance as routes324 } from "./routes/ven-top.js";
import { distance as routes325 } from "./routes/volcano-circuit.js";
import { distance as routes326 } from "./routes/volcano-circuit-ccw.js";
import { distance as routes327 } from "./routes/volcano-circuit-ccw-run.js";
import { distance as routes328 } from "./routes/volcano-circuit-run.js";
import { distance as routes329 } from "./routes/volcano-climb.js";
import { distance as routes330 } from "./routes/volcano-climb-after-party.js";
import { distance as routes331 } from "./routes/volcano-flat.js";
import { distance as routes332 } from "./routes/volcano-flat-rev.js";
import { distance as routes333 } from "./routes/volcano-flat-run.js";
import { distance as routes334 } from "./routes/waisted-8.js";
import { distance as routes335 } from "./routes/wandering-flats.js";
import { distance as routes336 } from "./routes/watopias-waistband.js";
import { distance as routes337 } from "./routes/watt-goes-up-must-come-down.js";
import { distance as routes338 } from "./routes/watts-of-the-wild.js";
import { distance as routes339 } from "./routes/watts-the-limit.js";
import { distance as routes340 } from "./routes/wbr-climbing-series.js";
import { distance as routes341 } from "./routes/what-yumezi-were-lost.js";
import { distance as routes342 } from "./routes/whole-lotta-lava.js";
import { distance as routes343 } from "./routes/whole-lotta-lava-run.js";
import { distance as routes344 } from "./routes/yorkshire-double-loop.js";
import { distance as routes345 } from "./routes/yumezi-grit.js";
import { distance as routes346 } from "./routes/zg25-climb-champs.js";
import { distance as routes347 } from "./routes/zg25-queen.js";
import { distance as routes348 } from "./routes/zwift-games-2024-epic.js";
export const routes: Readonly<
  Record<string, StreamData["distance"] | undefined>
> = {
  "2015-uci-worlds-course": routes0,
  "2018-uci-worlds-course-short-lap": routes1,
  "2022-bambino-fondo": routes2,
  "2022-cycling-esports-world-championships-route": routes3,
  "2022-gran-fondo": routes4,
  "2022-medio-fondo": routes5,
  "2023-continental-qualifiers": routes6,
  "5k-loop": routes7,
  "accelerate-to-elevate": routes8,
  achterbahn: routes9,
  "astoria-line-8": routes10,
  "avon-flyer": routes11,
  "avon-flyer-run": routes12,
  "bambino-fondo": routes13,
  "beach-island-loop": routes14,
  "beach-island-loop-run": routes15,
  "bell-lap": routes16,
  "big-flat-8": routes17,
  "big-foot-hills": routes18,
  "big-loop": routes19,
  "big-loop-rev": routes20,
  "bigger-loop": routes21,
  "bon-voyage": routes22,
  "braek-fast-crits-and-grits": routes23,
  "bridges-and-boardwalks": routes24,
  "caldera-coaster": routes25,
  "california-dreamin": routes26,
  "california-roll": routes27,
  "canopies-and-coastlines": routes28,
  "casse-pattes": routes29,
  "castle-crit": routes30,
  "castle-crit-run": routes31,
  "castle-to-castle": routes32,
  "chain-chomper": routes33,
  "champs-elysees": routes34,
  "champs-elysees-run": routes35,
  "chasing-the-sun": routes36,
  "chili-pepper": routes37,
  "cirque-du-suffer": routes38,
  "city-and-the-sgurr": routes39,
  "classique-rev": routes40,
  "climb-control": routes41,
  "climbers-gambit": routes42,
  "coast-crusher": routes43,
  "coast-to-coast": routes44,
  "coastal-crown-loop": routes45,
  "cobbled-climbs": routes46,
  "cobbled-climbs-rev": routes47,
  "cobbled-climbs-run": routes48,
  "cobbled-crown": routes49,
  "couch-to-sky-k": routes50,
  "country-to-coastal": routes51,
  "countryside-tour": routes52,
  "crepe-escape": routes53,
  croissant: routes54,
  "danger-noodle": routes55,
  "deca-dash": routes56,
  "double-espresso": routes57,
  "double-parked": routes58,
  "double-span-spin": routes59,
  "douce-france": routes60,
  "downtown-dolphin": routes61,
  "downtown-eruoption": routes62,
  "downtown-titans": routes63,
  "duchy-estate": routes64,
  "dun-dash": routes65,
  "dust-in-the-wind": routes66,
  "eastern-eight": routes67,
  "electric-break": routes68,
  "electric-loop": routes69,
  "elevation-evaluation": routes70,
  "empire-elevation": routes71,
  "epic-run": routes72,
  "everything-bagel": routes73,
  "farmland-loop": routes74,
  "figure-8": routes75,
  "figure-8-reverse": routes76,
  "fine-and-sandy": routes77,
  "flat-irons": routes78,
  "flat-out-fast": routes79,
  "flat-route": routes80,
  "flat-route-rev": routes81,
  "flat-route-run": routes82,
  "flatland-loop": routes83,
  "four-foalsmen": routes84,
  "four-horsemen": routes85,
  "france-classic-fondo": routes86,
  fuhgeddaboudit: routes87,
  "gentil-8": routes88,
  "glasgow-crit-circuit": routes89,
  "glasgow-crit-circuit-run": routes90,
  "glasgow-crit-six": routes91,
  "glasgow-reverse": routes92,
  "glyph-heights": routes93,
  "going-coastal": routes94,
  "going-coastal-run": routes95,
  "gotham-grind": routes96,
  "gotham-grind-rev": routes97,
  "gran-fondo": routes98,
  "grand-central-circuit": routes99,
  "grand-central-circuit-rev": routes100,
  "greater-london-8": routes101,
  "greater-london-flat": routes102,
  "greater-london-loop": routes103,
  "greater-london-loop-rev": routes104,
  "greatest-london-flat": routes105,
  "greatest-london-loop": routes106,
  "greatest-london-loop-rev": routes107,
  "green-to-screen": routes108,
  "handful-of-gravel": routes109,
  "harrogate-circuit": routes110,
  "harrogate-circuit-rev": routes111,
  "heart-of-montmartre": routes112,
  "hell-of-the-north": routes113,
  "hilltop-hustle-run": routes114,
  "hilly-route": routes115,
  "hilly-route-rev": routes116,
  "hilly-route-rev-run": routes117,
  "hot-laps": routes118,
  "hudson-hustle": routes119,
  "innsbruck-kom-after-party": routes120,
  innsbruckring: routes121,
  "island-hopper": routes122,
  "island-outskirts": routes123,
  "issendorf-express": routes124,
  "italian-villas-circuit": routes125,
  "itza-climb-finish": routes126,
  "itza-party": routes127,
  "jarvis-seaside-sprint": routes128,
  "jons-route": routes129,
  "jungle-circuit": routes130,
  "jungle-circuit-rev": routes131,
  "jungle-circuit-reverse-run": routes132,
  "jungle-circuit-run": routes133,
  "jurassic-coast": routes134,
  "kappa-quest": routes135,
  "kappa-quest-reverse": routes136,
  "kaze-kicker": routes137,
  "keith-hill-after-party": routes138,
  knickerbocker: routes139,
  "knickerbocker-reverse": routes140,
  "knights-of-the-roundabout": routes141,
  "la-boucle": routes142,
  "la-reine": routes143,
  "lady-liberty": routes144,
  "laguardia-after-party": routes145,
  "laguardia-loop": routes146,
  "laguardia-loop-reverse": routes147,
  "laps-camera-traction": routes148,
  "lava-legs": routes149,
  "legends-and-lava": routes150,
  "leith-hill-after-party": routes151,
  "libby-hill-after-party": routes152,
  "loch-loop": routes153,
  "loch-loop-run": routes154,
  "london-8": routes155,
  "london-8-rev": routes156,
  "london-calling": routes157,
  "london-classique": routes158,
  "london-flat": routes159,
  "london-loop": routes160,
  "london-loop-rev": routes161,
  "london-the-prl-full": routes162,
  "london-triple-loops": routes163,
  "london-uprising": routes164,
  "loop-de-loop": routes165,
  "loop-de-loop-de-loop": routes166,
  "loop-de-loop-run": routes167,
  "loopin-lava": routes168,
  "lutece-express": routes169,
  "lutece-express-run": routes170,
  lutscher: routes171,
  "lutscher-ccw": routes172,
  macaron: routes173,
  "makuri-40": routes174,
  "makuri-madness": routes175,
  "makuri-pretzel": routes176,
  "may-field": routes177,
  "mayan-8": routes178,
  "mayan-bridge-loop": routes179,
  "mayan-mash": routes180,
  "mayan-san-remo": routes181,
  "mech-isle-loop": routes182,
  "mech-isle-loop-run": routes183,
  "mech-isle-mayhem": routes184,
  "medio-fondo": routes185,
  "mighty-metropolitan": routes186,
  "montmartre-mixer": routes187,
  "mountain-8": routes188,
  "mountain-mash": routes189,
  "mountain-mash-run": routes190,
  "mountain-route": routes191,
  "muir-and-the-mountain": routes192,
  navig8: routes193,
  "neokyo-all-nighter": routes194,
  "neokyo-crit-course": routes195,
  "neon-after-party": routes196,
  "neon-flats": routes197,
  "neon-shore-loop": routes198,
  "new-york-kom-after-party": routes199,
  "no-sleep-till-brooklyn": routes200,
  "ocean-blvd": routes201,
  "ocean-lava-cliffside-loop": routes202,
  "oh-hill-no": routes203,
  "oh-hill-no-run": routes204,
  "out-and-back-again": routes205,
  "outer-scotland": routes206,
  "pacific-pursuit": routes207,
  "paris-pacer": routes208,
  "paris-toujours": routes209,
  "park-perimeter-loop": routes210,
  "park-perimeter-rev": routes211,
  "park-to-peak": routes212,
  "peak-performance": routes213,
  "peaky-pave": routes214,
  "petit-boucle": routes215,
  "petite-douleur": routes216,
  "power-punches": routes217,
  "power-to-the-tower": routes218,
  "prospect-park-loop": routes219,
  "prospect-park-loop-run": routes220,
  "quatch-quest": routes221,
  "queens-highway": routes222,
  "queens-highway-after-party": routes223,
  "queens-highway-run": routes224,
  "radio-rendezvous": routes225,
  "railways-and-rooftops": routes226,
  "red-zone-repeats": routes227,
  "repack-rush": routes228,
  rgv: routes229,
  "richmond-loop-around": routes230,
  "richmond-rollercoaster": routes231,
  "richmond-uci-rev": routes232,
  "rising-empire": routes233,
  "road-to-ruins": routes234,
  "road-to-ruins-rev": routes235,
  "road-to-sky": routes236,
  "road-to-sky-run": routes237,
  "rolling-highlands": routes238,
  "rooftop-rendezvous": routes239,
  "roule-ma-poule": routes240,
  "royal-pump-room-8": routes241,
  "rues-in-rythme": routes242,
  "sacre-bleu": routes243,
  "sand-and-sequoias": routes244,
  "scotland-after-party": routes245,
  "scotland-smash": routes246,
  "sea-to-tree": routes247,
  "seafoam-circuit": routes248,
  "seafoam-scamper": routes249,
  "seaside-sprint": routes250,
  "seaside-sprint-run": routes251,
  "serpentine-8": routes252,
  "shisa-shakedown": routes253,
  "shorelines-and-summits": routes254,
  "sleepless-city": routes255,
  snowman: routes256,
  "southern-coast-cruise": routes257,
  spinfinity: routes258,
  "spinfinity-ultra": routes259,
  "spiral-into-the-volcano": routes260,
  "spiral-summit": routes261,
  "spirit-forest": routes262,
  "splash-and-dash": routes263,
  "sprinters-playground": routes264,
  "stay-puft-pursuit": routes265,
  "sugar-cookie": routes266,
  "sukis-playground": routes267,
  "surrey-hills": routes268,
  "tair-dringfa-fechan": routes269,
  "temple-trek": routes270,
  "temple-trek-run": routes271,
  "temples-and-towers": routes272,
  "tempus-fugit": routes273,
  "thats-amore": routes274,
  "the-6-train": routes275,
  "the-6-train-rev": routes276,
  "the-big-ring": routes277,
  "the-classic": routes278,
  "the-classic-run": routes279,
  "the-double-borough": routes280,
  "the-epiloch": routes281,
  "the-fan-flats": routes282,
  "the-greenway": routes283,
  "the-highline": routes284,
  "the-highline-rev": routes285,
  "the-london-pretzel": routes286,
  "the-magnificent-8": routes287,
  "the-mega-pretzel": routes288,
  "the-muckle-yin": routes289,
  "the-pretzel": routes290,
  "the-prl-half": routes291,
  "the-uber-pretzel": routes292,
  "the-watopia-150": routes293,
  "three-little-sisters": routes294,
  "three-musketeers": routes295,
  "three-sisters": routes296,
  "three-sisters-rev": routes297,
  "three-step-sisters": routes298,
  "three-village-loop": routes299,
  "tick-tock": routes300,
  "tides-and-temples": routes301,
  "time-trial": routes302,
  "times-square-circuit": routes303,
  "times-square-circuit-run": routes304,
  "tire-bouchon": routes305,
  "titans-run": routes306,
  "toefield-tornado": routes307,
  "toefield-tornado-run": routes308,
  "tour-of-fire-and-ice": routes309,
  "tour-of-tewit-well": routes310,
  "triple-flat-loops": routes311,
  "triple-twist": routes312,
  "tropic-rush": routes313,
  "turf-n-surf": routes314,
  "twilight-crit": routes315,
  "twilight-harbor": routes316,
  "two-bridges-loop": routes317,
  "two-bridges-loop-run": routes318,
  "two-village-loop": routes319,
  urumaze: routes320,
  "valley-to-mountaintop": routes321,
  "ven-10": routes322,
  "ven-10-run": routes323,
  "ven-top": routes324,
  "volcano-circuit": routes325,
  "volcano-circuit-ccw": routes326,
  "volcano-circuit-ccw-run": routes327,
  "volcano-circuit-run": routes328,
  "volcano-climb": routes329,
  "volcano-climb-after-party": routes330,
  "volcano-flat": routes331,
  "volcano-flat-rev": routes332,
  "volcano-flat-run": routes333,
  "waisted-8": routes334,
  "wandering-flats": routes335,
  "watopias-waistband": routes336,
  "watt-goes-up-must-come-down": routes337,
  "watts-of-the-wild": routes338,
  "watts-the-limit": routes339,
  "wbr-climbing-series": routes340,
  "what-yumezi-were-lost": routes341,
  "whole-lotta-lava": routes342,
  "whole-lotta-lava-run": routes343,
  "yorkshire-double-loop": routes344,
  "yumezi-grit": routes345,
  "zg25-climb-champs": routes346,
  "zg25-queen": routes347,
  "zwift-games-2024-epic": routes348,
};
import { distance as segments0 } from "./segments/23rd-st.js";
import { distance as segments1 } from "./segments/23rd-st-rev.js";
import { distance as segments2 } from "./segments/alley-sprint.js";
import { distance as segments3 } from "./segments/alley-sprint-rev.js";
import { distance as segments4 } from "./segments/alpe-du-zwift.js";
import { distance as segments5 } from "./segments/aqueduc-kom.js";
import { distance as segments6 } from "./segments/aqueduc-kom-rev.js";
import { distance as segments7 } from "./segments/ballon-sprint-rev.js";
import { distance as segments8 } from "./segments/boardwalk-sprint-rev.js";
import { distance as segments9 } from "./segments/bologna-tt.js";
import { distance as segments10 } from "./segments/box-hill.js";
import { distance as segments11 } from "./segments/breakaway-brae.js";
import { distance as segments12 } from "./segments/breakaway-brae-rev.js";
import { distance as segments13 } from "./segments/broad-st.js";
import { distance as segments14 } from "./segments/brooklyn-bridge-kom.js";
import { distance as segments15 } from "./segments/caldera-cruiser.js";
import { distance as segments16 } from "./segments/caldera-cruiser-rev.js";
import { distance as segments17 } from "./segments/castle-kom.js";
import { distance as segments18 } from "./segments/center-sprint.js";
import { distance as segments19 } from "./segments/center-sprint-rev.js";
import { distance as segments20 } from "./segments/central-park-loop-rev.js";
import { distance as segments21 } from "./segments/champs-elysees.js";
import { distance as segments22 } from "./segments/champs-elysees-rev.js";
import { distance as segments23 } from "./segments/crit-city.js";
import { distance as segments24 } from "./segments/crit-city-rev.js";
import { distance as segments25 } from "./segments/eglise-sprint.js";
import { distance as segments26 } from "./segments/epic-kom.js";
import { distance as segments27 } from "./segments/epic-kom-rev.js";
import { distance as segments28 } from "./segments/fox-hill.js";
import { distance as segments29 } from "./segments/fuego-flats.js";
import { distance as segments30 } from "./segments/fuego-flats-rev.js";
import { distance as segments31 } from "./segments/hilly-loop.js";
import { distance as segments32 } from "./segments/hilly-loop-rev.js";
import { distance as segments33 } from "./segments/innsbruck-kom.js";
import { distance as segments34 } from "./segments/innsbruck-kom-rev.js";
import { distance as segments35 } from "./segments/innsbruck-uci-lap.js";
import { distance as segments36 } from "./segments/itza-kom.js";
import { distance as segments37 } from "./segments/jarvis-kom.js";
import { distance as segments38 } from "./segments/jarvis-kom-rev.js";
import { distance as segments39 } from "./segments/jarvis-lap.js";
import { distance as segments40 } from "./segments/jarvis-lap-rev.js";
import { distance as segments41 } from "./segments/jarvis-sprint.js";
import { distance as segments42 } from "./segments/jarvis-sprint-rev.js";
import { distance as segments43 } from "./segments/jungle-loop.js";
import { distance as segments44 } from "./segments/jungle-loop-rev.js";
import { distance as segments45 } from "./segments/keith-hill.js";
import { distance as segments46 } from "./segments/leith-hill.js";
import { distance as segments47 } from "./segments/lightning-lap.js";
import { distance as segments48 } from "./segments/lightning-lap-rev.js";
import { distance as segments49 } from "./segments/london-loop.js";
import { distance as segments50 } from "./segments/london-sprint.js";
import { distance as segments51 } from "./segments/london-sprint-rev.js";
import { distance as segments52 } from "./segments/lutece-sprint.js";
import { distance as segments53 } from "./segments/lutece-sprint-rev.js";
import { distance as segments54 } from "./segments/manhattan-sprint.js";
import { distance as segments55 } from "./segments/manhattan-sprint-rev.js";
import { distance as segments56 } from "./segments/marina-sprint.js";
import { distance as segments57 } from "./segments/mayan-mountainside-kom.js";
import { distance as segments58 } from "./segments/monceau-sprint.js";
import { distance as segments59 } from "./segments/montmartre-kom.js";
import { distance as segments60 } from "./segments/new-york-kom.js";
import { distance as segments61 } from "./segments/new-york-kom-rev.js";
import { distance as segments62 } from "./segments/petit-kom.js";
import { distance as segments63 } from "./segments/radio-tower-kom.js";
import { distance as segments64 } from "./segments/railway-sprint.js";
import { distance as segments65 } from "./segments/richmond-kom.js";
import { distance as segments66 } from "./segments/richmond-kom-rev.js";
import { distance as segments67 } from "./segments/richmond-sprint.js";
import { distance as segments68 } from "./segments/richmond-uci-course.js";
import { distance as segments69 } from "./segments/rooftop-kom.js";
import { distance as segments70 } from "./segments/seafoam-circuit-rev.js";
import { distance as segments71 } from "./segments/sgurr-summit-north.js";
import { distance as segments72 } from "./segments/sgurr-summit-south.js";
import { distance as segments73 } from "./segments/sunset-sprint.js";
import { distance as segments74 } from "./segments/sunset-sprint-rev.js";
import { distance as segments75 } from "./segments/tchou-tchou-sprint.js";
import { distance as segments76 } from "./segments/temple-kom-from-castle-side.js";
import { distance as segments77 } from "./segments/temple-kom-from-fishing-village-side.js";
import { distance as segments78 } from "./segments/the-grade-kom.js";
import { distance as segments79 } from "./segments/the-hill-kom.js";
import { distance as segments80 } from "./segments/the-peristyle-sprint.js";
import { distance as segments81 } from "./segments/the-peristyle-sprint-rev.js";
import { distance as segments82 } from "./segments/tidepool-sprint-rev.js";
import { distance as segments83 } from "./segments/titans-grove-kom.js";
import { distance as segments84 } from "./segments/titans-grove-kom-rev.js";
import { distance as segments85 } from "./segments/tower-sprint.js";
import { distance as segments86 } from "./segments/ventoux-kom.js";
import { distance as segments87 } from "./segments/volcano-circuit.js";
import { distance as segments88 } from "./segments/volcano-circuit-rev.js";
import { distance as segments89 } from "./segments/volcano-kom.js";
import { distance as segments90 } from "./segments/watopia-sprint.js";
import { distance as segments91 } from "./segments/woodland-sprint.js";
import { distance as segments92 } from "./segments/yorkshire-kom.js";
import { distance as segments93 } from "./segments/yorkshire-kom-rev.js";
import { distance as segments94 } from "./segments/yorkshire-sprint-rev.js";
import { distance as segments95 } from "./segments/zwift-kom.js";
import { distance as segments96 } from "./segments/zwift-kom-rev.js";
export const segments: Readonly<
  Record<string, StreamData["distance"] | undefined>
> = {
  "23rd-st": segments0,
  "23rd-st-rev": segments1,
  "alley-sprint": segments2,
  "alley-sprint-rev": segments3,
  "alpe-du-zwift": segments4,
  "aqueduc-kom": segments5,
  "aqueduc-kom-rev": segments6,
  "ballon-sprint-rev": segments7,
  "boardwalk-sprint-rev": segments8,
  "bologna-tt": segments9,
  "box-hill": segments10,
  "breakaway-brae": segments11,
  "breakaway-brae-rev": segments12,
  "broad-st": segments13,
  "brooklyn-bridge-kom": segments14,
  "caldera-cruiser": segments15,
  "caldera-cruiser-rev": segments16,
  "castle-kom": segments17,
  "center-sprint": segments18,
  "center-sprint-rev": segments19,
  "central-park-loop-rev": segments20,
  "champs-elysees": segments21,
  "champs-elysees-rev": segments22,
  "crit-city": segments23,
  "crit-city-rev": segments24,
  "eglise-sprint": segments25,
  "epic-kom": segments26,
  "epic-kom-rev": segments27,
  "fox-hill": segments28,
  "fuego-flats": segments29,
  "fuego-flats-rev": segments30,
  "hilly-loop": segments31,
  "hilly-loop-rev": segments32,
  "innsbruck-kom": segments33,
  "innsbruck-kom-rev": segments34,
  "innsbruck-uci-lap": segments35,
  "itza-kom": segments36,
  "jarvis-kom": segments37,
  "jarvis-kom-rev": segments38,
  "jarvis-lap": segments39,
  "jarvis-lap-rev": segments40,
  "jarvis-sprint": segments41,
  "jarvis-sprint-rev": segments42,
  "jungle-loop": segments43,
  "jungle-loop-rev": segments44,
  "keith-hill": segments45,
  "leith-hill": segments46,
  "lightning-lap": segments47,
  "lightning-lap-rev": segments48,
  "london-loop": segments49,
  "london-sprint": segments50,
  "london-sprint-rev": segments51,
  "lutece-sprint": segments52,
  "lutece-sprint-rev": segments53,
  "manhattan-sprint": segments54,
  "manhattan-sprint-rev": segments55,
  "marina-sprint": segments56,
  "mayan-mountainside-kom": segments57,
  "monceau-sprint": segments58,
  "montmartre-kom": segments59,
  "new-york-kom": segments60,
  "new-york-kom-rev": segments61,
  "petit-kom": segments62,
  "radio-tower-kom": segments63,
  "railway-sprint": segments64,
  "richmond-kom": segments65,
  "richmond-kom-rev": segments66,
  "richmond-sprint": segments67,
  "richmond-uci-course": segments68,
  "rooftop-kom": segments69,
  "seafoam-circuit-rev": segments70,
  "sgurr-summit-north": segments71,
  "sgurr-summit-south": segments72,
  "sunset-sprint": segments73,
  "sunset-sprint-rev": segments74,
  "tchou-tchou-sprint": segments75,
  "temple-kom-from-castle-side": segments76,
  "temple-kom-from-fishing-village-side": segments77,
  "the-grade-kom": segments78,
  "the-hill-kom": segments79,
  "the-peristyle-sprint": segments80,
  "the-peristyle-sprint-rev": segments81,
  "tidepool-sprint-rev": segments82,
  "titans-grove-kom": segments83,
  "titans-grove-kom-rev": segments84,
  "tower-sprint": segments85,
  "ventoux-kom": segments86,
  "volcano-circuit": segments87,
  "volcano-circuit-rev": segments88,
  "volcano-kom": segments89,
  "watopia-sprint": segments90,
  "woodland-sprint": segments91,
  "yorkshire-kom": segments92,
  "yorkshire-kom-rev": segments93,
  "yorkshire-sprint-rev": segments94,
  "zwift-kom": segments95,
  "zwift-kom-rev": segments96,
};
