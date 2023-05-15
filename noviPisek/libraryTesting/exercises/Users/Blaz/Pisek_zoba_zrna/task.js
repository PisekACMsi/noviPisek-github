function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "pisek_blaz.png", category: "robot", side: 60, nbStates: 8, offsetX: 0 , zOrder:10},
         grass: { num: 1, img: "trava2.png", side: cellSide },
         red_roses: { num: 3, img: "red_roses.png", side: cellSide, isObstacle:true, zOrder:0 }, 
		   pink_roses: { num: 4, img: "pink_roses.png", side: cellSide, isObstacle: true, zOrder: 0 },
         pill: { num: 10, img: "pill_2times.png", side: cellSide, offsetX: 8, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
	  },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: ["east", "west", "north", "south", /*"pickTransportable", "dropTransportable", "onTransportable", "onHole"*/]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles //robotEndConditions.checkMarblesInHoles //robotEndConditions.checkReachGreenArea 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 4, 4, 1],
                   [1, 4, 4, 1],
                   [1, 1, 1, 1],
                   [1, 1, 3, 3],
               ],
            initItems: [
                  { row: 2, col: 0, dir: 0, type: "green_robot" },
                  { row: 2, col: 3,  type: "pill" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   