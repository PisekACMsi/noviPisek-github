function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				categories: {				
				   actions: "Gibanje",
				},
				options:{
					move: {
						north: "gor",
						south: "dol",
						east: "desno",
						west: "levo",
					 }
				},
				messages:{
					itemsCoincide: "Čestitam, odprl si sef. Poberi ves denar in pobegni v Mehiko.",
         			itemsDontCoincide: "Napačna kombinacija. Policija je že na poti.",
				},
			},
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)
		localBlocks: function(context, strings){
			// CUSTOM: first you can define functions for blocks, which need to be attached to "context.robot"
			// this way you can either override existing function definitions from blocklyRobot_lib.js or add new ones.
			// If you are creating new ones, you need to additionaly do the following things:
			// - add strings in languageStrings for keys: "label", "code", "description" and optionaly more,
			// - you need to define the visual design of the block using "customBlocks"
			// If you are making a new function, good advice, always staring with something that works!!
			// - 1st copy an existing block from blocklyRobot_lib.js inside here,
			// - use console.log() and Web Developer Tools to print values in the console, for debugging
			

			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "sensorRowCol", 
							yieldsValue: true,
							blocklyJson: {
								"args0": [
									{
										"type": "field_dropdown", 
										"name": "PARAM_0", 
										"options": [
										[strings["options"]["tools"]["row"], "row"],
										[strings["options"]["tools"]["col"], "col"],
										],
									},
									{
										"type": "field_dropdown", 
										"name": "PARAM_1", 
										"options": [
										[strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
										[strings["options"]["tools"]["bool"]["transportable"], "transportable"],
										[strings["options"]["tools"]["bool"]["robot"], "robot"],
										[strings["options"]["tools"]["bool"]["number"], "number"],
										[strings["options"]["tools"]["bool"]["colour"], "colour"],
										[strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
										],
									},
									{
										"type": "field_dropdown", 
										"name": "PARAM_2", 
										"options": [
										[strings["options"]["tools"]["bool"]["category"], "category"],
										[strings["options"]["tools"]["bool"]["has"], "undefined"],
										],
									},
								],
							},
							},
							{  name: "sensorValue", 
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
										[strings["options"]["tools"]["value"]["number"], "number"],
									 ]
								  },
								  {
									 "type": "field_dropdown", 
									 "name": "PARAM_2", 
									 "options": [
										[strings["options"]["tools"]["value"]["value"], "value"],
									 ],
								  },
							   ],
							},
						 },
						 {  name: "alterValue",
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
                           [strings["options"]["tools"]["value"]["number"], "number"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["alter"]["value"], "value"],
                        ],
                     },
                     {
                        "type": "input_value", 
                        "name": "PARAM_3", 
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
					"move",
					"moveSimple",
					"sensorValue",
					"alterValue",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables"],
				singleBlocks: ["controls_repeat_ext", "math_number", "math_arithmetic"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="tNfYqGlw54{=t}`cPM)+"><value name="TIMES"><shadow type="math_number" id="sst/ieXK=B8G0@{U5ux}"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id=";;={3z+hvS|KD!#ojSjA"><field name="PARAM_0">S</field><next><block type="variables_set" id=".c~]|rb:icdxh4D2=su)"><field name="VAR">prva</field><value name="VALUE"><block type="math_number" id=";SYBcx.Cr[xZM1}34Zg_"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="C~jd.CUG/`Hb/U(ED3.+"><value name="TIMES"><shadow type="math_number" id="[+uF*Wlb16[f(rOa[]KZ"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="[+h19-Ja-Fk-I:1Sh/gS"><field name="PARAM_0">E</field><next><block type="variables_set" id="~TL=TgL(+`autgxvGCDJ"><field name="VAR">prva</field><value name="VALUE"><block type="math_arithmetic" id="O;*]=r4wf9#|N[D`s.x="><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="gNjsK~O1vGrV:Lw3HTtS"><field name="NUM">1</field></shadow><block type="variables_get" id="-D}vyA_dMztB810fB*w9"><field name="VAR">prva</field></block></value><value name="B"><shadow type="math_number" id="diN0tKR[l!PGxBc?(`2M"><field name="NUM">1</field></shadow><block type="sensorValue" id="{IBR[/Y=c.FL+kDolZ#="><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value></block></value></block></next></block></statement><next><block type="moveSimple" id="g]}Y8OYUs*{Qizgu4:S?"><field name="PARAM_0">E</field><next><block type="moveSimple" id="ZbQ@X?z)ofGGRgp~.:Pj"><field name="PARAM_0">E</field><next><block type="alterValue" id="8(F@btk)Tl]ea3jPptq,"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field><value name="PARAM_3"><block type="variables_get" id="];=#u3XBCsMuai[!/OSM"><field name="VAR">prva</field></block></value><next><block type="controls_repeat_ext" id="|U5I5stOv`(O/D!KM`jK"><value name="TIMES"><shadow type="math_number" id="+u)bayDhLC*wpU0zxu)m"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="moveSimple" id="p8Ur7cZo,6,S4j*5V_kw"><field name="PARAM_0">W</field></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		
		
		
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "rezultat"}, {type: "number"}, ["value"]) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0.05,
		backgroundColour: "pink",
		// backgroundTile: false,
		backgroundTile: "Gasper/grass2.png",
		borderColour: "red",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["Gasper/pisek_all_8_sides.png", "red_robot.png"], side: 60, nbStates: 9, offsetX: -6, zOrder: 8,
						category: {'robot': true}, },
			number: {num: 2, value: 0, zOrder: 2, category: {'number':true},  },
			number0: {num: 100, value: 0, zOrder: 2, category: {'number':true},  },
			number1: {num: 101, value: 1, zOrder: 2, category: {'number':true},  },
			number2: {num: 102, value: 2, zOrder: 2, category: {'number':true},  },
			number3: {num: 103, value: 3, zOrder: 2, category: {'number':true},  },
			number4: {num: 104, value: 4, zOrder: 2, category: {'number':true},  },
			number5: {num: 105, value: 5, zOrder: 2, category: {'number':true},  },
			rezultat: { num: 3, img: "",  zOrder: 8, }

		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 100, 101, 101, 102, 1, 2, 1],
					[1, 100, 101, 105, 100, 1, 2, 1],
					[1, 101, 102, 103, 102, 1, 2, 1],
					[1, 103, 101, 103, 102, 1, 2, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "robot0"},
					{ row: 1, col: 6, value: 4, type: "rezultat"},
					{ row: 2, col: 6, value: 6, type: "rezultat"},
					{ row: 3, col: 6, value: 8, type: "rezultat"},
					{ row: 4, col: 6, value: 9, type: "rezultat"},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}