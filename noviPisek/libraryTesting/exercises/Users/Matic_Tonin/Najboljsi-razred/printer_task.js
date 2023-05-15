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
			variables:["vsota","tocke","st_ucencev_nad_75","povprecna_vrednost"],
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic","variables","math","texts", "functions"],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},

		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="hy9.9aO1([=yya9q~/DJ"><field name="VAR">st_ucencev_nad_75</field><value name="VALUE"><block type="math_number" id="?I4q.ICYp1/fIPjMeCDG"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="jmcN2ym3FNF1ZQ1m~fVZ"><value name="TIMES"><shadow type="math_number" id="u.#vsyKmFjS]q~2e3{{M"><field name="NUM">10</field></shadow></value><next><block type="print" id="Z#Sb]|/WnqDFQW0qv3yZ"><value name="PARAM_0"><block type="variables_get" id="D!G((XOs)3qBe,UBeh5~"><field name="VAR">povprecna_vrednost</field></block></value><next><block type="print" id="WY])[a6MK/S_tuxw|MQ0"><value name="PARAM_0"><block type="text" id="0~:i7=~KjSE~sRrbK9LO"><field name="TEXT"> </field></block></value><next><block type="print" id="wgu|#*/.8gq/-(lCU=?l"><value name="PARAM_0"><block type="variables_get" id="dIG};t3s?:)}-GS2X(T_"><field name="VAR">st_ucencev_nad_75</field></block></value></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="hy9.9aO1([=yya9q~/DJ"><field name="VAR">st_uncencev_nad_75</field><value name="VALUE"><block type="math_number" id="?I4q.ICYp1/fIPjMeCDG"><field name="NUM">0</field></block></value><next><block type="variables_set" id="0-n,N2a?jo6HxASqnV+h"><field name="VAR">vsota</field><value name="VALUE"><block type="math_number" id="uLx6:T[@0YU@T=FKg4D5"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="jmcN2ym3FNF1ZQ1m~fVZ"><value name="TIMES"><shadow type="math_number" id="u.#vsyKmFjS]q~2e3{{M"><field name="NUM">20</field></shadow></value><statement name="DO"><block type="variables_set" id="HR8Y#,sr~CUBcm:tK?`M"><field name="VAR">tocke</field><value name="VALUE"><block type="readInteger" id="~s!ZSQZXsaMUVTDm`SAn"></block></value><next><block type="math_change" id="NmrTM7Ao?xpqa1JCz{Zr"><field name="VAR">vsota</field><value name="DELTA"><shadow type="math_number" id="45bcEQwf]AbGRC9jkkoF"><field name="NUM">1</field></shadow><block type="variables_get" id="6+;qY30k1cE76p@8=cfd"><field name="VAR">tocke</field></block></value><next><block type="controls_if" id="K=!h++eDEHB{Y2~!)wUw"><value name="IF0"><block type="logic_compare" id="(?I;Yq@q/2R6:*@ZtnOj"><field name="OP">GT</field><value name="A"><block type="variables_get" id="rFsS:~T8uunQGBtk|bI)"><field name="VAR">tocke</field></block></value><value name="B"><block type="math_number" id="+RLa4i1O3C:+O{sJM2X}"><field name="NUM">75</field></block></value></block></value><statement name="DO0"><block type="math_change" id="H#lG,qlY{W4zKiJ_:NYy"><field name="VAR">st_uncencev_nad_75</field><value name="DELTA"><shadow type="math_number" id="~+0cx5))Wwbtb]XRjr]N"><field name="NUM">1</field></shadow></value></block></statement></block></next></block></next></block></statement><next><block type="variables_set" id="O@[8o4pFZYk(vmPx8/Mw"><field name="VAR">povprecna_vrednost</field><value name="VALUE"><block type="math_arithmetic" id="tL_e]rleQ!T53o*sx-5X"><field name="OP">DIVIDE</field><value name="A"><shadow type="math_number" id="4MB,6i32vuzT(+!04pW]"><field name="NUM">1</field></shadow><block type="variables_get" id="0Y,0U(/D`z,cttK[dD5t"><field name="VAR">vsota</field></block></value><value name="B"><shadow type="math_number" id="Js43a8pWXA0sn*vN6Lkh"><field name="NUM">20</field></shadow></value></block></value><next><block type="print" id="Z#Sb]|/WnqDFQW0qv3yZ"><value name="PARAM_0"><block type="variables_get" id="D!G((XOs)3qBe,UBeh5~"><field name="VAR">povprecna_vrednost</field></block></value><next><block type="print" id="WY])[a6MK/S_tuxw|MQ0"><value name="PARAM_0"><block type="text" id="0~:i7=~KjSE~sRrbK9LO"><field name="TEXT"> </field></block></value><next><block type="print" id="wgu|#*/.8gq/-(lCU=?l"><value name="PARAM_0"><block type="variables_get" id="dIG};t3s?:)}-GS2X(T_"><field name="VAR">st_uncencev_nad_75</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "55\n66\n49\n98\n100\n88\n80\n68\n59\n84\n93\n46\n48\n73\n67\n97\n90\n70\n64\n65",
				output: "73 8",
			},
			{
				input: "41\n68\n50\n78\n57\n80\n76\n70\n61\n79\n83\n90\n50\n76\n56\n81\n83\n76\n50\n55",
				output: "68 10",
			},
			{
				input: "45\n56\n38\n88\n94\n74\n80\n58\n48\n38\n83\n36\n38\n63\n57\n87\n93\n60\n54\n90",
				output: "64 7",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
