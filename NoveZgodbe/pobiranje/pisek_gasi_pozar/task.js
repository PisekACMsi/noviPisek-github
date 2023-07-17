function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				label: {									//Imena ukazov
					extinguish: "pogasi ogenj %1",
				},
				code: {									//Imena ukazov
					extinguish: "pogasi",
				},
				description: {									//Imena ukazov
					extinguish: "pogasi ogenj",
				},
				errors: {
					obstacle: "Pazi, drevo!",
					uniform: "Pišek ne nosi čelade!",
					noSuchItemOnCell: "Pišek poskuša pogasiti polje, ki ne gori.",
				},
				messages:{
					itemsExist: "Požar še vedno gori!",
					itemsDontExist: "Pišek je pogasil požar.",
				},
			},
		},


		localBlocks: function(context, strings, infos){
			// CUSTOM: first you can define functions for blocks, which need to be attached to "context.robot"
			// this way you can either override existing function definitions from blocklyRobot_lib.js or add new ones.
			// If you are creating new ones, you need to additionaly do the following things:
			// - add strings in languageStrings for keys: "label", "code", "description" and optionaly more,
			// - you need to define the visual design of the block using "customBlocks"
			// If you are making a new function, good advice, always staring with something that works!!
			// - 1st copy an existing block from blocklyRobot_lib.js inside here,
			// - use console.log() and Web Developer Tools to print values in the console, for debugging
			
			context.robot.extinguish = function(dir, callback) {
				var newDir = context.props.dirNames.indexOf(dir);
				var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
				if (robot.value%2 == 0) throw(strings.errors.uniform);
				var row = robot.row + context.props.delta[newDir][0];
      			var col = robot.col + context.props.delta[newDir][1];
				
				var filters = {'onFire': true};
				var items = context.getItems(row, col, filters);
				if(items.length > 0){
					var item = items.pop();
					if((item != robot) || (items.length > 0)){
						if(item == robot) item = items.pop();
						item['value'] = 1;
						
						context.resetProperties(item, updateOnly=true);
						if(context.display){
							// trigItem.element.attr("src", imgPath+item.img);
							context.redisplayItem(item);
							context.redisplayItem(robot);
						}
					}
				}
				else {
					throw(strings.errors.noSuchItemOnCell); 
				}
				context.waitDelay(callback);
			};
				

			var customBlocks = {
				robot: {
					tools: [
						{  	name: "extinguish",
							blocklyJson: {
								"args0": [
									{
										"type": "field_dropdown", 
										"name": "PARAM_0", 
										"options": [
											[strings["options"]["move"]["north"], "N"],
											[strings["options"]["move"]["northeast"], "NE"],
											[strings["options"]["move"]["east"], "E"],
											[strings["options"]["move"]["southeast"], "SE"],
											[strings["options"]["move"]["south"], "S"],
											[strings["options"]["move"]["southwest"], "SW"],
											[strings["options"]["move"]["west"], "W"],
											[strings["options"]["move"]["northwest"], "NW"],
										],
									},
								],
							},
						},
					],
				},
			};
			
			return customBlocks;
		},

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
		actionDelay: 400,				//parameter za časovni zamik med izvajanjem ukazov -  ne deulje??
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"moveSimple",
					"move",
					"transport",
					"extinguish",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ['loops'],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {onFire: true}, {}, exist=false); }, 
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "pink",
		// backgroundTile: false,
		backgroundTile: "trava2.png",
		borderColour: "green",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_blaz.png", "pisek_fireman.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle1: { num: 21, img: ["spruce_on_fire.png", "spruce.png"],  zOrder: 8, category: {'obstacle':true}, onFire: [true, false] },
			obstacle2: { num: 22, img: ["tree_on_fire.png", "tree.png"],  zOrder: 8, category: {'obstacle':true}, onFire: [true, false] },
			pink_roses: { num: 11, img: "pink_roses.png", zOrder: 2, },
			red_roses: { num: 12, img: "red_roses.png", zOrder: 2, },
			pill: { num: 3, img: "čelada_spredi.png", zOrder: 2, category: {'transportable':true}, transOrder: 0},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[11, 1, 21, 22, 1, 1],
					[1, 1, 1, 21, 22, 1],
					[1, 1, 1, 1, 21, 21],
					[11, 3, 1, 1, 1, 22],
					[12, 11, 1, 12, 1, 1],
				],
			   initItems: [
					 { row: 2, col: 0, dir: 0, type: "robot0" }
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}