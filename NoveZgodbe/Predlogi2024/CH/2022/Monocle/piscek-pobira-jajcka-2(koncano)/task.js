function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		userTaskData: {
			title: document.title,
			subject: $(".exerciseText").first().text(),
			about: {
				authors: "Razvojna skupina Pišek",
				license: "CC BY-NC 4.0",
			}
		},
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
					itemsExist: "Pišek ni pobral vseh jajčk. ",
					itemsDontExist: "Pišek je pobral vsa jajčka. ",
				},
	
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {};
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
		maxInstructions: 11,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					//"move",
					"forwardSimple",
					"turn",  
					"transport",   
					//"turnAround",
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],//hočem le opcijo premKNI SE NE PREMKANI SE ZA=========================================================	
				singleBlocks: ['controls_repeat_ext'],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id=":i_juV}c55I8l}u5T9N}"><value name="TIMES"><shadow type="math_number" id="nk@N[.~nZ-ojAtiq0o!3"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="forwardSimple" id="+@9{yp8]o|bmdpc0,9;q"><next><block type="transport" id="of1+uX3EDNkr6IBM1Xs,"><field name="PARAM_0">pick</field><next><block type="forwardSimple" id="Q3Mp98ChYuS:oU/e~9Av"></block></next></block></next></block></statement><next><block type="turn" id="J7q,g;Evgui82?mqtM;h"><field name="PARAM_0">2</field><next><block type="forwardSimple" id="V_Ri+_l)emGk31=xJGy/"><next><block type="controls_repeat_ext" id=";gCNt+)yOE)+#fMtR:~I"><value name="TIMES"><shadow type="math_number" id="2LM4Phm5_pTh@k_mQzLd"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="forwardSimple" id="Gf2LI#wepEef,N_0XDs1"><next><block type="transport" id="~5,U0o-(/K~Sb~RS6Icd"><field name="PARAM_0">pick</field><next><block type="forwardSimple" id="!GYCwr@[6J2j!,2C@E?!"></block></next></block></next></block></statement><next><block type="forwardSimple" id="d:1iz1jrS7W=/WUp*AAH"><next><block type="transport" id="2l|mM8aX9p?}7~@gg;sq"><field name="PARAM_0">pick</field></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,//0000000000000000000000000000000000000000000000000000000000000 kako prevrimo pozicijo
			
		border: 0.05,
		backgroundColour: "green",
		backgroundTile: "grass3.png",
		borderColour: "darkgreen",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_all_8_sides.png"], side: 75, nbStates: 9, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["mango_tree_transparent.png"], zOrder: 1, category: {'obstacle': true}},
			coin: {num:3, img:["egg.png"],zOrder: 8, category:{"transportable":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 3, 1, 3, 1, 3, 1, 3, 1],
					[1, 2, 2, 1, 2, 1, 1, 1, 1],
					[2, 2, 2, 1, 2, 2, 1, 1, 3],
					[2, 1, 2, 1, 1, 1, 1, 2, 1],
					[1, 1, 1, 2, 1, 1, 2, 1, 3],
					[2, 1, 2, 1, 1, 1, 2, 1, 1],
					[1, 1, 1, 2, 1, 2, 2, 2, 3],
					[2, 1, 2, 2, 1, 1, 2, 1, 1],
					[2, 2, 1, 2, 1, 1, 1, 1, 3],

					
						
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "robot0" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}