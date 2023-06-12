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
		maxInstructions: {				//omejitev števila ukazov
			basic: 0,
			easy: 50,
			medium: 75,
			hard: 0,
		},
		includeBlocks: {						//dovoljeni ukazi 
			generatedBlocks: {
				robot: {
					easy: ["south","north","right","left","pickWithdrawable","onWithdrawable"]
				},
			},
			standardBlocks: {
				singleBlocks: ["controls_if","controls_repeat"],
			},
		},				
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			basic: robotEndConditions.checkReachGreenArea,
			easy: function(context, lastTurn) {
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
			medium: robotEndConditions.checkMarblesInHoles,
			hard: robotEndConditions.checkMarkersPainted,
		},
			  
		cellSide: 60,							
		itemTypes: {
			avto: { img: "car.png", category: "robot", side: 80, nbStates: 9, offsetX: 0, zOrder: 8},
			baterija: { num: 2, img: "battery.png", category:"withdrawable", isWithdrawable: true,  side: 60, zOrder: 0 },
			hisa: { num: 3, img: "house3.png", side: 60, category: "withdrawable", isWithdrawable: true , zOrder: 1 }
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 3, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1]
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "avto" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
