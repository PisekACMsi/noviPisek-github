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
		showLabels: false,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 200,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot: ["forward","right","left","markedCell", "paint"],
			},
			standardBlocks: {
				includeAll: true,
				wholeCategories: ["loops", "functions","texts"],
				singleBlocks: [],
				excludedBlocks: ["text_eval"],
			},
			variables:["x","y"],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="/=7FWat!#I{ZRayp{smZ" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="controls_repeat_ext" id="Cl`wm:!_zk=Q.(m!qXf#" x="88" y="85"><value name="TIMES"><shadow type="math_number" id="pE20F)QpLpn}an(?c!yN"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="west" id="w7=YS@Enxwcc[jKH7BKM"><next><block type="forward" id="nJPb~OLrv/b),kHRQJam"></block></next></block></statement><next><block type="right" id="XU!_p#gbz[(jvKowbV`3"></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: function(context, lastTurn) {
			var solved1 = false, solved2 = false;
			var err1, err2;
			try{robotEndConditions.checkPickedAllCollectibles(context, lastTurn);}
			catch(err){
				solved1 = context.success;
				err1 = err;
			}
			try{robotEndConditions.checkReachGreenArea(context, lastTurn);}
			catch(err){
				solved2 = context.success;
				err2 = err;
			}						
			context.success = (solved1 && solved2);
			throw(err1.concat("\n", err2));
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "../../_graphics/objects/hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 2, 2],
					[2, 2, 1, 1, 1, 1, 3, 2],
					[2, 2, 1, 1, 1, 2, 2, 2],
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "green_robot" },
					{ row: 1, col: 3, type: "pill" },
					{ row: 2, col: 4, type: "pill" },
				],
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 2, 2],
					[2, 2, 1, 1, 1, 1, 3, 2],
					[2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "green_robot" },
					{ row: 1, col: 3, type: "pill" },
					{ row: 2, col: 4, type: "pill" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
