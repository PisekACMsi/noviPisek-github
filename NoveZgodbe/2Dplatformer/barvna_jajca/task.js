function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
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
					pick: "poberi",
				},
				messages:{
					failure: "Ojoj! ",
					success: "Bravo! ",
					itemsDontCoincide: "Vsa jajčka niso v pravih košarah. Poskusi še enkrat!",
					itemsCoincide: "Pišek je pravilno pospravil vsa jajčka.",
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
			
			var customBlocks = {};
			return customBlocks;
		},

		hasGravity: true,
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
		actionDelay: 100,						//parameter za časovni zamik med izvajanjem ukazov -  ne deluje??
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 100,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"forward",
					"forwardSimple",
					"turnAround",
					"move1d",
					"jump",
					"jump1d",
					"transport",

				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				singleBlocks: ["controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="oJ.9SC,aa~J|k~(2m-@c" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="forward" id="=irnN{2vwwuNU{fn-s]g"><value name="PARAM_0"><shadow type="math_number" id="orKdfqjPGX4aWwo2R-/h"><field name="NUM">4</field></shadow></value><next><block type="jump1d" id="bsbS~D=2o`fNh1E-)8n@"><field name="PARAM_0">up</field></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="oJ.9SC,aa~J|k~(2m-@c" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="SZVW(ERS25QrM(3D,=uy"><field name="TIMES">10</field><statement name="DO"><block type="forward" id="!}JRpa1JBs6w`fnIy0a3"><value name="PARAM_0"><shadow type="math_number" id="lfCaOh+6HBdqdJ]aqjrc"><field name="NUM">1</field></shadow></value><next><block type="controls_if" id="RJi)+lN+!LCGtPX8y6(K"><value name="IF0"><block type="sensorBool1D" id="f-nmiiC8}B3z!jkQZi9C"><field name="PARAM_0">up</field><field name="PARAM_2">category</field><field name="PARAM_1">number</field></block></value><statement name="DO0"><block type="jump1d" id="9J0t4OE{VG],(X7G1,n1"><field name="PARAM_0">up</field></block></statement></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="oJ.9SC,aa~J|k~(2m-@c" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="SZVW(ERS25QrM(3D,=uy"><field name="TIMES">10</field><statement name="DO"><block type="forward" id="!}JRpa1JBs6w`fnIy0a3"><value name="PARAM_0"><shadow type="math_number" id="lfCaOh+6HBdqdJ]aqjrc"><field name="NUM">1</field></shadow></value><next><block type="controls_if" id="RJi)+lN+!LCGtPX8y6(K"><value name="IF0"><block type="logic_compare" id="C?1I)Wljzq7./oZ8HNG|"><field name="OP">EQ</field><value name="A"><block type="math_number" id="ob*2.G#!Qa*~MSawc}jz"><field name="NUM">13</field></block></value><value name="B"><block type="sensorValue1D" id="`f9[8C3[K6IAr4e~;HT#"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">up</field></block></value></block></value><statement name="DO0"><block type="jump1d" id="9J0t4OE{VG],(X7G1,n1"><field name="PARAM_0">up</field></block></statement></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="oJ.9SC,aa~J|k~(2m-@c" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="forward" id="ml;~l}9I;PccQWCT4wHs"><value name="PARAM_0"><shadow type="math_number" id="Sm7P=On@MU7c#~~Va}2R"><field name="NUM">1</field></shadow></value><next><block type="destroy1D" id="b7Z*z=Vt,@7ZAePhP~!H"><field name="PARAM_1">obstacle</field><field name="PARAM_0">down</field><next><block type="forward" id="FA3;nUu3E}{dwb.o*xu("><value name="PARAM_0"><shadow type="math_number" id=",/m*xY!+;MTEQma1A)ks"><field name="NUM">3</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="oJ.9SC,aa~J|k~(2m-@c" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="pW-J[g6EmX~0fhP!xixd"><field name="TIMES">3</field><statement name="DO"><block type="transport" id="ibVtT~!3g|EHd:TtIIPd"><field name="PARAM_0">pick</field><next><block type="forward" id="rAUbn;iWi~DK.sX?!*FG"><value name="PARAM_0"><shadow type="math_number" id="~z74t7,mzs(Ms]iI_/.N"><field name="NUM">1</field></shadow></value></block></next></block></statement><next><block type="forward" id="wV!hz8Do(cGd!WeR|(zP"><value name="PARAM_0"><shadow type="math_number" id=",[AK~JqvQbluXyfB4Z-D"><field name="NUM">1</field></shadow></value><next><block type="turnAround" id="NNSD#6y{wPoM-5Xp4uJL"><next><block type="controls_repeat" id="~_HL7CUPwlG~CWh}e)}e"><field name="TIMES">3</field><statement name="DO"><block type="forward" id="c./(#})azsiKI9rutNRP"><value name="PARAM_0"><shadow type="math_number" id="@:GglK@mE2/Nwin!FMxK"><field name="NUM">1</field></shadow></value><next><block type="transport" id="1ZzUTfd_WjD-=5yf?mIw"><field name="PARAM_0">drop</field></block></next></block></statement></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "marble"}, {type: "hole"}, ["colour"]) },
		computeGrade: robotGradeFunctions.allOrNothing,
			  
		border: 0.,
		backgroundColour: 'lightblue',
		backgroundTile: false,
		borderColour: false,
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "pisek_all_8_sides.png", side: 80, nbStates: 9, offsetX: -14, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img: "grass4.png", zOrder: 8, category: {'obstacle':true},},
			marble: {num: 8, img: ["egg.png","egg_red.png","egg_blue.png"], zOrder: 2, colour: ['yellow','red','blue'], category: {'transportable':true}, },
			hole: {num: 8, img: ["nest_yellow.png","nest_red.png","nest_blue.png"], zOrder: 1, colour: ['yellow','red','blue'] },
		},
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,2,2,2,2],
					[1,1,1,1,1,2,2,2,2,2],
					[1,1,1,1,2,2,2,2,2,2],
					[1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1],
					[2,2,2,1,2,1,2,2,2,2],
				],
				initItems: [
					{ row: 1, col: 8, dir: 4, type: "robot0", id: 1},
					{ row: 1, col: 6, value: 0, type: "marble"},
					{ row: 2, col: 5, value: 1, type: "marble"},
					{ row: 3, col: 4, value: 2, type: "marble"},
					{ row: 6, col: 9, value: 0, type: "hole"},
					{ row: 6, col: 8, value: 1, type: "hole"},
					{ row: 6, col: 7, value: 2, type: "hole"},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}