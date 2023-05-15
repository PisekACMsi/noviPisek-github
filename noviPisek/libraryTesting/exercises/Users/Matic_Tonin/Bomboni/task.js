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
					itemsExist: "Nisi pobral vse priboljške.",
					itemsDontExist: "Pobral si vse priboljške in prišel do Marka.",
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
		maxInstructions: 25,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
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

			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="LF|`~P?H;:(68KC!F,C(" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="GVb?CnRh.|ol1YygzU{O"><field name="PARAM_0">E</field><next><block type="controls_repeat_ext" id="nl8_d1SY)glBkTYM2-qO"><value name="TIMES"><shadow type="math_number" id="Vi9*Sbi[J35901dLSHD."><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="l,8eXjxvu4MLl#~kM*ti"><field name="PARAM_0">S</field></block></statement><next><block type="controls_repeat_ext" id="X1dnjPP}EYDX6zl8xPNv"><value name="TIMES"><shadow type="math_number" id="*5?F5EZ.SR+*K#O|SsQS"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="FmJ)zz.aYOqTWOJVmT|#"><value name="TIMES"><shadow type="math_number" id="!T1p]xaXaEaIap|X~ZGE"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="09a2NhK;cNby9Hs28oQy"><field name="PARAM_0">E</field></block></statement><next><block type="moveSimple" id="aGVawcqy}6VkTs8;Tmej"><field name="PARAM_0">N</field><next><block type="controls_repeat_ext" id="FIPlhvYk:YNo9umPHPBk"><value name="TIMES"><shadow type="math_number" id="*9iv!o)nDF;D[4iG!Fh,"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="{yMlh3.W}eQ(UWBfz)aB"><field name="PARAM_0">E</field></block></statement><next><block type="controls_repeat_ext" id="3D,uE.oHn_{[6*v@B69`"><value name="TIMES"><shadow type="math_number" id="FW8I|4v){QkAZU9#dWC{"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="mf8V5oV-5x,_dwW{=4!Z"><field name="PARAM_0">S</field></block></statement></block></next></block></next></block></next></block></statement><next><block type="controls_repeat_ext" id="mN[UOs1p8=mtQ[Z]7~BD"><value name="TIMES"><shadow type="math_number" id="R8?S)dWXifK*r8@nV46I"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="moveSimple" id="4Q#/AID/jdh#*Z:j(PoP"><field name="PARAM_0">E</field></block></statement></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		noBorders: false,
		backgroundColour: false,
		backgroundTile: 'tile.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["piki.png"], side: 60, nbStates: 8, offsetX: -14, zOrder: 8, category: {'robot': true}, },
			seed: { num: 2, img: "coin.png", zOrder: 2, category: {'coin':true}, },
			obstacle: { num: 3, img: "miha.png", side: 60, nbStates: 8, offsetX: -14, zOrder: 2, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "robot0" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}