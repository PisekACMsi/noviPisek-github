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
		maxInstructions: 100,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot: ["forward","right","left","markedCell", "pickWithdrawable","onWithdrawable","greenCell"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops", "logic","math"],
				singleBlocks: [],
				excludedBlocks: [],
			},
			variables: ["stikalo"],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  function(context, lastTurn) {
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
			  
		cellSide: 60,							
		itemTypes: {
			character: { img: "Skiier_8_sides.png", category: "robot", side: 60, nbStates: 9, offsetX: 0, zOrder: 2 },
			// obstacle: { num: 11, img: "hisa.png", side: 60, isObstacle: true },
			finish: { num: 3, img: "Finish_transparent.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			snowflake: { num: 4, img: "Snowflake_transparent.png", side: 60,category: "marker", isMarker: true, zOrder: 1},
			red_flag: { num: 5, img: "Red_flag_transparent.png", side: 60, category: "utensil", isWithdrawable: true, zOrder: 6 },
			blue_flag: { num: 6, img: "Blue_flag_transparent.png", side: 60, category: "utensil", isWithdrawable: true, zOrder: 6 },
			snow: { num: 1, img: "Snow.png", side: 60,  isObstacle: false },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "character" },
					{ row: 10, col: 4, type: "finish" },
					{ row: 1, col: 2, dir: 0, type: "red_flag" },
					{ row: 3, col: 2, dir: 0, type: "red_flag" },
					{ row: 5, col: 2, dir: 0, type: "red_flag" },
					{ row: 7, col: 2, dir: 0, type: "red_flag" },
					{ row: 9, col: 2, dir: 0, type: "red_flag" },
					{ row: 2, col: 7, dir: 0, type: "blue_flag" },
					{ row: 4, col: 7, dir: 0, type: "blue_flag" },
					{ row: 6, col: 7, dir: 0, type: "blue_flag" },
					{ row: 8, col: 7, dir: 0, type: "blue_flag" },
					{ row: 10, col: 7, dir: 0, type: "blue_flag" },
					{ row: 2, col: 1, dir: 0, type: "snowflake" },
					{ row: 4, col: 1, dir: 0, type: "snowflake" },
					{ row: 6, col: 1, dir: 0, type: "snowflake" },
					{ row: 8, col: 1, dir: 0, type: "snowflake" },
					{ row: 1, col: 8, dir: 0, type: "snowflake" },
					{ row: 3, col: 8, dir: 0, type: "snowflake" },
					{ row: 5, col: 8, dir: 0, type: "snowflake" },
					{ row: 7, col: 8, dir: 0, type: "snowflake" },
					{ row: 9, col: 8, dir: 0, type: "snowflake" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 5, 1, 1, 1, 1, 1, 4, 1],
					[1, 4, 1, 1, 1, 1, 6, 1, 1, 1],
					[1, 1, 1, 1, 5, 1, 1, 1, 4, 1],
					[1, 4, 1, 1, 1, 1, 1, 6, 1, 1],
					[1, 1, 5, 1, 1, 1, 1, 1, 1, 4],
					[1, 4, 1, 1, 1, 1, 1, 1, 6, 1],
					[1, 1, 1, 5, 1, 1, 1, 4, 1, 1],
					[1, 4, 1, 1, 1, 1, 6, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "green_robot" },
					{ row: 9, col: 4, type: "green" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
