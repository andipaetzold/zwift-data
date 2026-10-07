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
import { distance as routes25 } from "./routes/canopies-and-coastlines.js";
import { distance as routes26 } from "./routes/casse-pattes.js";
import { distance as routes27 } from "./routes/castle-crit.js";
import { distance as routes28 } from "./routes/castle-crit-run.js";
import { distance as routes29 } from "./routes/castle-to-castle.js";
import { distance as routes30 } from "./routes/chain-chomper.js";
import { distance as routes31 } from "./routes/champs-elysees.js";
import { distance as routes32 } from "./routes/champs-elysees-run.js";
import { distance as routes33 } from "./routes/chasing-the-sun.js";
import { distance as routes34 } from "./routes/chili-pepper.js";
import { distance as routes35 } from "./routes/cirque-du-suffer.js";
import { distance as routes36 } from "./routes/city-and-the-sgurr.js";
import { distance as routes37 } from "./routes/classique-rev.js";
import { distance as routes38 } from "./routes/climb-control.js";
import { distance as routes39 } from "./routes/climbers-gambit.js";
import { distance as routes40 } from "./routes/coast-crusher.js";
import { distance as routes41 } from "./routes/coast-to-coast.js";
import { distance as routes42 } from "./routes/coastal-crown-loop.js";
import { distance as routes43 } from "./routes/cobbled-climbs.js";
import { distance as routes44 } from "./routes/cobbled-climbs-rev.js";
import { distance as routes45 } from "./routes/cobbled-climbs-run.js";
import { distance as routes46 } from "./routes/cobbled-crown.js";
import { distance as routes47 } from "./routes/couch-to-sky-k.js";
import { distance as routes48 } from "./routes/country-to-coastal.js";
import { distance as routes49 } from "./routes/countryside-tour.js";
import { distance as routes50 } from "./routes/crepe-escape.js";
import { distance as routes51 } from "./routes/croissant.js";
import { distance as routes52 } from "./routes/danger-noodle.js";
import { distance as routes53 } from "./routes/deca-dash.js";
import { distance as routes54 } from "./routes/double-espresso.js";
import { distance as routes55 } from "./routes/double-parked.js";
import { distance as routes56 } from "./routes/double-span-spin.js";
import { distance as routes57 } from "./routes/douce-france.js";
import { distance as routes58 } from "./routes/downtown-dolphin.js";
import { distance as routes59 } from "./routes/downtown-eruoption.js";
import { distance as routes60 } from "./routes/downtown-titans.js";
import { distance as routes61 } from "./routes/duchy-estate.js";
import { distance as routes62 } from "./routes/dun-dash.js";
import { distance as routes63 } from "./routes/dust-in-the-wind.js";
import { distance as routes64 } from "./routes/eastern-eight.js";
import { distance as routes65 } from "./routes/electric-break.js";
import { distance as routes66 } from "./routes/electric-loop.js";
import { distance as routes67 } from "./routes/elevation-evaluation.js";
import { distance as routes68 } from "./routes/empire-elevation.js";
import { distance as routes69 } from "./routes/epic-run.js";
import { distance as routes70 } from "./routes/everything-bagel.js";
import { distance as routes71 } from "./routes/farmland-loop.js";
import { distance as routes72 } from "./routes/figure-8.js";
import { distance as routes73 } from "./routes/figure-8-reverse.js";
import { distance as routes74 } from "./routes/fine-and-sandy.js";
import { distance as routes75 } from "./routes/flat-irons.js";
import { distance as routes76 } from "./routes/flat-out-fast.js";
import { distance as routes77 } from "./routes/flat-route.js";
import { distance as routes78 } from "./routes/flat-route-rev.js";
import { distance as routes79 } from "./routes/flat-route-run.js";
import { distance as routes80 } from "./routes/flatland-loop.js";
import { distance as routes81 } from "./routes/four-horsemen.js";
import { distance as routes82 } from "./routes/france-classic-fondo.js";
import { distance as routes83 } from "./routes/fuhgeddaboudit.js";
import { distance as routes84 } from "./routes/gentil-8.js";
import { distance as routes85 } from "./routes/glasgow-crit-circuit.js";
import { distance as routes86 } from "./routes/glasgow-crit-circuit-run.js";
import { distance as routes87 } from "./routes/glasgow-crit-six.js";
import { distance as routes88 } from "./routes/glasgow-reverse.js";
import { distance as routes89 } from "./routes/glyph-heights.js";
import { distance as routes90 } from "./routes/going-coastal.js";
import { distance as routes91 } from "./routes/going-coastal-run.js";
import { distance as routes92 } from "./routes/gotham-grind.js";
import { distance as routes93 } from "./routes/gotham-grind-rev.js";
import { distance as routes94 } from "./routes/gran-fondo.js";
import { distance as routes95 } from "./routes/grand-central-circuit.js";
import { distance as routes96 } from "./routes/grand-central-circuit-rev.js";
import { distance as routes97 } from "./routes/greater-london-8.js";
import { distance as routes98 } from "./routes/greater-london-flat.js";
import { distance as routes99 } from "./routes/greater-london-loop.js";
import { distance as routes100 } from "./routes/greater-london-loop-rev.js";
import { distance as routes101 } from "./routes/greatest-london-flat.js";
import { distance as routes102 } from "./routes/greatest-london-loop.js";
import { distance as routes103 } from "./routes/greatest-london-loop-rev.js";
import { distance as routes104 } from "./routes/green-to-screen.js";
import { distance as routes105 } from "./routes/handful-of-gravel.js";
import { distance as routes106 } from "./routes/harrogate-circuit.js";
import { distance as routes107 } from "./routes/harrogate-circuit-rev.js";
import { distance as routes108 } from "./routes/heart-of-montmartre.js";
import { distance as routes109 } from "./routes/hell-of-the-north.js";
import { distance as routes110 } from "./routes/hilltop-hustle-run.js";
import { distance as routes111 } from "./routes/hilly-route.js";
import { distance as routes112 } from "./routes/hilly-route-rev.js";
import { distance as routes113 } from "./routes/hilly-route-rev-run.js";
import { distance as routes114 } from "./routes/hot-laps.js";
import { distance as routes115 } from "./routes/hudson-hustle.js";
import { distance as routes116 } from "./routes/innsbruck-kom-after-party.js";
import { distance as routes117 } from "./routes/innsbruckring.js";
import { distance as routes118 } from "./routes/island-hopper.js";
import { distance as routes119 } from "./routes/island-outskirts.js";
import { distance as routes120 } from "./routes/issendorf-express.js";
import { distance as routes121 } from "./routes/italian-villas-circuit.js";
import { distance as routes122 } from "./routes/itza-climb-finish.js";
import { distance as routes123 } from "./routes/itza-party.js";
import { distance as routes124 } from "./routes/jarvis-seaside-sprint.js";
import { distance as routes125 } from "./routes/jons-route.js";
import { distance as routes126 } from "./routes/jungle-circuit.js";
import { distance as routes127 } from "./routes/jungle-circuit-rev.js";
import { distance as routes128 } from "./routes/jungle-circuit-reverse-run.js";
import { distance as routes129 } from "./routes/jungle-circuit-run.js";
import { distance as routes130 } from "./routes/jurassic-coast.js";
import { distance as routes131 } from "./routes/kappa-quest.js";
import { distance as routes132 } from "./routes/kappa-quest-reverse.js";
import { distance as routes133 } from "./routes/kaze-kicker.js";
import { distance as routes134 } from "./routes/keith-hill-after-party.js";
import { distance as routes135 } from "./routes/knickerbocker.js";
import { distance as routes136 } from "./routes/knickerbocker-reverse.js";
import { distance as routes137 } from "./routes/knights-of-the-roundabout.js";
import { distance as routes138 } from "./routes/la-boucle.js";
import { distance as routes139 } from "./routes/la-reine.js";
import { distance as routes140 } from "./routes/lady-liberty.js";
import { distance as routes141 } from "./routes/laguardia-after-party.js";
import { distance as routes142 } from "./routes/laguardia-loop.js";
import { distance as routes143 } from "./routes/laguardia-loop-reverse.js";
import { distance as routes144 } from "./routes/legends-and-lava.js";
import { distance as routes145 } from "./routes/leith-hill-after-party.js";
import { distance as routes146 } from "./routes/libby-hill-after-party.js";
import { distance as routes147 } from "./routes/loch-loop.js";
import { distance as routes148 } from "./routes/loch-loop-run.js";
import { distance as routes149 } from "./routes/london-8.js";
import { distance as routes150 } from "./routes/london-8-rev.js";
import { distance as routes151 } from "./routes/london-calling.js";
import { distance as routes152 } from "./routes/london-classique.js";
import { distance as routes153 } from "./routes/london-flat.js";
import { distance as routes154 } from "./routes/london-loop.js";
import { distance as routes155 } from "./routes/london-loop-rev.js";
import { distance as routes156 } from "./routes/london-the-prl-full.js";
import { distance as routes157 } from "./routes/london-triple-loops.js";
import { distance as routes158 } from "./routes/london-uprising.js";
import { distance as routes159 } from "./routes/loop-de-loop.js";
import { distance as routes160 } from "./routes/loop-de-loop-de-loop.js";
import { distance as routes161 } from "./routes/loop-de-loop-run.js";
import { distance as routes162 } from "./routes/loopin-lava.js";
import { distance as routes163 } from "./routes/lutece-express.js";
import { distance as routes164 } from "./routes/lutece-express-run.js";
import { distance as routes165 } from "./routes/lutscher.js";
import { distance as routes166 } from "./routes/lutscher-ccw.js";
import { distance as routes167 } from "./routes/macaron.js";
import { distance as routes168 } from "./routes/makuri-40.js";
import { distance as routes169 } from "./routes/makuri-madness.js";
import { distance as routes170 } from "./routes/makuri-pretzel.js";
import { distance as routes171 } from "./routes/may-field.js";
import { distance as routes172 } from "./routes/mayan-8.js";
import { distance as routes173 } from "./routes/mayan-bridge-loop.js";
import { distance as routes174 } from "./routes/mayan-mash.js";
import { distance as routes175 } from "./routes/mayan-san-remo.js";
import { distance as routes176 } from "./routes/mech-isle-loop.js";
import { distance as routes177 } from "./routes/mech-isle-loop-run.js";
import { distance as routes178 } from "./routes/mech-isle-mayhem.js";
import { distance as routes179 } from "./routes/medio-fondo.js";
import { distance as routes180 } from "./routes/mighty-metropolitan.js";
import { distance as routes181 } from "./routes/montmartre-mixer.js";
import { distance as routes182 } from "./routes/mountain-8.js";
import { distance as routes183 } from "./routes/mountain-mash.js";
import { distance as routes184 } from "./routes/mountain-mash-run.js";
import { distance as routes185 } from "./routes/mountain-route.js";
import { distance as routes186 } from "./routes/muir-and-the-mountain.js";
import { distance as routes187 } from "./routes/navig8.js";
import { distance as routes188 } from "./routes/neokyo-all-nighter.js";
import { distance as routes189 } from "./routes/neokyo-crit-course.js";
import { distance as routes190 } from "./routes/neon-after-party.js";
import { distance as routes191 } from "./routes/neon-flats.js";
import { distance as routes192 } from "./routes/neon-shore-loop.js";
import { distance as routes193 } from "./routes/new-york-kom-after-party.js";
import { distance as routes194 } from "./routes/no-sleep-till-brooklyn.js";
import { distance as routes195 } from "./routes/ocean-blvd.js";
import { distance as routes196 } from "./routes/ocean-lava-cliffside-loop.js";
import { distance as routes197 } from "./routes/oh-hill-no.js";
import { distance as routes198 } from "./routes/oh-hill-no-run.js";
import { distance as routes199 } from "./routes/out-and-back-again.js";
import { distance as routes200 } from "./routes/outer-scotland.js";
import { distance as routes201 } from "./routes/paris-pacer.js";
import { distance as routes202 } from "./routes/paris-toujours.js";
import { distance as routes203 } from "./routes/park-perimeter-loop.js";
import { distance as routes204 } from "./routes/park-perimeter-rev.js";
import { distance as routes205 } from "./routes/park-to-peak.js";
import { distance as routes206 } from "./routes/peak-performance.js";
import { distance as routes207 } from "./routes/peaky-pave.js";
import { distance as routes208 } from "./routes/petit-boucle.js";
import { distance as routes209 } from "./routes/petite-douleur.js";
import { distance as routes210 } from "./routes/power-punches.js";
import { distance as routes211 } from "./routes/power-to-the-tower.js";
import { distance as routes212 } from "./routes/prospect-park-loop.js";
import { distance as routes213 } from "./routes/prospect-park-loop-run.js";
import { distance as routes214 } from "./routes/quatch-quest.js";
import { distance as routes215 } from "./routes/queens-highway.js";
import { distance as routes216 } from "./routes/queens-highway-after-party.js";
import { distance as routes217 } from "./routes/queens-highway-run.js";
import { distance as routes218 } from "./routes/radio-rendezvous.js";
import { distance as routes219 } from "./routes/railways-and-rooftops.js";
import { distance as routes220 } from "./routes/red-zone-repeats.js";
import { distance as routes221 } from "./routes/repack-rush.js";
import { distance as routes222 } from "./routes/rgv.js";
import { distance as routes223 } from "./routes/richmond-loop-around.js";
import { distance as routes224 } from "./routes/richmond-rollercoaster.js";
import { distance as routes225 } from "./routes/richmond-uci-rev.js";
import { distance as routes226 } from "./routes/rising-empire.js";
import { distance as routes227 } from "./routes/road-to-ruins.js";
import { distance as routes228 } from "./routes/road-to-ruins-rev.js";
import { distance as routes229 } from "./routes/road-to-sky.js";
import { distance as routes230 } from "./routes/road-to-sky-run.js";
import { distance as routes231 } from "./routes/rolling-highlands.js";
import { distance as routes232 } from "./routes/rooftop-rendezvous.js";
import { distance as routes233 } from "./routes/roule-ma-poule.js";
import { distance as routes234 } from "./routes/royal-pump-room-8.js";
import { distance as routes235 } from "./routes/rues-in-rythme.js";
import { distance as routes236 } from "./routes/sacre-bleu.js";
import { distance as routes237 } from "./routes/sand-and-sequoias.js";
import { distance as routes238 } from "./routes/scotland-after-party.js";
import { distance as routes239 } from "./routes/scotland-smash.js";
import { distance as routes240 } from "./routes/sea-to-tree.js";
import { distance as routes241 } from "./routes/seaside-sprint.js";
import { distance as routes242 } from "./routes/seaside-sprint-run.js";
import { distance as routes243 } from "./routes/serpentine-8.js";
import { distance as routes244 } from "./routes/shisa-shakedown.js";
import { distance as routes245 } from "./routes/shorelines-and-summits.js";
import { distance as routes246 } from "./routes/sleepless-city.js";
import { distance as routes247 } from "./routes/snowman.js";
import { distance as routes248 } from "./routes/southern-coast-cruise.js";
import { distance as routes249 } from "./routes/spinfinity.js";
import { distance as routes250 } from "./routes/spinfinity-ultra.js";
import { distance as routes251 } from "./routes/spiral-into-the-volcano.js";
import { distance as routes252 } from "./routes/spiral-summit.js";
import { distance as routes253 } from "./routes/spirit-forest.js";
import { distance as routes254 } from "./routes/splash-and-dash.js";
import { distance as routes255 } from "./routes/sprinters-playground.js";
import { distance as routes256 } from "./routes/stay-puft-pursuit.js";
import { distance as routes257 } from "./routes/sugar-cookie.js";
import { distance as routes258 } from "./routes/sukis-playground.js";
import { distance as routes259 } from "./routes/surrey-hills.js";
import { distance as routes260 } from "./routes/tair-dringfa-fechan.js";
import { distance as routes261 } from "./routes/temple-trek.js";
import { distance as routes262 } from "./routes/temple-trek-run.js";
import { distance as routes263 } from "./routes/temples-and-towers.js";
import { distance as routes264 } from "./routes/tempus-fugit.js";
import { distance as routes265 } from "./routes/thats-amore.js";
import { distance as routes266 } from "./routes/the-6-train.js";
import { distance as routes267 } from "./routes/the-6-train-rev.js";
import { distance as routes268 } from "./routes/the-big-ring.js";
import { distance as routes269 } from "./routes/the-classic.js";
import { distance as routes270 } from "./routes/the-classic-run.js";
import { distance as routes271 } from "./routes/the-double-borough.js";
import { distance as routes272 } from "./routes/the-epiloch.js";
import { distance as routes273 } from "./routes/the-fan-flats.js";
import { distance as routes274 } from "./routes/the-greenway.js";
import { distance as routes275 } from "./routes/the-highline.js";
import { distance as routes276 } from "./routes/the-highline-rev.js";
import { distance as routes277 } from "./routes/the-london-pretzel.js";
import { distance as routes278 } from "./routes/the-magnificent-8.js";
import { distance as routes279 } from "./routes/the-mega-pretzel.js";
import { distance as routes280 } from "./routes/the-muckle-yin.js";
import { distance as routes281 } from "./routes/the-pretzel.js";
import { distance as routes282 } from "./routes/the-prl-half.js";
import { distance as routes283 } from "./routes/the-uber-pretzel.js";
import { distance as routes284 } from "./routes/three-little-sisters.js";
import { distance as routes285 } from "./routes/three-musketeers.js";
import { distance as routes286 } from "./routes/three-sisters.js";
import { distance as routes287 } from "./routes/three-sisters-rev.js";
import { distance as routes288 } from "./routes/three-step-sisters.js";
import { distance as routes289 } from "./routes/three-village-loop.js";
import { distance as routes290 } from "./routes/tick-tock.js";
import { distance as routes291 } from "./routes/tides-and-temples.js";
import { distance as routes292 } from "./routes/time-trial.js";
import { distance as routes293 } from "./routes/times-square-circuit.js";
import { distance as routes294 } from "./routes/times-square-circuit-run.js";
import { distance as routes295 } from "./routes/tire-bouchon.js";
import { distance as routes296 } from "./routes/titans-run.js";
import { distance as routes297 } from "./routes/toefield-tornado.js";
import { distance as routes298 } from "./routes/toefield-tornado-run.js";
import { distance as routes299 } from "./routes/tour-of-fire-and-ice.js";
import { distance as routes300 } from "./routes/tour-of-tewit-well.js";
import { distance as routes301 } from "./routes/triple-flat-loops.js";
import { distance as routes302 } from "./routes/triple-twist.js";
import { distance as routes303 } from "./routes/tropic-rush.js";
import { distance as routes304 } from "./routes/turf-n-surf.js";
import { distance as routes305 } from "./routes/twilight-crit.js";
import { distance as routes306 } from "./routes/twilight-harbor.js";
import { distance as routes307 } from "./routes/two-bridges-loop.js";
import { distance as routes308 } from "./routes/two-bridges-loop-run.js";
import { distance as routes309 } from "./routes/two-village-loop.js";
import { distance as routes310 } from "./routes/urumaze.js";
import { distance as routes311 } from "./routes/valley-to-mountaintop.js";
import { distance as routes312 } from "./routes/ven-10.js";
import { distance as routes313 } from "./routes/ven-10-run.js";
import { distance as routes314 } from "./routes/ven-top.js";
import { distance as routes315 } from "./routes/volcano-circuit.js";
import { distance as routes316 } from "./routes/volcano-circuit-ccw.js";
import { distance as routes317 } from "./routes/volcano-circuit-ccw-run.js";
import { distance as routes318 } from "./routes/volcano-circuit-run.js";
import { distance as routes319 } from "./routes/volcano-climb.js";
import { distance as routes320 } from "./routes/volcano-climb-after-party.js";
import { distance as routes321 } from "./routes/volcano-flat.js";
import { distance as routes322 } from "./routes/volcano-flat-rev.js";
import { distance as routes323 } from "./routes/volcano-flat-run.js";
import { distance as routes324 } from "./routes/waisted-8.js";
import { distance as routes325 } from "./routes/wandering-flats.js";
import { distance as routes326 } from "./routes/watopias-waistband.js";
import { distance as routes327 } from "./routes/watts-of-the-wild.js";
import { distance as routes328 } from "./routes/watts-the-limit.js";
import { distance as routes329 } from "./routes/wbr-climbing-series.js";
import { distance as routes330 } from "./routes/what-yumezi-were-lost.js";
import { distance as routes331 } from "./routes/whole-lotta-lava.js";
import { distance as routes332 } from "./routes/whole-lotta-lava-run.js";
import { distance as routes333 } from "./routes/yorkshire-double-loop.js";
import { distance as routes334 } from "./routes/yumezi-grit.js";
import { distance as routes335 } from "./routes/zg25-climb-champs.js";
import { distance as routes336 } from "./routes/zg25-queen.js";
import { distance as routes337 } from "./routes/zwift-games-2024-epic.js";
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
  "canopies-and-coastlines": routes25,
  "casse-pattes": routes26,
  "castle-crit": routes27,
  "castle-crit-run": routes28,
  "castle-to-castle": routes29,
  "chain-chomper": routes30,
  "champs-elysees": routes31,
  "champs-elysees-run": routes32,
  "chasing-the-sun": routes33,
  "chili-pepper": routes34,
  "cirque-du-suffer": routes35,
  "city-and-the-sgurr": routes36,
  "classique-rev": routes37,
  "climb-control": routes38,
  "climbers-gambit": routes39,
  "coast-crusher": routes40,
  "coast-to-coast": routes41,
  "coastal-crown-loop": routes42,
  "cobbled-climbs": routes43,
  "cobbled-climbs-rev": routes44,
  "cobbled-climbs-run": routes45,
  "cobbled-crown": routes46,
  "couch-to-sky-k": routes47,
  "country-to-coastal": routes48,
  "countryside-tour": routes49,
  "crepe-escape": routes50,
  croissant: routes51,
  "danger-noodle": routes52,
  "deca-dash": routes53,
  "double-espresso": routes54,
  "double-parked": routes55,
  "double-span-spin": routes56,
  "douce-france": routes57,
  "downtown-dolphin": routes58,
  "downtown-eruoption": routes59,
  "downtown-titans": routes60,
  "duchy-estate": routes61,
  "dun-dash": routes62,
  "dust-in-the-wind": routes63,
  "eastern-eight": routes64,
  "electric-break": routes65,
  "electric-loop": routes66,
  "elevation-evaluation": routes67,
  "empire-elevation": routes68,
  "epic-run": routes69,
  "everything-bagel": routes70,
  "farmland-loop": routes71,
  "figure-8": routes72,
  "figure-8-reverse": routes73,
  "fine-and-sandy": routes74,
  "flat-irons": routes75,
  "flat-out-fast": routes76,
  "flat-route": routes77,
  "flat-route-rev": routes78,
  "flat-route-run": routes79,
  "flatland-loop": routes80,
  "four-horsemen": routes81,
  "france-classic-fondo": routes82,
  fuhgeddaboudit: routes83,
  "gentil-8": routes84,
  "glasgow-crit-circuit": routes85,
  "glasgow-crit-circuit-run": routes86,
  "glasgow-crit-six": routes87,
  "glasgow-reverse": routes88,
  "glyph-heights": routes89,
  "going-coastal": routes90,
  "going-coastal-run": routes91,
  "gotham-grind": routes92,
  "gotham-grind-rev": routes93,
  "gran-fondo": routes94,
  "grand-central-circuit": routes95,
  "grand-central-circuit-rev": routes96,
  "greater-london-8": routes97,
  "greater-london-flat": routes98,
  "greater-london-loop": routes99,
  "greater-london-loop-rev": routes100,
  "greatest-london-flat": routes101,
  "greatest-london-loop": routes102,
  "greatest-london-loop-rev": routes103,
  "green-to-screen": routes104,
  "handful-of-gravel": routes105,
  "harrogate-circuit": routes106,
  "harrogate-circuit-rev": routes107,
  "heart-of-montmartre": routes108,
  "hell-of-the-north": routes109,
  "hilltop-hustle-run": routes110,
  "hilly-route": routes111,
  "hilly-route-rev": routes112,
  "hilly-route-rev-run": routes113,
  "hot-laps": routes114,
  "hudson-hustle": routes115,
  "innsbruck-kom-after-party": routes116,
  innsbruckring: routes117,
  "island-hopper": routes118,
  "island-outskirts": routes119,
  "issendorf-express": routes120,
  "italian-villas-circuit": routes121,
  "itza-climb-finish": routes122,
  "itza-party": routes123,
  "jarvis-seaside-sprint": routes124,
  "jons-route": routes125,
  "jungle-circuit": routes126,
  "jungle-circuit-rev": routes127,
  "jungle-circuit-reverse-run": routes128,
  "jungle-circuit-run": routes129,
  "jurassic-coast": routes130,
  "kappa-quest": routes131,
  "kappa-quest-reverse": routes132,
  "kaze-kicker": routes133,
  "keith-hill-after-party": routes134,
  knickerbocker: routes135,
  "knickerbocker-reverse": routes136,
  "knights-of-the-roundabout": routes137,
  "la-boucle": routes138,
  "la-reine": routes139,
  "lady-liberty": routes140,
  "laguardia-after-party": routes141,
  "laguardia-loop": routes142,
  "laguardia-loop-reverse": routes143,
  "legends-and-lava": routes144,
  "leith-hill-after-party": routes145,
  "libby-hill-after-party": routes146,
  "loch-loop": routes147,
  "loch-loop-run": routes148,
  "london-8": routes149,
  "london-8-rev": routes150,
  "london-calling": routes151,
  "london-classique": routes152,
  "london-flat": routes153,
  "london-loop": routes154,
  "london-loop-rev": routes155,
  "london-the-prl-full": routes156,
  "london-triple-loops": routes157,
  "london-uprising": routes158,
  "loop-de-loop": routes159,
  "loop-de-loop-de-loop": routes160,
  "loop-de-loop-run": routes161,
  "loopin-lava": routes162,
  "lutece-express": routes163,
  "lutece-express-run": routes164,
  lutscher: routes165,
  "lutscher-ccw": routes166,
  macaron: routes167,
  "makuri-40": routes168,
  "makuri-madness": routes169,
  "makuri-pretzel": routes170,
  "may-field": routes171,
  "mayan-8": routes172,
  "mayan-bridge-loop": routes173,
  "mayan-mash": routes174,
  "mayan-san-remo": routes175,
  "mech-isle-loop": routes176,
  "mech-isle-loop-run": routes177,
  "mech-isle-mayhem": routes178,
  "medio-fondo": routes179,
  "mighty-metropolitan": routes180,
  "montmartre-mixer": routes181,
  "mountain-8": routes182,
  "mountain-mash": routes183,
  "mountain-mash-run": routes184,
  "mountain-route": routes185,
  "muir-and-the-mountain": routes186,
  navig8: routes187,
  "neokyo-all-nighter": routes188,
  "neokyo-crit-course": routes189,
  "neon-after-party": routes190,
  "neon-flats": routes191,
  "neon-shore-loop": routes192,
  "new-york-kom-after-party": routes193,
  "no-sleep-till-brooklyn": routes194,
  "ocean-blvd": routes195,
  "ocean-lava-cliffside-loop": routes196,
  "oh-hill-no": routes197,
  "oh-hill-no-run": routes198,
  "out-and-back-again": routes199,
  "outer-scotland": routes200,
  "paris-pacer": routes201,
  "paris-toujours": routes202,
  "park-perimeter-loop": routes203,
  "park-perimeter-rev": routes204,
  "park-to-peak": routes205,
  "peak-performance": routes206,
  "peaky-pave": routes207,
  "petit-boucle": routes208,
  "petite-douleur": routes209,
  "power-punches": routes210,
  "power-to-the-tower": routes211,
  "prospect-park-loop": routes212,
  "prospect-park-loop-run": routes213,
  "quatch-quest": routes214,
  "queens-highway": routes215,
  "queens-highway-after-party": routes216,
  "queens-highway-run": routes217,
  "radio-rendezvous": routes218,
  "railways-and-rooftops": routes219,
  "red-zone-repeats": routes220,
  "repack-rush": routes221,
  rgv: routes222,
  "richmond-loop-around": routes223,
  "richmond-rollercoaster": routes224,
  "richmond-uci-rev": routes225,
  "rising-empire": routes226,
  "road-to-ruins": routes227,
  "road-to-ruins-rev": routes228,
  "road-to-sky": routes229,
  "road-to-sky-run": routes230,
  "rolling-highlands": routes231,
  "rooftop-rendezvous": routes232,
  "roule-ma-poule": routes233,
  "royal-pump-room-8": routes234,
  "rues-in-rythme": routes235,
  "sacre-bleu": routes236,
  "sand-and-sequoias": routes237,
  "scotland-after-party": routes238,
  "scotland-smash": routes239,
  "sea-to-tree": routes240,
  "seaside-sprint": routes241,
  "seaside-sprint-run": routes242,
  "serpentine-8": routes243,
  "shisa-shakedown": routes244,
  "shorelines-and-summits": routes245,
  "sleepless-city": routes246,
  snowman: routes247,
  "southern-coast-cruise": routes248,
  spinfinity: routes249,
  "spinfinity-ultra": routes250,
  "spiral-into-the-volcano": routes251,
  "spiral-summit": routes252,
  "spirit-forest": routes253,
  "splash-and-dash": routes254,
  "sprinters-playground": routes255,
  "stay-puft-pursuit": routes256,
  "sugar-cookie": routes257,
  "sukis-playground": routes258,
  "surrey-hills": routes259,
  "tair-dringfa-fechan": routes260,
  "temple-trek": routes261,
  "temple-trek-run": routes262,
  "temples-and-towers": routes263,
  "tempus-fugit": routes264,
  "thats-amore": routes265,
  "the-6-train": routes266,
  "the-6-train-rev": routes267,
  "the-big-ring": routes268,
  "the-classic": routes269,
  "the-classic-run": routes270,
  "the-double-borough": routes271,
  "the-epiloch": routes272,
  "the-fan-flats": routes273,
  "the-greenway": routes274,
  "the-highline": routes275,
  "the-highline-rev": routes276,
  "the-london-pretzel": routes277,
  "the-magnificent-8": routes278,
  "the-mega-pretzel": routes279,
  "the-muckle-yin": routes280,
  "the-pretzel": routes281,
  "the-prl-half": routes282,
  "the-uber-pretzel": routes283,
  "three-little-sisters": routes284,
  "three-musketeers": routes285,
  "three-sisters": routes286,
  "three-sisters-rev": routes287,
  "three-step-sisters": routes288,
  "three-village-loop": routes289,
  "tick-tock": routes290,
  "tides-and-temples": routes291,
  "time-trial": routes292,
  "times-square-circuit": routes293,
  "times-square-circuit-run": routes294,
  "tire-bouchon": routes295,
  "titans-run": routes296,
  "toefield-tornado": routes297,
  "toefield-tornado-run": routes298,
  "tour-of-fire-and-ice": routes299,
  "tour-of-tewit-well": routes300,
  "triple-flat-loops": routes301,
  "triple-twist": routes302,
  "tropic-rush": routes303,
  "turf-n-surf": routes304,
  "twilight-crit": routes305,
  "twilight-harbor": routes306,
  "two-bridges-loop": routes307,
  "two-bridges-loop-run": routes308,
  "two-village-loop": routes309,
  urumaze: routes310,
  "valley-to-mountaintop": routes311,
  "ven-10": routes312,
  "ven-10-run": routes313,
  "ven-top": routes314,
  "volcano-circuit": routes315,
  "volcano-circuit-ccw": routes316,
  "volcano-circuit-ccw-run": routes317,
  "volcano-circuit-run": routes318,
  "volcano-climb": routes319,
  "volcano-climb-after-party": routes320,
  "volcano-flat": routes321,
  "volcano-flat-rev": routes322,
  "volcano-flat-run": routes323,
  "waisted-8": routes324,
  "wandering-flats": routes325,
  "watopias-waistband": routes326,
  "watts-of-the-wild": routes327,
  "watts-the-limit": routes328,
  "wbr-climbing-series": routes329,
  "what-yumezi-were-lost": routes330,
  "whole-lotta-lava": routes331,
  "whole-lotta-lava-run": routes332,
  "yorkshire-double-loop": routes333,
  "yumezi-grit": routes334,
  "zg25-climb-champs": routes335,
  "zg25-queen": routes336,
  "zwift-games-2024-epic": routes337,
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
import { distance as segments15 } from "./segments/castle-kom.js";
import { distance as segments16 } from "./segments/center-sprint.js";
import { distance as segments17 } from "./segments/center-sprint-rev.js";
import { distance as segments18 } from "./segments/central-park-loop-rev.js";
import { distance as segments19 } from "./segments/champs-elysees.js";
import { distance as segments20 } from "./segments/champs-elysees-rev.js";
import { distance as segments21 } from "./segments/crit-city.js";
import { distance as segments22 } from "./segments/crit-city-rev.js";
import { distance as segments23 } from "./segments/eglise-sprint.js";
import { distance as segments24 } from "./segments/epic-kom.js";
import { distance as segments25 } from "./segments/epic-kom-rev.js";
import { distance as segments26 } from "./segments/fox-hill.js";
import { distance as segments27 } from "./segments/fuego-flats.js";
import { distance as segments28 } from "./segments/fuego-flats-rev.js";
import { distance as segments29 } from "./segments/hilly-loop.js";
import { distance as segments30 } from "./segments/hilly-loop-rev.js";
import { distance as segments31 } from "./segments/innsbruck-kom.js";
import { distance as segments32 } from "./segments/innsbruck-kom-rev.js";
import { distance as segments33 } from "./segments/innsbruck-uci-lap.js";
import { distance as segments34 } from "./segments/itza-kom.js";
import { distance as segments35 } from "./segments/jarvis-kom.js";
import { distance as segments36 } from "./segments/jarvis-kom-rev.js";
import { distance as segments37 } from "./segments/jarvis-lap.js";
import { distance as segments38 } from "./segments/jarvis-lap-rev.js";
import { distance as segments39 } from "./segments/jarvis-sprint.js";
import { distance as segments40 } from "./segments/jarvis-sprint-rev.js";
import { distance as segments41 } from "./segments/jungle-loop.js";
import { distance as segments42 } from "./segments/jungle-loop-rev.js";
import { distance as segments43 } from "./segments/keith-hill.js";
import { distance as segments44 } from "./segments/leith-hill.js";
import { distance as segments45 } from "./segments/london-loop.js";
import { distance as segments46 } from "./segments/london-sprint.js";
import { distance as segments47 } from "./segments/london-sprint-rev.js";
import { distance as segments48 } from "./segments/lutece-sprint.js";
import { distance as segments49 } from "./segments/lutece-sprint-rev.js";
import { distance as segments50 } from "./segments/manhattan-sprint.js";
import { distance as segments51 } from "./segments/manhattan-sprint-rev.js";
import { distance as segments52 } from "./segments/marina-sprint.js";
import { distance as segments53 } from "./segments/mayan-mountainside-kom.js";
import { distance as segments54 } from "./segments/monceau-sprint.js";
import { distance as segments55 } from "./segments/montmartre-kom.js";
import { distance as segments56 } from "./segments/new-york-kom.js";
import { distance as segments57 } from "./segments/new-york-kom-rev.js";
import { distance as segments58 } from "./segments/petit-kom.js";
import { distance as segments59 } from "./segments/radio-tower-kom.js";
import { distance as segments60 } from "./segments/railway-sprint.js";
import { distance as segments61 } from "./segments/richmond-kom.js";
import { distance as segments62 } from "./segments/richmond-kom-rev.js";
import { distance as segments63 } from "./segments/richmond-sprint.js";
import { distance as segments64 } from "./segments/richmond-uci-course.js";
import { distance as segments65 } from "./segments/rooftop-kom.js";
import { distance as segments66 } from "./segments/sgurr-summit-north.js";
import { distance as segments67 } from "./segments/sgurr-summit-south.js";
import { distance as segments68 } from "./segments/tchou-tchou-sprint.js";
import { distance as segments69 } from "./segments/temple-kom-from-castle-side.js";
import { distance as segments70 } from "./segments/temple-kom-from-fishing-village-side.js";
import { distance as segments71 } from "./segments/the-grade-kom.js";
import { distance as segments72 } from "./segments/the-hill-kom.js";
import { distance as segments73 } from "./segments/the-peristyle-sprint.js";
import { distance as segments74 } from "./segments/the-peristyle-sprint-rev.js";
import { distance as segments75 } from "./segments/tidepool-sprint-rev.js";
import { distance as segments76 } from "./segments/titans-grove-kom.js";
import { distance as segments77 } from "./segments/titans-grove-kom-rev.js";
import { distance as segments78 } from "./segments/tower-sprint.js";
import { distance as segments79 } from "./segments/ventoux-kom.js";
import { distance as segments80 } from "./segments/volcano-circuit.js";
import { distance as segments81 } from "./segments/volcano-circuit-rev.js";
import { distance as segments82 } from "./segments/volcano-kom.js";
import { distance as segments83 } from "./segments/watopia-sprint.js";
import { distance as segments84 } from "./segments/woodland-sprint.js";
import { distance as segments85 } from "./segments/yorkshire-kom.js";
import { distance as segments86 } from "./segments/yorkshire-kom-rev.js";
import { distance as segments87 } from "./segments/yorkshire-sprint-rev.js";
import { distance as segments88 } from "./segments/zwift-kom.js";
import { distance as segments89 } from "./segments/zwift-kom-rev.js";
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
  "castle-kom": segments15,
  "center-sprint": segments16,
  "center-sprint-rev": segments17,
  "central-park-loop-rev": segments18,
  "champs-elysees": segments19,
  "champs-elysees-rev": segments20,
  "crit-city": segments21,
  "crit-city-rev": segments22,
  "eglise-sprint": segments23,
  "epic-kom": segments24,
  "epic-kom-rev": segments25,
  "fox-hill": segments26,
  "fuego-flats": segments27,
  "fuego-flats-rev": segments28,
  "hilly-loop": segments29,
  "hilly-loop-rev": segments30,
  "innsbruck-kom": segments31,
  "innsbruck-kom-rev": segments32,
  "innsbruck-uci-lap": segments33,
  "itza-kom": segments34,
  "jarvis-kom": segments35,
  "jarvis-kom-rev": segments36,
  "jarvis-lap": segments37,
  "jarvis-lap-rev": segments38,
  "jarvis-sprint": segments39,
  "jarvis-sprint-rev": segments40,
  "jungle-loop": segments41,
  "jungle-loop-rev": segments42,
  "keith-hill": segments43,
  "leith-hill": segments44,
  "london-loop": segments45,
  "london-sprint": segments46,
  "london-sprint-rev": segments47,
  "lutece-sprint": segments48,
  "lutece-sprint-rev": segments49,
  "manhattan-sprint": segments50,
  "manhattan-sprint-rev": segments51,
  "marina-sprint": segments52,
  "mayan-mountainside-kom": segments53,
  "monceau-sprint": segments54,
  "montmartre-kom": segments55,
  "new-york-kom": segments56,
  "new-york-kom-rev": segments57,
  "petit-kom": segments58,
  "radio-tower-kom": segments59,
  "railway-sprint": segments60,
  "richmond-kom": segments61,
  "richmond-kom-rev": segments62,
  "richmond-sprint": segments63,
  "richmond-uci-course": segments64,
  "rooftop-kom": segments65,
  "sgurr-summit-north": segments66,
  "sgurr-summit-south": segments67,
  "tchou-tchou-sprint": segments68,
  "temple-kom-from-castle-side": segments69,
  "temple-kom-from-fishing-village-side": segments70,
  "the-grade-kom": segments71,
  "the-hill-kom": segments72,
  "the-peristyle-sprint": segments73,
  "the-peristyle-sprint-rev": segments74,
  "tidepool-sprint-rev": segments75,
  "titans-grove-kom": segments76,
  "titans-grove-kom-rev": segments77,
  "tower-sprint": segments78,
  "ventoux-kom": segments79,
  "volcano-circuit": segments80,
  "volcano-circuit-rev": segments81,
  "volcano-kom": segments82,
  "watopia-sprint": segments83,
  "woodland-sprint": segments84,
  "yorkshire-kom": segments85,
  "yorkshire-kom-rev": segments86,
  "yorkshire-sprint-rev": segments87,
  "zwift-kom": segments88,
  "zwift-kom-rev": segments89,
};
