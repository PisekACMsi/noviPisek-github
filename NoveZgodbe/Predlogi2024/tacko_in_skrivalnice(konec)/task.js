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
					itemsExist: "Psiček ni pobral vseh zvezdic",
					itemsDontExist: "Psiček je pobral vse zvezdice",
					itemsCoincide: "Psiček je prišel do Marka ",
					itemsDontCoincide: "Psiček ni prišel k Marku.",
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
					"moveSimple",
					"turn",
					
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
	
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "konec"}) },
			])
		},
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: "grass.png",
		borderColour: "grey",

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["dog_all_8_sides.png"], side: 60, nbStates: 8, zOrder: 8, category: {'robot': true}, },
			coin1: {num:3, img:["kost.png"],zOrder: 2, category:{"coin":true}},
			coin :{ img:["miha_all_8_sides.png"],side: 60, nbStates: 8,zOrder: 8, category:{"konec":true}},
			obstacle: { num: 2, img: "tree_with_grass.png", zOrder: 1, category: {'obstacle': true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 15x11
					[2, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 3, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
					
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "robot0" },
					{ row: 9, col: 13, dir: 0, type: "coin" },
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}