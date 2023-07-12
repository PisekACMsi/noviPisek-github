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
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					}
				},
				messages:{
					itemsExist: "Pišek ni našel vseh zrn",
					itemsDontExist: "Pišek je pobral vsa zrna",
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
		maxInstructions: 3,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"moveSimple",
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="YF_~6],0{+jwDCtXfhNM"><field name="PARAM_0">E</field><next><block type="moveSimple" id="599_kQ9a]9dTwltK|+?C"><field name="PARAM_0">E</field><next><block type="moveSimple" id="ji=8)WnU3cbttjJX8yvZ"><field name="PARAM_0">E</field></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "pink",
		// backgroundTile: false,
		backgroundTile: "trava2.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_blaz.png", "red_robot.png"], side: 80, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle: { num: 2, img: "obstacle.png",  zOrder: 8, category: {'obstacle':true}, },
			pill1: { num: 10, img: "pill_2times.png", zOrder: 2, category: {'coin':true}, },
			pink_roses: { num: 4, img: "pink_roses.png", zOrder: 2, category: {'color':true}, },
			red_roses: { num: 3, img: "red_roses.png", zOrder: 2, category: {'color':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 4, 4, 1],
					[1, 4, 4, 1],
					[1, 1, 1, 10],
					[1, 1, 3, 3],
				],
			   initItems: [
					 { row: 2, col: 0, dir: 0, type: "robot0" }
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}