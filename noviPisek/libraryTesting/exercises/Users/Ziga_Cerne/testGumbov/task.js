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
					pick: "poberi UPS",
				},
				messages:{
					itemsExist: "Kovanci so na mreži.",
					itemsDontExist: "Kovancev ni na mreži.",
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
					"jump",
					"changeRobot",
					"transport",
					"sensorBool",
					"sensorValue",
					"destroy",
					"create",
					"wait",
					"nitems",
					"sensorRowCol",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: true,
				wholeCategories: ["logic","colour"],
				singleBlocks: ["controls_repeat","controls_repeat_ext","math_number","text"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="@9T1_{JJ5zvR2~m3rk)f" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="#2Jxk9Pv+epaUMq8wt/B"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id=")7t9+=TnrpWM9GVbhp[Y"><field name="NUM">1</field></shadow></value><next><block type="transport" id="-C5iUYp{4Z~rJt#6L7r@"><field name="PARAM_0">pick</field><next><block type="move" id="m{=e5tsql9n]-Ej!`Gck"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="[Ey?8lF*vWs=2.*veqO9"><field name="NUM">1</field></shadow></value><next><block type="transport" id="o-dbrrUmr@/TMkK#1dFz"><field name="PARAM_0">pick</field><next><block type="moveSimple" id="p:cS:(aQx#-AR:s~C[NR"><field name="PARAM_0">E</field><next><block type="transport" id="Ey*}f]1CN]|Q8bG#2pLp"><field name="PARAM_0">drop</field><next><block type="moveSimple" id="]`hnQn5y?!zvr~qO,uiB"><field name="PARAM_0">E</field><next><block type="transport" id="ASL#OHr_*1(##Z9*cu(#"><field name="PARAM_0">drop</field><next><block type="moveSimple" id="igSBx|EqLr.bgZ```pL~"><field name="PARAM_0">N</field><next><block type="moveSimple" id="6bn9Rc+|ume,F)H*h:O8"><field name="PARAM_0">N</field><next><block type="changeRobot" id="|ifs!yyB)O6-{)8cF}3,"><field name="PARAM_0">robot1</field><next><block type="moveSimple" id="k-XB{Fr|*2AhowDJ_rjC"><field name="PARAM_0">N</field><next><block type="moveSimple" id="UtG3|-;xD=|+3oE:XykW"><field name="PARAM_0">N</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'tile.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 3,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot.png", "red_robot.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: [{'robot': true, 'transportable': true}, {'robot': true}], },
			robot1: { img: ["miha.png","miha_in_piki.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,transOrder: 0,
						category: {'robot': true, 'transportable': true}, },
			robot2: { img: ["piki.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,transOrder: 1,
						category: {'robot': true, 'transportable': true}, },
			obstacle: { num: 2, img: "obstacle1.png",  zOrder: 7, category: {'obstacle': true}, },
			marble1: {num: 8, img: "coin.png", zOrder: 1, transOrder: 0, category: {'transportable': true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 2, 1, 1, 1],
					[1, 1, 2, 1, 2, 1, 1],
					[1, 2, 1, 2, 1, 1, 1],
					[2, 2, 2, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 5, col: 1, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 4, col: 2, dir: 3, rank: 1, type: "robot1", id:1 },
					{ row: 5, col: 3, dir: 3, rank: 2, type: "robot2", id:1 },
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}