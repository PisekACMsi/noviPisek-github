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
							   colour: "marker",
							   snowflake: "snežinka",
							   green: "cilj"
						},
					},
				},
				messages:{
					itemsDontCoincide: "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
					itemsCoincide: "Robot je dosegel cilj",
					itemsExist: "Robot ni pobral vseh zastav",
					itemsDontExist: "Zastave grejo brrrrrrrrrrrrrrrr",
				},
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  name: "transport",
							blocklyJson: {
								"args0": [
									{
										"type": "field_dropdown", 
										"name": "PARAM_0", 
										"options": [
										[strings["options"]["pick"], "pick"],
										],
										"check":"String",
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
								[strings["options"]["tools"]["bool"]["snowflake"], "snowflake"],
								[strings["options"]["tools"]["bool"]["green"], "green"],
							],
						},
						{
							"type": "field_dropdown", 
							"name": "PARAM_2", 
							"options": [
								[strings["options"]["tools"]["bool"]["category"], "category"],
								[strings["options"]["tools"]["bool"]["notcategory"], "notcategory"],

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
				singleBlocks: ["controls_repeat_ext", "controls_if"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="2FHJC~1`J7](nL`y6]vt"><value name="TIMES"><shadow type="math_number" id="s_3I1p1-9)Dtx0//#juU"><field name="NUM">20</field></shadow></value><statement name="DO"><block type="controls_if" id="Y/P9_xKj1cRXh@Yq~adZ"><value name="IF0"><block type="sensorBool" id="+.jefSMRHl+nkHr)-P7F"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">colour</field></block></value><statement name="DO0"><block type="moveSimple" id="MO7UjHZnCbB:kVLE.Om="><field name="PARAM_0">N</field></block></statement><next><block type="moveSimple" id="Hu]B-7nfUr#S0-1kjhym"><field name="PARAM_0">E</field></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "green"}) },
				
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
			robot0: { img: "tabornik.png", side: 80, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}, dir:3},
						obstacle: { num: 2, img: "obstacle.png", side: 60, category: {"obstacle": true} },
						green: { num: 3, img: "cilj.png", zOrder: 2, category: {'green':true}, },
			marker: { num: 4, img: "markacija.png", zOrder: 1, category:{"colour":true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 3, 2],
					[2, 2, 2, 2, 2, 1, 1, 4, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 4, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
				],
			   initItems: [
					 { row: 4, col: 1, dir: 0, type: "robot0", dir:0},
				  ]
			},
			
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}