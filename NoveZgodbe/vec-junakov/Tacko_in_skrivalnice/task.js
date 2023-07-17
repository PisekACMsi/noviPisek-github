function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
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
					itemsExist: "Marko ni pobral Tačka. Poskusi še enkrat.",
					itemsDontExist: "Marko je uspešno pobral Tačka.",
					itemsCoincide: "Marko je prišel do zelene zastavice. ",
					itemsDontCoincide: "Marko ni prišel do zelene zastavice. Poskusi še enkrat. s",
				},
				options:{
					robotName0: "Miha", 
					robotName1: "Tačko", 
				},
			},
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
		maxInstructions: 100,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"move",
					"turn",
					"turnAround",
					"changeRobot",
					"transport",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="uyoWZ+ya}o|EQ}sL~P~6" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="changeRobot" id="~TtmT}(Er)j?f!fJ-8Ij"><field name="PARAM_0">robot1</field><next><block type="move" id="0?/w]tzV.MT,J6[`3T,U"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="HIo6t#Vvf82Xdnm|4Ah*"><field name="NUM">1</field></shadow></value><next><block type="move" id="lq5,3Y/6n;um|pq;eS[2"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="~[#opN93zj!{?0|5k}XW"><field name="NUM">1</field></shadow></value><next><block type="changeRobot" id="B26|Ek||wWLlGEeyX)MY"><field name="PARAM_0">robot0</field><next><block type="move" id="r4Nd|},dbfN@Nc}Bx?)G"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="x2eo[l/CWFToMu9*)56:"><field name="NUM">3</field></shadow></value><next><block type="move" id="a*0o7ZOLL9YxUz][)FwM"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="*j60DiIC;l`9fH-v/U:n"><field name="NUM">3</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {type: "goal"}, true) },
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {type: "robot1"}, {}, exist=false) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.01,
		backgroundColour: false,
		backgroundTile: 'grass4.png',
		borderColour: 'green',

		cellSide: 60,	
		numberOfRobots: 2,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["miha_all_8_sides.png", "miha_with_dog_all_8_sides.png"], side: 70, nbStates: 9, offsetX: -6, zOrder: 8, category: {'robot': true}, },
			robot1: { img: ["dog_all_8_sides.png"], side: 70, nbStates: 8, offsetX: -6, zOrder: 8, category: {'robot': true, 'transportable': true}, transOrder: 0 },
			obstacle: { num: 2, img: "red_floor.png", zOrder: 2, category: {'obstacle': true}},
			button: { img: ["button_unpressed.png", "button_pressed.png"], zOrder: 2, category: {'button':true} },
			door: { img: ["orange_floor.png", "yellow_floor.png"], zOrder: 2, category: [{'obstacle':true}, {'obstacle':false}]},
			goal: { num: 3, side: 80, img:"Flag2.png" },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[3, 1, 1, 1, 1, 2, 1, 1],
					[1, 1, 1, 1, 1, 2, 1, 1],
					[2, 2, 2, 1, 1, 2, 1, 1],
					[1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 2, 2],
					[1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 2, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 7, dir: 0, type: "robot0" },
					{ row: 5, col: 0, dir: 0, type: "robot1" },
					{ row: 3, col: 1, type: "button", id: 1},
					{ row: 3, col: 5, type: "door", id: 1},
					{ row: 5, col: 7, type: "button", id: 2},
					{ row: 4, col: 2, type: "door", id: 2},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}