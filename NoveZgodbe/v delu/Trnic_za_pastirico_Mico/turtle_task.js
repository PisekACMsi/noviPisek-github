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
		introMaxHeight: "40%",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 100,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {												//omejitev števila ukazov
			basic: 0,
			easy: 11, 
			medium: 9, 
			hard: 0,
		},
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {
				basic: false,
				easy: false, 
				medium: false, 
				hard: true,
			},
			generatedBlocks: {
				turtle: {
					basic: ["moveamountvalue"],
					easy: ["moveamount", "turnleftamount", "turnrightamount"],
					medium: ["moveamount", "turnleft", "turnright", "peneither","inputvalue"],
					hard: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither", "colourvalue", "inputvalue"],
				},
			},
			standardBlocks: {
				includeAll: {
					basic: false,
					easy: false, 
					medium: false, 
					hard: true,
				},
				wholeCategories: [],
				singleBlocks: [],
				singleBlocks: ["controls_repeat_ext", "math_number"],
			},
			variables:{
				basic: [],
				easy: [],
				medium: ["x"],
				hard: [],
			},
		},
		startingExample: '',																//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			basic: 0.15,
			easy: 0.1,
			medium: 2,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 225},
			easy: {x: 148, y: 148},
			medium: { x: 200, y: 200},
			hard: { x: 200, y: 100},
		},
	};

	subTask.data = {					//testni primeri
		easy: [{
			drawSolution : function(turtle) {
			   for (var j = 0; j < 12; ++ j){
				  for (var i = 0; i < 4; ++i) {
					  
					  turtle.move(100);
					  turtle.turn(90)
					  ;
			   }
			   turtle.turn(36)
			   }
			},
		   }],
		 
		
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy"], null, true);
//initWrapper(initTask, null, null, true);
