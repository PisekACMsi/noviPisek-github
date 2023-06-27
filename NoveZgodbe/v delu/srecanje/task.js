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
					transport: "%1 Pastirčka",
					sensorBool: "%1 %3 %2",
				},
				options:{
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					},
					tools: {
						under: "tukaj",
						bool: {
							   green1: 'Mlekarna',
							   transportable: "Pastir",
							   green2: "Potok"

						},
					},
				},
				messages:{
					itemsDontCoincide: "Super! Peter je prispel do mlekarne.",
					itemsCoincide: "Pišek in gosenica sta prispela na cilja",
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
							[strings["options"]["tools"]["bool"]["green1"], "green1"],
							[strings["options"]["tools"]["bool"]["green2"], "green2"],
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="~ax3O=s`Kz{4(.7gUJwH"><value name="TIMES"><shadow type="math_number" id="H81lKCg+H*9/+s36=e@Q"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="wWI4g5~)ZJ!8|b=dEt4h"><field name="PARAM_0">N</field></block></statement><next><block type="controls_repeat_ext" id="(URq;;j[p9VNT[ea`pF~"><value name="TIMES"><shadow type="math_number" id="/GH[?+wHB67zM9yjl/tr"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="controls_if" id=":*J}.@iqsE#N*6`42bwb"><value name="IF0"><block type="sensorBool" id="ey2WM.o)`bFRkR*9/vCc"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">transportable</field></block></value><statement name="DO0"><block type="transport" id="*GH1~Jr,Hp73@nUGQmpL"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id=",iX!q2E*edM#/S;T5!fu"><field name="PARAM_0">E</field></block></next></block></statement><next><block type="controls_repeat_ext" id="-#{el*@ZlfwO)vnv4H{,"><value name="TIMES"><shadow type="math_number" id="~7o;Lj1wuK+W756hOP4z"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="controls_if" id="t,7e6GvEvE]dGfMrmzXr"><value name="IF0"><block type="sensorBool" id="/(k+i?.Bwd98)C/hPO!8"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">green2</field></block></value><statement name="DO0"><block type="transport" id="!,;lGx-r~wS~su48.*5j"><field name="PARAM_0">drop</field></block></statement><next><block type="moveSimple" id="/twY0hPP,UitEAk#(hxH"><field name="PARAM_0">S</field></block></next></block></statement><next><block type="controls_repeat_ext" id="p?|,O_ZS)B/YWF7gjxtQ"><value name="TIMES"><shadow type="math_number" id="GMA{,Bly4YSo93~~PN_}"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="controls_if" id="|(omaC=o[(gv}-_RRXuD"><value name="IF0"><block type="sensorBool" id="nZm#P3DLzmENim_4cNAW"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">green2</field></block></value><statement name="DO0"><block type="transport" id="Q~qN)+i#RG=dT:+rV)Ce"><field name="PARAM_0">drop</field></block></statement><next><block type="moveSimple" id="_O5I@RSl|G61iNTykhs:"><field name="PARAM_0">E</field></block></next></block></statement><next><block type="controls_repeat_ext" id="CQ#cJc59@}1.A-o{khK9"><value name="TIMES"><shadow type="math_number" id="s@#Yg(GUw4.Z)6]kkyme"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="moveSimple" id="W]tpM]DkSBoFjBv5_#q;"><field name="PARAM_0">N</field></block></statement><next><block type="controls_repeat_ext" id="STt(c?JbLnZcq?.3A8*g"><value name="TIMES"><shadow type="math_number" id=".h-b_]5sOOG_Sa{Nc3E("><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="k{@Sm?*nb|Jx_idDP9S]"><field name="PARAM_0">W</field></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {category: "robot"}, {category: "green"}, "value") },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "",
		backgroundTile: "Grass.png",
		borderColour: "black",
		showLabels: false,

		cellSide: 60,	
		numberOfRobots: 2,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "Car.png", side: 60, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}, value:1},
			obstacle: { num: 2, img: "Tree_with_grass.png",  zOrder: 8, category: {'obstacle':true}, },
			grass: { num: 12, img: "Grass.png", zOrder: 2, category: {'color':true}, },
			green1: { num: 3, img: "School.png", zOrder: 2, category: {'green1':true, 'green':true}, value:1},
			green2: { num: 12, img: "house3.png", zOrder: 2, category: {'green2':true, 'green':true}, value:2},
			robot2: {img: "Caterpillar_transparent.png", zOrder: 5, category: {'robot':true, 'transportable':true}, value:2},
			hole: { num: 11, img: "Road_horizontal_with_bus_sign.png", zOrder: 2, category: {'transportable':true}, },
			cesta_navzgor: { num: 4, img: "Road_vertical.png", zOrder: 2, category: {'color':true}, },
			cesta_vodoravna: { num: 5, img: "Road_horizontal.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek1: { num: 6, img: "Road_curved4.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek2: { num: 7, img: "Road_curved1.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek3: { num: 8, img: "Road_curved2.png", zOrder: 2, category: {'color':true}, },
			cesta_ovinek4: { num: 9, img: "Road_curved_transparent3.png", zOrder: 2, category: {'color':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 3, 5, 9, 1],
					[6, 5, 5, 5, 9, 2, 1, 4, 1],
					[4, 1, 2, 2, 4, 2, 1, 4, 1],
					[4, 1, 2, 2, 12, 5, 5, 8, 1],
					[4, 1, 2, 2, 2, 2, 1, 1, 1],
					[4, 1, 1, 1, 1, 1, 1, 1, 1]
				],
			   initItems: [
					 { row: 6, col: 0, dir: 0, type: "robot0", dir:6},
					 { row: 2, col: 3, type: "robot2" },
				  ]
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 3, 5, 9, 1],
					[6, 5, 5, 5, 9, 2, 1, 4, 1],
					[4, 1, 2, 2, 4, 2, 1, 4, 1],
					[4, 1, 2, 2, 7, 5, 12, 8, 1],
					[4, 1, 2, 2, 2, 2, 1, 1, 1],
					[4, 1, 1, 1, 1, 1, 1, 1, 1]
				],
			   initItems: [
					 { row: 6, col: 0, dir: 0, type: "robot0", dir:6},
					 { row: 2, col: 2, type: "robot2" },
				  ]
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 3, 5, 9, 1],
					[6, 5, 5, 5, 9, 2, 1, 4, 1],
					[4, 1, 2, 2, 4, 2, 1, 4, 1],
					[4, 1, 2, 2, 7, 12, 5, 8, 1],
					[4, 1, 2, 2, 2, 2, 1, 1, 1],
					[4, 1, 1, 1, 1, 1, 1, 1, 1]
				],
			   initItems: [
					 { row: 6, col: 0, dir: 0, type: "robot0", dir:6},
					 { row: 2, col: 2, type: "robot2" },
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}