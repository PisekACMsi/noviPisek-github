function initTask(subTask) {
	subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		hideControls: {					//gumbi na urejevalniku.
			restart: false,
			saveOrLoad: false,			//gumba za shranjevanje in nalaganje kode ukazov.
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
		maxInstructions: {												//omejitev števila ukazov
			basic: 0,
			easy: 3, 
			medium: 9, 
			hard: 0,
		},
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {
				basic: false,
				easy: false, 
				medium: true, 
				hard: true,
			},
			generatedBlocks: {
				turtle: {
					basic: ["moveamountvalue"],
					easy: ["moveamountvalue", "turnleft", "turnright"],
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
				wholeCategories: {
					medium:["functions"],
				},
				singleBlocks: [],
				excludedBlocks: [],
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
     		
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: {
			basic: 2,
			easy: 2,
			medium: 2,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 150},
			easy: { x: 150, y: 150},
			medium: { x: 200, y: 200},
			hard: { x: 150, y: 150},
		},
	};

	subTask.data = {					//testni primeri
		basic: [
			{
				inputValue: 0,
				drawSolution: function(turtle) {
					turtle.start_painting(); 
					turtle.move(5); 
				},
			},
		],
		easy: [
			{
				inputValue: 0,
				drawSolution: function(turtle) {
					turtle.move(5); 
					turtle.turn(90); 
					turtle.move(5)
				},
			},
		],
		medium: [
			{
				inputValue: 1,
				drawSolution: function(turtle) { 
					turtle.stop_painting(); 
					turtle.move(1); 
					turtle.start_painting(); 
					turtle.turn(90); 
					turtle.move(1); 
					turtle.stop_painting(); 
					turtle.move(1); 
					turtle.start_painting(); 
					turtle.move(1) 
				},
			},
			{
				inputValue: 2,
				drawSolution: function(turtle) { 
					turtle.stop_painting(); 
					turtle.move(2); 
					turtle.start_painting(); 
					turtle.turn(90); 
					turtle.move(2); 
					turtle.stop_painting(); 
					turtle.move(2); 
					turtle.start_painting(); 
					turtle.move(2) 
				},
			},
			{
				inputValue: 3,
				drawSolution: function(turtle) { 
					turtle.stop_painting(); 
					turtle.move(3); 
					turtle.start_painting(); 
					turtle.turn(90); 
					turtle.move(3); 
					turtle.stop_painting(); 
					turtle.move(3); 
					turtle.start_painting(); 
					turtle.move(3) 
				},
			},
		],
		hard: [
			{
				inputValue: 0,
				drawSolution: function(turtle) {},
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["basic","easy", "medium", "hard"], null, true);
//initWrapper(initTask, null, null, true);
