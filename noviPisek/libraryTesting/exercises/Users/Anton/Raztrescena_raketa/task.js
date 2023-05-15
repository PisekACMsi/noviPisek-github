function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 2, img: "ozadje.png", side: cellSide, category: "obstacle", isObstacle: true },
         obstacle2: { num: 3, img: "ozadje_2.png", side: cellSide, category: "obstacle", isObstacle: true },
         pill1: { num: 4, img: "streha.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill2: { num: 5, img: "pogon.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill3: { num: 6, img: "kabina.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill4: { num: 7, img: "volan.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill5: { num: 8, img: "stol.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 }
      },
      maxInstructions: 7,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["right", "left", "forward"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
				easy: ["loops"],
				medium: ["loops"],
				hard: ["loops"],
			},
            singleBlocks: [],
         }
      },
      backgroundColor: "noire",
	  blocklyColourTheme: "bwinf",
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
			       [2, 1, 1, 1, 1, 1, 1, 1],
                   [2, 1, 1, 1, 4, 1, 5, 1],
				   [1, 1, 1, 1, 1, 1, 1, 1],
				   [3, 1, 1, 1, 1, 1, 6, 1],
				   [3, 1, 1, 1, 1, 1, 1, 1],
				   [2, 1, 1, 1, 1, 1, 7, 1],
				   [1, 1, 1, 1, 1, 1, 8, 1],
				   [2, 1, 1, 1, 1, 1, 1, 1]
				],
            initItems: [
                  { row: 1, col: 2, dir: 0, type: "green_robot" }
               ]
         }
      ],
      
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
   