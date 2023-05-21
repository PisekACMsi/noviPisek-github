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
					itemsExist: "Miški ni uspeo najti sirčka.",
					itemsDontExist: "Čestitam miška je našla sirček, sedaj ga lahko poje in zboli za sirozo.",
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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"forwardSimple",
					"turn"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables", "loops"],
				singleBlocks: ["controls_repeat_ext", "logic_compare", "math_number"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="turn" id="e?gvfW=aOo{bc4u=VrkZ"><field name="PARAM_0">-2</field><next><block type="controls_for" id="PNn8Tti40;18Z9#fb1h]"><field name="VAR">i</field><value name="FROM"><shadow type="math_number" id="}-oKmWq(@9H[_8+}DT(y"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number" id="}@.:uaqAnN)k9MR#2RO["><field name="NUM">3</field></shadow></value><value name="BY"><shadow type="math_number" id="qYmBbs2YOe|VnFJ`-:,@"><field name="NUM">1</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="*T@`ndLVV.EL9=FBSr8n"><value name="TIMES"><shadow type="math_number" id="FH02Dml-=[3V`:q0K9cm"><field name="NUM">10</field></shadow><block type="variables_get" id="uV+qrY=t9m[,#QUjiv`S"><field name="VAR">i</field></block></value><statement name="DO"><block type="forwardSimple" id="3{S+=*AS,mYL]QP}}M.E"></block></statement><next><block type="turn" id="36iWAE`EK3BVT{Rkw*ll"><field name="PARAM_0">2</field><next><block type="controls_repeat_ext" id="`ai)Q`4Yi-u)U,!VMSw4"><value name="TIMES"><shadow type="math_number" id="FH02Dml-=[3V`:q0K9cm"><field name="NUM">10</field></shadow><block type="variables_get" id="d4Y8@`fUbUHJZ0dc~YWL"><field name="VAR">i</field></block></value><statement name="DO"><block type="forwardSimple" id="oTzs#E*bYZ]wLigxj.?)"></block></statement><next><block type="turn" id="e6alb/McDd[nnlNEVQ;]"><field name="PARAM_0">-2</field></block></next></block></next></block></next></block></statement><next><block type="forwardSimple" id="}@0q6EztT{!yDD0*s5|4"><next><block type="forwardSimple" id="=1Bay*?f]4{Ow[X26H|]"><next><block type="turn" id=",~gAe+wyN#ML_~4E+w?R"><field name="PARAM_0">-2</field><next><block type="controls_for" id="]a{3u3.`GI?~mYb`#B2B"><field name="VAR">i</field><value name="FROM"><shadow type="math_number" id="#eDg4kabd-7|~1}aUHr_"><field name="NUM">3</field></shadow></value><value name="TO"><shadow type="math_number" id="B[Vx~g_R#*6R!o5`SLA,"><field name="NUM">1</field></shadow></value><value name="BY"><shadow type="math_number" id="IJ]12b~e3xKFPL}-eOno"><field name="NUM">-1</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="9]f9EOBJ]l@l*,.wQU7t"><value name="TIMES"><shadow type="math_number" id="FH02Dml-=[3V`:q0K9cm"><field name="NUM">10</field></shadow><block type="variables_get" id="mJ~GO/Z:BIQ0d~4[h}gO"><field name="VAR">i</field></block></value><statement name="DO"><block type="forwardSimple" id="J.*4(2sWMrkO!hX#3uG0"></block></statement><next><block type="turn" id="k6INLe#9C*F8RnV]QB`."><field name="PARAM_0">2</field><next><block type="controls_repeat_ext" id="~M4W9Wg[s:8]MNI{c~?Z"><value name="TIMES"><shadow type="math_number" id="FH02Dml-=[3V`:q0K9cm"><field name="NUM">10</field></shadow><block type="variables_get" id="Ra@Hj3(]M)`])+1E?e(7"><field name="VAR">i</field></block></value><statement name="DO"><block type="forwardSimple" id="2:og-EB*`365(/Ue6oag"></block></statement><next><block type="turn" id="IU=12P_=;vJykfdcQHWm"><field name="PARAM_0">-2</field></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'terain.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["mouse.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle: { num: 2, img: "grass.png",  zOrder: 8, category: {'obstacle':true}, },
			reka: { num: 3, img: "reka2.png", zOrder: 3, category: {'obstacle':true}},
			coin: { num: 5, img: "coin.png", zOrder: 2, category: {'coin':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
					[2, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 2],
					[2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 1, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 0, col: 0, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 0, col: 14, value: 2, transOrder: 2, type: "coin" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}