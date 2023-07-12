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
					itemsDontCoincide: "Janko in Metka sta še zmeraj izgubljena.",
					itemsCoincide: "Čestitam, varno sta prišla domov..",
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
							marker: "kamen",
							goal: "dom",
							
						},
						value: {
							kamen: 'kamna2a'
						},
						nitems: {
							kamen: "kamena2"
						}
					},
				},
			},
		},

		localBlocks: function(context, strings){
			console.log(strings["options"]["tools"]["bool"]);
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
                           [strings["options"]["tools"]["bool"]["marker"], "marker"],
						   [strings["options"]["tools"]["bool"]["goal"], "goal"],
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
					"turn",
					"sensorBool"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_whileUntil", "controls_if", "controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="?PYegoooe[j?}[Q@H/0J" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_whileUntil" id="5hg@L(f.*Wz]zjD=vLER"><field name="MODE">UNTIL</field><value name="BOOL"><block type="sensorBool" id="cUrnN||~LtKp4E~iV(Si"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">goal</field></block></value><statement name="DO"><block type="controls_if" id="JgFs*9VvL|JT9Zs,d6+#"><value name="IF0"><block type="sensorBool" id="ac1;r,KaayU|P!c,q5,4"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">marker</field></block></value><statement name="DO0"><block type="turn" id="jO`Qns[;R3iu{GA1)HBt"><field name="PARAM_0">2</field></block></statement><next><block type="forward" id="gawy]bt6kO8-rG_vawpb"><value name="PARAM_0"><shadow type="math_number" id="cXjS}.?gM{(!:H+W8/.y"><field name="NUM">1</field></shadow></value></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {type: "dom"}, {}, {}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'grass.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_all_8_sides.png"], side: 70, nbStates: 9, offsetX: -5, zOrder: 8,
						category: {'robot': true}, },
			drevo: { num: 2, img: "Tree_with_grass.png", zOrder: 2, side: 60, category: {"obstacle":true}, },
			kamen: { num: 3, img: "rocks.png", zOrder: 1, category: {"marker":true}, transOrder:0},
			dom: {num: 4, img: ["yellow_house.png"], zOrder: 1, category: {"goal": true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 3, 1, 2],
					[2, 1, 2, 1, 2, 2, 2, 1, 1, 2],
					[2, 2, 3, 1, 1, 1, 3, 1, 1, 2],
					[2, 1, 1, 3, 1, 3, 1, 1, 1, 2],
					[2, 2, 1, 1, 2, 1, 1, 1, 2, 2],
					[2, 4, 1, 1, 1, 3, 1, 1, 1, 2],
					[2, 1, 1, 3, 1, 1, 3, 1, 1, 2],
					[2, 2, 3, 1, 1, 1, 1, 3, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 1, col: 1, value: 0, dir: 0, type: "robot0", id:1},
				],
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 3, 1, 2],
					[2, 1, 2, 1, 2, 2, 2, 1, 1, 2],
					[2, 2, 3, 1, 1, 1, 3, 1, 1, 2],
					[2, 1, 1, 3, 1, 3, 1, 1, 1, 2],
					[2, 2, 1, 1, 2, 1, 1, 1, 2, 2],
					[2, 4, 1, 1, 1, 3, 1, 1, 1, 2],
					[2, 1, 1, 3, 1, 1, 3, 1, 1, 2],
					[2, 2, 3, 1, 1, 1, 1, 3, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 1, col: 1, value: 0, dir: 0, type: "robot0", id:1},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}