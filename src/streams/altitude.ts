import type { StreamData } from "./types.js";
import { altitude as routes0 } from "./routes/2015-uci-worlds-course.js";
import { altitude as routes1 } from "./routes/2018-uci-worlds-course-short-lap.js";
import { altitude as routes2 } from "./routes/2022-bambino-fondo.js";
import { altitude as routes3 } from "./routes/2022-cycling-esports-world-championships-route.js";
import { altitude as routes4 } from "./routes/2022-gran-fondo.js";
import { altitude as routes5 } from "./routes/2022-medio-fondo.js";
import { altitude as routes6 } from "./routes/2023-continental-qualifiers.js";
import { altitude as routes7 } from "./routes/5k-loop.js";
import { altitude as routes8 } from "./routes/accelerate-to-elevate.js";
import { altitude as routes9 } from "./routes/achterbahn.js";
import { altitude as routes10 } from "./routes/astoria-line-8.js";
import { altitude as routes11 } from "./routes/avon-flyer.js";
import { altitude as routes12 } from "./routes/avon-flyer-run.js";
import { altitude as routes13 } from "./routes/bambino-fondo.js";
import { altitude as routes14 } from "./routes/beach-island-loop.js";
import { altitude as routes15 } from "./routes/beach-island-loop-run.js";
import { altitude as routes16 } from "./routes/bell-lap.js";
import { altitude as routes17 } from "./routes/big-flat-8.js";
import { altitude as routes18 } from "./routes/big-foot-hills.js";
import { altitude as routes19 } from "./routes/big-loop.js";
import { altitude as routes20 } from "./routes/big-loop-rev.js";
import { altitude as routes21 } from "./routes/bigger-loop.js";
import { altitude as routes22 } from "./routes/bon-voyage.js";
import { altitude as routes23 } from "./routes/braek-fast-crits-and-grits.js";
import { altitude as routes24 } from "./routes/bridges-and-boardwalks.js";
import { altitude as routes25 } from "./routes/caldera-coaster.js";
import { altitude as routes26 } from "./routes/california-dreamin.js";
import { altitude as routes27 } from "./routes/california-roll.js";
import { altitude as routes28 } from "./routes/canopies-and-coastlines.js";
import { altitude as routes29 } from "./routes/casse-pattes.js";
import { altitude as routes30 } from "./routes/castle-crit.js";
import { altitude as routes31 } from "./routes/castle-crit-run.js";
import { altitude as routes32 } from "./routes/castle-to-castle.js";
import { altitude as routes33 } from "./routes/chain-chomper.js";
import { altitude as routes34 } from "./routes/champs-elysees.js";
import { altitude as routes35 } from "./routes/champs-elysees-run.js";
import { altitude as routes36 } from "./routes/chasing-the-sun.js";
import { altitude as routes37 } from "./routes/chili-pepper.js";
import { altitude as routes38 } from "./routes/cirque-du-suffer.js";
import { altitude as routes39 } from "./routes/city-and-the-sgurr.js";
import { altitude as routes40 } from "./routes/classique-rev.js";
import { altitude as routes41 } from "./routes/climb-control.js";
import { altitude as routes42 } from "./routes/climbers-gambit.js";
import { altitude as routes43 } from "./routes/coast-crusher.js";
import { altitude as routes44 } from "./routes/coast-to-coast.js";
import { altitude as routes45 } from "./routes/coastal-crown-loop.js";
import { altitude as routes46 } from "./routes/cobbled-climbs.js";
import { altitude as routes47 } from "./routes/cobbled-climbs-rev.js";
import { altitude as routes48 } from "./routes/cobbled-climbs-run.js";
import { altitude as routes49 } from "./routes/cobbled-crown.js";
import { altitude as routes50 } from "./routes/couch-to-sky-k.js";
import { altitude as routes51 } from "./routes/country-to-coastal.js";
import { altitude as routes52 } from "./routes/countryside-tour.js";
import { altitude as routes53 } from "./routes/crepe-escape.js";
import { altitude as routes54 } from "./routes/croissant.js";
import { altitude as routes55 } from "./routes/danger-noodle.js";
import { altitude as routes56 } from "./routes/deca-dash.js";
import { altitude as routes57 } from "./routes/double-espresso.js";
import { altitude as routes58 } from "./routes/double-parked.js";
import { altitude as routes59 } from "./routes/double-span-spin.js";
import { altitude as routes60 } from "./routes/douce-france.js";
import { altitude as routes61 } from "./routes/downtown-dolphin.js";
import { altitude as routes62 } from "./routes/downtown-eruoption.js";
import { altitude as routes63 } from "./routes/downtown-titans.js";
import { altitude as routes64 } from "./routes/duchy-estate.js";
import { altitude as routes65 } from "./routes/dun-dash.js";
import { altitude as routes66 } from "./routes/dust-in-the-wind.js";
import { altitude as routes67 } from "./routes/eastern-eight.js";
import { altitude as routes68 } from "./routes/electric-break.js";
import { altitude as routes69 } from "./routes/electric-loop.js";
import { altitude as routes70 } from "./routes/elevation-evaluation.js";
import { altitude as routes71 } from "./routes/empire-elevation.js";
import { altitude as routes72 } from "./routes/epic-run.js";
import { altitude as routes73 } from "./routes/everything-bagel.js";
import { altitude as routes74 } from "./routes/farmland-loop.js";
import { altitude as routes75 } from "./routes/figure-8.js";
import { altitude as routes76 } from "./routes/figure-8-reverse.js";
import { altitude as routes77 } from "./routes/fine-and-sandy.js";
import { altitude as routes78 } from "./routes/flat-irons.js";
import { altitude as routes79 } from "./routes/flat-out-fast.js";
import { altitude as routes80 } from "./routes/flat-route.js";
import { altitude as routes81 } from "./routes/flat-route-rev.js";
import { altitude as routes82 } from "./routes/flat-route-run.js";
import { altitude as routes83 } from "./routes/flatland-loop.js";
import { altitude as routes84 } from "./routes/four-foalsmen.js";
import { altitude as routes85 } from "./routes/four-horsemen.js";
import { altitude as routes86 } from "./routes/france-classic-fondo.js";
import { altitude as routes87 } from "./routes/fuhgeddaboudit.js";
import { altitude as routes88 } from "./routes/gentil-8.js";
import { altitude as routes89 } from "./routes/glasgow-crit-circuit.js";
import { altitude as routes90 } from "./routes/glasgow-crit-circuit-run.js";
import { altitude as routes91 } from "./routes/glasgow-crit-six.js";
import { altitude as routes92 } from "./routes/glasgow-reverse.js";
import { altitude as routes93 } from "./routes/glyph-heights.js";
import { altitude as routes94 } from "./routes/going-coastal.js";
import { altitude as routes95 } from "./routes/going-coastal-run.js";
import { altitude as routes96 } from "./routes/gotham-grind.js";
import { altitude as routes97 } from "./routes/gotham-grind-rev.js";
import { altitude as routes98 } from "./routes/gran-fondo.js";
import { altitude as routes99 } from "./routes/grand-central-circuit.js";
import { altitude as routes100 } from "./routes/grand-central-circuit-rev.js";
import { altitude as routes101 } from "./routes/greater-london-8.js";
import { altitude as routes102 } from "./routes/greater-london-flat.js";
import { altitude as routes103 } from "./routes/greater-london-loop.js";
import { altitude as routes104 } from "./routes/greater-london-loop-rev.js";
import { altitude as routes105 } from "./routes/greatest-london-flat.js";
import { altitude as routes106 } from "./routes/greatest-london-loop.js";
import { altitude as routes107 } from "./routes/greatest-london-loop-rev.js";
import { altitude as routes108 } from "./routes/green-to-screen.js";
import { altitude as routes109 } from "./routes/handful-of-gravel.js";
import { altitude as routes110 } from "./routes/harrogate-circuit.js";
import { altitude as routes111 } from "./routes/harrogate-circuit-rev.js";
import { altitude as routes112 } from "./routes/heart-of-montmartre.js";
import { altitude as routes113 } from "./routes/hell-of-the-north.js";
import { altitude as routes114 } from "./routes/hilltop-hustle-run.js";
import { altitude as routes115 } from "./routes/hilly-route.js";
import { altitude as routes116 } from "./routes/hilly-route-rev.js";
import { altitude as routes117 } from "./routes/hilly-route-rev-run.js";
import { altitude as routes118 } from "./routes/hot-laps.js";
import { altitude as routes119 } from "./routes/hudson-hustle.js";
import { altitude as routes120 } from "./routes/innsbruck-kom-after-party.js";
import { altitude as routes121 } from "./routes/innsbruckring.js";
import { altitude as routes122 } from "./routes/island-hopper.js";
import { altitude as routes123 } from "./routes/island-outskirts.js";
import { altitude as routes124 } from "./routes/issendorf-express.js";
import { altitude as routes125 } from "./routes/italian-villas-circuit.js";
import { altitude as routes126 } from "./routes/itza-climb-finish.js";
import { altitude as routes127 } from "./routes/itza-party.js";
import { altitude as routes128 } from "./routes/jarvis-seaside-sprint.js";
import { altitude as routes129 } from "./routes/jons-route.js";
import { altitude as routes130 } from "./routes/jungle-circuit.js";
import { altitude as routes131 } from "./routes/jungle-circuit-rev.js";
import { altitude as routes132 } from "./routes/jungle-circuit-reverse-run.js";
import { altitude as routes133 } from "./routes/jungle-circuit-run.js";
import { altitude as routes134 } from "./routes/jurassic-coast.js";
import { altitude as routes135 } from "./routes/kappa-quest.js";
import { altitude as routes136 } from "./routes/kappa-quest-reverse.js";
import { altitude as routes137 } from "./routes/kaze-kicker.js";
import { altitude as routes138 } from "./routes/keith-hill-after-party.js";
import { altitude as routes139 } from "./routes/knickerbocker.js";
import { altitude as routes140 } from "./routes/knickerbocker-reverse.js";
import { altitude as routes141 } from "./routes/knights-of-the-roundabout.js";
import { altitude as routes142 } from "./routes/la-boucle.js";
import { altitude as routes143 } from "./routes/la-reine.js";
import { altitude as routes144 } from "./routes/lady-liberty.js";
import { altitude as routes145 } from "./routes/laguardia-after-party.js";
import { altitude as routes146 } from "./routes/laguardia-loop.js";
import { altitude as routes147 } from "./routes/laguardia-loop-reverse.js";
import { altitude as routes148 } from "./routes/laps-camera-traction.js";
import { altitude as routes149 } from "./routes/lava-legs.js";
import { altitude as routes150 } from "./routes/legends-and-lava.js";
import { altitude as routes151 } from "./routes/leith-hill-after-party.js";
import { altitude as routes152 } from "./routes/libby-hill-after-party.js";
import { altitude as routes153 } from "./routes/loch-loop.js";
import { altitude as routes154 } from "./routes/loch-loop-run.js";
import { altitude as routes155 } from "./routes/london-8.js";
import { altitude as routes156 } from "./routes/london-8-rev.js";
import { altitude as routes157 } from "./routes/london-calling.js";
import { altitude as routes158 } from "./routes/london-classique.js";
import { altitude as routes159 } from "./routes/london-flat.js";
import { altitude as routes160 } from "./routes/london-loop.js";
import { altitude as routes161 } from "./routes/london-loop-rev.js";
import { altitude as routes162 } from "./routes/london-the-prl-full.js";
import { altitude as routes163 } from "./routes/london-triple-loops.js";
import { altitude as routes164 } from "./routes/london-uprising.js";
import { altitude as routes165 } from "./routes/loop-de-loop.js";
import { altitude as routes166 } from "./routes/loop-de-loop-de-loop.js";
import { altitude as routes167 } from "./routes/loop-de-loop-run.js";
import { altitude as routes168 } from "./routes/loopin-lava.js";
import { altitude as routes169 } from "./routes/lutece-express.js";
import { altitude as routes170 } from "./routes/lutece-express-run.js";
import { altitude as routes171 } from "./routes/lutscher.js";
import { altitude as routes172 } from "./routes/lutscher-ccw.js";
import { altitude as routes173 } from "./routes/macaron.js";
import { altitude as routes174 } from "./routes/makuri-40.js";
import { altitude as routes175 } from "./routes/makuri-madness.js";
import { altitude as routes176 } from "./routes/makuri-pretzel.js";
import { altitude as routes177 } from "./routes/may-field.js";
import { altitude as routes178 } from "./routes/mayan-8.js";
import { altitude as routes179 } from "./routes/mayan-bridge-loop.js";
import { altitude as routes180 } from "./routes/mayan-mash.js";
import { altitude as routes181 } from "./routes/mayan-san-remo.js";
import { altitude as routes182 } from "./routes/mech-isle-loop.js";
import { altitude as routes183 } from "./routes/mech-isle-loop-run.js";
import { altitude as routes184 } from "./routes/mech-isle-mayhem.js";
import { altitude as routes185 } from "./routes/medio-fondo.js";
import { altitude as routes186 } from "./routes/mighty-metropolitan.js";
import { altitude as routes187 } from "./routes/montmartre-mixer.js";
import { altitude as routes188 } from "./routes/mountain-8.js";
import { altitude as routes189 } from "./routes/mountain-mash.js";
import { altitude as routes190 } from "./routes/mountain-mash-run.js";
import { altitude as routes191 } from "./routes/mountain-route.js";
import { altitude as routes192 } from "./routes/muir-and-the-mountain.js";
import { altitude as routes193 } from "./routes/navig8.js";
import { altitude as routes194 } from "./routes/neokyo-all-nighter.js";
import { altitude as routes195 } from "./routes/neokyo-crit-course.js";
import { altitude as routes196 } from "./routes/neon-after-party.js";
import { altitude as routes197 } from "./routes/neon-flats.js";
import { altitude as routes198 } from "./routes/neon-shore-loop.js";
import { altitude as routes199 } from "./routes/new-york-kom-after-party.js";
import { altitude as routes200 } from "./routes/no-sleep-till-brooklyn.js";
import { altitude as routes201 } from "./routes/ocean-blvd.js";
import { altitude as routes202 } from "./routes/ocean-lava-cliffside-loop.js";
import { altitude as routes203 } from "./routes/oh-hill-no.js";
import { altitude as routes204 } from "./routes/oh-hill-no-run.js";
import { altitude as routes205 } from "./routes/out-and-back-again.js";
import { altitude as routes206 } from "./routes/outer-scotland.js";
import { altitude as routes207 } from "./routes/pacific-pursuit.js";
import { altitude as routes208 } from "./routes/paris-pacer.js";
import { altitude as routes209 } from "./routes/paris-toujours.js";
import { altitude as routes210 } from "./routes/park-perimeter-loop.js";
import { altitude as routes211 } from "./routes/park-perimeter-rev.js";
import { altitude as routes212 } from "./routes/park-to-peak.js";
import { altitude as routes213 } from "./routes/peak-performance.js";
import { altitude as routes214 } from "./routes/peaky-pave.js";
import { altitude as routes215 } from "./routes/petit-boucle.js";
import { altitude as routes216 } from "./routes/petite-douleur.js";
import { altitude as routes217 } from "./routes/power-punches.js";
import { altitude as routes218 } from "./routes/power-to-the-tower.js";
import { altitude as routes219 } from "./routes/prospect-park-loop.js";
import { altitude as routes220 } from "./routes/prospect-park-loop-run.js";
import { altitude as routes221 } from "./routes/quatch-quest.js";
import { altitude as routes222 } from "./routes/queens-highway.js";
import { altitude as routes223 } from "./routes/queens-highway-after-party.js";
import { altitude as routes224 } from "./routes/queens-highway-run.js";
import { altitude as routes225 } from "./routes/radio-rendezvous.js";
import { altitude as routes226 } from "./routes/railways-and-rooftops.js";
import { altitude as routes227 } from "./routes/red-zone-repeats.js";
import { altitude as routes228 } from "./routes/repack-rush.js";
import { altitude as routes229 } from "./routes/rgv.js";
import { altitude as routes230 } from "./routes/richmond-loop-around.js";
import { altitude as routes231 } from "./routes/richmond-rollercoaster.js";
import { altitude as routes232 } from "./routes/richmond-uci-rev.js";
import { altitude as routes233 } from "./routes/rising-empire.js";
import { altitude as routes234 } from "./routes/road-to-ruins.js";
import { altitude as routes235 } from "./routes/road-to-ruins-rev.js";
import { altitude as routes236 } from "./routes/road-to-sky.js";
import { altitude as routes237 } from "./routes/road-to-sky-run.js";
import { altitude as routes238 } from "./routes/rolling-highlands.js";
import { altitude as routes239 } from "./routes/rooftop-rendezvous.js";
import { altitude as routes240 } from "./routes/roule-ma-poule.js";
import { altitude as routes241 } from "./routes/royal-pump-room-8.js";
import { altitude as routes242 } from "./routes/rues-in-rythme.js";
import { altitude as routes243 } from "./routes/sacre-bleu.js";
import { altitude as routes244 } from "./routes/sand-and-sequoias.js";
import { altitude as routes245 } from "./routes/scotland-after-party.js";
import { altitude as routes246 } from "./routes/scotland-smash.js";
import { altitude as routes247 } from "./routes/sea-to-tree.js";
import { altitude as routes248 } from "./routes/seafoam-circuit.js";
import { altitude as routes249 } from "./routes/seafoam-scamper.js";
import { altitude as routes250 } from "./routes/seaside-sprint.js";
import { altitude as routes251 } from "./routes/seaside-sprint-run.js";
import { altitude as routes252 } from "./routes/serpentine-8.js";
import { altitude as routes253 } from "./routes/shisa-shakedown.js";
import { altitude as routes254 } from "./routes/shorelines-and-summits.js";
import { altitude as routes255 } from "./routes/sleepless-city.js";
import { altitude as routes256 } from "./routes/snowman.js";
import { altitude as routes257 } from "./routes/southern-coast-cruise.js";
import { altitude as routes258 } from "./routes/spinfinity.js";
import { altitude as routes259 } from "./routes/spinfinity-ultra.js";
import { altitude as routes260 } from "./routes/spiral-into-the-volcano.js";
import { altitude as routes261 } from "./routes/spiral-summit.js";
import { altitude as routes262 } from "./routes/spirit-forest.js";
import { altitude as routes263 } from "./routes/splash-and-dash.js";
import { altitude as routes264 } from "./routes/sprinters-playground.js";
import { altitude as routes265 } from "./routes/stay-puft-pursuit.js";
import { altitude as routes266 } from "./routes/sugar-cookie.js";
import { altitude as routes267 } from "./routes/sukis-playground.js";
import { altitude as routes268 } from "./routes/surrey-hills.js";
import { altitude as routes269 } from "./routes/tair-dringfa-fechan.js";
import { altitude as routes270 } from "./routes/temple-trek.js";
import { altitude as routes271 } from "./routes/temple-trek-run.js";
import { altitude as routes272 } from "./routes/temples-and-towers.js";
import { altitude as routes273 } from "./routes/tempus-fugit.js";
import { altitude as routes274 } from "./routes/thats-amore.js";
import { altitude as routes275 } from "./routes/the-6-train.js";
import { altitude as routes276 } from "./routes/the-6-train-rev.js";
import { altitude as routes277 } from "./routes/the-big-ring.js";
import { altitude as routes278 } from "./routes/the-classic.js";
import { altitude as routes279 } from "./routes/the-classic-run.js";
import { altitude as routes280 } from "./routes/the-double-borough.js";
import { altitude as routes281 } from "./routes/the-epiloch.js";
import { altitude as routes282 } from "./routes/the-fan-flats.js";
import { altitude as routes283 } from "./routes/the-greenway.js";
import { altitude as routes284 } from "./routes/the-highline.js";
import { altitude as routes285 } from "./routes/the-highline-rev.js";
import { altitude as routes286 } from "./routes/the-london-pretzel.js";
import { altitude as routes287 } from "./routes/the-magnificent-8.js";
import { altitude as routes288 } from "./routes/the-mega-pretzel.js";
import { altitude as routes289 } from "./routes/the-muckle-yin.js";
import { altitude as routes290 } from "./routes/the-pretzel.js";
import { altitude as routes291 } from "./routes/the-prl-half.js";
import { altitude as routes292 } from "./routes/the-uber-pretzel.js";
import { altitude as routes293 } from "./routes/the-watopia-150.js";
import { altitude as routes294 } from "./routes/three-little-sisters.js";
import { altitude as routes295 } from "./routes/three-musketeers.js";
import { altitude as routes296 } from "./routes/three-sisters.js";
import { altitude as routes297 } from "./routes/three-sisters-rev.js";
import { altitude as routes298 } from "./routes/three-step-sisters.js";
import { altitude as routes299 } from "./routes/three-village-loop.js";
import { altitude as routes300 } from "./routes/tick-tock.js";
import { altitude as routes301 } from "./routes/tides-and-temples.js";
import { altitude as routes302 } from "./routes/time-trial.js";
import { altitude as routes303 } from "./routes/times-square-circuit.js";
import { altitude as routes304 } from "./routes/times-square-circuit-run.js";
import { altitude as routes305 } from "./routes/tire-bouchon.js";
import { altitude as routes306 } from "./routes/titans-run.js";
import { altitude as routes307 } from "./routes/toefield-tornado.js";
import { altitude as routes308 } from "./routes/toefield-tornado-run.js";
import { altitude as routes309 } from "./routes/tour-of-fire-and-ice.js";
import { altitude as routes310 } from "./routes/tour-of-tewit-well.js";
import { altitude as routes311 } from "./routes/triple-flat-loops.js";
import { altitude as routes312 } from "./routes/triple-twist.js";
import { altitude as routes313 } from "./routes/tropic-rush.js";
import { altitude as routes314 } from "./routes/turf-n-surf.js";
import { altitude as routes315 } from "./routes/twilight-crit.js";
import { altitude as routes316 } from "./routes/twilight-harbor.js";
import { altitude as routes317 } from "./routes/two-bridges-loop.js";
import { altitude as routes318 } from "./routes/two-bridges-loop-run.js";
import { altitude as routes319 } from "./routes/two-village-loop.js";
import { altitude as routes320 } from "./routes/urumaze.js";
import { altitude as routes321 } from "./routes/valley-to-mountaintop.js";
import { altitude as routes322 } from "./routes/ven-10.js";
import { altitude as routes323 } from "./routes/ven-10-run.js";
import { altitude as routes324 } from "./routes/ven-top.js";
import { altitude as routes325 } from "./routes/volcano-circuit.js";
import { altitude as routes326 } from "./routes/volcano-circuit-ccw.js";
import { altitude as routes327 } from "./routes/volcano-circuit-ccw-run.js";
import { altitude as routes328 } from "./routes/volcano-circuit-run.js";
import { altitude as routes329 } from "./routes/volcano-climb.js";
import { altitude as routes330 } from "./routes/volcano-climb-after-party.js";
import { altitude as routes331 } from "./routes/volcano-flat.js";
import { altitude as routes332 } from "./routes/volcano-flat-rev.js";
import { altitude as routes333 } from "./routes/volcano-flat-run.js";
import { altitude as routes334 } from "./routes/waisted-8.js";
import { altitude as routes335 } from "./routes/wandering-flats.js";
import { altitude as routes336 } from "./routes/watopias-waistband.js";
import { altitude as routes337 } from "./routes/watt-goes-up-must-come-down.js";
import { altitude as routes338 } from "./routes/watts-of-the-wild.js";
import { altitude as routes339 } from "./routes/watts-the-limit.js";
import { altitude as routes340 } from "./routes/wbr-climbing-series.js";
import { altitude as routes341 } from "./routes/what-yumezi-were-lost.js";
import { altitude as routes342 } from "./routes/whole-lotta-lava.js";
import { altitude as routes343 } from "./routes/whole-lotta-lava-run.js";
import { altitude as routes344 } from "./routes/yorkshire-double-loop.js";
import { altitude as routes345 } from "./routes/yumezi-grit.js";
import { altitude as routes346 } from "./routes/zg25-climb-champs.js";
import { altitude as routes347 } from "./routes/zg25-queen.js";
import { altitude as routes348 } from "./routes/zwift-games-2024-epic.js";
export const routes: Readonly<
  Record<string, StreamData["altitude"] | undefined>
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
import { altitude as segments0 } from "./segments/23rd-st.js";
import { altitude as segments1 } from "./segments/23rd-st-rev.js";
import { altitude as segments2 } from "./segments/alley-sprint.js";
import { altitude as segments3 } from "./segments/alley-sprint-rev.js";
import { altitude as segments4 } from "./segments/alpe-du-zwift.js";
import { altitude as segments5 } from "./segments/aqueduc-kom.js";
import { altitude as segments6 } from "./segments/aqueduc-kom-rev.js";
import { altitude as segments7 } from "./segments/ballon-sprint-rev.js";
import { altitude as segments8 } from "./segments/boardwalk-sprint-rev.js";
import { altitude as segments9 } from "./segments/bologna-tt.js";
import { altitude as segments10 } from "./segments/box-hill.js";
import { altitude as segments11 } from "./segments/breakaway-brae.js";
import { altitude as segments12 } from "./segments/breakaway-brae-rev.js";
import { altitude as segments13 } from "./segments/broad-st.js";
import { altitude as segments14 } from "./segments/brooklyn-bridge-kom.js";
import { altitude as segments15 } from "./segments/caldera-cruiser.js";
import { altitude as segments16 } from "./segments/caldera-cruiser-rev.js";
import { altitude as segments17 } from "./segments/castle-kom.js";
import { altitude as segments18 } from "./segments/center-sprint.js";
import { altitude as segments19 } from "./segments/center-sprint-rev.js";
import { altitude as segments20 } from "./segments/central-park-loop-rev.js";
import { altitude as segments21 } from "./segments/champs-elysees.js";
import { altitude as segments22 } from "./segments/champs-elysees-rev.js";
import { altitude as segments23 } from "./segments/crit-city.js";
import { altitude as segments24 } from "./segments/crit-city-rev.js";
import { altitude as segments25 } from "./segments/eglise-sprint.js";
import { altitude as segments26 } from "./segments/epic-kom.js";
import { altitude as segments27 } from "./segments/epic-kom-rev.js";
import { altitude as segments28 } from "./segments/fox-hill.js";
import { altitude as segments29 } from "./segments/fuego-flats.js";
import { altitude as segments30 } from "./segments/fuego-flats-rev.js";
import { altitude as segments31 } from "./segments/hilly-loop.js";
import { altitude as segments32 } from "./segments/hilly-loop-rev.js";
import { altitude as segments33 } from "./segments/innsbruck-kom.js";
import { altitude as segments34 } from "./segments/innsbruck-kom-rev.js";
import { altitude as segments35 } from "./segments/innsbruck-uci-lap.js";
import { altitude as segments36 } from "./segments/itza-kom.js";
import { altitude as segments37 } from "./segments/jarvis-kom.js";
import { altitude as segments38 } from "./segments/jarvis-kom-rev.js";
import { altitude as segments39 } from "./segments/jarvis-lap.js";
import { altitude as segments40 } from "./segments/jarvis-lap-rev.js";
import { altitude as segments41 } from "./segments/jarvis-sprint.js";
import { altitude as segments42 } from "./segments/jarvis-sprint-rev.js";
import { altitude as segments43 } from "./segments/jungle-loop.js";
import { altitude as segments44 } from "./segments/jungle-loop-rev.js";
import { altitude as segments45 } from "./segments/keith-hill.js";
import { altitude as segments46 } from "./segments/leith-hill.js";
import { altitude as segments47 } from "./segments/lightning-lap.js";
import { altitude as segments48 } from "./segments/lightning-lap-rev.js";
import { altitude as segments49 } from "./segments/london-loop.js";
import { altitude as segments50 } from "./segments/london-sprint.js";
import { altitude as segments51 } from "./segments/london-sprint-rev.js";
import { altitude as segments52 } from "./segments/lutece-sprint.js";
import { altitude as segments53 } from "./segments/lutece-sprint-rev.js";
import { altitude as segments54 } from "./segments/manhattan-sprint.js";
import { altitude as segments55 } from "./segments/manhattan-sprint-rev.js";
import { altitude as segments56 } from "./segments/marina-sprint.js";
import { altitude as segments57 } from "./segments/mayan-mountainside-kom.js";
import { altitude as segments58 } from "./segments/monceau-sprint.js";
import { altitude as segments59 } from "./segments/montmartre-kom.js";
import { altitude as segments60 } from "./segments/new-york-kom.js";
import { altitude as segments61 } from "./segments/new-york-kom-rev.js";
import { altitude as segments62 } from "./segments/petit-kom.js";
import { altitude as segments63 } from "./segments/radio-tower-kom.js";
import { altitude as segments64 } from "./segments/railway-sprint.js";
import { altitude as segments65 } from "./segments/richmond-kom.js";
import { altitude as segments66 } from "./segments/richmond-kom-rev.js";
import { altitude as segments67 } from "./segments/richmond-sprint.js";
import { altitude as segments68 } from "./segments/richmond-uci-course.js";
import { altitude as segments69 } from "./segments/rooftop-kom.js";
import { altitude as segments70 } from "./segments/seafoam-circuit-rev.js";
import { altitude as segments71 } from "./segments/sgurr-summit-north.js";
import { altitude as segments72 } from "./segments/sgurr-summit-south.js";
import { altitude as segments73 } from "./segments/sunset-sprint.js";
import { altitude as segments74 } from "./segments/sunset-sprint-rev.js";
import { altitude as segments75 } from "./segments/tchou-tchou-sprint.js";
import { altitude as segments76 } from "./segments/temple-kom-from-castle-side.js";
import { altitude as segments77 } from "./segments/temple-kom-from-fishing-village-side.js";
import { altitude as segments78 } from "./segments/the-grade-kom.js";
import { altitude as segments79 } from "./segments/the-hill-kom.js";
import { altitude as segments80 } from "./segments/the-peristyle-sprint.js";
import { altitude as segments81 } from "./segments/the-peristyle-sprint-rev.js";
import { altitude as segments82 } from "./segments/tidepool-sprint-rev.js";
import { altitude as segments83 } from "./segments/titans-grove-kom.js";
import { altitude as segments84 } from "./segments/titans-grove-kom-rev.js";
import { altitude as segments85 } from "./segments/tower-sprint.js";
import { altitude as segments86 } from "./segments/ventoux-kom.js";
import { altitude as segments87 } from "./segments/volcano-circuit.js";
import { altitude as segments88 } from "./segments/volcano-circuit-rev.js";
import { altitude as segments89 } from "./segments/volcano-kom.js";
import { altitude as segments90 } from "./segments/watopia-sprint.js";
import { altitude as segments91 } from "./segments/woodland-sprint.js";
import { altitude as segments92 } from "./segments/yorkshire-kom.js";
import { altitude as segments93 } from "./segments/yorkshire-kom-rev.js";
import { altitude as segments94 } from "./segments/yorkshire-sprint-rev.js";
import { altitude as segments95 } from "./segments/zwift-kom.js";
import { altitude as segments96 } from "./segments/zwift-kom-rev.js";
export const segments: Readonly<
  Record<string, StreamData["altitude"] | undefined>
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
