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
					transport: "%1 kovanec"
				},
				options:{
					pick: "izkoplji",
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					},
					tools: {
						bool: {
							   transportable: "kovanec"	
						},
					},
				},
				messages:{
					itemsExist: "Ovčka ni pozobala vseh marjetic.",
					itemsDontExist: "Čestitamo, ovčka je pozobala vse marjetice!",
				},
				errors: {
					leavesGrid: "Ovčka je zapustila mrežo!",
				}
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="EW}F7]I5.W/RHDXz(D#W"><value name="TIMES"><shadow type="math_number" id="[`w[4(u+i(Pb9V7]8cf?"><field name="NUM">20</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id=".i(c5!L3]kJ@3Lm(_69`"><value name="TIMES"><shadow type="math_number" id="wSX~:nhtQG,swGQ){Kz+"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="controls_if" id="WF]s+UyLClxAl1QMAHP]"><value name="IF0"><block type="sensorBool" id="oN}FjhQdXVh,W*RMR]}B"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">transportable</field></block></value><statement name="DO0"><block type="transport" id="|AOJw9+Yc_/d/i~b:j(,"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id="gflQaZi-3m/7*[!TPB(u"><field name="PARAM_0">S</field></block></next></block></statement><next><block type="moveSimple" id="oz0qKY9khN,N~!aObamc"><field name="PARAM_0">E</field><next><block type="controls_repeat_ext" id="Hf9eZ`},;v6bis6Fu*gJ"><value name="TIMES"><shadow type="math_number" id="JXLAE/l(]9EgSRt!r)cM"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="controls_if" id="Fx,2CKYl|J+H1F!R)M8c"><value name="IF0"><block type="sensorBool" id="+iLNDHpyHe@mE9iWgP0U"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">transportable</field></block></value><statement name="DO0"><block type="transport" id=";o3a]UG;4Fk=StwY~!Gj"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id="A=,BO*!Rb)gl{dC(h#3G"><field name="PARAM_0">N</field></block></next></block></statement></block></next></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable"}, {}, exist=false) }, 
				
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0.02,
		backgroundColour: "white",
		// backgroundTile: false,
		backgroundTile: "Dirt.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "green_dragon.png", side: 80, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}},
			marker: { num: 2, img: ["hole_coin.svg", "hole.png"], zOrder: 8, category: {'transportable':true}, },
			luknja: { num: 3, img: ["hole.svg", "hole.png"], zOrder: 2, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1],
                    [1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
			   initItems: [
					 { row: 1, col: 0, dir: 0, type: "robot0", dir:0},
					 { row: 1, col: 3, dir: 0, type: "luknja", dir:0},
					 { row: 2, col: 3, dir: 0, type: "luknja", dir:0},
					 { row: 1, col: 6, dir: 0, type: "luknja", dir:0},
					 { row: 2, col: 6, dir: 0, type: "luknja", dir:0},
					 { row: 1, col: 8, dir: 0, type: "luknja", dir:0},
					 { row: 2, col: 8, dir: 0, type: "luknja", dir:0},
					 { row: 1, col: 12, dir: 0, type: "luknja", dir:0},
					 { row: 2, col: 12, dir: 0, type: "luknja", dir:0},
					 { row: 1, col: 14, dir: 0, type: "luknja", dir:0},
					 { row: 2, col: 14, dir: 0, type: "luknja", dir:0},
				  ]
			},
			
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}