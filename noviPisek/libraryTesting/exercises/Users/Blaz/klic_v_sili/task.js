function initTask(subTask) {
   subTask.gridInfos = {				//podatki za urejevalnik in vizualno
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
      localBlocks: undefined,

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
				],
			},
         standardBlocks: {
            includeAll: true,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"],
            excludedBlocks: [],
         },
      },
      startingExample: { //vnaprej podana koda ukazov
         blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="YGeb@2~M85zZbM!9YL-K" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="3GTnYYyW8HUUJp,Se@xa"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="g}G6+TPXj8.z[bFeSM+E"><field name="NUM">3</field></shadow></value><next><block type="move" id=")K5Z4{=|[TE~Y;8WF*v5"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="DJOmHWHZv2uaEgfJuAEj"><field name="NUM">1</field></shadow></value></block></next></block></next></block><additional>{}</additional></xml>',
      },
      checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
      checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {type: "goal"}) },
      computeGrade: robotGradeFunctions.allOrNothing,

      border: 0.,
      // border: 0.05,
      backgroundColour: "pink",
      backgroundTile: false,
      // backgroundTile: "tile.png",
      borderColour: "red",
      showLabels: true,

      cellSide: 60,
      numberOfRobots: 1,
      // only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
      itemTypes: {
         robot0: { img: "pisek_fireman.png", side: 80, nbStates: 8, offsetX: -14, zOrder: 8, category: {'robot': true}, },
         obstacle: { num: 2, img: "trava2.png",  zOrder: 8, category: {'obstacle':true}, },
         goal: { num: 3, img: "dirt_road.png", zOrder:0 },
         road: { num: 4, img: "dirt_road.png", zOrder:0},
         red_roses: { num:5, img: "red_roses.png", category: {'obstacle':true}, zOrder:0 },
         pink_roses: { num: 6, img: "pink_roses.png", category: {'obstacle':true}, zOrder: 0 },
         drevo: { num: 7, img: "tree.png", category: {'obstacle':true}, zOrder: 0 },
         gorece_drevo: { num: 8, img: "tree_on_fire.png", category: {'obstacle':true}, zOrder: 0 },
         smreka: { num: 9, img: "spruce.png", category: {'obstacle':true}, zOrder: 0 },
         goreca_smreka: { num: 10, img: "spruce_on_fire.png", category: {'obstacle':true}, zOrder: 0 },
      },
      ignoreInvalidMoves: false,
  };

   subTask.data = {
      easy: [
         {
            tiles: [
               [9, 9, 4, 2, 5, 7],
               [9, 7, 4, 2, 5, 5],
               [2, 2, 4, 2, 2, 2],
               [2, 2, 4, 6, 6, 2],
               [2, 5, 4, 3, 10, 2],
               [2, 2, 7, 8, 8, 2],
            ],
            initItems: [
					{ row: 1, col: 2, dir: 2, type: "robot0"},
            ],
         },
      ],
   };

   initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}