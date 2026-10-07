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
import { altitude as routes25 } from "./routes/canopies-and-coastlines.js";
import { altitude as routes26 } from "./routes/casse-pattes.js";
import { altitude as routes27 } from "./routes/castle-crit.js";
import { altitude as routes28 } from "./routes/castle-crit-run.js";
import { altitude as routes29 } from "./routes/castle-to-castle.js";
import { altitude as routes30 } from "./routes/chain-chomper.js";
import { altitude as routes31 } from "./routes/champs-elysees.js";
import { altitude as routes32 } from "./routes/champs-elysees-run.js";
import { altitude as routes33 } from "./routes/chasing-the-sun.js";
import { altitude as routes34 } from "./routes/chili-pepper.js";
import { altitude as routes35 } from "./routes/cirque-du-suffer.js";
import { altitude as routes36 } from "./routes/city-and-the-sgurr.js";
import { altitude as routes37 } from "./routes/classique-rev.js";
import { altitude as routes38 } from "./routes/climb-control.js";
import { altitude as routes39 } from "./routes/climbers-gambit.js";
import { altitude as routes40 } from "./routes/coast-crusher.js";
import { altitude as routes41 } from "./routes/coast-to-coast.js";
import { altitude as routes42 } from "./routes/coastal-crown-loop.js";
import { altitude as routes43 } from "./routes/cobbled-climbs.js";
import { altitude as routes44 } from "./routes/cobbled-climbs-rev.js";
import { altitude as routes45 } from "./routes/cobbled-climbs-run.js";
import { altitude as routes46 } from "./routes/cobbled-crown.js";
import { altitude as routes47 } from "./routes/couch-to-sky-k.js";
import { altitude as routes48 } from "./routes/country-to-coastal.js";
import { altitude as routes49 } from "./routes/countryside-tour.js";
import { altitude as routes50 } from "./routes/crepe-escape.js";
import { altitude as routes51 } from "./routes/croissant.js";
import { altitude as routes52 } from "./routes/danger-noodle.js";
import { altitude as routes53 } from "./routes/deca-dash.js";
import { altitude as routes54 } from "./routes/double-espresso.js";
import { altitude as routes55 } from "./routes/double-parked.js";
import { altitude as routes56 } from "./routes/double-span-spin.js";
import { altitude as routes57 } from "./routes/douce-france.js";
import { altitude as routes58 } from "./routes/downtown-dolphin.js";
import { altitude as routes59 } from "./routes/downtown-eruoption.js";
import { altitude as routes60 } from "./routes/downtown-titans.js";
import { altitude as routes61 } from "./routes/duchy-estate.js";
import { altitude as routes62 } from "./routes/dun-dash.js";
import { altitude as routes63 } from "./routes/dust-in-the-wind.js";
import { altitude as routes64 } from "./routes/eastern-eight.js";
import { altitude as routes65 } from "./routes/electric-break.js";
import { altitude as routes66 } from "./routes/electric-loop.js";
import { altitude as routes67 } from "./routes/elevation-evaluation.js";
import { altitude as routes68 } from "./routes/empire-elevation.js";
import { altitude as routes69 } from "./routes/epic-run.js";
import { altitude as routes70 } from "./routes/everything-bagel.js";
import { altitude as routes71 } from "./routes/farmland-loop.js";
import { altitude as routes72 } from "./routes/figure-8.js";
import { altitude as routes73 } from "./routes/figure-8-reverse.js";
import { altitude as routes74 } from "./routes/fine-and-sandy.js";
import { altitude as routes75 } from "./routes/flat-irons.js";
import { altitude as routes76 } from "./routes/flat-out-fast.js";
import { altitude as routes77 } from "./routes/flat-route.js";
import { altitude as routes78 } from "./routes/flat-route-rev.js";
import { altitude as routes79 } from "./routes/flat-route-run.js";
import { altitude as routes80 } from "./routes/flatland-loop.js";
import { altitude as routes81 } from "./routes/four-horsemen.js";
import { altitude as routes82 } from "./routes/france-classic-fondo.js";
import { altitude as routes83 } from "./routes/fuhgeddaboudit.js";
import { altitude as routes84 } from "./routes/gentil-8.js";
import { altitude as routes85 } from "./routes/glasgow-crit-circuit.js";
import { altitude as routes86 } from "./routes/glasgow-crit-circuit-run.js";
import { altitude as routes87 } from "./routes/glasgow-crit-six.js";
import { altitude as routes88 } from "./routes/glasgow-reverse.js";
import { altitude as routes89 } from "./routes/glyph-heights.js";
import { altitude as routes90 } from "./routes/going-coastal.js";
import { altitude as routes91 } from "./routes/going-coastal-run.js";
import { altitude as routes92 } from "./routes/gotham-grind.js";
import { altitude as routes93 } from "./routes/gotham-grind-rev.js";
import { altitude as routes94 } from "./routes/gran-fondo.js";
import { altitude as routes95 } from "./routes/grand-central-circuit.js";
import { altitude as routes96 } from "./routes/grand-central-circuit-rev.js";
import { altitude as routes97 } from "./routes/greater-london-8.js";
import { altitude as routes98 } from "./routes/greater-london-flat.js";
import { altitude as routes99 } from "./routes/greater-london-loop.js";
import { altitude as routes100 } from "./routes/greater-london-loop-rev.js";
import { altitude as routes101 } from "./routes/greatest-london-flat.js";
import { altitude as routes102 } from "./routes/greatest-london-loop.js";
import { altitude as routes103 } from "./routes/greatest-london-loop-rev.js";
import { altitude as routes104 } from "./routes/green-to-screen.js";
import { altitude as routes105 } from "./routes/handful-of-gravel.js";
import { altitude as routes106 } from "./routes/harrogate-circuit.js";
import { altitude as routes107 } from "./routes/harrogate-circuit-rev.js";
import { altitude as routes108 } from "./routes/heart-of-montmartre.js";
import { altitude as routes109 } from "./routes/hell-of-the-north.js";
import { altitude as routes110 } from "./routes/hilltop-hustle-run.js";
import { altitude as routes111 } from "./routes/hilly-route.js";
import { altitude as routes112 } from "./routes/hilly-route-rev.js";
import { altitude as routes113 } from "./routes/hilly-route-rev-run.js";
import { altitude as routes114 } from "./routes/hot-laps.js";
import { altitude as routes115 } from "./routes/hudson-hustle.js";
import { altitude as routes116 } from "./routes/innsbruck-kom-after-party.js";
import { altitude as routes117 } from "./routes/innsbruckring.js";
import { altitude as routes118 } from "./routes/island-hopper.js";
import { altitude as routes119 } from "./routes/island-outskirts.js";
import { altitude as routes120 } from "./routes/issendorf-express.js";
import { altitude as routes121 } from "./routes/italian-villas-circuit.js";
import { altitude as routes122 } from "./routes/itza-climb-finish.js";
import { altitude as routes123 } from "./routes/itza-party.js";
import { altitude as routes124 } from "./routes/jarvis-seaside-sprint.js";
import { altitude as routes125 } from "./routes/jons-route.js";
import { altitude as routes126 } from "./routes/jungle-circuit.js";
import { altitude as routes127 } from "./routes/jungle-circuit-rev.js";
import { altitude as routes128 } from "./routes/jungle-circuit-reverse-run.js";
import { altitude as routes129 } from "./routes/jungle-circuit-run.js";
import { altitude as routes130 } from "./routes/jurassic-coast.js";
import { altitude as routes131 } from "./routes/kappa-quest.js";
import { altitude as routes132 } from "./routes/kappa-quest-reverse.js";
import { altitude as routes133 } from "./routes/kaze-kicker.js";
import { altitude as routes134 } from "./routes/keith-hill-after-party.js";
import { altitude as routes135 } from "./routes/knickerbocker.js";
import { altitude as routes136 } from "./routes/knickerbocker-reverse.js";
import { altitude as routes137 } from "./routes/knights-of-the-roundabout.js";
import { altitude as routes138 } from "./routes/la-boucle.js";
import { altitude as routes139 } from "./routes/la-reine.js";
import { altitude as routes140 } from "./routes/lady-liberty.js";
import { altitude as routes141 } from "./routes/laguardia-after-party.js";
import { altitude as routes142 } from "./routes/laguardia-loop.js";
import { altitude as routes143 } from "./routes/laguardia-loop-reverse.js";
import { altitude as routes144 } from "./routes/legends-and-lava.js";
import { altitude as routes145 } from "./routes/leith-hill-after-party.js";
import { altitude as routes146 } from "./routes/libby-hill-after-party.js";
import { altitude as routes147 } from "./routes/loch-loop.js";
import { altitude as routes148 } from "./routes/loch-loop-run.js";
import { altitude as routes149 } from "./routes/london-8.js";
import { altitude as routes150 } from "./routes/london-8-rev.js";
import { altitude as routes151 } from "./routes/london-calling.js";
import { altitude as routes152 } from "./routes/london-classique.js";
import { altitude as routes153 } from "./routes/london-flat.js";
import { altitude as routes154 } from "./routes/london-loop.js";
import { altitude as routes155 } from "./routes/london-loop-rev.js";
import { altitude as routes156 } from "./routes/london-the-prl-full.js";
import { altitude as routes157 } from "./routes/london-triple-loops.js";
import { altitude as routes158 } from "./routes/london-uprising.js";
import { altitude as routes159 } from "./routes/loop-de-loop.js";
import { altitude as routes160 } from "./routes/loop-de-loop-de-loop.js";
import { altitude as routes161 } from "./routes/loop-de-loop-run.js";
import { altitude as routes162 } from "./routes/loopin-lava.js";
import { altitude as routes163 } from "./routes/lutece-express.js";
import { altitude as routes164 } from "./routes/lutece-express-run.js";
import { altitude as routes165 } from "./routes/lutscher.js";
import { altitude as routes166 } from "./routes/lutscher-ccw.js";
import { altitude as routes167 } from "./routes/macaron.js";
import { altitude as routes168 } from "./routes/makuri-40.js";
import { altitude as routes169 } from "./routes/makuri-madness.js";
import { altitude as routes170 } from "./routes/makuri-pretzel.js";
import { altitude as routes171 } from "./routes/may-field.js";
import { altitude as routes172 } from "./routes/mayan-8.js";
import { altitude as routes173 } from "./routes/mayan-bridge-loop.js";
import { altitude as routes174 } from "./routes/mayan-mash.js";
import { altitude as routes175 } from "./routes/mayan-san-remo.js";
import { altitude as routes176 } from "./routes/mech-isle-loop.js";
import { altitude as routes177 } from "./routes/mech-isle-loop-run.js";
import { altitude as routes178 } from "./routes/mech-isle-mayhem.js";
import { altitude as routes179 } from "./routes/medio-fondo.js";
import { altitude as routes180 } from "./routes/mighty-metropolitan.js";
import { altitude as routes181 } from "./routes/montmartre-mixer.js";
import { altitude as routes182 } from "./routes/mountain-8.js";
import { altitude as routes183 } from "./routes/mountain-mash.js";
import { altitude as routes184 } from "./routes/mountain-mash-run.js";
import { altitude as routes185 } from "./routes/mountain-route.js";
import { altitude as routes186 } from "./routes/muir-and-the-mountain.js";
import { altitude as routes187 } from "./routes/navig8.js";
import { altitude as routes188 } from "./routes/neokyo-all-nighter.js";
import { altitude as routes189 } from "./routes/neokyo-crit-course.js";
import { altitude as routes190 } from "./routes/neon-after-party.js";
import { altitude as routes191 } from "./routes/neon-flats.js";
import { altitude as routes192 } from "./routes/neon-shore-loop.js";
import { altitude as routes193 } from "./routes/new-york-kom-after-party.js";
import { altitude as routes194 } from "./routes/no-sleep-till-brooklyn.js";
import { altitude as routes195 } from "./routes/ocean-blvd.js";
import { altitude as routes196 } from "./routes/ocean-lava-cliffside-loop.js";
import { altitude as routes197 } from "./routes/oh-hill-no.js";
import { altitude as routes198 } from "./routes/oh-hill-no-run.js";
import { altitude as routes199 } from "./routes/out-and-back-again.js";
import { altitude as routes200 } from "./routes/outer-scotland.js";
import { altitude as routes201 } from "./routes/paris-pacer.js";
import { altitude as routes202 } from "./routes/paris-toujours.js";
import { altitude as routes203 } from "./routes/park-perimeter-loop.js";
import { altitude as routes204 } from "./routes/park-perimeter-rev.js";
import { altitude as routes205 } from "./routes/park-to-peak.js";
import { altitude as routes206 } from "./routes/peak-performance.js";
import { altitude as routes207 } from "./routes/peaky-pave.js";
import { altitude as routes208 } from "./routes/petit-boucle.js";
import { altitude as routes209 } from "./routes/petite-douleur.js";
import { altitude as routes210 } from "./routes/power-punches.js";
import { altitude as routes211 } from "./routes/power-to-the-tower.js";
import { altitude as routes212 } from "./routes/prospect-park-loop.js";
import { altitude as routes213 } from "./routes/prospect-park-loop-run.js";
import { altitude as routes214 } from "./routes/quatch-quest.js";
import { altitude as routes215 } from "./routes/queens-highway.js";
import { altitude as routes216 } from "./routes/queens-highway-after-party.js";
import { altitude as routes217 } from "./routes/queens-highway-run.js";
import { altitude as routes218 } from "./routes/radio-rendezvous.js";
import { altitude as routes219 } from "./routes/railways-and-rooftops.js";
import { altitude as routes220 } from "./routes/red-zone-repeats.js";
import { altitude as routes221 } from "./routes/repack-rush.js";
import { altitude as routes222 } from "./routes/rgv.js";
import { altitude as routes223 } from "./routes/richmond-loop-around.js";
import { altitude as routes224 } from "./routes/richmond-rollercoaster.js";
import { altitude as routes225 } from "./routes/richmond-uci-rev.js";
import { altitude as routes226 } from "./routes/rising-empire.js";
import { altitude as routes227 } from "./routes/road-to-ruins.js";
import { altitude as routes228 } from "./routes/road-to-ruins-rev.js";
import { altitude as routes229 } from "./routes/road-to-sky.js";
import { altitude as routes230 } from "./routes/road-to-sky-run.js";
import { altitude as routes231 } from "./routes/rolling-highlands.js";
import { altitude as routes232 } from "./routes/rooftop-rendezvous.js";
import { altitude as routes233 } from "./routes/roule-ma-poule.js";
import { altitude as routes234 } from "./routes/royal-pump-room-8.js";
import { altitude as routes235 } from "./routes/rues-in-rythme.js";
import { altitude as routes236 } from "./routes/sacre-bleu.js";
import { altitude as routes237 } from "./routes/sand-and-sequoias.js";
import { altitude as routes238 } from "./routes/scotland-after-party.js";
import { altitude as routes239 } from "./routes/scotland-smash.js";
import { altitude as routes240 } from "./routes/sea-to-tree.js";
import { altitude as routes241 } from "./routes/seaside-sprint.js";
import { altitude as routes242 } from "./routes/seaside-sprint-run.js";
import { altitude as routes243 } from "./routes/serpentine-8.js";
import { altitude as routes244 } from "./routes/shisa-shakedown.js";
import { altitude as routes245 } from "./routes/shorelines-and-summits.js";
import { altitude as routes246 } from "./routes/sleepless-city.js";
import { altitude as routes247 } from "./routes/snowman.js";
import { altitude as routes248 } from "./routes/southern-coast-cruise.js";
import { altitude as routes249 } from "./routes/spinfinity.js";
import { altitude as routes250 } from "./routes/spinfinity-ultra.js";
import { altitude as routes251 } from "./routes/spiral-into-the-volcano.js";
import { altitude as routes252 } from "./routes/spiral-summit.js";
import { altitude as routes253 } from "./routes/spirit-forest.js";
import { altitude as routes254 } from "./routes/splash-and-dash.js";
import { altitude as routes255 } from "./routes/sprinters-playground.js";
import { altitude as routes256 } from "./routes/stay-puft-pursuit.js";
import { altitude as routes257 } from "./routes/sugar-cookie.js";
import { altitude as routes258 } from "./routes/sukis-playground.js";
import { altitude as routes259 } from "./routes/surrey-hills.js";
import { altitude as routes260 } from "./routes/tair-dringfa-fechan.js";
import { altitude as routes261 } from "./routes/temple-trek.js";
import { altitude as routes262 } from "./routes/temple-trek-run.js";
import { altitude as routes263 } from "./routes/temples-and-towers.js";
import { altitude as routes264 } from "./routes/tempus-fugit.js";
import { altitude as routes265 } from "./routes/thats-amore.js";
import { altitude as routes266 } from "./routes/the-6-train.js";
import { altitude as routes267 } from "./routes/the-6-train-rev.js";
import { altitude as routes268 } from "./routes/the-big-ring.js";
import { altitude as routes269 } from "./routes/the-classic.js";
import { altitude as routes270 } from "./routes/the-classic-run.js";
import { altitude as routes271 } from "./routes/the-double-borough.js";
import { altitude as routes272 } from "./routes/the-epiloch.js";
import { altitude as routes273 } from "./routes/the-fan-flats.js";
import { altitude as routes274 } from "./routes/the-greenway.js";
import { altitude as routes275 } from "./routes/the-highline.js";
import { altitude as routes276 } from "./routes/the-highline-rev.js";
import { altitude as routes277 } from "./routes/the-london-pretzel.js";
import { altitude as routes278 } from "./routes/the-magnificent-8.js";
import { altitude as routes279 } from "./routes/the-mega-pretzel.js";
import { altitude as routes280 } from "./routes/the-muckle-yin.js";
import { altitude as routes281 } from "./routes/the-pretzel.js";
import { altitude as routes282 } from "./routes/the-prl-half.js";
import { altitude as routes283 } from "./routes/the-uber-pretzel.js";
import { altitude as routes284 } from "./routes/three-little-sisters.js";
import { altitude as routes285 } from "./routes/three-musketeers.js";
import { altitude as routes286 } from "./routes/three-sisters.js";
import { altitude as routes287 } from "./routes/three-sisters-rev.js";
import { altitude as routes288 } from "./routes/three-step-sisters.js";
import { altitude as routes289 } from "./routes/three-village-loop.js";
import { altitude as routes290 } from "./routes/tick-tock.js";
import { altitude as routes291 } from "./routes/tides-and-temples.js";
import { altitude as routes292 } from "./routes/time-trial.js";
import { altitude as routes293 } from "./routes/times-square-circuit.js";
import { altitude as routes294 } from "./routes/times-square-circuit-run.js";
import { altitude as routes295 } from "./routes/tire-bouchon.js";
import { altitude as routes296 } from "./routes/titans-run.js";
import { altitude as routes297 } from "./routes/toefield-tornado.js";
import { altitude as routes298 } from "./routes/toefield-tornado-run.js";
import { altitude as routes299 } from "./routes/tour-of-fire-and-ice.js";
import { altitude as routes300 } from "./routes/tour-of-tewit-well.js";
import { altitude as routes301 } from "./routes/triple-flat-loops.js";
import { altitude as routes302 } from "./routes/triple-twist.js";
import { altitude as routes303 } from "./routes/tropic-rush.js";
import { altitude as routes304 } from "./routes/turf-n-surf.js";
import { altitude as routes305 } from "./routes/twilight-crit.js";
import { altitude as routes306 } from "./routes/twilight-harbor.js";
import { altitude as routes307 } from "./routes/two-bridges-loop.js";
import { altitude as routes308 } from "./routes/two-bridges-loop-run.js";
import { altitude as routes309 } from "./routes/two-village-loop.js";
import { altitude as routes310 } from "./routes/urumaze.js";
import { altitude as routes311 } from "./routes/valley-to-mountaintop.js";
import { altitude as routes312 } from "./routes/ven-10.js";
import { altitude as routes313 } from "./routes/ven-10-run.js";
import { altitude as routes314 } from "./routes/ven-top.js";
import { altitude as routes315 } from "./routes/volcano-circuit.js";
import { altitude as routes316 } from "./routes/volcano-circuit-ccw.js";
import { altitude as routes317 } from "./routes/volcano-circuit-ccw-run.js";
import { altitude as routes318 } from "./routes/volcano-circuit-run.js";
import { altitude as routes319 } from "./routes/volcano-climb.js";
import { altitude as routes320 } from "./routes/volcano-climb-after-party.js";
import { altitude as routes321 } from "./routes/volcano-flat.js";
import { altitude as routes322 } from "./routes/volcano-flat-rev.js";
import { altitude as routes323 } from "./routes/volcano-flat-run.js";
import { altitude as routes324 } from "./routes/waisted-8.js";
import { altitude as routes325 } from "./routes/wandering-flats.js";
import { altitude as routes326 } from "./routes/watopias-waistband.js";
import { altitude as routes327 } from "./routes/watts-of-the-wild.js";
import { altitude as routes328 } from "./routes/watts-the-limit.js";
import { altitude as routes329 } from "./routes/wbr-climbing-series.js";
import { altitude as routes330 } from "./routes/what-yumezi-were-lost.js";
import { altitude as routes331 } from "./routes/whole-lotta-lava.js";
import { altitude as routes332 } from "./routes/whole-lotta-lava-run.js";
import { altitude as routes333 } from "./routes/yorkshire-double-loop.js";
import { altitude as routes334 } from "./routes/yumezi-grit.js";
import { altitude as routes335 } from "./routes/zg25-climb-champs.js";
import { altitude as routes336 } from "./routes/zg25-queen.js";
import { altitude as routes337 } from "./routes/zwift-games-2024-epic.js";
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
import { altitude as segments15 } from "./segments/castle-kom.js";
import { altitude as segments16 } from "./segments/center-sprint.js";
import { altitude as segments17 } from "./segments/center-sprint-rev.js";
import { altitude as segments18 } from "./segments/central-park-loop-rev.js";
import { altitude as segments19 } from "./segments/champs-elysees.js";
import { altitude as segments20 } from "./segments/champs-elysees-rev.js";
import { altitude as segments21 } from "./segments/crit-city.js";
import { altitude as segments22 } from "./segments/crit-city-rev.js";
import { altitude as segments23 } from "./segments/eglise-sprint.js";
import { altitude as segments24 } from "./segments/epic-kom.js";
import { altitude as segments25 } from "./segments/epic-kom-rev.js";
import { altitude as segments26 } from "./segments/fox-hill.js";
import { altitude as segments27 } from "./segments/fuego-flats.js";
import { altitude as segments28 } from "./segments/fuego-flats-rev.js";
import { altitude as segments29 } from "./segments/hilly-loop.js";
import { altitude as segments30 } from "./segments/hilly-loop-rev.js";
import { altitude as segments31 } from "./segments/innsbruck-kom.js";
import { altitude as segments32 } from "./segments/innsbruck-kom-rev.js";
import { altitude as segments33 } from "./segments/innsbruck-uci-lap.js";
import { altitude as segments34 } from "./segments/itza-kom.js";
import { altitude as segments35 } from "./segments/jarvis-kom.js";
import { altitude as segments36 } from "./segments/jarvis-kom-rev.js";
import { altitude as segments37 } from "./segments/jarvis-lap.js";
import { altitude as segments38 } from "./segments/jarvis-lap-rev.js";
import { altitude as segments39 } from "./segments/jarvis-sprint.js";
import { altitude as segments40 } from "./segments/jarvis-sprint-rev.js";
import { altitude as segments41 } from "./segments/jungle-loop.js";
import { altitude as segments42 } from "./segments/jungle-loop-rev.js";
import { altitude as segments43 } from "./segments/keith-hill.js";
import { altitude as segments44 } from "./segments/leith-hill.js";
import { altitude as segments45 } from "./segments/london-loop.js";
import { altitude as segments46 } from "./segments/london-sprint.js";
import { altitude as segments47 } from "./segments/london-sprint-rev.js";
import { altitude as segments48 } from "./segments/lutece-sprint.js";
import { altitude as segments49 } from "./segments/lutece-sprint-rev.js";
import { altitude as segments50 } from "./segments/manhattan-sprint.js";
import { altitude as segments51 } from "./segments/manhattan-sprint-rev.js";
import { altitude as segments52 } from "./segments/marina-sprint.js";
import { altitude as segments53 } from "./segments/mayan-mountainside-kom.js";
import { altitude as segments54 } from "./segments/monceau-sprint.js";
import { altitude as segments55 } from "./segments/montmartre-kom.js";
import { altitude as segments56 } from "./segments/new-york-kom.js";
import { altitude as segments57 } from "./segments/new-york-kom-rev.js";
import { altitude as segments58 } from "./segments/petit-kom.js";
import { altitude as segments59 } from "./segments/radio-tower-kom.js";
import { altitude as segments60 } from "./segments/railway-sprint.js";
import { altitude as segments61 } from "./segments/richmond-kom.js";
import { altitude as segments62 } from "./segments/richmond-kom-rev.js";
import { altitude as segments63 } from "./segments/richmond-sprint.js";
import { altitude as segments64 } from "./segments/richmond-uci-course.js";
import { altitude as segments65 } from "./segments/rooftop-kom.js";
import { altitude as segments66 } from "./segments/sgurr-summit-north.js";
import { altitude as segments67 } from "./segments/sgurr-summit-south.js";
import { altitude as segments68 } from "./segments/tchou-tchou-sprint.js";
import { altitude as segments69 } from "./segments/temple-kom-from-castle-side.js";
import { altitude as segments70 } from "./segments/temple-kom-from-fishing-village-side.js";
import { altitude as segments71 } from "./segments/the-grade-kom.js";
import { altitude as segments72 } from "./segments/the-hill-kom.js";
import { altitude as segments73 } from "./segments/the-peristyle-sprint.js";
import { altitude as segments74 } from "./segments/the-peristyle-sprint-rev.js";
import { altitude as segments75 } from "./segments/tidepool-sprint-rev.js";
import { altitude as segments76 } from "./segments/titans-grove-kom.js";
import { altitude as segments77 } from "./segments/titans-grove-kom-rev.js";
import { altitude as segments78 } from "./segments/tower-sprint.js";
import { altitude as segments79 } from "./segments/ventoux-kom.js";
import { altitude as segments80 } from "./segments/volcano-circuit.js";
import { altitude as segments81 } from "./segments/volcano-circuit-rev.js";
import { altitude as segments82 } from "./segments/volcano-kom.js";
import { altitude as segments83 } from "./segments/watopia-sprint.js";
import { altitude as segments84 } from "./segments/woodland-sprint.js";
import { altitude as segments85 } from "./segments/yorkshire-kom.js";
import { altitude as segments86 } from "./segments/yorkshire-kom-rev.js";
import { altitude as segments87 } from "./segments/yorkshire-sprint-rev.js";
import { altitude as segments88 } from "./segments/zwift-kom.js";
import { altitude as segments89 } from "./segments/zwift-kom-rev.js";
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
