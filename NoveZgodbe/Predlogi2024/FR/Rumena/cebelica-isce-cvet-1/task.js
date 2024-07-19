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
				
				label:{sensorBool1:"Gozd spredaj",
					sensorBool2:"Smo na rožici",
				},
				code:{sensorBool1:"gozdSpredaj",
					sensorBool2:"SmoNaRožici",
				},
				description:{sensorBool1:"Pove ali je čebelica Maja pred gozdom. ",
					sensorBool2:"Pove ali se nahajamo na rožici. "
				},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsCoincide: "Čebelica Maja je našla rožico. ",
					itemsDontCoincide: "Čebelica Maja ni našla rožice. ",
				},
				errors: {
					obstacle: "Čebelica Maja se je izgubila v gozdu. ",
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
						handler: (callback)=>{context.robot.sensorBool("under","dom","category",callback)},
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
					"moveSimple",
					//"forwardSimple",
					//"turn",			//samo levo in desno
					//"turnAround",
					"sensorBool1",
					"sensorBool2"
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ['controls_repeat_ext','controls_if','controls_whileUntil'],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {category: "dom"},{category: "robot"}).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: "grass.png",
		borderColour: "grey",

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["bee_all_8_sides.png"], side: 60, nbStates: 8, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["tree_with_grass.png"], zOrder: 1, category: {'obstacle': true}},
			dom: {num:3, img:["flower.png"],zOrder: 8, category:{"dom":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 3, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]	
					
				],
				initItems: [
					{ row: 7, col: 1, dir: 0, type: "robot0" },
				],
			},
			
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}