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
				messages:{
					itemsDontCoincide: "Čebela ni nabrala vsega prahu. Poskusi še enkrat.",
					itemsCoincide: "Bravo čebele je nabrala ves cvetni prah.",
				},
				options:{
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					}
				},
			},
		},
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
					
					// CUSTOM trigger change on honeycomb
					var hcombs = context.getItems(robot.row, robot.col, {type: 'sat'});
					
					if(hcombs.length > 0 ){
						var hcomb = hcombs.pop();
						hcomb.value -= 1;
						if (context.display) context.redisplayItem(hcomb);	
					}
					context.waitDelay(function() {
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
						var preexisting = context.getItems(robot.row, robot.col, {type: 'prah'});
						context.items.push(dropItem);
						dropItem.row = robot.row;
						dropItem.col = robot.col;
						// CUSTOM trigger change on honeycomb
						var hcombs = context.getItems(dropItem.row, dropItem.col, {type: 'sat'});
						if(hcombs.length > 0 ){
							var hcomb = hcombs.pop();
							hcomb.value += 1;
							if (context.display) context.redisplayItem(hcomb);	
						}

						if (context.display) context.redisplayItem(dropItem);
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
					tools: [ ],
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
					"transport"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="?PYegoooe[j?}[Q@H/0J" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="SSu+)TuGuUx)z20xh1I="><value name="TIMES"><shadow type="math_number" id="OubPnKeYdH`n.lX}W2~*"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="FKwoqsV~[yfim;aHnQ2{"><field name="PARAM_0">E</field></block></statement><next><block type="transport" id="+x+4|xM3)I68_t,a~m~g"><field name="PARAM_0">pick</field><next><block type="controls_repeat_ext" id="k.]IRB=@:BRAtY{,AyE*"><value name="TIMES"><shadow type="math_number" id="6.`-1A66+nb)2h.`*uJ="><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="/7?GyX@b}J?8C|uMR#hC"><field name="PARAM_0">E</field></block></statement><next><block type="transport" id="#c*N[];XUa;64mV*o3T8"><field name="PARAM_0">drop</field><next><block type="moveSimple" id="SJqSUui|h8)vzLhiD*pd"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="hM+=5x.ZpkN*7amcO`5j"><value name="TIMES"><shadow type="math_number" id="pKToJONPC5}@*bTdY.b!"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="moveSimple" id="RkGLpPfK-P7#CUL/022G"><field name="PARAM_0">W</field></block></statement><next><block type="transport" id="..rc0V0r6v;Iy]?i@cCu"><field name="PARAM_0">pick</field><next><block type="controls_repeat_ext" id="03JzSJ*.c:m/LcDA9MYs"><value name="TIMES"><shadow type="math_number" id="}i0|sa(nEj1wF;77}pp|"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="moveSimple" id="}w:,;/o`dz=v-jd#~0;!"><field name="PARAM_0">E</field></block></statement><next><block type="transport" id="qRS*rqJ#BcIFTz|ch*z#"><field name="PARAM_0">drop</field><next><block type="moveSimple" id="xWe1/s.7z3+_*uWWwenq"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="kLvC_,i1[Ll2[Wjmh_b="><value name="TIMES"><shadow type="math_number" id="5H/e*0U)qO-TfSl0O7F["><field name="NUM">6</field></shadow></value><statement name="DO"><block type="moveSimple" id="Z18V0cc1:M2-;qhN[1ML"><field name="PARAM_0">W</field></block></statement><next><block type="transport" id="7?ANWc:pm-e0[KCTS}4|"><field name="PARAM_0">pick</field><next><block type="controls_repeat_ext" id="Da]uNs|!T6ohotb(u(/M"><value name="TIMES"><shadow type="math_number" id="Ay9krB=EGZ8FQ3xY@Nl|"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="moveSimple" id=".KEe7bOI,Dbur/odr7:_"><field name="PARAM_0">E</field></block></statement><next><block type="transport" id="/4}gjY:V_WXg3|)t(q3h"><field name="PARAM_0">drop</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: true,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "prah"}, {type: "sat"}, "colour", {}, {}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'tile.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["bee.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			cvet: { num: 2, img: "flower.png", zOrder: 2, category: {}, },
			prah: { num: 3, img: "flowerPrah.png", zOrder: 1, category: {'transportable':true}, transOrder:0},
			sat: {num: 4, img: ["honeycomb1.png", "honeycomb2.png"], zOrder: 2, colour: ['red','green','blue'] },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 3, 1, 1, 1, 4],
					[1, 1, 1, 3, 1, 1, 1, 1, 4],
					[1, 1, 3, 1, 1, 1, 1, 1, 4],
				],
				initItems: [
					{ row: 0, col: 0, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 0, col: 4, value: 0, type: "cvet"},
					{ row: 1, col: 3, value: 0, type: "cvet"},
					{ row: 2, col: 2, value: 0, type: "cvet"},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}