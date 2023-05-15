function initTask(subTask) {
	subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
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
		actionDelay: 200,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 0,			//omejitev števila ukazov


		includeBlocks: {			//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				printer: ["print","read","readInteger"],
			},
			variables:["st_sobe","zavoji","ost"],
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic","variables","math","texts"],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},

		},
		startingExample: { //vnaprej podana koda ukazov
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id=":1/NOOcW+g|/@PsR6nd;"><field name="VAR">st_sobe</field><value name="VALUE"><block type="read" id="D~Cb6P0_WgG~R)V(?`3o"></block></value><next><block type="variables_set" id="uO0`XDoGI=ORBmnBV]G]"><field name="VAR">zavoji</field><value name="VALUE"><block type="text" id="C;i6RB=F9H_dVXHj-*E9"><field name="TEXT"></field></block></value><next><block type="controls_whileUntil" id="m2(35Lpd6Ajj?y8N6L!H"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare" id="Z3Pba@_:r3F;VxI;/0U0"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="UNLNq4?m]oF2cv_*fSe*"><field name="VAR">st_sobe</field></block></value><value name="B"><block type="math_number" id="]Kd8}`FyNWcO#imW1pjS"><field name="NUM">1</field></block></value></block></value><statement name="DO"><block type="variables_set" id="vXmCes_Ax(=!b?qC8~h)"><field name="VAR">ost</field><value name="VALUE"><block type="math_modulo" id="lq_9q@mG4!Z=Do5T76{;"><value name="DIVIDEND"><shadow type="math_number" id="fElAMU(pR=hP4Q9[-JJa"><field name="NUM">64</field></shadow><block type="variables_get" id="DHHc83.A@tzngWtz2{mo"><field name="VAR">st_sobe</field></block></value><value name="DIVISOR"><shadow type="math_number" id="E!D(U#N~MALAvIO+dWT+"><field name="NUM">2</field></shadow></value></block></value><next><block type="variables_set" id="eEo56X52vQUzG@L.o;p."><field name="VAR">st_sobe</field><value name="VALUE"><block type="math_arithmetic" id="1YV[lcRbTX1l};pz9(uh"><field name="OP">DIVIDEFLOOR</field><value name="A"><shadow type="math_number" id="ApL(+YtY91{qrDmM[@kd"><field name="NUM">1</field></shadow><block type="variables_get" id=";dLbfl#:+g00Qcxrv-rQ"><field name="VAR">st_sobe</field></block></value><value name="B"><shadow type="math_number" id="e-DNLTfLBD;x?,gi`L7?"><field name="NUM">2</field></shadow></value></block></value><next><block type="controls_if" id="s2bbSZ/GsxeZN133kmfW"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="pB-LvS)w/=ZmUMbi}1+G"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="=_{,8W74|[/FJFz@E[@s"><field name="VAR">ost</field></block></value><value name="B"><block type="math_number" id="oW#!t(fgoG07rmR]n6WW"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set" id=",Q@rA];pPj,.x-p.o@TN"><field name="VAR">zavoji</field><value name="VALUE"><block type="text_join" id="m,elZGzEVuzy`97.V~bH"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="t:h9J~?qF+2e{{{HMQRv"><field name="TEXT">L</field></block></value><value name="ADD1"><block type="variables_get" id="-xwc@tQ~`jxe:he/KKzb"><field name="VAR">zavoji</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set" id="fL,xUdD8:*XPMeW}F)~)"><field name="VAR">zavoji</field><value name="VALUE"><block type="text_join" id="u~H*XvNNf_m.V:WVFa=t"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="-T#e.:Crqj{EJ.q2ofBD"><field name="TEXT">D</field></block></value><value name="ADD1"><block type="variables_get" id="OvU49{GDJ@e:1-/wKjf~"><field name="VAR">zavoji</field></block></value></block></value></block></statement></block></next></block></next></block></statement><next><block type="print" id="W)kD-LgMX/qU.9}ELFLe"><value name="PARAM_0"><block type="variables_get" id="rlKKES!F!{8II5`+2O`0"><field name="VAR">zavoji</field></block></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id=":1/NOOcW+g|/@PsR6nd;"><field name="VAR">st_sobe</field><value name="VALUE"><block type="read" id="D~Cb6P0_WgG~R)V(?`3o"></block></value><next><block type="variables_set" id="uO0`XDoGI=ORBmnBV]G]"><field name="VAR">zavoji</field><value name="VALUE"><block type="text" id="C;i6RB=F9H_dVXHj-*E9"><field name="TEXT"></field></block></value><next><block type="controls_if" id="s2bbSZ/GsxeZN133kmfW"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="pB-LvS)w/=ZmUMbi}1+G"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="=_{,8W74|[/FJFz@E[@s"><field name="VAR">st_sobe</field></block></value><value name="B"><block type="math_number" id="oW#!t(fgoG07rmR]n6WW"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="variables_set" id=",Q@rA];pPj,.x-p.o@TN"><field name="VAR">zavoji</field><value name="VALUE"><block type="text_join" id="m,elZGzEVuzy`97.V~bH"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="t:h9J~?qF+2e{{{HMQRv"><field name="TEXT">L</field></block></value><value name="ADD1"><block type="variables_get" id="-xwc@tQ~`jxe:he/KKzb"><field name="VAR">zavoji</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set" id="fL,xUdD8:*XPMeW}F)~)"><field name="VAR">zavoji</field><value name="VALUE"><block type="text_join" id="u~H*XvNNf_m.V:WVFa=t"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="-T#e.:Crqj{EJ.q2ofBD"><field name="TEXT">D</field></block></value><value name="ADD1"><block type="variables_get" id="OvU49{GDJ@e:1-/wKjf~"><field name="VAR">zavoji</field></block></value></block></value></block></statement><next><block type="print" id="Qu8lj`08BPVe0PB-BhaU"><value name="PARAM_0"><block type="variables_get" id="+w=N.IxWQs4o]X~GZc=*"><field name="VAR">zavoji</field></block></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				//input: "5\n5\n10\n2\n7\n3",
				input: "17",
				output: "LLLD",
			},
			{
				input: "20",
				output: "LDLL",
			},
			{
				input: "32",
				output: "LLLLL",
			},
			{
				input: "34",
				output: "LLLDL",
			},
			{
				input: "100",
				output: "DLLDLL",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
