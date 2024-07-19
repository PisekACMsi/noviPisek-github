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
				label:{transport:"Pojej ribo"},//languegae za novi delček
				code:{transport:"PojejRibo"},
				description:{transport:"Poje ribo na kateri stoji. "},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Posast je lačea",
					itemsDontExist: "Posast se je najedela",
					itemsCoincide: "Posast je doma ",
					itemsDontCoincide: "Posast ni doma",
				},
	
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {robot: {
				tools: [
					{  	name: "transport", 
						handler: (callback) => { context.robot.transport("pick" ,callback) },
						"check":"String",
					
					},
				],
			},};
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
					//"move",
					"forwardSimple",
					"turn",
					//"turnAround",
					"transport"
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
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable"}, {}, exist=false) }, 
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
			robot0: { img: ["posast_8_strani.png"], side: 60, nbStates: 9, offsetX: 2, zOrder: 6, category: {'robot': true}, },

			coin: {num:3, img:["fish_fresh.png"],zOrder: 3, category:{"transportable":true}},
			rib:{ img:["fish_eaten.png"],zOrder: 2, category:{"rib":true}},

			coin2: {num:4, img:["postelja.png"],zOrder: 8, category:{"konec":true}},
			//holeR: { num: 41, img: "nest_red.png", zOrder: 6, category: {'hole':true}},
			// kako naj preverim pravilno zaporedje pobirnaja stvari===================================================================
			obstacle: { num: 2, img: "boulder.png",  zOrder: 8, category: {'obstacle':true}, },
		
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[4, 2, 1, 1, 3, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 7, dir: 4, type: "robot0" },
					{row:0,col:4,type:"rib"}
					
				],
			},
			
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}