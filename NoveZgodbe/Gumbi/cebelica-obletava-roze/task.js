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
					itemsExist: "Čebelica ni obiskala vseh štirih cvetic. Poskusi še enkrat.",
					itemsDontExist: "Čebelica je obiskala vse štiri cvetlice.",
				},
				label: {
					transport: "%1 nektar",
				},
				options:{
					tools:{
						bool:{
							transportable: "cvetni prah"
							}
						}
				},
				errors: {
					obstacle: "Pazi, drevo!",
				 },
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {};
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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot:  [
					"move",
					"forward",
					"turn",
					"turnAround",
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

			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "button", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'grass.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["bee_all_8_sides.png"], side: 60, nbStates: 8, zOrder: 8, category: {'robot': true}, },
			button: { num: 2, img: ["flower.png", "flower_blue.png"], zOrder: 2, category: {'button':true}, },
			obstacle: { num: 3, img: "Tree_transparent.png", zOrder: 2,category: {'obstacle':true},},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[3, 1, 1, 1, 1, 1, 3],
					[1, 1, 3, 1, 3, 1, 1],
					[1, 3, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 3, 1, 1],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 3, 1, 1],
					[3, 1, 3, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 3],
				],
				initItems: [
					{ row: 2, col: 3, dir: 0, type: "robot0" },
					{ row: 2, col: 5, type: "button", id:1 },
					{ row: 4, col: 5, type: "button", id:2 },
					{ row: 4, col: 3, type: "button", id:3 },
					{ row: 4, col: 1, type: "button", id:4 },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}