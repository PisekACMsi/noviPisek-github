function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		userTaskData: {
			title: document.title,
			subject: $(".exerciseText").first().text(),
			about: {
				authors: "Razvojna skupina Pišek",
				license: "CC BY-NC 4.0",
			}
		},
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Niso uspeli u ukrasti zaklad.",
					itemsDontExist: "Ukradli so zaklad",
				},
				options:{
					robotName0: "Pišče", 
					robotName1: "Duhec", 
					robotName2: "Zmaj", 
					robotName3: "Pingvin", 
				},
			},
		},

		localBlocks: function(context, strings, infos){
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					movement: [
						{  name: "changeRobot", //custom MULTIROBOT
								blocklyJson: {
									"args0": [
										{
											"type": "field_dropdown", 
											"name": "PARAM_0", 
											"options": [
											[strings["options"]["robotName0"], 'robot0'],
											[strings["options"]["robotName1"], 'robot1'],
											[strings["options"]["robotName2"], 'robot2'],
											[strings["options"]["robotName3"], 'robot3'],
											],
										}
									],
								}, 
								},
					],
				},
			};
			return customBlocks;
		},

		hideControls: {					//gumbi na urejevalniku
			restart: false,
			saveOrLoad: false,			//gumba za shranjevanje in nalaganje kode ukazov
			loadBestAnswer: false,
			speedSlider: false,
			backToFirst: false,
			nextStep: false,
			goToEnd: false,
		},
		introMaxHeight: "33%",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 400,				//parameter za časovni zamik med izvajanjem ukazov -  ne deulje??
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 18,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					//"move",
					"forwardSimple",
					"turn",
					//"turnAround",
					"changeRobot",
					//"transport",
					],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["functions"],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="uyoWZ+ya}o|EQ}sL~P~6" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="changeRobot" id="[#.hmH,{XIUBIfknkQuI"><field name="PARAM_0">robot1</field><next><block type="procedures_callnoreturn" id="gn`+nk}YqQpf7c{AAbHa"><mutation name="sprehod"></mutation><next><block type="changeRobot" id="z8pApqCYQRK2@Mf_}!+U"><field name="PARAM_0">robot3</field><next><block type="procedures_callnoreturn" id="J;ql},vRb~EW8]`mVA~Y"><mutation name="sprehod"></mutation><next><block type="changeRobot" id="|.r`z2#W/H1ip#dQh~~/"><field name="PARAM_0">robot2</field><next><block type="procedures_callnoreturn" id="tM~4pG)F[BSv/JEq#}Bt"><mutation name="sprehod"></mutation><next><block type="changeRobot" id="[fW(K2d8A_hq*s*ubPGf"><field name="PARAM_0">robot0</field><next><block type="procedures_callnoreturn" id="((}NP5o@TlDkyi#HqyB!"><mutation name="sprehod"></mutation></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="procedures_defnoreturn" id="ZZ!#qimCI`BptIegkH3l" x="281" y="181"><field name="NAME">sprehod</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { 
				robotEndConditions.checkItemExistence(context, lastTurn, {type: "coin"}, {}, exist=false) 
			
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0,
		backgroundColour: false,
		backgroundTile: 'grass_1rock.png',
		borderColour: 'green',

		cellSide: 60,	
		numberOfRobots: 4,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_8sides.png"], side: 70, nbStates: 9, offsetX: -6, zOrder: 8, category: {'robot': true}, },
			robot1: { img: ["ghost_8sides.png"], side: 70, nbStates: 9, offsetX: -6, zOrder: 8, category: {'robot': true }, },
			robot2: { img: ["zmaj_8sides.png"], side: 70, nbStates: 9, offsetX: -6, zOrder: 8, category: {'robot': true}, },
			robot3: { img: ["penguin_8sides.png"], side: 70, nbStates: 9, offsetX: -6, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img: "tile_dark.png", zOrder: 1, category: {'obstacle': true}},
			button: { img: ["lever_off_nowires.png","lever_on_nowires.png"], zOrder: 3, category: {'button':true} },
			door: { img: ["fence1.png", "fence_open.png"], zOrder: 1, category: [{'obstacle':true}, {'obstacle':false}]},
			wireS1: {img:["wire_straight_off.png","wire_straight_on.png"],zOrder: 2,},
			wireS2: {img:["wire_straight_off1.png","wire_straight_on1.png"],zOrder: 2,},

			wireC1: {img:["wire_L_off0.png","wire_L_on0.png"],zOrder: 2,},
			wireC2: {img:["wire_L_off1.png","wire_L_on1.png"],zOrder: 2,},
			wireC3: {img:["wire_L_off2.png","wire_L_on2.png"],zOrder: 2,},
			wireC4: {img:["wire_L_off3.png","wire_L_on3.png"],zOrder: 2,},

			coin: {num:4, img:["coin.png"],zOrder: 2, category:{"coin":true}},
			
			
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2],
					[1, 1, 1, 1, 4, 2, 1, 1, 1, 1, 1],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "robot0" },
					{ row: 0, col: 6, dir: 0, type: "robot1" },
					{ row: 6, col: 0, dir: 0, type: "robot2" },
					{ row: 6, col: 6, dir: 0, type: "robot3" },

					{row:4,col:10,type:"button",id:1},
					{row:10,col:10,type:"button",id:2},
					{row:10,col:4,type:"button",id:3},
					{row:10,col:9,type:"door",id:1},
					{row:10,col:3,type:"door",id:2},
					{row:4,col:3,type:"door",id:3},

					{row:6,col:9,type:"wireS1",id:1},
					{row:6,col:10,type:"wireC2",id:1},
					{row:6,col:8,type:"wireC3",id:1},
					{row:5,col:10,type:"wireS2",id:1},
					{row:7,col:8,type:"wireS2",id:1},
					{row:8,col:8,type:"wireS2",id:1},
					{row:9,col:8,type:"wireS2",id:1},
					{row:10,col:8,type:"wireC4",id:1},
					
					{row:8,col:10,type:"wireC1",id:2},
					{row:9,col:10,type:"wireS2",id:2},
					{row:8,col:9,type:"wireS1",id:2},
					{row:8,col:8,type:"wireS1",id:2},
					{row:8,col:7,type:"wireS1",id:2},
					{row:8,col:6,type:"wireS1",id:2},
					{row:8,col:5,type:"wireS1",id:2},
					{row:8,col:4,type:"wireS1",id:2},
					{row:8,col:3,type:"wireS1",id:2},
					{row:9,col:2,type:"wireS2",id:2},
					{row:8,col:2,type:"wireC3",id:2},
					{row:10,col:2,type:"wireC4",id:2},

					{row:7,col:4,type:"wireS2",id:3},
					{row:8,col:4,type:"wireS2",id:3},
					{row:9,col:4,type:"wireS2",id:3},
					{row:5,col:3,type:"wireS2",id:3},
					{row:6,col:4,type:"wireC1",id:3},
					{row:6,col:3,type:"wireC4",id:3},


				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}