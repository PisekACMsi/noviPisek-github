function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "Car.png", side: 50, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 2, img: "Tree_with_grass.png", side: cellSide, category: "obstacle", isObstacle: true },
         grass: { num: 12, img: "Grass.png", side: cellSide, isObstacle: false },
         green: { num: 3, img: "School.png", side: cellSide, color: "vert", category: "green" },
		   marble: { num: 10, img: "Caterpillar_transparent.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         hole: { num: 11, img: "Road_horizontal_with_bus_sign.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
		   cesta_navzgor: { num: 4, img: "Road_vertical.png", side: cellSide,  isObstacle: false },
         cesta_vodoravna: { num: 5, img: "Road_horizontal.png", side: cellSide,  isObstacle: false },
         cesta_ovinek1: { num: 6, img: "Road_curved4.png", side: cellSide,  isObstacle: false },
         cesta_ovinek2: { num: 7, img: "Road_curved1.png", side: cellSide,  isObstacle: false },
         cesta_ovinek3: { num: 8, img: "Road_curved2.png", side: cellSide,  isObstacle: false },
         cesta_ovinek4: { num: 9, img: "Road_curved1.png", side: cellSide,  isObstacle: false },
      },
      maxInstructions: 100,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "south", "north", "onTransportable", "pickTransportable", "dropTransportable", "onHole"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "logic_operation", "controls_repeat_ext", "logic_negate", "controls_if"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkReachGreenArea
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 3],
                   [2, 6, 11, 5, 5, 8],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 9, 5, 5, 5, 5]
               ],
            initItems: [
                  { row: 6, col: 5, dir: 2, type: "green_robot" },
                  { row: 4, col: 1, type: "marble" },
               ]
         }
      ],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
