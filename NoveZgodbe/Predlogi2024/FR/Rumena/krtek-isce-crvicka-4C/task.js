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
				
				label:{sensorBool1:"je spredaj kamen ",
					sensorBool2:"Našli smo črvička",
					pojej:"Pojej črvička"
				},
				code:{sensorBool1:"JeSpredajKamen",
					sensorBool2:"NasliSmoCrvicka",
					pojej:"PojejCrvicka"
				},
				description:{sensorBool1:"Pove ali je krtek pred kamnom. ",
					sensorBool2:"Pove ali je krtek našel črvička. ",
					pojej:"Poje črvička, ki je pod njim. "
				},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist:"Krtek ni pojedel črvička. ",
					itemsDontExist:"krtek je sit. "
				},
				errors: {
					obstacle: "Krtek se je zaletel. ",
				 },
	
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {
				robot:{
				tools:[
					{
						name: "sensorBool1",
						yieldsValue:true,
						handler: (callback)=>{context.robot.sensorBool("0","obstacle","category",callback)},
					},
					{
						name: "sensorBool2",
						yieldsValue:true,
						handler: (callback)=>{context.robot.sensorBool("under","transportable","category",callback)},
					},
					{
						name: "pojej",
						handler: (callback)=>{context.robot.transport("pick",callback)},
					},
				]
			},
			};
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
		maxInstructions: 10,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					//"moveSimple",
					"forwardSimple",
					"turn",			//samo levo in desno
					//"turnAround",
					"sensorBool1",
					"sensorBool2",
					"pojej"
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ['controls_repeat_ext','controls_if','controls_whileUntil','controls_if_else'],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable"},{},exist=false ).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: "dirt.png",
		borderColour: "grey",

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["krtek_8_strani.png"], side: 70, nbStates: 9, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["rocks.png"], zOrder: 1, category: {'obstacle': true}},
			crvicek: {num:3, img:["caterpillar_transparent.png"],zOrder: 8, category:{"transportable":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 3, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
						
					
				],
				initItems: [
					{ row: 1, col: 17, dir: 4, type: "robot0" },
				],
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 3, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]	
					
				],
				initItems: [
					{ row: 1, col: 17, dir: 4, type: "robot0" },
				],
			},
			
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}