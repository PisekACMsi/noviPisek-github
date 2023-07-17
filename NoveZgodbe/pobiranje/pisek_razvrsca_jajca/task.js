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
					itemsDontCoincide: "Pišek ni pravilno pospravil vseh jajc.",
					itemsCoincide: "Čestitam. Pridn pridn Pišek.",
				},
				options:{
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					}
				},
			},
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
					"forwardSimple",
					"transport",
					"turn",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="?PYegoooe[j?}[Q@H/0J" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="(HOv}/96_39[W?t8DXxx"><value name="TIMES"><shadow type="math_number" id="u2T=h|dxSQAfCL8,q_kL"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="Z:?rHOWlZ{]_#0Bx=:+_"><value name="TIMES"><shadow type="math_number" id="i1E+#pe/@7SvZj=.=J]o"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="forwardSimple" id="F5]=vSxyZL6TyM;*Fevt"><next><block type="transport" id="IIX8yxQhdq0:f+L-Mv0g"><field name="PARAM_0">pick</field></block></next></block></statement><next><block type="forwardSimple" id="3+cF.?GKm_u+n]6xQ`r8"><next><block type="turn" id="mw~xtg.ZLs9#/f70F[8W"><field name="PARAM_0">-2</field><next><block type="forwardSimple" id="@j|((ovaM+E!g,1a.:w:"><next><block type="forwardSimple" id="9+/}+TH_-rcZ*TCr8JxP"><next><block type="turn" id="A*y74m~BwfQc=jgt#tW}"><field name="PARAM_0">-2</field></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block><block type="controls_repeat_ext" id="ExzH?1*((5LNjUZ6_8xq" x="218" y="339"><value name="TIMES"><shadow type="math_number" id="}c(J)a]xgno*yH!YWPoQ"><field name="NUM">8</field></shadow></value><statement name="DO"><block type="transport" id="?oH)q*nwt/SDfHj_Ja5H"><field name="PARAM_0">drop</field></block></statement></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {category: "transportable"}, {category: "hole"}, ['colour']) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.01,
		backgroundColour: false,
		backgroundTile: 'grass3.png',
		borderColour: 'lightgreen',

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_all_8_sides.png"], side: 80, nbStates: 9, offsetX: -7, zOrder: 8, category: {'robot': true}, },
			marbleR: { num: 31, img: "egg_red.png", zOrder: 7, category: {'transportable':true}, colour: 'red'},
			marbleB: { num: 32, img: "egg_blue.png", zOrder: 7, category: {'transportable':true}, colour: 'blue'},
			holeR: { num: 41, img: "nest_red.png", zOrder: 6, category: {'hole':true}, colour: 'red'},
			holeB: { num: 42, img: "nest_blue.png", zOrder: 6, category: {'hole':true}, colour: 'blue'},
			obstacle: {num: 5, img: 'mango_tree_transparent.png', zOrder: 1, category: {'obstacle': true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
					[5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5],
					[5, 31, 5, 32, 5, 31, 5, 32, 5, 41, 5],
					[5, 32, 5, 31, 5, 32, 5, 31, 5, 42, 5],
					[5, 1, 1, 1, 5, 1, 1, 1, 5, 5, 5],
					[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
				],
				initItems: [
					{ row: 1, col: 1, value: 0, dir: 2, type: "robot0"},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}