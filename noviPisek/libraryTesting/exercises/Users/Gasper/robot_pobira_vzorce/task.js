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
		maxInstructions: 40,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot: ["east","west","south","pickWithdrawable","onWithdrawable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_if","controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			easy:  function(context, lastTurn) {
						var solved1 = false, solved2 = false;
						var err1, err2;
						try{robotEndConditions.checkPickedAllWithdrawables(context, lastTurn);}
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
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "Dirt.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "Rock_formation_with_dirt.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			obstacle1: { num: 21, img: "Rock_formation_with_dirt.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "Finish.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			//marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			sample: { num: 6, img: "Rock.png", side: 60, isWithdrawable: true, zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 1, 2, 2, 2, 21, 21, 1, 1, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[2, 2, 2, 1, 2, 21, 21, 1, 1, 1, 21],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[2, 1, 2, 2, 2, 21, 21, 1, 2, 2, 21],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 21, 21, 1, 1, 1, 1, 2],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 1, 21, 21, 21, 1, 1, 1, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 2, 1, 1, 21, 21, 1, 2],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 1, 2, 2, 2, 21, 21, 21, 2, 2, 2],
					[2, 3, 2, 2, 2, 21, 21, 21, 2, 2, 2],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "green_robot" },
					{ row: 1, col: 1, type: "sample" },
					{ row: 3, col: 5, type: "sample" },
					{ row: 3, col: 4, type: "sample" },
					{ row: 5, col: 2, type: "sample" },
					{ row: 5, col: 3, type: "sample" },
					{ row: 7, col: 8, type: "sample" },
					{ row: 9, col: 7, type: "sample" },
					{ row: 9, col: 9, type: "sample" },
					{ row: 11, col: 1, type: "sample" },
					{ row: 11, col: 2, type: "sample" },
				],
			},
			{
				tiles: [
					[1, 1, 2, 2, 2, 21, 21, 2, 2, 21, 21],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[21, 21, 21, 1, 1, 21, 21, 1, 1, 1, 21],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[1, 1, 2, 2, 2, 21, 21, 1, 2, 2, 21],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[1, 2, 2, 1, 21, 21, 1, 1, 1, 1, 2],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[21, 1, 21, 21, 21, 2, 2, 1, 2, 1, 2],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[21, 1, 1, 21, 21, 21, 1, 21, 21, 1, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[2, 1, 21, 21, 21, 2, 2, 21, 2, 1, 1],
					[2, 3, 2, 2, 2, 21, 21, 21, 2, 2, 2],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "green_robot" },
					{ row: 5, col: 1, type: "sample" },
					{ row: 3, col: 1, type: "sample" },
					{ row: 3, col: 2, type: "sample" },
					{ row: 5, col: 2, type: "sample" },
					{ row: 5, col: 3, type: "sample" },
					{ row: 5, col: 8, type: "sample" },
					{ row: 9, col: 1, type: "sample" },
					{ row: 9, col: 2, type: "sample" },
				],
			},
			{
				tiles: [
					[1, 1, 2, 2, 2, 21, 21, 1, 1, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[2, 2, 2, 21, 2, 21, 21, 21, 21, 1, 21],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[2, 1, 2, 2, 2, 21, 21, 21, 2, 2, 21],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 21, 21, 21, 21, 21, 21, 1, 2],
					[21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 1, 21, 21, 21, 21, 21, 21, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 21, 2, 21, 21, 21, 21, 1, 21],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21],
					[2, 1, 2, 2, 2, 21, 21, 21, 2, 21, 21],
					[2, 3, 2, 2, 2, 21, 21, 21, 2, 2, 2],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "green_robot" },
					{ row: 1, col: 1, type: "sample" },
					{ row: 1, col: 4, type: "sample" },
					{ row: 3, col: 3, type: "sample" },
					{ row: 5, col: 5, type: "sample" },
					{ row: 5, col: 2, type: "sample" },
					{ row: 7, col: 8, type: "sample" },
					{ row: 9, col: 7, type: "sample" },
					{ row: 9, col: 9, type: "sample" },
					{ row: 11, col: 1, type: "sample" },
					{ row: 11, col: 3, type: "sample" },
					{ row: 11, col: 4, type: "sample" },
					{ row: 11, col: 5, type: "sample" },
					{ row: 11, col: 2, type: "sample" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
