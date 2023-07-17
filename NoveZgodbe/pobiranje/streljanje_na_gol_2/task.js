function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				label: {									//Imena ukazov
					kick: "brcni v smer %1 za %2",
				},
				code: {									//Imena ukazov
					kick: "brcni",
				},
				description: {									//Imena ukazov
					kick: "brcni v smer za",
				},
				messages:{
					itemsCoincide: "Lučka je zadela gol.",
					itemsDontCoincide: "Lučka ni zadela gola. Poskusi še enkrat.",

				},
				errors: {
					obstacle: "Pazi, stožci!",
					notTransporting: "Lučka skuša streljati na gol, vendar ni pobrala žoge.",
				},
				options:{
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
			
			context.robot.kick = function(dir, amount, callback) {
				var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
				// get Transportable nad drop it
				if(context.transportingValues[robot.rank].length > 0) var dropItem = context.transportingValues[robot.rank].pop();
				else if(context.transporting[robot.rank].length > 0) var dropItem = context.transporting[robot.rank].pop();
				else throw(strings.errors.notTransporting);

				context.items.push(dropItem);
				dropItem.row = robot.row;
				dropItem.col = robot.col;
				if (context.display) context.redisplayItem(dropItem);
				if("transOrder" in dropItem){
					robot.value -= 1;
					if (context.display){
						context.redisplayItem(robot);
					}
				}

				// changeRobot
				if('rank' in dropItem) context.robotRankInUse = dropItem.rank;
				else throw(strings.errors.robotNotOnGrid);
				if(context.display) dropItem.element.toFront(); 

				//move robot
				var newDir = context.props.dirNames.indexOf(dir);
				var dRow = context.props.delta[newDir][0];
				var dCol = context.props.delta[newDir][1];
				var prevTime = 0;
				var sign = 1;
				if(amount < 0){
				   sign = -1;
				   amount = -amount;
				}
				prevTime += context.moveRobot(robot.row+sign*amount*dRow, robot.col+sign*amount*dCol, newDir, prevTime=prevTime, factor=0.5);

				// change back
				context.robotRankInUse = robot.rank;
				if(context.display) robot.element.toFront(); 
		
				context.waitDelay(callback, undefined, infos.actionDelay * prevTime);
			};
				

			var customBlocks = {
				robot: {
					tools: [
						{  	name: "transport",
							blocklyJson: {
								"args0": [
									{
										"type": "field_dropdown", 
										"name": "PARAM_0", 
										"options": [
											[strings["options"]["pick"], "pick"],
										],
										"check":"String",
									},
								],
							},
						},
						{  	name: "kick", 
							params: ["String","Number"],
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
								{
									"type": "input_value", 
									"name": "PARAM_1", 
									"value": 1,
									"check": "Number",
								},
							],
							},
							blocklyXml: `
							<block type="kick">
								<field name="PARAM_0">W</field>
								<value name="PARAM_1">
									<shadow type="math_number">
										<field name="NUM">1</field>
									</shadow>
								</value>
							</block>
							`,
						},
					],
				},
			};
			
			return customBlocks;
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)
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
					"move",
					"moveSimple",
					"forward",
					"forwardSimple",
					"turn",
					"turnAround",
					"transport",
					"changeRobot",
					"kick",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops"],
				singleBlocks: ["controls_repeat_ext","controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="@9T1_{JJ5zvR2~m3rk)f" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="!;mfV4Tsb2M4]}ot#!vN"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="wdoRypW89YUD5RQKVH@k"><field name="NUM">3</field></shadow></value><next><block type="transport" id="{O0KczO6,dRs(fRYTWnV"><field name="PARAM_0">pick</field><next><block type="move" id="jy5LOKtcrxpJxZ]9N!RZ"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="U?|K(*17f6aAzHJUBFl`"><field name="NUM">3</field></shadow></value><next><block type="kick" id="`xAS3TsGj~k7)9f5+Lmo"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="o35rVGi}M:]N[-!Q*H?w"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot1"}, {type: "goal"}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.01,
		backgroundColour: false,
		backgroundTile: 'grass.png',
		borderColour: 'green',

		cellSide: 60,	
		numberOfRobots: 2,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["girl_all_8_sides.png", "girl_with_ball_all_8_sides.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			robot1: { img: "ball.png", side: 60, nbStates: 1, zOrder: 8, category: {'robot': true, 'transportable':true}, transOrder:0 },
			obstacle: { num: 2, img: "4_cones.png",  zOrder: 8, category: {'obstacle':true}, },
			goal: {num: 5, img: "goal.png"},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 2, 1, 1, 1, 1, 5],
					[1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 3, col: 2, dir: 2, type: "robot0"},
					{ row: 7, col: 2, dir: 0, type: "robot1"},
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}