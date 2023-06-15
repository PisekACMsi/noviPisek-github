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
					"moveSimple",
					"transport"
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="?PYegoooe[j?}[Q@H/0J" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="KxkOIo,R)eKdK~3TvJ8F"><field name="PARAM_0">S</field><next><block type="moveSimple" id="oF@bL82}Y(#Ek.-!k3[m"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="*Vs8:7pQ9u*tI#*P2|r8"><value name="TIMES"><shadow type="math_number" id="{sh}SHWJeT{=!r!D6.UT"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="PMY!s?/M~0/{K2=65W5k"><field name="PARAM_0">E</field><next><block type="transport" id="4.C,Ar@`KIy*Ufy+*Qnd"><field name="PARAM_0">pick</field><next><block type="controls_repeat_ext" id="-r8BS?,4ABz91v-EDN0b"><value name="TIMES"><shadow type="math_number" id="[nLCPfLP2`GBkV|s(]On"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="moveSimple" id="f4{Hm{~a8|}([JOpg+67"><field name="PARAM_0">E</field></block></statement><next><block type="transport" id="_ImVR*vde6OJ(c}#LDzZ"><field name="PARAM_0">drop</field><next><block type="moveSimple" id="|[AB9)rDp4!6!0P{*6C7"><field name="PARAM_0">W</field><next><block type="moveSimple" id="tmYn~vAKuP?;v/gJbMlN"><field name="PARAM_0">W</field><next><block type="moveSimple" id=":!,64yxD4BZqYPJJAQSV"><field name="PARAM_0">W</field><next><block type="transport" id="|s:MNmckXWJiMU##OdXn"><field name="PARAM_0">pick</field><next><block type="moveSimple" id="u@L5vt`hyn2Ja`Tn[3CZ"><field name="PARAM_0">E</field><next><block type="moveSimple" id="y7_-Z]MqW4b4)y!6#XC)"><field name="PARAM_0">E</field><next><block type="moveSimple" id="ESB_0|K@EWZNExhn4jj4"><field name="PARAM_0">E</field><next><block type="transport" id="JX_(d8kTWlpNP]j3b:cG"><field name="PARAM_0">drop</field><next><block type="moveSimple" id="``lcaFW2X0Uz1ATOyd*`"><field name="PARAM_0">W</field><next><block type="moveSimple" id="@1aWb2A3`wGg#)ow5O-Z"><field name="PARAM_0">W</field><next><block type="transport" id="yaB~HzY/TuukCxmG9PyG"><field name="PARAM_0">pick</field><next><block type="moveSimple" id="Vf9rz-g@I,[faLljTyW#"><field name="PARAM_0">E</field><next><block type="moveSimple" id="DBa.Y0SRe@v`T,!Q8)lq"><field name="PARAM_0">E</field><next><block type="transport" id="4to+NnKQrClV#.rw#kHa"><field name="PARAM_0">drop</field><next><block type="controls_repeat_ext" id="s=*+x{@dH,;g`E.v@)us"><value name="TIMES"><shadow type="math_number" id="M0GAAO7|xGq6mM`oC_#Z"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="moveSimple" id="f7Ya=]MpdMlB*vyPo;I?"><field name="PARAM_0">W</field></block></statement><next><block type="moveSimple" id="!pk!|e|26(ekJg?cX];O"><field name="PARAM_0">S</field><next><block type="moveSimple" id="yDpB?=O=d0E@_:SnvQAg"><field name="PARAM_0">S</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "gnezdo"}, {type: "jajce"}, "value", {}, {}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'Gasper/grass2.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["Gasper/bee_all_8_sides.png"], side: 80, nbStates: 8, offsetX: -7, zOrder: 8, category: {'robot': true}, },
			jajce: { num: 3, img: ["Gasper/egg_red.png", "Gasper/egg_blue.png"], side:50, zOrder: 8, category: {'transportable':true}, transOrder:0},
			// gnezdo: {num: 4, colour: ["red", "blue"], zOrder: 1},
			gnezdo: {num: 4, img: ["Gasper/nest_red.png", "Gasper/nest_blue.png"], zOrder: 1},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 4, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, value: 0, dir: 2, type: "robot0"},
					{ row: 4, col: 6, value: 1, type: "gnezdo"},
					{ row: 4, col: 6, value: 3, type: "gnezdo"},
					{ row: 4, col: 6, value: 5, type: "gnezdo"},
					{ row: 2, col: 6, value: 2, type: "gnezdo"},
					{ row: 2, col: 6, value: 4, type: "gnezdo"},
					{ row: 4, col: 1, value: 1, type: "jajce"},
					{ row: 4, col: 3, value: 3, type: "jajce"},
					{ row: 4, col: 4, value: 5, type: "jajce"},
					{ row: 2, col: 1, value: 0, type: "jajce"},
					{ row: 2, col: 3, value: 2, type: "jajce"},
					{ row: 2, col: 4, value: 4, type: "jajce"},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}