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
					success: "",
					failure: "",
					itemsExist: "Nisi našel vseh kontrolnih točk",
					itemsDontExist: "Čestitam, našel si vse številke",
					itemsCoincide: "in prispel na cilj",
					itemsDontCoincide: ", vendar nisi prispel na cilj",
				},
			},
		},

		localBlocks: function(context, strings){
			// CUSTOM: first you can define functions for blocks, which need to be attached to "context.robot"
			// this way you can either override existing function definitions from blocklyRobot_lib.js or add new ones.
			// If you are creating new ones, you need to additionaly do the following things:
			// - add strings in languageStrings for keys: "label", "code", "description" and optionaly more,
			// - you need to define the visual design of the block using "customBlocks"
			// If you are making a new function, good advice, always staring with something that works!!
			// - 1st copy an existing block from blocklyRobot_lib.js inside here,
			// - use console.log() and Web Developer Tools to print values in the console, for debugging
			

			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
							{  name: "sensorValue", 
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
										[strings["options"]["tools"]["value"]["number"], "number"],
									 ]
								  },
								  {
									 "type": "field_dropdown", 
									 "name": "PARAM_2", 
									 "options": [
										[strings["options"]["tools"]["value"]["value"], "value"],
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
					"sensorValue",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables", "logic", "loops"],
				singleBlocks: ["controls_repeat_ext", "math_number", "math_arithmetic"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov

			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="LF|`~P?H;:(68KC!F,C(" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="=cBBVmX_mDf1?n7i([xM"><field name="VAR">vsota</field><value name="VALUE"><block type="math_number" id="+Lh|,[:b}4U5gKR*10wN"><field name="NUM">0</field></block></value><next><block type="moveSimple" id="HOvS_mQ7*i/+0+CpRUzP"><field name="PARAM_0">E</field><next><block type="controls_whileUntil" id="f3dX(k:ZUuE@F}[E{HdB"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare" id="j[YdJ=kH,w_WjIB=l--~"><field name="OP">GT</field><value name="A"><block type="variables_get" id="sblUHH-Fzz~GfVh2S7;="><field name="VAR">vsota</field></block></value><value name="B"><block type="math_number" id="6}m~dcSP0:6oWzY|FuS{"><field name="NUM">20</field></block></value></block></value><statement name="DO"><block type="variables_set" id="/f1q0CV_y~-4-!}c8nj;"><field name="VAR">smer</field><value name="VALUE"><block type="sensorValue" id="@=C}VfI+f3yordz3S`ud"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value><next><block type="controls_if" id="eQza!F7~a4UZj5`uaG+q"><value name="IF0"><block type="logic_compare" id="cbT9{|56/udn:)k]mXv8"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="5b9;=}qf!PxBK*]a*mpX"><field name="VAR">smer</field></block></value><value name="B"><block type="math_number" id="Q|iiBZ=?6Lh8;vn-xMcL"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="moveSimple" id="*)eH:wD8w,kWoGbX)4[?"><field name="PARAM_0">E</field><next><block type="variables_set" id="Im*T4;v9p0~:Ep`za;E_"><field name="VAR">koraki</field><value name="VALUE"><block type="sensorValue" id="iEv56JgAsZ~#A`.~0OO+"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value><next><block type="controls_repeat_ext" id="ln=x4bFL|B-3+r18s/d0"><value name="TIMES"><shadow type="math_number" id="oiEei*6`wpI`ih-9kA,M"><field name="NUM">10</field></shadow><block type="variables_get" id="T_sY1+9IXv;Evc]K_3Uc"><field name="VAR">koraki</field></block></value><statement name="DO"><block type="moveSimple" id="D#p`qXCJ(qmWayk;pawE"><field name="PARAM_0">E</field></block></statement><next><block type="variables_set" id="-/68hlM~[zeBAtW{(3r7"><field name="VAR">vsota</field><value name="VALUE"><block type="math_arithmetic" id="GnT;.sNAM-CZ_W76v~8s"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="H*FOZ1[=j@wSSU4(T+SX"><field name="NUM">1</field></shadow><block type="variables_get" id="X9OSguK~njKiZi4oxL#="><field name="VAR">vsota</field></block></value><value name="B"><shadow type="math_number" id="1JgjJ_KdnE](612gD:8{"><field name="NUM">1</field></shadow><block type="sensorValue" id="dvG{[xKo]Bnu)dU4Etim"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value></block></value><next><block type="moveSimple" id="xFEW6Cgdo?d5n)26d{P9"><field name="PARAM_0">E</field></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_if" id="]-KBtaf*rmzxC*/`tmCj"><value name="IF0"><block type="logic_compare" id="Y9{J7wDPx7:sR;:LhC-r"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="~*v82ZQg[Vr!47L5JEB;"><field name="VAR">smer</field></block></value><value name="B"><block type="math_number" id="B3MYNsvp#.Q.?+rlySxd"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="moveSimple" id="WVE?*VvqJ8)4rQjzW)*,"><field name="PARAM_0">S</field><next><block type="variables_set" id="hzf(I;lVOC+11LRkP)c:"><field name="VAR">koraki</field><value name="VALUE"><block type="sensorValue" id="1Im1wBQ!.NV{X)U9PQKk"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value><next><block type="controls_repeat_ext" id="VA@nyDmu][mT:=u7wr4v"><value name="TIMES"><shadow type="math_number" id="oiEei*6`wpI`ih-9kA,M"><field name="NUM">10</field></shadow><block type="variables_get" id="@Xv#k0*bZK1UbZ*ww!9`"><field name="VAR">koraki</field></block></value><statement name="DO"><block type="moveSimple" id="JtRz:~heR3/,Iu(|o-Q{"><field name="PARAM_0">S</field></block></statement><next><block type="variables_set" id="[Q]Zno*8{*c5GA]euVHD"><field name="VAR">vsota</field><value name="VALUE"><block type="math_arithmetic" id="#Hm6m+XgpA)tF~*sKOLs"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="H*FOZ1[=j@wSSU4(T+SX"><field name="NUM">1</field></shadow><block type="variables_get" id="e9w(iTwEK@1Q?w]XrNP?"><field name="VAR">vsota</field></block></value><value name="B"><shadow type="math_number" id="1JgjJ_KdnE](612gD:8{"><field name="NUM">1</field></shadow><block type="sensorValue" id="f~BWB;aDHv2dOLKS+CD~"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value></block></value><next><block type="moveSimple" id=",V9L_Xzm/l~q;Lxj,u=@"><field name="PARAM_0">S</field></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_if" id="YHx{R~5brIC!~bD}r@mw"><value name="IF0"><block type="logic_compare" id="u}wa)0[vuWDOL97,-XT?"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="KcqbQ(99OH.?YHqk0Yle"><field name="VAR">smer</field></block></value><value name="B"><block type="math_number" id="=_ti8xy+g5TU8W-nc!kx"><field name="NUM">3</field></block></value></block></value><statement name="DO0"><block type="moveSimple" id="9:,Z)mUfJGdlElwAuZ~4"><field name="PARAM_0">W</field><next><block type="variables_set" id="Y8;s?GueXc8=~`t;{]#5"><field name="VAR">koraki</field><value name="VALUE"><block type="sensorValue" id="sI5b+=ZwsILK4fa.`eNx"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value><next><block type="controls_repeat_ext" id="n-]L9ggDy0)!J1ZOA17M"><value name="TIMES"><shadow type="math_number" id="oiEei*6`wpI`ih-9kA,M"><field name="NUM">10</field></shadow><block type="variables_get" id="Olhi(FL7J+|f+X*#XHs/"><field name="VAR">koraki</field></block></value><statement name="DO"><block type="moveSimple" id="*W}-.}{FFpl0Qnskh0N;"><field name="PARAM_0">W</field></block></statement><next><block type="variables_set" id="{54::+zAhr|m6S7:[e(:"><field name="VAR">vsota</field><value name="VALUE"><block type="math_arithmetic" id="+(53P7PPdh1Hf`#EUUSG"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="H*FOZ1[=j@wSSU4(T+SX"><field name="NUM">1</field></shadow><block type="variables_get" id="6YcpTDb(nvZ;FX}_S(TN"><field name="VAR">vsota</field></block></value><value name="B"><shadow type="math_number" id="1JgjJ_KdnE](612gD:8{"><field name="NUM">1</field></shadow><block type="sensorValue" id="QlS(XbWIArFGE8`6Wy}f"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value></block></value><next><block type="moveSimple" id="(lh4ng7[*+(OpqE{;5p{"><field name="PARAM_0">W</field></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_if" id="lgx4P!nwQsM1z7?|c.m#"><value name="IF0"><block type="logic_compare" id="oHU3!rNZ]tnqttwzPWmM"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="fKu;UyP#0IW:=VXQRgbZ"><field name="VAR">smer</field></block></value><value name="B"><block type="math_number" id="(UXW,dex1dUcn0K76*mX"><field name="NUM">4</field></block></value></block></value><statement name="DO0"><block type="moveSimple" id="Z(].ERe1Uu/#:D_ZR3=;"><field name="PARAM_0">N</field><next><block type="variables_set" id=";dx3+,GV|;}S)|ub=]UK"><field name="VAR">koraki</field><value name="VALUE"><block type="sensorValue" id="GcYH,Mu*Yg;AP5WNJHi7"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value><next><block type="controls_repeat_ext" id="?7y_#WxRJh2]=cFRp!W*"><value name="TIMES"><shadow type="math_number" id="oiEei*6`wpI`ih-9kA,M"><field name="NUM">10</field></shadow><block type="variables_get" id="HV(3C[Q(z;~(1Vui.da)"><field name="VAR">koraki</field></block></value><statement name="DO"><block type="moveSimple" id="thi140`S+fXLz1t?*]Wa"><field name="PARAM_0">N</field></block></statement><next><block type="variables_set" id=".:zkL.Fln4`!#abBm:oV"><field name="VAR">vsota</field><value name="VALUE"><block type="math_arithmetic" id="HVzxII)~Y/s(-CO8v:WD"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="H*FOZ1[=j@wSSU4(T+SX"><field name="NUM">1</field></shadow><block type="variables_get" id="n|l/2Gw_2((q?hUeem7O"><field name="VAR">vsota</field></block></value><value name="B"><shadow type="math_number" id="1JgjJ_KdnE](612gD:8{"><field name="NUM">1</field></shadow><block type="sensorValue" id="x9RN2,Sq{(us[:!sLzlB"><field name="PARAM_2">value</field><field name="PARAM_1">number</field><field name="PARAM_0">under</field></block></value></block></value><next><block type="moveSimple" id="v}3~=VoHFLrn99pSEu,;"><field name="PARAM_0">N</field></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
				(context, lastTurn) => {},
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'Gasper/grass.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["Gasper/dog_all_8_sides.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8, category: {'robot': true}, },
			checkpoint: { num: 2, img: "", zOrder: 1, category: {'coin':true}, },
			cilj: { num: 4, img: "",side: 80, colour: "vert", category: {"green":true} },
			number: {num: 2, value: 0, zOrder: 2, category: {'number':true},  },
			number0: {num: 100, value: 0, zOrder: 2, category: {'number':true},  },
			number1: {num: 101, value: 1, zOrder: 2, category: {'number':true},  },
			number2: {num: 102, value: 2, zOrder: 2, category: {'number':true},  },
			number3: {num: 103, value: 3, zOrder: 2, category: {'number':true},  },
			number4: {num: 104, value: 4, zOrder: 2, category: {'number':true},  },
			number5: {num: 105, value: 5, zOrder: 2, category: {'number':true},  },
			number6: {num: 106, value: 6, zOrder: 2, category: {'number':true},  },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 106, 1, 1, 1, 1, 1, 1],
					[1, 101, 102, 1, 105, 102, 1, 1],
					[1, 1, 1, 1, 1, 101, 1, 1],
					[1, 103, 1, 1, 1, 104, 1, 1],
					[1, 104, 106, 1, 102, 103, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 3, col: 0, dir: 0, type: "robot0" },
					{ row: 2, col: 1, dir: 0, type: "checkpoint" },
					{ row: 3, col: 1, dir: 0, type: "checkpoint" },
					{ row: 3, col: 2, dir: 0, type: "checkpoint" },
					{ row: 3, col: 4, dir: 0, type: "checkpoint" },
					{ row: 3, col: 5, dir: 0, type: "checkpoint" },
					{ row: 4, col: 5, dir: 0, type: "checkpoint" },
					{ row: 5, col: 5, dir: 0, type: "checkpoint" },
					{ row: 6, col: 5, dir: 0, type: "checkpoint" },
					{ row: 6, col: 4, dir: 0, type: "checkpoint" },
					{ row: 6, col: 2, dir: 0, type: "checkpoint" },
					{ row: 6, col: 1, dir: 0, type: "checkpoint" },
					{ row: 5, col: 1, dir: 0, type: "checkpoint" },
					{ row: 1, col: 1, dir: 0, type: "cilj" },

				],
			},
			{
				tiles: [
					[1, 101, 102, 1, 104, 102, 1, 1],
					[1, 106, 1, 1, 1, 103, 1, 1],
					[1, 101, 1, 1, 1, 1, 1, 1],
					[1, 104, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 105, 1, 1],
					[1, 1, 1, 106, 101, 103, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 3, col: 0, dir: 0, type: "robot0" },
					{ row: 0, col: 2, dir: 0, type: "checkpoint" },
					{ row: 0, col: 4, dir: 0, type: "checkpoint" },
					{ row: 0, col: 5, dir: 0, type: "checkpoint" },
					{ row: 1, col: 1, dir: 0, type: "checkpoint" },
					{ row: 1, col: 5, dir: 0, type: "checkpoint" },
					{ row: 2, col: 1, dir: 0, type: "checkpoint" },
					{ row: 3, col: 1, dir: 0, type: "checkpoint" },
					{ row: 4, col: 5, dir: 0, type: "checkpoint" },
					{ row: 5, col: 3, dir: 0, type: "checkpoint" },
					{ row: 5, col: 4, dir: 0, type: "checkpoint" },
					{ row: 5, col: 5, dir: 0, type: "checkpoint" },
					{ row: 5, col: 2, dir: 0, type: "cilj" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}