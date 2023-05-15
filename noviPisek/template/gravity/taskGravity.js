function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		hasGravity: true,
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
		maxInstructions: 17,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  ["north","west","east","south","move"],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkReachGreenAreaMULTIROBOTspecific,
			  
		cellSide: 60,	
		numberOfRobots: 2,
		itemTypes: {
			Miha: { rank: 0, img: ["green_robot.png", "miha_in_piki.png"], isRobot: true, side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			Piki: { rank: 1, img: "piki.png", isRobot: true, isTransportable: true, side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile1: { num: 11, img: "tile.png", side: 60, zOrder: 0 },
			tile2: { num: 12, img: "tile1.png", side: 60, zOrder: 0 },
			coin: { num: 111, img: "coin.png", side: 60, isCoin: true, zOrder: 2  },
			obstacle: { num: 2, img: "obstacle1.png", side: 60, isObstacle: true, offsetX: 0,  zOrder: 8 },
			platform: { num: 10, img: "platform.png", side: 60, isPlatform: true, offsetX: 0,  zOrder: 0 },
			obstacle2: { num: 22, img: "obstacle2.png", side: 60, isObstacle: true, offsetX: 0,  zOrder: 8 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			button1: {num: 41, img: ["pressure_off.png","pressure_on.png"], side: 60, isButton: true, id: 1, zOrder: 1 },
			button2: {num: 42, img: ["pressure_off.png","pressure_on.png"], side: 60, isButton: true, id: 2, zOrder: 1 },
			door1: {num: 51, img: ["door_a.png","door_b.png"], side: 60, isObstacle: [true, false], id: 1, zOrder: 1 },
			door2: {num: 52, img: ["door_c.png","door_a.png"], side: 60, isObstacle: [true, false], id: 2, zOrder: 1 },
			door3: {num: 53, img: ["door_d.png","door_b.png"], side: 60, isObstacle: [true, false], id: 1, zOrder: 1 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(countTransport, color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,10,10,10,10],
					[1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,10,10,10,10,10,10],
					[1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1],
					[10,10,10,10,1,1,1,1,1,1],
				],
				initItems: [
					{ row: 3, col: 6, dir: 2, type: "Miha" },
					{ row: 6, col: 0, dir: 3, type: "Piki" },
					{ row: 4, col: 3, type: "coin" },
					{ row: 5, col: 3, type: "coin" },
					{ row: 3, col: 7, type: "obstacle" },
					{ row: 3, col: 9, type: "obstacle" },
					{ row: 6, col: 1, type: "door2" },
					{ row: 6, col: 3, type: "button2" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

// initWrapper(initTask, ["easy","medium","hard"], null, true);
initWrapper(initTask, null, null, true);
