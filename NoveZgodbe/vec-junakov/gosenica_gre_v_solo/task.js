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
					changeRobot: "zamenjaj vlogo %1", 
					colour: "LOL %1",
				},
				options:{
					robotName0: "Avtobus", 
					robotName1: "Gosenica", 
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
					itemsDontCoincide: "Gosenica ni prišla v šolo. Poskusi še enkrat.",
					itemsCoincide: "Gosenica je prišla v šolo.",
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
					"forward",
					"transport",
					"sensorBool",
					"changeRobot",
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="forward" id="bi99W4P;N1D:WUIaJ[1."><value name="PARAM_0"><shadow type="math_number" id="Zs}iW}z-b9oK.Q*Eg)09"><field name="NUM">1</field></shadow></value><next><block type="changeRobot" id="WV}RlMe)ip/ao=JWQGb-"><field name="PARAM_0">robot1</field><next><block type="forward" id="NBo.!kN)c4[*t*PsDYVy"><value name="PARAM_0"><shadow type="math_number" id="5*Mt}cA@/[.OHK4@yS9M"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {category: "robot"}, {category: "green"}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		// backgroundColour: "white",
		backgroundTile: "Grass.png",
		borderColour: "black",
		showLabels: false,

		cellSide: 60,	
		numberOfRobots: 2,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "Car.png", side: 60, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}},
			robot1: { img: "Caterpillar_transparent.png", nbStates: 1, zOrder: 2, category: {'robot':true, 'transportable':true}, },
			obstacle: { num: 2, img: "Tree_with_grass.png",  zOrder: 8, category: {'obstacle':true}, },
			grass: { num: 12, img: "Grass.png", zOrder: 2, category: {'color':true}, },
			green: { num: 3, img: "School.png", zOrder: 2, category: {'green':true}, },
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
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
					[5, 5, 5, 5, 5, 11, 5, 5, 3],
					[2, 2, 2, 2, 2, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
			   initItems: [
					 { row: 1, col: 0, type: "robot0", dir:0},
					 { row: 3, col: 5, type: "robot1", dir:6 },
				  ]
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
					[5, 5, 5, 11, 5, 5, 5, 5, 3],
					[2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
			   initItems: [
					 { row: 1, col: 0, type: "robot0", dir:0},
					 { row: 3, col: 3, type: "robot1", dir:6 },
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}