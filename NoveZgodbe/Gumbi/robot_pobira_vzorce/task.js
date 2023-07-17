function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				messages:{
					itemsDontCoincide: "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
					itemsCoincide: "Robot je dosegel cilj",
					itemsExist: "Robot ni pobral vseh vzorcev",
					itemsDontExist: "Kamenčki grejo brrrrrrrrrrrrrrrr",
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
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"move",
					"moveSimple",
					"sensorBool"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_if", "controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="P4][R0M*7=a|}TnK268k"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="!QLU{1J7tpUesT#RQEcO"><value name="TIMES"><shadow type="math_number" id="L,*Ezo0e@?_}u#2Za|tE"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="~ax3O=s`Kz{4(.7gUJwH"><value name="TIMES"><shadow type="math_number" id="H81lKCg+H*9/+s36=e@Q"><field name="NUM">8</field></shadow></value><statement name="DO"><block type="moveSimple" id="wWI4g5~)ZJ!8|b=dEt4h"><field name="PARAM_0">E</field></block></statement></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "white",
		// backgroundTile: false,
		backgroundTile: "makadamskacesta2_robot.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "robot_8pogledov.png", side: 80, nbStates: 8, offsetX: -14, zOrder: 8, category: {'robot': true}, dir:3},
			obstacle: { num: 2, img: "kamni_robot.png",  zOrder: 8, category: {'obstacle':true}, },
			obstacle2: { num: 3, img: "pesek s kamni_robot.png",  zOrder: 8, category: {'obstacle':true}, },
			coin: { num: 6, img: "kapsula_robot.png", zOrder: 8, category: {'coin':true}, },
			button: { num: 7, img: ["stikalo_robot_rdece.png", "stikalo_robot_zeleno.png"], zOrder: 8, category: {'button':true}, },
			door: { num: 8, img: ["vrata_robot.png", "makadamskacesta2_robot.png"], zOrder: 8, category: [{'obstacle':true}, {'obstacle':false}]},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[3, 1, 3, 2, 2, 2, 2, 1, 1, 3, 3],
					[3, 6, 1, 1, 1, 1, 1, 1, 1, 1, 3],
					[2, 3, 2, 1, 2, 3, 3, 2, 1, 1, 2],
					[3, 1, 1, 1, 6, 6, 1, 1, 1, 1, 3],
					[2, 1, 2, 2, 3, 3, 2, 2, 2, 2, 2],
					[3, 1, 6, 6, 1, 1, 1, 1, 1, 1, 3],
					[3, 3, 2, 1, 2, 2, 2, 2, 1, 1, 3],
					[3, 1, 1, 1, 6, 1, 6, 1, 1, 1, 2],
					[2, 1, 2, 2, 3, 3, 2, 2, 2, 2, 2],
					[3, 1, 1, 1, 1, 1, 1, 6, 1, 6, 3],
					[3, 3, 2, 1, 2, 2, 2, 2, 1, 1, 3],
					[3, 1, 1, 1, 6, 6, 6, 1, 1, 1, 2],
					[2, 1, 2, 2, 3, 1, 2, 2, 2, 2, 2],
					[3, 1, 1, 1, 1, 6, 1, 6, 1, 6, 3],
					[2, 3, 2, 2, 3, 3, 2, 2, 2, 3, 2],
				],
			   	initItems: [
					{ row: 0, col: 1, dir: 2, type: "robot0"},
					{ row: 3, col: 7, type: "door", id: 1},
					{ row: 2, col: 9, type: "button", id: 1},
					{ row: 7, col: 7, type: "door", id: 2},
					{ row: 6, col: 9, type: "button", id: 2},
					{ row: 11, col: 7, type: "door", id: 3},
					{ row: 10, col: 9, type: "button", id: 3},
				],
			},
			{
				tiles: [
					[1, 1, 2, 2, 2, 21, 21, 2, 2, 21, 21],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[21, 21, 21, 1, 1, 21, 21, 1, 1, 1, 21],
					[21, 6, 6, 1, 1, 1, 1, 1, 1, 1, 21],
					[1, 1, 2, 2, 2, 21, 21, 1, 2, 2, 21],
					[1, 6, 6, 6, 1, 1, 1, 1, 6, 1, 2],
					[1, 2, 2, 1, 21, 21, 1, 1, 1, 1, 2],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[21, 1, 21, 21, 21, 2, 2, 1, 2, 1, 2],
					[21, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1],
					[21, 1, 1, 21, 21, 21, 1, 21, 21, 1, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[2, 1, 21, 21, 21, 2, 2, 21, 2, 1, 1],
					[2, 3, 2, 2, 2, 21, 21, 21, 2, 2, 2],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "robot0" },
				],
			},
			{
				tiles: [
					[1, 1, 2, 2, 2, 21, 21, 1, 1, 2, 2],
					[2, 6, 1, 1, 6, 1, 1, 1, 1, 1, 21],
					[2, 2, 2, 21, 2, 21, 21, 21, 21, 1, 21],
					[1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 21],
					[2, 1, 2, 2, 2, 21, 21, 21, 2, 2, 21],
					[2, 1, 6, 1, 1, 6, 1, 1, 1, 1, 2],
					[2, 2, 2, 21, 21, 21, 21, 21, 21, 1, 2],
					[21, 1, 1, 1, 1, 1, 1, 1, 6, 1, 2],
					[2, 1, 21, 21, 21, 21, 21, 21, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 6, 1, 6, 2],
					[2, 2, 2, 21, 2, 21, 21, 21, 21, 1, 21],
					[1, 6, 6, 6, 6, 6, 1, 1, 1, 1, 21],
					[2, 1, 2, 2, 2, 21, 21, 21, 2, 21, 21],
					[2, 3, 2, 2, 2, 21, 21, 21, 2, 2, 2],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "robot0" },
				],
			},
			
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}