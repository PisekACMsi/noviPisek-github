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
					itemsExist: "Nisi pobral vsa semena.",
					itemsDontExist: "Pobral si vsa semena.",
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
		maxInstructions: 11,
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
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="LF|`~P?H;:(68KC!F,C(" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="*`I`wD=i*I-Gt1fVQ)A~"><value name="TIMES"><shadow type="math_number" id="qU!-m#iolS=iRN{22R?H"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="moveSimple" id="QU+D-!84lFhPRg.QIzeB"><field name="PARAM_0">E</field><next><block type="moveSimple" id="ym?_*Q+nfXfrWD3,WlN("><field name="PARAM_0">N</field></block></next></block></statement><next><block type="controls_repeat_ext" id="#6*Bbm*}XYn{WG(gceAq"><value name="TIMES"><shadow type="math_number" id="6eDVHeCx0)[G+agfk2p6"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="moveSimple" id="nRvMCg2d6y`Mb3E}N6vp"><field name="PARAM_0">W</field></block></statement><next><block type="controls_repeat_ext" id="CFXn)8Nr#}Sg#5ghqS_u"><value name="TIMES"><shadow type="math_number" id="Rpca[y4Wc:uiT=QR]41/"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="moveSimple" id="8JdSvJ[+gsae4-[Q/+a#"><field name="PARAM_0">E</field><next><block type="moveSimple" id="a0g3lN*ev9jp-TCrnKHY"><field name="PARAM_0">S</field></block></next></block></statement></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="LF|`~P?H;:(68KC!F,C(" deletable="false" movable="false" editable="false" x="59" y="0"></block><block type="controls_repeat_ext" id="#6*Bbm*}XYn{WG(gceAq" x="377" y="34"><value name="TIMES"><shadow type="math_number" id="6eDVHeCx0)[G+agfk2p6"><field name="NUM">5</field></shadow></value></block><block type="moveSimple" id="QU+D-!84lFhPRg.QIzeB" x="7" y="123"><field name="PARAM_0">E</field></block><block type="controls_repeat_ext" id="CFXn)8Nr#}Sg#5ghqS_u" x="205" y="144"><value name="TIMES"><shadow type="math_number" id="Rpca[y4Wc:uiT=QR]41/"><field name="NUM">5</field></shadow></value></block><block type="moveSimple" id="ym?_*Q+nfXfrWD3,WlN(" x="0" y="200"><field name="PARAM_0">N</field></block><block type="moveSimple" id="8JdSvJ[+gsae4-[Q/+a#" x="37" y="274"><field name="PARAM_0">E</field></block><block type="moveSimple" id="nRvMCg2d6y`Mb3E}N6vp" x="402" y="265"><field name="PARAM_0">W</field></block><block type="controls_repeat_ext" id="*`I`wD=i*I-Gt1fVQ)A~" x="123" y="351"><value name="TIMES"><shadow type="math_number" id="qU!-m#iolS=iRN{22R?H"><field name="NUM">6</field></shadow></value></block><block type="moveSimple" id="a0g3lN*ev9jp-TCrnKHY" x="305" y="364"><field name="PARAM_0">S</field></block><additional>{}</additional></xml>',
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
			robot0: { img: ["pisek.png"], side: 60, nbStates: 9, offsetX: -14, zOrder: 8, category: {'robot': true}, },
			seed: { num: 2, img: "pill.png", zOrder: 2, category: {'coin':true}, },
			obstacle: { num: 3, img: "obstacle1.png", zOrder: 2,category: {'obstacle':true},},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 2, 1, 1, 1, 1, 2],
					[1, 1, 1, 2, 1, 1, 2, 1],
					[1, 1, 1, 1, 2, 2, 1, 1],
					[1, 1, 1, 1, 2, 2, 1, 1],
					[1, 1, 1, 2, 1, 1, 2, 1],
					[1, 1, 2, 1, 1, 1, 1, 2],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 6, col: 1, dir: 0, type: "robot0" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}