function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				startingBlockName: "Program 2",	
				categories: {				
				   actions: "Gibanje",
				},
				label: {								
					changeRobot: "zamenjaj vlogo %1 HAHA", 
					colour: "LOL %1",
				},
				options:{
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					},
					tools: {
						bool: {
							   transportable: "kamen"	
						},
					},
				},
				messages:{
					itemsDontCoincide: "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
					itemsCoincide: "Robot je dosegel cilj",
					itemsExist: "Robot ni pobral vseh vzorcev",
					itemsDontExist: "Kamenčki grejo brrrrrrrrrrrrrrrr",
				},
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
					{  name: "sensorBool", 
						yieldsValue: true,
						blocklyJson: {
						"args0": [
						{
						"type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
							[strings["options"]["tools"]["bool"]["transportable"], "transportable"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
							[strings["options"]["tools"]["bool"]["category"], "category"],

                        ],
                     },
                  ],
               },
            },
					],
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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"moveSimple",
					"transport",
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="P4][R0M*7=a|}TnK268k"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="!QLU{1J7tpUesT#RQEcO"><value name="TIMES"><shadow type="math_number" id="L,*Ezo0e@?_}u#2Za|tE"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="~ax3O=s`Kz{4(.7gUJwH"><value name="TIMES"><shadow type="math_number" id="H81lKCg+H*9/+s36=e@Q"><field name="NUM">8</field></shadow></value><statement name="DO"><block type="controls_if" id="9n#jb0NYQz0Zcj_ebyGY"><value name="IF0"><block type="sensorBool" id=".Tl6x4P/,,Qe0Yd[t__3"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">transportable</field></block></value><statement name="DO0"><block type="transport" id="#p/sCg;OhPU`a#,/_P|G"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id="wWI4g5~)ZJ!8|b=dEt4h"><field name="PARAM_0">E</field></block></next></block></statement><next><block type="moveSimple" id="xkP*GneaDdRLz@m81.gA"><field name="PARAM_0">S</field><next><block type="moveSimple" id="[esRye/U(7{M+*`9Two{"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="TmNW9qr.gs=|~.2yAgXs"><value name="TIMES"><shadow type="math_number" id="}Sr?Vj|xi`;`-Y/o|+{*"><field name="NUM">8</field></shadow></value><statement name="DO"><block type="controls_if" id="/kIp:v/d@VkG{G~h)_i_"><value name="IF0"><block type="sensorBool" id="8:8ncgg)IJa`dX9a4EbF"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">transportable</field></block></value><statement name="DO0"><block type="transport" id="Ec=IDVgG8D@45dyK_Lik"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id=";7ZrH1lfzJCFp7k6rO/U"><field name="PARAM_0">W</field></block></next></block></statement><next><block type="moveSimple" id="`HAv9;~Tx]w[34Mxi~1V"><field name="PARAM_0">S</field><next><block type="moveSimple" id="EtgSznl2:xJE[.So(xUS"><field name="PARAM_0">S</field></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "sample"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "green"}) },
				
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "white",
		// backgroundTile: false,
		backgroundTile: "Dirt.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "green_robot2.png", side: 80, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}, dir:3},
			obstacle: { num: 2, img: "Rock_formation_with_dirt.png",  zOrder: 8, category: {'obstacle':true}, },
			green: { num: 3, img: "Finish2.png", zOrder: 2, category: {'green':true}, },
			sample: { num: 6, img: "Rock.png", zOrder: 8, category: {'transportable':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2],
					[2, 6, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2],
					[1, 1, 1, 1, 6, 6, 1, 1, 1, 1, 2],
					[2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2],
					[2, 1, 6, 6, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 6, 1, 2],
					[2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 6, 1, 6, 2],
					[2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2],
					[1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
			   initItems: [
					 { row: 0, col: 1, dir: 0, type: "robot0", dir:2},
				  ]
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