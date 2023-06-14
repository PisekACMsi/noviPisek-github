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
					itemsExist: "Žoga ni prispela na cilj. Poskusi ponovno. Saj nisi popolnoma nesposoben.",
					itemsDontExist: "Bravo zadel si gol.",
				},
				errors: {
					obstacle: "Pazi, drevo!"
				},
				options:{
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					}
				},
			},
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)
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
				robot:  ["moveSimple"],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops"],
				singleBlocks: ["controls_repeat_ext","controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="@9T1_{JJ5zvR2~m3rk)f" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="KfN4~Hv[lOyp9fmmCN`9"><field name="PARAM_0">E</field><next><block type="controls_repeat_ext" id="HXU3L|~h,HRM@HoVc+(2"><value name="TIMES"><shadow type="math_number" id="pj=vHc[.ZX?w10bKD;ny"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="lvQ4iioKylzxF,})cX?-"><field name="PARAM_0">S</field></block></statement><next><block type="controls_repeat_ext" id="gTkNpHgewnKd|l2gh`#a"><value name="TIMES"><shadow type="math_number" id="y@X-T#`:|ah1G=rZ;pX9"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="|+f]~;NUkoC-_Q+w4PN,"><field name="PARAM_0">E</field></block></statement><next><block type="controls_repeat_ext" id="B~W4vZ9{dbE}kaA/6A__"><value name="TIMES"><shadow type="math_number" id="ZR8-];/eL7:)Q)U_A0NT"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="LTox;PG0el?]P+1~t!!:"><field name="PARAM_0">S</field></block></statement></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'Gasper/grass.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["Gasper/girl_all_8_sides.png", "red_robot.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true, 'obstacle':true, 'transportable':true}, },
			obstacle: { num: 2, img: "Gasper/Tree_with_grass.png",  zOrder: 8, category: {'obstacle':true}, },
			ball: {num: 3, img: "Gasper/ball.png", side:40, zOrder: 7, offsetX:7, transOrder: 0, category: {'coin':true}, },
			// paint: {num: 4, zOrder: 1, colour: "red", },
			goal: {num: 5, img: "Gasper/goal.png",  },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 3, 2, 2, 2, 2],
					[2, 1, 2, 2, 2, 2],
					[2, 1, 2, 2, 2, 2],
					[2, 1, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 1],
					[2, 2, 2, 2, 2, 1],
					[2, 2, 2, 2, 2, 1],
				],
				initItems: [
					{ row: 0, col: 0, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 6, col: 5, type: "goal"},
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}