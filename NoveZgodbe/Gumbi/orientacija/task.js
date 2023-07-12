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
					success: "",
					failure: "",
					itemsExist: "Nisi našel vseh kontrolnih točk",
					itemsDontExist: "Čestitam, našel si vse številke",
					itemsCoincide: "in prispel na cilj",
					itemsDontCoincide: ", vendar nisi prispel na cilj",
				},
			},
		},

		localBlocks: function(context, strings){
			// CUSTOM: first you can define functions for blocks, which need to be attached to "context.robot"
			// this way you can either override existing function definitions from blocklyRobot_lib.js or add new ones.
			// If you are creating new ones, you need to additionaly do the following things:
			// - add strings in languageStrings for keys: "label", "code", "description" and optionaly more,
			// - you need to define the visual design of the block using "customBlocks"
			// If you are making a new function, good advice, always staring with something that works!!
			// - 1st copy an existing block from blocklyRobot_lib.js inside here,
			// - use console.log() and Web Developer Tools to print values in the console, for debugging
			

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
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"moveSimple",
					"forwardSimple",
					"turn",
					"create",
					"sensorValue",
					"sensorBool",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables", "logic", "loops",'colour','functions'],
				singleBlocks: ["controls_repeat_ext", "math_number", "math_arithmetic"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov

			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {type: "goal"})
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'grass.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "tabornik_all_8_sides.png", side: 60, nbStates: 9, offsetX: 0, zOrder: 8, category: {'robot': true}, },
			goal: { num: 4, img: "flag.png", side: 60, category: {"goal":true} },
			number: { zOrder: 5, category: {'number':true}  },
			paint: { zOrder: 3, id:1, colour: '#ffff00' },
			paint1: { zOrder: 3, id:1, colour: ['#ffff00','#ff0000'] },
			paint2: { zOrder: 3, id:2, colour: ['#3333ff','#ffff00'] },
			paint3: { zOrder: 3, id:3, colour: ['#ff0000','#008000'] },
			paint4: { zOrder: 3, id:4, colour: ['#008000','#3333ff'] },
			obstacle: { num: 2, img: "Tree_transparent.png", zOrder: 8, category: {'obstacle':true},},
			button: {img: ["button_unpressed.png","button_pressed.png"], zOrder: 1, category: {'button':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
					[2, 2, 1, 1, 2, 6, 2, 1, 1, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
					[1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1],
					[2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1],
					[1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 2],
					[1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1],
					[1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
				],
				initItems: [
					{ row: 3, col: 0, dir: 0, type: "robot0" },
					{ row: 1, col: 5, type: "goal" },
					{ row: 3, col: 3, type: "paint1"},
					{ row: 6, col: 3, type: "button", id:1 },
					{ row: 3, col: 8, type: "paint2"},
					{ row: 1, col: 8, type: "button", id:2 },
					{ row: 7, col: 8, type: "paint3"},
					{ row: 7, col: 9, type: "button", id:3 },
					{ row: 7, col: 5, type: "paint4"},
					{ row: 7, col: 1, type: "button", id:4 },

				],
			},
			{
				tiles: [
					[1, 101, 102, 1, 104, 102, 1, 1],
					[1, 106, 1, 1, 1, 103, 1, 1],
					[1, 101, 1, 1, 1, 1, 1, 1],
					[1, 104, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 105, 1, 1],
					[1, 1, 1, 106, 101, 103, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 3, col: 0, dir: 0, type: "robot0" },
					{ row: 0, col: 2, dir: 0, type: "checkpoint" },
					{ row: 0, col: 4, dir: 0, type: "checkpoint" },
					{ row: 0, col: 5, dir: 0, type: "checkpoint" },
					{ row: 1, col: 1, dir: 0, type: "checkpoint" },
					{ row: 1, col: 5, dir: 0, type: "checkpoint" },
					{ row: 2, col: 1, dir: 0, type: "checkpoint" },
					{ row: 3, col: 1, dir: 0, type: "checkpoint" },
					{ row: 4, col: 5, dir: 0, type: "checkpoint" },
					{ row: 5, col: 3, dir: 0, type: "checkpoint" },
					{ row: 5, col: 4, dir: 0, type: "checkpoint" },
					{ row: 5, col: 5, dir: 0, type: "checkpoint" },
					{ row: 5, col: 2, dir: 0, type: "cilj" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}