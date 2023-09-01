function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		userTaskData: {
			title: document.title,
			subject: $(".exerciseText").first().text(),
			about: {
				authors: "Razvojna skupina Pišek",
				license: "CC BY-NC 4.0",
			}
		},
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
					itemsExist: "Piki ni našel obeh zvezdic. Poskusi še enkrat. ",
					itemsDontExist: "Piki je našel obe zvezdici. ",
					itemsCoincide: "Piki je na pravi poti pri zeleni zastavici.",
					itemsDontCoincide: "Piki ni na pravi poti pri zeleni zastavici. Poskusi še enkrat.",
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
			groupByCategory: false,
			generatedBlocks: {
				robot:  [
					"forwardSimple",
					"jump1d",
					"turnAround",
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
			blockly: '',
			
			
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "goal"}) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.0,
		backgroundColour: 'lightblue',
		// backgroundTile: 'sand.png',
		borderColour: false,

		hasGravity: true,
		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["cowboy_all_8_sides.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle: { num: 2, img: "Snow.png",  zOrder: 8, category: {'obstacle':true}, },
			obstacle2: { num: 3, img: "rock.png",  zOrder: 8, category: {'obstacle':true}, },
			goal: { num: 5, img: "Flag2.png", zOrder: 2, category: {'goal':true}, },
			back1: { num: 4, img: "land.png", zOrder: 2},
			back1: { num: 7, img: "winter_tree.png", zOrder: 2},
			coin: {num: 6, img: "star.png", zOrder: 3, category: {'coin':true} },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 1, 1, 1],
					[1, 6, 1, 1, 1, 1, 1, 1, 7, 7, 2, 2, 7, 1, 1],
					[1, 6, 1, 1, 1, 1, 1, 7, 2, 2, 2, 2, 2, 1, 1],
					[7, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 7, 1],
					[2, 2, 1, 1, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 1],
					[2, 2, 2, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 9, col: 3, value: 0, dir: 0, type: "robot0", id:1},
					{ row: 8, col: 14, type: "goal" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}