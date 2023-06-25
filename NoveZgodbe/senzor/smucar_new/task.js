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
					transport: "%1 zastava"
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
							   colour: "zastava",
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
				wholeCategories: ["loops","logic", "math","variables"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="YJJR8QNn:wBdm8ddu_j("><field name="VAR">ovinek</field><value name="VALUE"><block type="math_number" id=";SA}n*_1rVl{X5)fh:9."><field name="NUM">0</field></block></value><next><block type="controls_whileUntil" id="A1XS[=dAk6WmfSrO78.o"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare" id="uV,429f}f85Xw``3UJ*G"><field name="OP">LT</field><value name="A"><block type="variables_get" id="er@LxHPiE4JM~EYgS9@L"><field name="VAR">ovinek</field></block></value><value name="B"><block type="math_number" id="MQYM;*2UEPH6[[IqOrz("><field name="NUM">9</field></block></value></block></value><statement name="DO"><block type="controls_whileUntil" id="bIBu??@n)vo_MZ;(BGj}"><field name="MODE">UNTIL</field><value name="BOOL"><block type="sensorBool" id="5Yg1mfhg;hkGS6l:FMMU"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">snowflake</field></block></value><statement name="DO"><block type="controls_if" id="9n#jb0NYQz0Zcj_ebyGY"><value name="IF0"><block type="sensorBool" id=".Tl6x4P/,,Qe0Yd[t__3"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">colour</field></block></value><statement name="DO0"><block type="transport" id="#p/sCg;OhPU`a#,/_P|G"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id="wWI4g5~)ZJ!8|b=dEt4h"><field name="PARAM_0">E</field><next><block type="controls_if" id="@|LX!npp35QsNCVSa`E|"><value name="IF0"><block type="sensorBool" id="]5s;GR.Z2If!:Lh[Lb)B"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">snowflake</field></block></value><statement name="DO0"><block type="variables_set" id="U)f]:n#/EZB3fOmW98Hv"><field name="VAR">ovinek</field><value name="VALUE"><block type="math_arithmetic" id="!]w?`XKOw:zzNGO4voz("><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="SHAy7Ho{oT[XiD4`20.m"><field name="NUM">1</field></shadow><block type="variables_get" id="fb3eAW1#dS0v|z)4vVyB"><field name="VAR">ovinek</field></block></value><value name="B"><shadow type="math_number" id="0yo[UIPB{@le/1!*{-)!"><field name="NUM">1</field></shadow></value></block></value></block></statement></block></next></block></next></block></statement><next><block type="moveSimple" id="aypbVvD=hktocmrIR`o*"><field name="PARAM_0">S</field><next><block type="controls_if" id="I:@Xz[I_KLdlwz[YMjA+"><value name="IF0"><block type="logic_compare" id="]:O_WQ1NA)nGc~.brwVV"><field name="OP">LT</field><value name="A"><block type="variables_get" id="+(/`vlvAbnps}_taR(?Q"><field name="VAR">ovinek</field></block></value><value name="B"><block type="math_number" id="IeE}c(JkFGS3-6ck=eyQ"><field name="NUM">8</field></block></value></block></value><statement name="DO0"><block type="controls_whileUntil" id="Y{Ci/tfc3D72WueuPm.}"><field name="MODE">UNTIL</field><value name="BOOL"><block type="sensorBool" id="jO5FmoCv(Htiy5Qj36Cb"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">snowflake</field></block></value><statement name="DO"><block type="controls_if" id="2.C_VtyC-,M4*i06Prs("><value name="IF0"><block type="sensorBool" id="llzaZ.aa={~lfH~n8doX"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">colour</field></block></value><statement name="DO0"><block type="transport" id="v,v={Bj5A}b/_y_M+rQX"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id="Nl#AfU}#LZxv[?btGTmP"><field name="PARAM_0">W</field><next><block type="controls_if" id="EhLD#Qto27m?[*@g5h+*"><value name="IF0"><block type="sensorBool" id="R[je}c)elL7S]v529pKs"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">snowflake</field></block></value><statement name="DO0"><block type="variables_set" id="2Yl_:6W3C4x*Z/MDjY4b"><field name="VAR">ovinek</field><value name="VALUE"><block type="math_arithmetic" id="BmF]EH:oT*O-SKF:|k+1"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="SHAy7Ho{oT[XiD4`20.m"><field name="NUM">1</field></shadow><block type="variables_get" id="Ctu{Xs;{BbaFrJ7F#6-}"><field name="VAR">ovinek</field></block></value><value name="B"><shadow type="math_number" id="`h4qZdK{K=ldWQ)Azk3p"><field name="NUM">1</field></shadow></value></block></value></block></statement></block></next></block></next></block></statement><next><block type="moveSimple" id=")*n.5?FH,[]P)ubAq!=d"><field name="PARAM_0">S</field></block></next></block></statement></block></next></block></next></block></statement><next><block type="controls_repeat_ext" id="V,y=*atMf=af-m.WdGf*"><value name="TIMES"><shadow type="math_number" id="Y|Sp-:Mw-GQ4HxR2D_{S"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="controls_if" id="0oDtw/Kz9|j.Yj#ayS0m"><value name="IF0"><block type="sensorBool" id="oH~a:]!:5-V2gBa1?|G}"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">colour</field></block></value><statement name="DO0"><block type="transport" id="Nsy,nSbr~ACS_TlP_L#6"><field name="PARAM_0">pick</field></block></statement><next><block type="moveSimple" id="m=*sfjIDi+z0aPIf{DPS"><field name="PARAM_0">W</field></block></next></block></statement></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "colour"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "green"}) },
				
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "white",
		// backgroundTile: false,
		backgroundTile: "Snow.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "Skiier_8_sides.png", side: 80, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true}, dir:3},
			finish: { num: 3, img: "Finish_transparent.png", zOrder: 2, category: {'green':true}, },
			snowflake: { num: 4, img: "Snowflake_transparent.png", zOrder: 1, category:{"snowflake":true}},
			red_flag: { num: 5, img: "Red_flag_transparent.png", zOrder: 1, category: {"colour":true, "transportable":true}, colour:"red"},
			blue_flag: { num: 6, img: "Blue_flag_transparent.png", zOrder: 1, category: {"colour":true, "transportable":true}, colour:"blue"},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
					[1, 4, 1, 1, 1, 1, 1, 6, 1, 1],
					[1, 1, 5, 1, 1, 1, 1, 1, 4, 1],
					[1, 4, 1, 1, 1, 1, 1, 6, 1, 1],
					[1, 1, 5, 1, 1, 1, 1, 1, 4, 1],
					[1, 4, 1, 1, 1, 1, 1, 6, 1, 1],
					[1, 1, 5, 1, 1, 1, 1, 1, 4, 1],
					[1, 4, 1, 1, 1, 1, 1, 6, 1, 1],
					[1, 1, 5, 1, 1, 1, 1, 1, 4, 1],
					[1, 1, 1, 1, 3, 1, 1, 6, 1, 1],   
				],
			   initItems: [
					 { row: 1, col: 1, dir: 0, type: "robot0", dir:0},
				  ]
			},
			
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}