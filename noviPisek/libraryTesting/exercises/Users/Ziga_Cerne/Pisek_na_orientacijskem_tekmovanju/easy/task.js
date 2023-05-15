function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				startingBlockName: "Program 2",	
				categories: {				
				   actions: "Gibanje",
				},
				label: {								
					changeRobot: "zamenjaj vlogo %1 HAHA", 
					colour: "LOL %1",
				},
				options:{
					pick: "poberi UPS",
				},
				messages:{
					itemsExist: "Kovanci so na mreži.",
					itemsDontExist: "Kovancev ni na mreži.",
				},
			},
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)
		localBlocks: undefined,

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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"move",
					"moveSimple",
					"forward",
					"forwardSimple",
					"turn",
					"turnAround",
					"jump",
					"changeRobot",
					"transport",
					"sensorBool",
					"sensorValue",
					"destroy",
					"create",
					"wait",
					"nitems",
					"sensorRowCol",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: true,
				wholeCategories: ["logic","colour"],
				singleBlocks: ["controls_repeat","controls_repeat_ext","math_number","text"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">4</field></shadow></value><next><block type="move" id="s1lWGFlqeqK]gPc3tilb"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="yq8-SW:u2.g~@}3QWTA0"><field name="NUM">4</field></shadow></value></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		noBorders: false,
		backgroundColour: false,
		backgroundTile: 'tile.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 2,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot.png", "red_robot.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			robot1: { img: ["miha.png","miha_in_piki.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true, 'transportable':true}, },
			number: { zOrder: 2, id: 1, category: {'number':true},  },
			obstacle: { num: 2, img: "obstacle1.png",  zOrder: 8, category: {'obstacle':true}, },
			coin: { num: 5, img: "coin.png", zOrder: 2, category: {'coin':true}, },
			paint: { num: 3, zOrder: 3, colour: "magenta", },
			button: {num: 4, img: ["pressure_off.png","pressure_on.png"], id:1, zOrder: 1, category: {'button':true}, },
			door: {num: 6, img: ["door_a.png","door_b.png"], id:1, zOrder: 1, category: [{'obstacle':true}, {}], },
			marble1: {num: 8, img: "marble.png", zOrder: 2, transOrder: 0, category: {'transportable':true}, },
			marble2: {num: 9, img: ["pogon.png","kabina.png","streha.png"], zOrder: 2, category: {'transportable':true}, },
			marble3: {num: 10, img: "garbage.png", zOrder: 2, category: {'transportable':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 3, 2, 1, 1, 1],
					[1, 1, 8, 1, 8, 1, 1],
					[1, 1, 10, 10, 10, 10, 5],
					[1, 1, 6, 6, 4, 1, 5],
					[1, 1, 1, 1, 2, 1, 5],
					[1, 1, 1, 1, 1, 1, 5],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1],
					[1, 2, 2, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 1, col: 6, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 2, col: 1, dir: 3, rank: 1, type: "robot1", id:2 },
					{ row: 4, col: 5, value: 13, id:2, type: "number" },
					{ row: 5, col: 5, value: 15, type: "number" },
					{ row: 3, col: 1, id: 2, value: 1, id:2, type: "button" },
					{ row: 3, col: 0, id: 2, value:1, id:2, type: "door" },
					{ row: 1, col: 5, value: 0, transOrder: 0, type: "marble2" },
					{ row: 1, col: 3, value: 1, transOrder: 1, type: "marble2" },
					{ row: 1, col: 1, value: 2, transOrder: 2, type: "marble2" },
					{ row: 1, col: 0, type: "paint", colour:'gold' },
				],
			},
			{
				tiles: [
					[2, 2, 3, 2, 1, 1, 1],
					[1, 1, 8, 1, 8, 1, 1],
					[1, 1, 10, 10, 10, 10, 5],
					[1, 1, 1, 1, 1, 1, 5],
					[1, 1, 1, 1, 1, 1, 5],
					[1, 1, 1, 1, 1, 1, 5],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1],
					[1, 2, 2, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 1, col: 6, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 2, col: 1, dir: 3, rank: 1, type: "robot1", id:2 },
					{ row: 4, col: 5, value: 13, id:2, type: "number" },
					{ row: 5, col: 5, value: 15, type: "number" },
					{ row: 3, col: 1, id: 2, value: 1, id:2, type: "button" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}