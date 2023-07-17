function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				messages:{
					itemsExist: "Robot ni pobral vseh predmetov",
					itemsDontExist: "Čestitamo robot je pobral vse predmete",
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
				robot:  [
					"turn",
					"move",
					"forward",
					"transport",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable"}, {}, exist=false) }, 
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0.01,
		backgroundColour: "pink",
		// backgroundTile: false,
		backgroundTile: "makadamskacesta2_robot.png",
		borderColour: "brown",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "robot_8pogledov.png", side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle: { num: 2, img: "kamni_robot.png",  zOrder: 8, category: {'obstacle':true}, },
			obstacle2: { num: 3, img: "pesek s kamni_robot.png",  zOrder: 8, category: {'obstacle':true}, },
			marble1: { num: 41, img: "gorilnik rakete.png", zOrder: 2, category: {'transportable':true}, transOrder: 0 },
			marble2: { num: 42, img: "KOS RAKETE 2.png", zOrder: 2, category: {'transportable':true}, transOrder: 1 },
			marble3: { num: 43, img: "KOS RAKETE 3.png", zOrder: 2, category: {'transportable':true}, transOrder: 2 },
			marble4: { num: 44, img: "trup rakete.png", zOrder: 2, category: {'transportable':true}, transOrder: 3 },
			marble5: { num: 45, img: "vrh rakete.png", zOrder: 2, category: {'transportable':true}, transOrder: 4 },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 3, 1, 1, 1, 3, 2],
					[2, 3, 1, 1, 41, 1, 42, 3],
					[3, 1, 1, 1, 1, 1, 1, 1],
					[2, 3, 1, 1, 1, 1, 43, 1],
					[2, 2, 3, 1, 1, 1, 1, 1],
					[2, 3, 1, 1, 44, 1, 45, 3],
					[3, 1, 1, 1, 1, 1, 3, 2],
				 ],
			   initItems: [
					 { row: 1, col: 2, dir: 0, type: "robot0" }
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}