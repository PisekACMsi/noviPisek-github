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
				label: {
					transport: "%1 rožo",
				},
				messages:{
					itemsExist: "Nisi pobral vseh rože.",
					itemsDontExist: "Pobral si vse rože.",
				},
				options:{
					tools:{
						bool:{
							transportable: "rdeča roža"
							}
						}
				},
				errors: {
					nothingToPickUp: "Predmet, ki ga želiš pobrati ni rdeča roža.",
				}
			},
		},
		localBlocks: function(context, strings){
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "sensorBool",
							yieldsValue: true,
							blocklyJson: {
								   "args0": [
									  {
										 "type": "field_dropdown", 
										 "name": "PARAM_0", 
										 "options": [
											[strings["options"]["tools"]["under"], "under"], // special case handling
											[strings["options"]["tools"]["forward"], "0"],
										 ],
									  },
									  {
										 "type": "field_dropdown", 
										 "name": "PARAM_1", 
										 "options": [
											[strings["options"]["tools"]["bool"]["transportable"], "transportable"],
										 ],
										 "check":"String",
									  },
									  {
										"type": "field_dropdown",
										"name": "PARAM_2", 
										"options": [
											[strings["options"]["tools"]["bool"]["category"], "category"],
											[strings["options"]["tools"]["bool"]["notcategory"], "notcategory"],
											],
											"check":"String",
									  },
								   ],
								},
							},
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
					"forwardSimple",
					"turn",
					"turnAround",
					"transport",
					"sensorBool",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic"],
				singleBlocks: ["controls_repeat_ext", "controls_if"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="F)i_1Oez`)n2Trhht,sJ"><value name="TIMES"><shadow type="math_number" id="(REp_j)MH=4*xyKay|9{"><field name="NUM">7</field></shadow></value><statement name="DO"><block type="forwardSimple" id="dUT8`m}SH7;;:ed;pa8p"><next><block type="controls_if" id="7f*0FMtP+[*J8BUq_c[)"><value name="IF0"><block type="sensorBool" id="D|:fuzbsW=(pkWrU;?9~"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">transportable</field></block></value><statement name="DO0"><block type="transport" id="pDe~Dz`cJVTXI3=A#.9L"><field name="PARAM_0">pick</field></block></statement></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable"}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'tile.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["miha.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			pink_flower: { num: 2, img: "m_red.png", zOrder: 2, category: {'transportable':true}, },
			green_flower: { num: 3, img: "m_blue.png", zOrder: 2,},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1,2,3,2,3,2,3,2]
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "robot0" },
				],
			},
			{
				tiles: [
					[1,3,3,2,3,1,2,1]
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "robot0" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}