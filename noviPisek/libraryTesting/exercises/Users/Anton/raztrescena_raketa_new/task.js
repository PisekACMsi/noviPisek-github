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
					}
				},
				messages:{
					itemsExist: "Robot ni pobral vseh predmetov",
					itemsDontExist: "Čestitamo robot je pobral vse predmete",
				},
			},
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)

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
		maxInstructions: 7,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"turn",
					"forwardSimple"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="tocy5.4nCklg8jROQdDa"><value name="TIMES"><shadow type="math_number" id=";3v_#182]za@EtCtR@EN"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="forwardSimple" id="dvndEa0d1?KXd?]66?QX"></block></statement><next><block type="turn" id="b.T?kEPNJbGH.pgmHXxr"><field name="PARAM_0">2</field><next><block type="controls_repeat_ext" id="VRkW6Q4a4Na[E|Fk:Z2H"><value name="TIMES"><shadow type="math_number" id="]GL36HTJc2?Qw=lyY;6d"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="forwardSimple" id="FLT[_[LIm078VdkK2K0;"></block></statement></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0.02,
		backgroundColour: "pink",
		// backgroundTile: false,
		backgroundTile: "tile2.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot.png", "red_robot.png"], side: 80, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle: { num: 2, img: "ozadje.png",  zOrder: 8, category: {'obstacle':true}, },
			obstacle2: { num: 3, img: "ozadje_2.png",  zOrder: 8, category: {'obstacle':true}, },
			pill1: { num: 4, img: "streha.png", zOrder: 2, category: {'coin':true}, },
			pill2: { num: 5, img: "pogon.png", zOrder: 2, category: {'coin':true}, },
			pill3: { num: 6, img: "kabina.png", zOrder: 2, category: {'coin':true}, },
			pill4: { num: 7, img: "volan.png", zOrder: 2, category: {'coin':true}, },
			pill5: { num: 8, img: "stol.png", zOrder: 2, category: {'coin':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 1, 1, 1, 1, 1, 1, 1],
					[2, 1, 1, 1, 4, 1, 5, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[3, 1, 1, 1, 1, 1, 6, 1],
					[3, 1, 1, 1, 1, 1, 1, 1],
					[2, 1, 1, 1, 1, 1, 7, 1],
					[1, 1, 1, 1, 1, 1, 8, 1],
					[2, 1, 1, 1, 1, 1, 1, 1]
				 ],
			   initItems: [
					 { row: 1, col: 2, dir: 0, type: "robot0" }
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}