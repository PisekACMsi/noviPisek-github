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
			variables:["koliko", "najvec", "trenutno", "ena_nazaj", "dva_nazaj"],
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic","variables","math","texts", "functions"],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},

		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="FulGtPvbx13NRS~!6*Kf"><field name="VAR">koliko</field><value name="VALUE"><block type="read" id="(vtjj(mvEIFf5{Pm/F/D"></block></value><next><block type="text_print_noend" id="7=3=w?[wQJPnFbrRT!:A"><value name="TEXT"><shadow type="text" id="oiTMxyQFFBqsrKy+|z6H"><field name="TEXT">abc</field></shadow><block type="text" id="5}Hk7KB)9`]]OU(ihKp/"><field name="TEXT">TUKAJ NEKAJ DELČKOV SE MANJKA</field></block></value><next><block type="controls_repeat_ext" id="O,c,Vo;PbFdDyxENgn[X"><value name="TIMES"><shadow type="math_number" id="is:3u|_4}tvjrS*Fg/lG"><field name="NUM">10</field></shadow><block type="variables_get" id="1mzoYv*]n2WE+!~u}8@P"><field name="VAR">koliko</field></block></value><statement name="DO"><block type="variables_set" id="l{_fU3vVA?IIL(U?3w?i"><field name="VAR">trenutno</field><value name="VALUE"><block type="readInteger" id="E4x;Y2!d)YUa@#l#1h.2"></block></value><next><block type="controls_if" id="+W9=2-SAx115EjG{6!F!"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="n(FS[@99iKfJ_K0_:1|,"><field name="OP">GTE</field><value name="A"><block type="variables_get" id="-JQhby{eFcvoUqwT,J9{"><field name="VAR">ena_nazaj</field></block></value><value name="B"><block type="math_arithmetic" id="e*7I7!_=j]@W5~ZiyvqO"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="`Oe*g#H)3]8=Fk@/w+#U"><field name="NUM">1</field></shadow><block type="variables_get" id="I]D9YqcMN3@Cdb|B)4}U"><field name="VAR">trenutno</field></block></value><value name="B"><shadow type="math_number" id="s1]micVtbst{A6O+RbeK"><field name="NUM">1</field></shadow><block type="variables_get" id="eDNO~82q/Qi=-HjlyY+Q"><field name="VAR">dva_nazaj</field></block></value></block></value></block></value><statement name="DO0"><block type="print" id="i-3a|XFWzB*6_F2T:Nn-"><value name="PARAM_0"><block type="text" id="gEG4v}Lhv;7}vKm5(02t"><field name="TEXT">TUKAJ MANJKA DELČEK</field></block></value></block></statement><statement name="ELSE"><block type="print" id="nH1-8)??cmwgzDDt:-W?"><value name="PARAM_0"><block type="text" id="5YB|d:[u;?2Y],MeLli?"><field name="TEXT">TUKAJ MANJKA DELČEK</field></block></value></block></statement><next><block type="print" id="8j+,]Go,Bdq6e[Z=AZlk"><value name="PARAM_0"><block type="text" id="E_lG)!PfndCn|[#CyR?)"><field name="TEXT">TUKAJ NEKAJ DELCKOV SE MANJKA</field></block></value></block></next></block></next></block></statement><next><block type="print" id="K_~)c1|2g5m0RRTd6dSd"><value name="PARAM_0"><block type="variables_get" id="/XK)PUGg0r-1x@}rkbA3"><field name="VAR">najvec</field></block></value></block></next></block></next></block></next></block></next></block><block type="variables_set" id="hy9.9aO1([=yya9q~/DJ" x="783" y="455"><field name="VAR">st_ucencev_nad_75</field><value name="VALUE"><block type="math_number" id="?I4q.ICYp1/fIPjMeCDG"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="jmcN2ym3FNF1ZQ1m~fVZ"><value name="TIMES"><shadow type="math_number" id="u.#vsyKmFjS]q~2e3{{M"><field name="NUM">10</field></shadow></value><next><block type="print" id="Z#Sb]|/WnqDFQW0qv3yZ"><value name="PARAM_0"><block type="variables_get" id="D!G((XOs)3qBe,UBeh5~"><field name="VAR">povprecna_vrednost</field></block></value><next><block type="print" id="WY])[a6MK/S_tuxw|MQ0"><value name="PARAM_0"><block type="text" id="0~:i7=~KjSE~sRrbK9LO"><field name="TEXT"> </field></block></value><next><block type="print" id="wgu|#*/.8gq/-(lCU=?l"><value name="PARAM_0"><block type="variables_get" id="dIG};t3s?:)}-GS2X(T_"><field name="VAR">st_ucencev_nad_75</field></block></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="FulGtPvbx13NRS~!6*Kf"><field name="VAR">koliko</field><value name="VALUE"><block type="read" id="(vtjj(mvEIFf5{Pm/F/D"></block></value><next><block type="variables_set" id="oEu_b8=VRYh`.*B#~VmD"><field name="VAR">ena_nazaj</field><value name="VALUE"><block type="math_number" id="ZsG4W+GF5j6kb/[*l;rX"><field name="NUM">0</field></block></value><next><block type="variables_set" id="b4ppFjE|x2J!LT[?+ZJx"><field name="VAR">najvec</field><value name="VALUE"><block type="math_number" id="ymX[aRd:Q!I#r.)5rHr5"><field name="NUM">0</field></block></value><next><block type="variables_set" id="/|.[H9j|TWt?)Xw9HE:O"><field name="VAR">dva_nazaj</field><value name="VALUE"><block type="math_number" id="Q)dz+,o[d,~4*s.P0(pG"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="O,c,Vo;PbFdDyxENgn[X"><value name="TIMES"><shadow type="math_number" id="is:3u|_4}tvjrS*Fg/lG"><field name="NUM">10</field></shadow><block type="variables_get" id="1mzoYv*]n2WE+!~u}8@P"><field name="VAR">koliko</field></block></value><statement name="DO"><block type="variables_set" id="l{_fU3vVA?IIL(U?3w?i"><field name="VAR">trenutno</field><value name="VALUE"><block type="readInteger" id="E4x;Y2!d)YUa@#l#1h.2"></block></value><next><block type="controls_if" id="+W9=2-SAx115EjG{6!F!"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="n(FS[@99iKfJ_K0_:1|,"><field name="OP">GTE</field><value name="A"><block type="variables_get" id="-JQhby{eFcvoUqwT,J9{"><field name="VAR">ena_nazaj</field></block></value><value name="B"><block type="math_arithmetic" id="e*7I7!_=j]@W5~ZiyvqO"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="`Oe*g#H)3]8=Fk@/w+#U"><field name="NUM">1</field></shadow><block type="variables_get" id="I]D9YqcMN3@Cdb|B)4}U"><field name="VAR">trenutno</field></block></value><value name="B"><shadow type="math_number" id="s1]micVtbst{A6O+RbeK"><field name="NUM">1</field></shadow><block type="variables_get" id="eDNO~82q/Qi=-HjlyY+Q"><field name="VAR">dva_nazaj</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set" id=",7riZ3C}tX6JsZ75X!(K"><field name="VAR">najvec</field><value name="VALUE"><block type="variables_get" id=":y(aFXto.;hWU2[D62Nc"><field name="VAR">ena_nazaj</field></block></value></block></statement><statement name="ELSE"><block type="variables_set" id=";k+344eZIp/LSm/9i`u."><field name="VAR">najvec</field><value name="VALUE"><block type="math_arithmetic" id="IR7EbN7ND/Vr-ILVy]E{"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="-!=;?O-9cjdLkR@C*+D4"><field name="NUM">1</field></shadow><block type="variables_get" id="oeAOhA_x3~GD]r7EVD2D"><field name="VAR">trenutno</field></block></value><value name="B"><shadow type="math_number" id="k5K!SiC/L]hT#1i[KZIC"><field name="NUM">1</field></shadow><block type="variables_get" id="Q{N_2-lb*+PqKA-kbyKa"><field name="VAR">dva_nazaj</field></block></value></block></value></block></statement><next><block type="variables_set" id="oUk_LQzL`oJ(VDjZKrkS"><field name="VAR">dva_nazaj</field><value name="VALUE"><block type="variables_get" id="](.d]Hpz@v`F}n3H+FH@"><field name="VAR">ena_nazaj</field></block></value><next><block type="variables_set" id="VTGL?_yrS[2ObA4;p6`9"><field name="VAR">ena_nazaj</field><value name="VALUE"><block type="variables_get" id="Y?#yZDeh!)f4MJnhdiOr"><field name="VAR">najvec</field></block></value></block></next></block></next></block></next></block></statement><next><block type="print" id="K_~)c1|2g5m0RRTd6dSd"><value name="PARAM_0"><block type="variables_get" id="/XK)PUGg0r-1x@}rkbA3"><field name="VAR">najvec</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="variables_set" id="hy9.9aO1([=yya9q~/DJ" x="783" y="455"><field name="VAR">st_ucencev_nad_75</field><value name="VALUE"><block type="math_number" id="?I4q.ICYp1/fIPjMeCDG"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="jmcN2ym3FNF1ZQ1m~fVZ"><value name="TIMES"><shadow type="math_number" id="u.#vsyKmFjS]q~2e3{{M"><field name="NUM">10</field></shadow></value><next><block type="print" id="Z#Sb]|/WnqDFQW0qv3yZ"><value name="PARAM_0"><block type="variables_get" id="D!G((XOs)3qBe,UBeh5~"><field name="VAR">povprecna_vrednost</field></block></value><next><block type="print" id="WY])[a6MK/S_tuxw|MQ0"><value name="PARAM_0"><block type="text" id="0~:i7=~KjSE~sRrbK9LO"><field name="TEXT"> </field></block></value><next><block type="print" id="wgu|#*/.8gq/-(lCU=?l"><value name="PARAM_0"><block type="variables_get" id="dIG};t3s?:)}-GS2X(T_"><field name="VAR">st_ucencev_nad_75</field></block></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "5\n5\n10\n2\n7\n3",
				output: "17",
			},
			{
				input: "5\n5\n9\n6\n7\n6\n",
				output: "17",
			},
			{
				input: "7\n3\n7\n6\n1\n6\n10\n5",
				output: "20",
			},
			{
				input: "6\n10\n8\n11\n13\n15\n14",
				output: "37",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
