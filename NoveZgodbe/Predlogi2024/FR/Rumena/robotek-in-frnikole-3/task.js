function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
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
					itemsDontCoincide: "Pišek ni pravilno pospravil frnikol. Poskusi še enkrat.",
					itemsCoincide: "Pišek je pravilno postavil vse frnikole.",
					notTransporting: "Robotek skuša spustiti frnikolo, vendar je ne nosi.",
				},
				errors:{
					obstacle: "Pazi, kamen!",
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
		maxInstructions: 17,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"forwardSimple",
					"turn",   
					"transport",	
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ['controls_repeat_ext'],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {category: "transportable"}, {category: "hole"}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "pink",
		backgroundTile: "dirt.png",
		borderColour: "grey",

		cellSide: 70,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot2.png"], side: 80, nbStates: 9, offsetX:-5,zOrder: 8, category: {'robot': true} },
			marble: { num: 3, img: "frnikula.png", zOrder: 7,transOrder: 0, category: {'transportable':true}},
			hole: { num: 4, img: "dirt_dot.png", zOrder: 6, category: {'hole':true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
					[1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],		
					[1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
					[1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],		
					[1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],	
				],
				initItems: [
					{ row: 6, col: 0, dir: 0, type: "robot0" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}