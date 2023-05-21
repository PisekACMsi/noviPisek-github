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
							   green: 'avtobusna postaja',
							   transportable: "gosenica"	
						},
					},
				},
				messages:{
					itemsDontCoincide: "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
					itemsCoincide: "Super robot je dosegel cilj",
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
							[strings["options"]["tools"]["bool"]["green"], "green"],
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="~ax3O=s`Kz{4(.7gUJwH"><value name="TIMES"><shadow type="math_number" id="H81lKCg+H*9/+s36=e@Q"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="wWI4g5~)ZJ!8|b=dEt4h"><field name="PARAM_0">W</field></block></statement><next><block type="controls_repeat_ext" id="(URq;;j[p9VNT[ea`pF~"><value name="TIMES"><shadow type="math_number" id="/GH[?+wHB67zM9yjl/tr"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="controls_if" id=":*J}.@iqsE#N*6`42bwb"><value name="IF0"><block type="sensorBool" id="ey2WM.o)`bFRkR*9/vCc"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">transportable</field></block></value><statement name="DO0"><block type="transport" id="*GH1~Jr,Hp73@nUGQmpL"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id=",iX!q2E*edM#/S;T5!fu"><field name="PARAM_0">N</field></block></next></block></statement><next><block type="controls_repeat_ext" id="-#{el*@ZlfwO)vnv4H{,"><value name="TIMES"><shadow type="math_number" id="~7o;Lj1wuK+W756hOP4z"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="EI]-nq7c}cBH2/VJnCy]"><field name="PARAM_0">E</field></block></statement><next><block type="moveSimple" id="]M/5CiU-LiYg6VecjOOk"><field name="PARAM_0">N</field><next><block type="transport" id="km*2[WcpC3e#Mwf*-/ME"><field name="PARAM_0">drop</field></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "green"}) },
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "marble"}, {category: "green"}) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "white",
		// backgroundTile: false,
		backgroundTile: false,
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "Car.png", side: 60, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}},
			obstacle: { num: 2, img: "Tree_with_grass.png",  zOrder: 8, category: {'obstacle':true}, },
			grass: { num: 12, img: "Grass.png", zOrder: 2, category: {'color':true}, },
			green: { num: 3, img: "School.png", zOrder: 2, category: {'green':true}, },
			marble: { num: 10, img: "Caterpillar_transparent.png", zOrder: 2, category: {'transportable':true}, },
			hole: { num: 11, img: "Road_horizontal_with_bus_sign.png", zOrder: 2, category: {'transportable':true}, },
			cesta_navzgor: { num: 4, img: "Road_vertical.png", zOrder: 2, category: {'color':true}, },
			cesta_vodoravna: { num: 5, img: "Road_horizontal.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek1: { num: 6, img: "Road_curved4.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek2: { num: 7, img: "Road_curved1.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek3: { num: 8, img: "Road_curved2.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek4: { num: 9, img: "Road_curved1.png", zOrder: 2, category: {'color':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 3],
					[2, 6, 11, 5, 5, 8],
					[2, 4, 2, 2, 2, 2],
					[2, 4, 2, 2, 2, 2],
					[2, 4, 2, 2, 2, 2],
					[2, 4, 2, 2, 2, 2],
					[2, 9, 5, 5, 5, 5]
				],
			   initItems: [
					 { row: 6, col: 5, dir: 0, type: "robot0", dir:4},
					 { row: 4, col: 1, type: "marble" },
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}