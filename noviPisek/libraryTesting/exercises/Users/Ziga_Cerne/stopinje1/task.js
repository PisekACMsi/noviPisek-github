function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
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
					itemsExist: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
					itemsDontExist: "Wooooooooooooooo",
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
					   		colour: 'stopinje'
							
						},
					},
				},
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "turn", 
						params: ["Number"],
						blocklyJson: {
						   "args0": [
							  {
								 "type": "field_dropdown", 
								 "name": "PARAM_0", 
								 "options": [
									[strings["options"]["move"]["right"], "2"],
									[strings["options"]["move"]["left"], "6"],
								 ],
							  },
						   ],
						},
					},
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
						   [strings["options"]["tools"]["bool"]["colour"], "colour"],
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
					"forwardSimple",
					"turn",
					"sensorBool"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_whileUntil", "controls_repeat_ext", "controls_if"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="?PYegoooe[j?}[Q@H/0J" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="usrc9DY]#_XpELZ4fIcp"><value name="TIMES"><shadow type="math_number" id="Y0G#[HUfopq8u[Fh,bbl"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="turn" id="Jb]FNed5tij`GxZFvXt]"><field name="PARAM_0">6</field></block></statement><next><block type="controls_repeat_ext" id="CfRzk00~|JS|GnmmES5*"><value name="TIMES"><shadow type="math_number" id=",up]-vbXSsFA+OWi::xe"><field name="NUM">31</field></shadow></value><statement name="DO"><block type="forwardSimple" id="`HqI00d?V2;A?Zkiy#,-"><next><block type="controls_if" id="3f{?(@?}gui0.0{pxE=j"><value name="IF0"><block type="sensorBool" id="NTb0J.KE.ia6pDuu;F@A"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">colour</field></block></value><statement name="DO0"><block type="turn" id="7Ky5HyDXkqE~WMELuihr"><field name="PARAM_0">6</field></block></statement></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'Gasper/grass2.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["Gasper/bee_all_8_sides.png"], side: 70, nbStates: 8, offsetX: -10, zOrder: 8,
						category: {'robot': true}},
			// drevo: { num: 2, img: "vilica.png", zOrder: 2, side: 80, category: {"obstacle":true}, },
			seme: { num: 3, img: "Gasper/seed.png", zOrder: 1, category: {"coin":true}, transOrder:0},
			stopinja: {num: 4, img: ["Gasper/footsteps.png"], zOrder: 1, category: {"colour": true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 4, 1, 3, 3, 4, 1],
					[1, 1, 1, 1, 1, 1, 3, 1],
					[1, 1, 1, 4, 3, 4, 3, 1],
					[1, 3, 1, 4, 1, 1, 3, 1],
					[1, 3, 4, 1, 3, 4, 1, 1],
					[1, 4, 3, 3, 3, 1, 4, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 1, col: 1, value: 0, dir: 0, type: "robot0", id:1},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}