function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				startingBlockName: "Program 2",	
				categories: {				
				   actions: "Gibanje",
				},
				label: {								
					changeRobot: "zamenjaj vlogo %1 HAHA", 
					colour: "LOL %1",
				},
				options:{
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					}
				},
				messages:{
					itemsDontCoincide: "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
					itemsCoincide: "Super robot je dosegel cilj",
				},
			},
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)
		localBlocks: function(context, strings){
			// CUSTOM: first you can define functions for blocks, which need to be attached to "context.robot"
			// this way you can either override existing function definitions from blocklyRobot_lib.js or add new ones.
			// If you are creating new ones, you need to additionaly do the following things:
			// - add strings in languageStrings for keys: "label", "code", "description" and optionaly more,
			// - you need to define the visual design of the block using "customBlocks"
			// If you are making a new function, good advice, always staring with something that works!!
			// - 1st copy an existing block from blocklyRobot_lib.js inside here,
			// - use console.log() and Web Developer Tools to print values in the console, for debugging
			context.robot.transport = function(mode, callback) { 
				// CUSTOM we want that the image of robot changes if it picks/drops another robot!
				var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
			   
				if(mode == 'pick'){
					// robot can't pick himself up, exclude himself!
					var transportables = context.getItems(robot.row, robot.col, {category: 'transportable'}, {rank: context.robotRankInUse}); 

					if (transportables.length == 0) {
						throw(strings.errors.nothingToPickUp);
					}
			
					var transItem = transportables.pop();
					if (!("transOrder" in transItem)) {
						context.items.splice(transItem.index, 1);
						context.transporting[robot.rank].push( transItem );
					}
					else if(context.transportingValues[robot.rank].length-1 >= transItem.transOrder){
						throw(strings.errors.alreadyTransporting);
					}
					else if(context.transportingValues[robot.rank].length < transItem.transOrder){
						throw(strings.errors.wrongPickOrder);
					}
					else {
						context.items.splice(transItem.index, 1);
						context.transportingValues[robot.rank].push( transItem );
					}  
					
					
					context.waitDelay(function() {
						// CUSTOM: trigger robot if it picks another robot!!
						if("robot" in transItem.category){
							robot.value += 1;
							if (context.display) context.redisplayItem(robot);
						}
						if (context.display) transItem.element.remove();
						callback();
					});
					return;
				}
				else if(mode == 'drop'){
					// TODO
					if(context.transportingValues[robot.rank].length > 0){
						var dropItem = context.transportingValues[robot.rank].pop();
					}
					else if(context.transporting[robot.rank].length > 0){
						var dropItem = context.transporting[robot.rank].pop();
					}
					else{
						throw(strings.errors.notTransporting);
					}
					
					context.waitDelay(function() {
						context.items.push(dropItem);
						dropItem.row = robot.row;
						dropItem.col = robot.col;
						if (context.display) context.redisplayItem(dropItem);
						// CUSTOM: trigger robot if it drops another robot!!
						if("robot" in dropItem.category){
							robot.value -= 1;
							if (context.display){
								context.redisplayItem(robot);
							}
						}
						callback();
					});
				}
			};
			
			// CUSTOM: here you can specify the visual design of blockly block, the same way as in blocklyRobot_lib.js
			// this way you can either override the visual design of existing blocks (such as options in dropdown field)
			// or define design for new blocks
			/* structure is as follows:
				{
					group: [{
						name: "someName",
						category: "categoryName",
						// yieldsValue: optional true: Makes a block with return value rather than simple command
						// params: optional array of parameter types. The value 'null' denotes /any/ type. For specific types, see the Blockly documentation ([1,2])
						// handler: optional handler function. Otherwise the function context.group.someName will be used
						// blocklyJson: optional Blockly JSON objects
						// blocklyInit: optional function for Blockly.Blocks[name].init
						//   if not defined, it will be defined to call 'this.jsonInit(blocklyJson);
						// blocklyXml: optional Blockly xml string, 
						// 	 you need this if you want to implicitly attach "shadow blocks", check library for examples
						// codeGenerators: optional object:
						//   { Python: function that generates Python code
						//     JavaScript: function that generates JS code
						//   }
					}]
				}
				[1] https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
				[2] https://developers.google.com/blockly/guides/create-custom-blocks/type-checks
			*/
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "sensorRowCol", 
							yieldsValue: true,
							blocklyJson: {
								"args0": [
									{
										"type": "field_dropdown", 
										"name": "PARAM_0", 
										"options": [
										[strings["options"]["tools"]["row"], "row"],
										[strings["options"]["tools"]["col"], "col"],
										],
									},
									{
										"type": "field_dropdown", 
										"name": "PARAM_1", 
										"options": [
										[strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
										[strings["options"]["tools"]["bool"]["transportable"], "transportable"],
										[strings["options"]["tools"]["bool"]["robot"], "robot"],
										[strings["options"]["tools"]["bool"]["number"], "number"],
										[strings["options"]["tools"]["bool"]["colour"], "colour"],
										[strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
										],
									},
									{
										"type": "field_dropdown", 
										"name": "PARAM_2", 
										"options": [
										[strings["options"]["tools"]["bool"]["category"], "category"],
										[strings["options"]["tools"]["bool"]["has"], "undefined"],
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
		maxInstructions: 3,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"moveSimple",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="YF_~6],0{+jwDCtXfhNM"><field name="PARAM_0">E</field><next><block type="moveSimple" id="599_kQ9a]9dTwltK|+?C"><field name="PARAM_0">E</field><next><block type="moveSimple" id="ji=8)WnU3cbttjJX8yvZ"><field name="PARAM_0">E</field></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "green"}) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0.02,
		backgroundColour: "pink",
		// backgroundTile: false,
		backgroundTile: "tile.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot.png", "red_robot.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle: { num: 2, img: "obstacle.png",  zOrder: 8, category: {'obstacle':true}, },
			green: { num: 4, img: "green.png", zOrder: 2, category: {'green':true}, },
			paint: { num: 3, zOrder: 3, colour: "magenta", },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
			   tiles: [
					  [1, 1, 1, 1, 1, 1],
					  [1, 1, 1, 1, 4, 1],
					  [1, 1, 1, 1, 1, 1],
				  ],
			   initItems: [
					 { row: 1, col: 1, dir: 0, type: "robot0" }
				  ]
			}
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}