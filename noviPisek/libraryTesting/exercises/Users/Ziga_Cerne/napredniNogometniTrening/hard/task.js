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
					itemsExist: "Žoga ni prispela na cilj. Poskusi ponovno. Saj nisi popolnoma nesposoben.",
					itemsDontExist: "Bravo zadel si gol.",
				},
				errors: {
					obstacle: "Pazi, drevo!"
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
		maxInstructions: 20,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  ["moveSimple"],
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="@9T1_{JJ5zvR2~m3rk)f" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="HXU3L|~h,HRM@HoVc+(2"><value name="TIMES"><shadow type="math_number" id="pj=vHc[.ZX?w10bKD;ny"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="4,/AIwSjc71t#SAg5F8,"><value name="TIMES"><shadow type="math_number" id="rg|;A_y:M-9TFg~VJE)R"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="moveSimple" id="*A2z8IrUDIOp(Gd+zVE;"><field name="PARAM_0">E</field></block></statement><next><block type="controls_repeat_ext" id="E`Abx6A-5EV(0opsXq!B"><value name="TIMES"><shadow type="math_number" id="XKlR+u6vY-/P8T?Sj;sA"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="lvQ4iioKylzxF,})cX?-"><field name="PARAM_0">S</field></block></statement><next><block type="controls_repeat_ext" id="52@VpJCgRa!d/j{;7XDj"><value name="TIMES"><shadow type="math_number" id="rzg2:kF81hkSfIWN7BHN"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="moveSimple" id="J-un`hf7zait9pmAle6T"><field name="PARAM_0">W</field></block></statement><next><block type="controls_repeat_ext" id=".mSY,G#9Rtl@+LXnY;Hn"><value name="TIMES"><shadow type="math_number" id="9JqBVf_;,tBF9Fued0oT"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="5N]XJB0B=`:sKOsV~yMc"><field name="PARAM_0">S</field></block></statement><next><block type="controls_repeat_ext" id="`3HDv{gDT.QHvaG,t{bi"><value name="TIMES"><shadow type="math_number" id="D3FKdbZ0nF6fdEkfI(#Q"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="moveSimple" id="oJYOR+le/AnI}D{-vQQr"><field name="PARAM_0">E</field></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		noBorders: false,
		backgroundColour: false,
		backgroundTile: 'tile.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot.png", "red_robot.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true, 'obstacle':true, 'transportable':true}, },
			obstacle: { num: 2, img: "obstacle1.png",  zOrder: 8, category: {'obstacle':true}, },
			coin: {num: 3, img: "coin.png", zOrder: 0, transOrder: 0, category: {'coin':true}, },
			paint: {num: 4, zOrder: 1, colour: "red", },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
					[1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
					[1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
					[2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
					[2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
					[2, 2, 2, 2, 2, 2, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 1, 1, 3],
				],
				initItems: [
					{ row: 0, col: 0, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 12, col: 9, type: "paint"},
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}