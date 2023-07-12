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
					itemsCoincide: "Bravo zadel si gol.",
					itemsDontCoincide: "Žoga ni prispela na cilj. Poskusi ponovno.",
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
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="@9T1_{JJ5zvR2~m3rk)f" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="b]mh=,8.T3`aX,CCbV=R"><value name="TIMES"><shadow type="math_number" id="kJcUKdNGY[`Tc9V@LtMP"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="etK}DY0wr~Km]#RPl6nD"><value name="TIMES"><shadow type="math_number" id="rCd)IBnR.kd!,AN0`)TB"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="9sWFW9dGF!PDU0#6[Wb/"><field name="PARAM_0">E</field></block></statement><next><block type="controls_repeat_ext" id=":S{Ui?8.wdTfh7-WUd*5"><value name="TIMES"><shadow type="math_number" id="7?(Vlf-kc2LiIQIwHwy/"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="moveSimple" id="oSRC8it@q6S@c*?xnmLo"><field name="PARAM_0">S</field></block></statement></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {type: "goal"}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'grass.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["girl_with_ball_all_8_sides.png", "red_robot.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true, 'obstacle':true, 'transportable':true}, },
			obstacle: { num: 2, img: "Tree_with_grass.png",  zOrder: 8, category: {'obstacle':true}, },
			// paint: {num: 4, zOrder: 1, colour: "red", },
			goal: {num: 5, img: "goal.png",  },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 2, 2, 2],
					[2, 2, 1, 2, 2, 2],
					[2, 2, 1, 2, 2, 2],
					[2, 2, 1, 2, 2, 2],
					[2, 2, 1, 2, 2, 2],
					[2, 2, 1, 1, 1, 2],
					[2, 2, 2, 2, 1, 2],
					[2, 2, 2, 2, 1, 2],
					[2, 2, 2, 2, 1, 2],
					[2, 2, 2, 2, 1, 2],
					[2, 2, 2, 2, 1, 2],
				],
				initItems: [
					{ row: 0, col: 0, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 10, col: 4, type: "goal"},
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}