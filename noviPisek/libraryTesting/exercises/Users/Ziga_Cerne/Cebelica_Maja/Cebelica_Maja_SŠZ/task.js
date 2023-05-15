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
					itemsDontCoincide: "Čebela ni nabrala vsega prahu. Poskusi še enkrat.",
					itemsCoincide: "Izkoriščevalski kmet bo mastno zaslužil.",
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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"move",
					"moveSimple",
					"transport"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables"],
				singleBlocks: ["controls_repeat_ext", "procedures_defnoreturn", "math_number", "math_arithmetic"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="?PYegoooe[j?}[Q@H/0J" deletable="false" movable="false" editable="false" x="141" y="0"><next><block type="variables_set" id="`VK_`!/([`3,;uE{XR@`"><field name="VAR">premik</field><value name="VALUE"><block type="math_number" id="q_XAku*5I*:bug8Bt{la"><field name="NUM">3</field></block></value><next><block type="controls_repeat_ext" id="[vpnoGVb@ZD/+/[_#9Cs"><value name="TIMES"><shadow type="math_number" id=";F/6q;1cVWNc@j9VOclU"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="procedures_callnoreturn" id="iE1f:GgtH}ATIJKkZTLM"><mutation name="Vrsta"><arg name="prej"></arg><arg name="potem"></arg></mutation><value name="ARG0"><block type="variables_get" id="_|jLTQhDR{81H@mkywVU"><field name="VAR">premik</field></block></value><value name="ARG1"><block type="math_arithmetic" id="oMmY+Y53bYU+G{xF6_p9"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="4!xF[tvjDE3,I:_p{Kd3"><field name="NUM">7</field></shadow></value><value name="B"><shadow type="math_number" id="Kg=}.XI7@dOq2HYC~g1/"><field name="NUM">1</field></shadow><block type="variables_get" id="5h6Pg`A)2+z-99~G/(DQ"><field name="VAR">premik</field></block></value></block></value><next><block type="moveSimple" id="JX53zsUD/3Ej[s5=*gnd"><field name="PARAM_0">S</field><next><block type="variables_set" id="G[;fR(ZKTf4_sUAgAA3T"><field name="VAR">premik</field><value name="VALUE"><block type="math_arithmetic" id=".lQ@+y*Xh~s*-s{}8Is?"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="Q7i*AP[RiXu9gK6-fU0g"><field name="NUM">1</field></shadow><block type="variables_get" id=":lwwiYU?+6j};`91SvC`"><field name="VAR">premik</field></block></value><value name="B"><shadow type="math_number" id="2Ev/K(OUO:]9wMi)Oe}`"><field name="NUM">1</field></shadow></value></block></value></block></next></block></next></block></statement><next><block type="procedures_callnoreturn" id="kw1SEF=?{tGEt56jgWrg"><mutation name="Vrsta"><arg name="prej"></arg><arg name="potem"></arg></mutation><value name="ARG0"><block type="variables_get" id="ePa+q85VMSh`FR_Xd7HN"><field name="VAR">premik</field></block></value><value name="ARG1"><block type="math_arithmetic" id="j`J[9#5Us=2vWu`L-`?c"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="xW[Y/T(C_o~Ms?Z*]g.F"><field name="NUM">7</field></shadow></value><value name="B"><shadow type="math_number" id="Kg=}.XI7@dOq2HYC~g1/"><field name="NUM">1</field></shadow><block type="variables_get" id="qqsNIASO:Pr{+Yis`5t_"><field name="VAR">premik</field></block></value></block></value></block></next></block></next></block></next></block><block type="procedures_defnoreturn" id="!.p]H;PXajtyJ{FRK9X(" x="0" y="411"><mutation><arg name="prej"></arg><arg name="potem"></arg></mutation><field name="NAME">Vrsta</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_repeat_ext" id="ENq-3d,q-J1R}sp9|QKJ"><value name="TIMES"><shadow type="math_number" id="IC+0qnk(002wKd0{EC#E"><field name="NUM">4</field></shadow><block type="variables_get" id="57LS)dbiZX2IWS1vs!wh"><field name="VAR">prej</field></block></value><statement name="DO"><block type="move" id=")klfkS!vpCT8J(}nehP`"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="~IrB=982o8ApzhLWOhJC"><field name="NUM">1</field></shadow></value></block></statement><next><block type="transport" id="M{+sj!BOL#eC6~H]5h(1"><field name="PARAM_0">pick</field><next><block type="controls_repeat_ext" id="9XoGm=J04cFfWT9Xe)gS"><value name="TIMES"><shadow type="math_number" id=":GGc[.|A/`5*CjC+a-~Y"><field name="NUM">10</field></shadow><block type="variables_get" id="_2DK`j1=p83!j!wufJ-("><field name="VAR">potem</field></block></value><statement name="DO"><block type="move" id="cD[rN_5h)K/z/4tmGU{/"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id=")yp;180H)*hkNZB*R([a"><field name="NUM">1</field></shadow></value></block></statement><next><block type="transport" id="..ttgxS64MI~Ujylpx/w"><field name="PARAM_0">drop</field><next><block type="variables_set" id="zxdLW@e`|g}B386TpkKK"><field name="VAR">koliko</field><value name="VALUE"><block type="math_arithmetic" id="{as1f1L9L!8?8m_I*G!l"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="HQrq}vqaR4~:)OX@a4kc"><field name="NUM">3</field></shadow><block type="variables_get" id="_nMkR|vpNzwb_~~G4=]B"><field name="VAR">prej</field></block></value><value name="B"><shadow type="math_number" id="Kg=}.XI7@dOq2HYC~g1/"><field name="NUM">1</field></shadow><block type="variables_get" id="vSziZT~{J+d=6aklTR[/"><field name="VAR">potem</field></block></value></block></value><next><block type="controls_repeat_ext" id="=hEHU#7yK:ZRIk#}}Owj"><value name="TIMES"><shadow type="math_number" id="|95uYabnfBQaOY9XlLGz"><field name="NUM">10</field></shadow><block type="variables_get" id="xN~PL{tt8V_`G[ouME//"><field name="VAR">koliko</field></block></value><statement name="DO"><block type="move" id="F0o;)rsItB1t:K)-7a9j"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="8p@d6lPzTD|DsZm.82?a"><field name="NUM">1</field></shadow></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></statement></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "prah"}, {type: "sat"}, "colour", {}, {}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		noBorders: false,
		backgroundColour: false,
		backgroundTile: 'tile.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["bee.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			cvet: { num: 2, img: "flower.png", zOrder: 2, category: {}, },
			prah: { num: 3, img: "flowerPrah.png", zOrder: 1, category: {'transportable':true}, transOrder:0},
			sat: {num: 4, img: ["honeycomb1.png", "honeycomb2.png"], zOrder: 1, colour: ['red','green','blue'] },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 3, 1, 1, 1, 4],
					[1, 1, 1, 3, 1, 1, 1, 1, 4],
					[1, 1, 3, 1, 1, 1, 1, 1, 4],
				],
				initItems: [
					{ row: 0, col: 1, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 0, col: 4, value: 0, type: "cvet"},
					{ row: 1, col: 3, value: 0, type: "cvet"},
					{ row: 2, col: 2, value: 0, type: "cvet"},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}