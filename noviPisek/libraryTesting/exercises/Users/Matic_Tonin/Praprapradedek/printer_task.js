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
			variables:["st_prednika","zapis"],
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic","variables","math","texts"],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},

		},
		startingExample: { //vnaprej podana koda ukazov
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id=":1/NOOcW+g|/@PsR6nd;"><field name="VAR">st_prednika</field><value name="VALUE"><block type="read" id="D~Cb6P0_WgG~R)V(?`3o"></block></value><next><block type="variables_set" id="uO0`XDoGI=ORBmnBV]G]"><field name="VAR">zapis</field><value name="VALUE"><block type="math_number" id=":A,Ft.dJBM5VCLr;kUwo"><field name="NUM">0</field></block></value><next><block type="controls_if" id="N(qWet6MC{h=hF{Y8wK`"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="_z7SrcKBYK)k-mjPphZ0"><field name="OP">LTE</field><value name="A"><block type="variables_get" id="82SQiRu@qZ@/zNyYZdXg"><field name="VAR">st_prednika</field></block></value><value name="B"><block type="math_number" id="f9t|}UO[]?:AX8o=cd4["><field name="NUM">3</field></block></value></block></value><statement name="DO0"><block type="controls_if" id="cq2,EddR3-.I7~B-w]fT"><value name="IF0"><block type="logic_compare" id="8S:J,RQUOgiuF+8PH0,Y"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="d0+TLt.GhCCYt=Gl,jIa"><field name="VAR">st_prednika</field></block></value><value name="B"><block type="math_number" id="L({kgh.Wo=*ofi9l|-zN"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="D//kSrl,tm=Kr28NGoMh"><field name="VAR">zapis</field><value name="VALUE"><block type="text" id="cWDx65=Io(ZQ{lTh:uIL"><field name="TEXT">To sem pa jaz</field></block></value></block></statement><next><block type="controls_if" id="R[*eWwg}LPHMxS!QdA*w"><value name="IF0"><block type="logic_compare" id="YDys6z(.K)|#jR9W_kcF"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="TazXhl`b=pns@rxaA8;i"><field name="VAR">st_prednika</field></block></value><value name="B"><block type="math_number" id="rjZm~tW+(#)3ld0smN}j"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="A:L)/pAel*ynY3F2R=}("><field name="VAR">zapis</field><value name="VALUE"><block type="text" id="pRpji]_qe+=6#@i3PNvN"><field name="TEXT">mama</field></block></value></block></statement><next><block type="controls_if" id="SzNT(T}Ftn!xrA{1W}7{"><value name="IF0"><block type="logic_compare" id="Z#x#~_ndM*zxd1cuM[.I"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="=FN!C{4A;y{,P2;/Z-rG"><field name="VAR">st_prednika</field></block></value><value name="B"><block type="math_number" id="b@WBbJ6R,Zk*tK=8V@hy"><field name="NUM">3</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="=!c:O+0n[`s5AQ_#AJgA"><field name="VAR">zapis</field><value name="VALUE"><block type="text" id="H=@h6NHXixyygu#!S8k/"><field name="TEXT">oče</field></block></value></block></statement></block></next></block></next></block></statement><statement name="ELSE"><block type="controls_if" id="A]Odv?Sn[Ek`f(1/vTL*"><mutation else="1"></mutation><value name="IF0"><block type="math_number_property" id="4nHATOY]wq;Lhbhs],eB"><mutation divisor_input="false"></mutation><field name="PROPERTY">ODD</field><value name="NUMBER_TO_CHECK"><shadow type="math_number" id="IlU:ZW26b8OGzoRqU)n|"><field name="NUM">0</field></shadow><block type="variables_get" id="C]a8KwBkxs#6sq8bd=!1"><field name="VAR">st_prednika</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="x8E5g[?F2mFaMk?y02Z*"><field name="VAR">zapis</field><value name="VALUE"><block type="text" id="F*5br/ph:4CKMdTp8UgD"><field name="TEXT">dedek</field></block></value></block></statement><statement name="ELSE"><block type="variables_set" id="/y-j4]lib5~qMb)*(v4l"><field name="VAR">zapis</field><value name="VALUE"><block type="text" id="3+#ta2zW5F8#@B##3od`"><field name="TEXT">babica</field></block></value></block></statement><next><block type="controls_whileUntil" id="~b!`?ckk}rx=UIc@;W~Y"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare" id="ts2gzw,F!1#}EuF1-ShJ"><field name="OP">GTE</field><value name="A"><block type="variables_get" id="u,.rXAV:euI#PTzpuo:I"><field name="VAR">st_prednika</field></block></value><value name="B"><block type="math_number" id="yX-1@c55~xT@VsF0_3?m"><field name="NUM">8</field></block></value></block></value><statement name="DO"><block type="variables_set" id="C5#z::}ikG`;/3bP:EDg"><field name="VAR">zapis</field><value name="VALUE"><block type="text_join" id="_pxq}-_E[lg]-TJ#`!nR"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="6:fRTgD6KNJA|6fw]M*Z"><field name="TEXT">pra</field></block></value><value name="ADD1"><block type="variables_get" id="3#yf:?UV1.cnM(zo=_}z"><field name="VAR">zapis</field></block></value></block></value><next><block type="variables_set" id="XA-+hDphv~qJA#FKT)Pk"><field name="VAR">st_prednika</field><value name="VALUE"><block type="math_arithmetic" id="s7#UnWiW25Gx,Iv5Qjr-"><field name="OP">DIVIDEFLOOR</field><value name="A"><shadow type="math_number" id="/)I.LCaz`@;y[l1)B}mM"><field name="NUM">1</field></shadow><block type="variables_get" id="!JR#:DM~S?}vkhn22c#x"><field name="VAR">st_prednika</field></block></value><value name="B"><shadow type="math_number" id=".8SJd}#~krd+8R)Au3.p"><field name="NUM">2</field></shadow></value></block></value></block></next></block></statement></block></next></block></statement><next><block type="print" id="4-ECnR,#EP:XbWeaXeZ,"><value name="PARAM_0"><block type="variables_get" id="3TOTTBxrVxmdA/bzAJk6"><field name="VAR">zapis</field></block></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="wG-oO;heHwrsepx!z1[{" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id=":1/NOOcW+g|/@PsR6nd;"><field name="VAR">st_prednika</field><value name="VALUE"><block type="read" id="D~Cb6P0_WgG~R)V(?`3o"></block></value><next><block type="variables_set" id="uO0`XDoGI=ORBmnBV]G]"><field name="VAR">zapis</field><value name="VALUE"><block type="math_number" id=":A,Ft.dJBM5VCLr;kUwo"><field name="NUM">0</field></block></value><next><block type="controls_if" id="N(qWet6MC{h=hF{Y8wK`"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="_z7SrcKBYK)k-mjPphZ0"><field name="OP">LTE</field><value name="A"><block type="variables_get" id="82SQiRu@qZ@/zNyYZdXg"><field name="VAR">st_prednika</field></block></value></block></value><statement name="DO0"><block type="controls_if" id="cq2,EddR3-.I7~B-w]fT"><value name="IF0"><block type="logic_compare" id="8S:J,RQUOgiuF+8PH0,Y"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="d0+TLt.GhCCYt=Gl,jIa"><field name="VAR">st_prednika</field></block></value><value name="B"><block type="math_number" id="L({kgh.Wo=*ofi9l|-zN"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="D//kSrl,tm=Kr28NGoMh"><field name="VAR">zapis</field><value name="VALUE"><block type="text" id="cWDx65=Io(ZQ{lTh:uIL"><field name="TEXT">To sem pa jaz</field></block></value></block></statement></block></statement><statement name="ELSE"><block type="controls_if" id="A]Odv?Sn[Ek`f(1/vTL*"><mutation else="1"></mutation><value name="IF0"><block type="math_number_property" id="4nHATOY]wq;Lhbhs],eB"><mutation divisor_input="false"></mutation><field name="PROPERTY">ODD</field><value name="NUMBER_TO_CHECK"><shadow type="math_number" id="IlU:ZW26b8OGzoRqU)n|"><field name="NUM">0</field></shadow><block type="variables_get" id="C]a8KwBkxs#6sq8bd=!1"><field name="VAR">st_prednika</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="x8E5g[?F2mFaMk?y02Z*"><field name="VAR">zapis</field><value name="VALUE"><block type="text" id="F*5br/ph:4CKMdTp8UgD"><field name="TEXT">dedek</field></block></value></block></statement><statement name="ELSE"><block type="variables_set" id="/y-j4]lib5~qMb)*(v4l"><field name="VAR">zapis</field></block></statement></block></statement><next><block type="print" id="4-ECnR,#EP:XbWeaXeZ,"><value name="PARAM_0"><block type="variables_get" id="3TOTTBxrVxmdA/bzAJk6"><field name="VAR">zapis</field></block></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				//input: "5\n5\n10\n2\n7\n3",
				input: "17",
				output: "prapradedek",
			},
			{
				input: "20",
				output: "praprababica",
			},
			{
				input: "1",
				output: "To sem pa jaz",
			},
			{
				input: "32",
				output: "prapraprababica",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
