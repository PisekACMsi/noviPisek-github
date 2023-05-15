//TODO: Check _common/modules/pemFioi/blocklyRobot_lib-1.0.0.js and blocklyRobot_lib-1.0.1-dev.js!!!
//generatedBlocks

//custom MULTIROBOT
var getContext = function(display, infos) {
	var localLanguageStrings = {
		sl: {
			startingBlockName: "Program",	//Začetni blok programa
			categories: {							//Imena kategorij
				actions: "Dejanja",
				sensors: "Senzorji",
			},
			label: {									//Imena ukazov
				changeRobot: "zamenjaj vlogo %1", //custom MULTIROBOT
				wait: "počakaj",
				right: "obrni se desno",
				left: "obrni se levo",
				forward: "premakni se naprej",
    	        turnAround: "obrni se okoli",
	            jump: "skoči",
	            down: "pojdi dol",
				east: "premakni se desno",
				south: "premakni se dol",
				west: "premakni se levo",
				north: "premakni se gor",
				paint: "pobarvaj polje",
				pickTransportable: "privezi Pikija na povodec",
				dropTransportable: "spusti Pikija s povodca",
				onTransportable: "na paketu",
				onRoundObject: "na okroglem predmetu",
				onSquareObject: "na kvadratnem predmetu",
				onTriangleObject: "na trikotnem predmetu",
				onDottedObject: "na pikčastem predmetu",
				onFullObject: "na polnem predmetu",
				onStripedObject: "na črtastem predmetu",
				onHole: "na odložišču",
				transportableShape: "oblika predmeta",
				transportableColor: "barva predmeta",
				transportableRed:  "predmet je rdeč",
				transportableBlue: "predmet je moder",
				transportableSquare: "predmet je kvadraten",
				greenCell: "polje je zeleno",
				brownCell: "polje je rjavo",
				markedCell: "polje je označeno",
				addPlatformAbove: "zgradi ploščad zgoraj",
				addPlatformInFront: "zgradi ploščad spredaj",
				platformInFront: "ploščad spedaj",
				platformInFrontAndBelow: "ploščad spredaj in spodaj",
				platformAbove: "ploščad zgoraj",
				gridEdgeInFront: "rob mreže spredaj",
				gridEdgeAbove: "rob mreže zgoraj",
				gridEdgeBelow: "rob mreže spodaj",
				gridEdgeEast: "rob mreže desno",
				gridEdgeWest: "rob mreže levo",
				obstacleInFront: "ovira spredaj",
				obstacleRight: "ovira desno",
				obstacleLeft: "ovira levo",
				obstacleEast: "ovira vzhodno",
				obstacleWest: "ovira zahodno",
				obstacleNorth: "ovira severno",
				obstacleSouth: "ovira južno",
				paintInFront: "barva spredaj",
				paintOnCell: "pobarvano polje",
				paintNorthWest: "barva zgoraj in levo",
				paintNorth: "barva zgoraj",
				paintNorthEast: "barva zgoraj in desno",
				colorUnder: "barva polja",
				numberUnder: "številka polja",
				writeNumber: "nastavi številko polja na",
				dir: "smer robota",
				col: "stolpec robota",
				row: "vrstica robota",
				alert: "opozorilo",
				onPill: "na bonbonu",
				number: "skupno število predmetov za prenos",
				exists: "obstaja predmet, ki ga je mogoče prenesti",
				trans_row: "vrstica predmeta za prenos",
				trans_col: "stolpec predmeta za prenos"
			},
			code: {
				changeRobot: "zamenjajVlogo", //custom MULTIROBOT
				wait: "počakaj",
				right: "obrniSeDesno",
				left: "obrniSeLevo",
				turnAround: "obrniSeOkoli",
				jump: "skoči",
				down: "pojdiDol",
				forward: "naprej",
				east: "desno",
				south: "dol",
				west: "levo",
				north: "gor",
				paint: "pobarvaj",
				pickTransportable: "poberi",
				dropTransportable: "odvrzi",
				onTransportable: "naPredmetu",
				onRoundObject: "naKrogu",
				onSquareObject: "naKvadratu",
				onTriangleObject: "naTrikotniku",
				onDottedObject: "naPikčastnemPredmetu",
				onFullObject: "naPolnemPredmetu",
				onStripedObject: "naČrtastemPredmetu",
				onHole: "naLuknji",
				transportableShape: "oblikaPredmeta",
				transportableColor: "barvaPredmeta",
				transportableRed: "rdečiPredmet",
				transportableBlue: "mordiPredmet",
				transportableSquare: "kvadratniPredmet",
				greenCell: "zelenoPolje",
				brownCell: "rjavoPolje",
				markedCell: "označenoPolje",
				platformInFront: "ploščadSpredaj",
				addPlatformAbove: "dodajPloščadZgoraj",
				addPlatformInFront: "dodajPloščadSpredaj",
				platformInFrontAndBelow: "ploščadSpredajInSpodaj",
				platformAbove: "ploščadZgoraj",
				gridEdgeInFront: "robMrežeSpredaj",
				obstacleInFront: "oviraSpredaj",
				gridEdgeEast: "robMrežeDesno",
				gridEdgeWest: "robMrežeLevo",
				gridEdgeAbove: "robMrežeZgoraj",
				gridEdgeBelow: "robMrežeSpodaj",
				obstacleRight: "oviraDesno",
				obstacleLeft: "oviraLevo",
				obstacleEast: "oviravzhodno",
				obstacleWest: "ovirazahodno",
				obstacleNorth: "oviraseverno",
				obstacleSouth: "ovirajužno",
				paintInFront: "pobarvanaSpredaj",
				paintOnCell: "pobarvanoPolje",
				paintNorthWest: "pobarvanaZgorajLevo",
				paintNorth: "pobarvanaZgoraj",
				paintNorthEast: "pobarvanaZgorajDesno",
				colorUnder: "barvaPolja",
				numberUnder: "številkaPolja",
				writeNumber: "zapišiŠtevilko",
				dir: "smer",
				col: "stolpec",
				row: "vrstica",
				alert: "opozorilo",
				onPill: "naBonbonu",
				number: "številoPredmetov",
				exists: "obstajaPredmet",
				trans_row: "vrsticaPredmeta",
				trans_col: "stolpecPredmeta"
			},
			description: {								//Opis ukazov
				changeRobot: "zamenjaj vlogo %1", //custom MULTIROBOT
				wait: "počaka",
				right: "obrne se v smeri urinega kazalca",
				left: "obrne se v nasprotni smeri urinega kazalca",
				turnAround: "obrne se za 180°",
				jump: "skok",
				down: "skok dol",
				forward: "naprej",
				east: "desno",
				south: "dol",
				west: "levo",
				north: "gor",
				paint: "pobarva",
				pickTransportable: "pobere",
				dropTransportable: "odvrže",
				onTransportable: "na prenosljivem predmetu",
				onRoundObject: "na okroglem predmetu",
				onSquareObject: "na kvadratastem predmetu",
				onTriangleObject: "na trikotnem predmetu",
				onDottedObject: "na pikčastnem predmetu",
				onFullObject: "na polnem predmetu",
				onStripedObject: "na črtastem predmetu",
				onHole: "na luknji",
				transportableShape: "oblika prenosljivega predmeta",
				transportableColor: "barva prenosljivega predmeta",
				transportableRed: "rdeči prenosljivi predmet",
				transportableBlue: "mordi prenosljivi predmet",
				transportableSquare: "kvadratni prenosljivi predmet",
				greenCell: "zeleno polje",
				brownCell: "rjavo polje",
				markedCell: "polje z markerjem",
				platformInFront: "ploščad spredaj",
				addPlatformAbove: "dodaj ploščad zgoraj",
				addPlatformInFront: "dodaj ploščad spredaj",
				platformInFrontAndBelow: "ploščad spredaj in spodaj",
				platformAbove: "ploščad zgoraj",
				gridEdgeInFront: "rob mreže spredaj",
				obstacleInFront: "ovira spredaj",
				gridEdgeEast: "rob mreže desno",
				gridEdgeWest: "rob mreže levo",
				gridEdgeAbove: "rob mreže zgoraj",
				gridEdgeBelow: "rob mreže spodaj",
				obstacleRight: "ovira desno",
				obstacleLeft: "ovira levo",
				obstacleEast: "ovira vzhodno",
				obstacleWest: "ovira zahodno",
				obstacleNorth: "ovira severno",
				obstacleSouth: "ovira južno",
				paintInFront: "pobarvana spredaj",
				paintOnCell: "pobarvano polje",
				paintNorthWest: "pobarvana zgoraj levo",
				paintNorth: "pobarvana zgoraj",
				paintNorthEast: "pobarvana zgoraj desno",
				colorUnder: "barva polja",
				numberUnder: "številka polja",
				writeNumber: "zapiši številko",
				dir: "smer",
				col: "stolpec",
				row: "vrstica",
				alert: "opozorilo",
				onPill: "na bonbonu",
				number: "število prenosljivih predmetov",
				exists: "obstaja prenosljiv predmet",
				trans_row: "vrstica prenosljivega predmeta",
				trans_col: "stolpec prenosljivega predmeta"
			},
			messages: {								//Besedila sporočil
				robotName0: "Miha", //custom MULTIROBOT
				robotName1: "Piki", //custom MULTIROBOT
				nothingToPickUp: "Ni predmetov, ki bi jih lahko pobral.",
				alreadyTransporting: "Robot že nosi predmet.",
				notTransporting: "Robot skuša spustiti predmet, vendar ga ne nosi.",
				successDroppedAllObjects: "Čestitamo, robot je spustil vse predmete!",
				successMarkersPainted: "Čestitamo, pišek je pravilno pobarval polja!",
				failureMarkersPainted: "Pišek ni pravilno pobarval polja.",
				successPickedAllCollectibles: "Čestitamo, robot je pobral vse predmete!",
				failurePickedAllCollectibles: "Robot ni pobral vseh predmetov!",
				successReachGeenArea: "Super! Miha in Piki sta uspešno prišla v park.",
				failureReachGeenArea: "Ojoj! Miha in Piki nista skupaj prišla do parka. Poskusi še enkrat.",
				successOneMarbleInHole: "Čestitamo, paket je na pravem mestu!",
				successAllMarblesInHoles: "Čestitamo, vsi paketi so na pravih mestih!",
				failureOneMarbleInHole: "Paket ni v odložišču!",
				failureAllMarblesInHoles: "Vsi paketi niso v odložiščih!",
				leavesGrid: "Pazi, rob mreže!",
				jumpOutsideGrid: "Pišek skuša skočiti izven mreže!",
				jumpObstacleBlocking: "Robot skuša skočiti, vendar zaradi ovire ne more!",
				jumpNoPlatform: "Robot skuša skočiti, vendar ni nobene ploščadi!",
				downOutsideGrid: "Robot se skuša premakniti izven mreže!",
				downNoPlatform: "Robot se skuša premakniti dol, vendar spodaj ni ploščadi!",
				falls: "Pišek pada v prazno.",
				willFallAndCrash: "Pišek bo padel z ploščadi in se poškodoval!",
				obstacleOnCell: "Na tem polju je ovira.",
				platformOnCell: "Na tem polju je že ploščad.",
				obstacle: "Pazi, ovira!",
				//custom MULTIROBOT
				robotNotOnGrid: "Piki je na povodcu, sedaj mora voditi Miha!",
				cantPickHimself: "Piki se ne more privezati sam na povodec!",
				failureReachGeenAreaSpecific: "V park morata priti Miha in Piki skupaj!",
			},
		},
		none: {
			comment: {
			}
		}
	};

	var context = quickAlgoContext(display, infos);

	var strings = context.setLocalLanguageStrings(localLanguageStrings);

   function replaceStringsRec(source, dest) {
      if ((typeof source != "object") || (typeof dest != "object")) {
         return;
      }
      for (var key1 in source) {
         if (dest[key1] != undefined) {
            if (typeof dest[key1] == "object") {
               replaceStringsRec(source[key1], dest[key1]);
            } else {
               dest[key1] = source[key1];
            }
         }
      }
   }

   if (infos.languageStrings != undefined) {
      replaceStringsRec(infos.languageStrings.blocklyRobot_lib, strings);
   }

	var cells = [];
	var colsLabels = [];
	var rowsLabels = [];
	var scale = 1;
	var paper;

   if (infos.leftMargin === undefined) {
      infos.leftMargin = 0;
   }
   if (infos.topMargin === undefined) {
      if (infos.showLabels) {
         infos.topMargin = 0;
      } else {
         infos.topMargin = infos.cellSide / 2;
      }
   }
   if (infos.showLabels) {
      infos.leftMargin += infos.cellSide;
      infos.topMargin += infos.cellSide;
   }

	context.robot = {};

	//Funkcija za določanje barv blokov ukazov
	switch (infos.blocklyColourTheme) {
		case "bwinf":
			context.provideBlocklyColours = function() {
				return {
					categories: {
						actions: 260,	//print  	//turtle
						sensors: 200,	//read 	//turtleInput
						logic: 100,
						loops: 180,
						math: 230,
						texts: 60,
						lists: 40,
						colour: 20,
						variables: 330,
						functions: 290,
						input: 350,
						tables: 90,
						dicts: 360,
						_default: 500,
					},
					blocks: {
						actions: 260,	//print  	//turtle
						sensors: 200,	//read 	//turtleInput
						logic: 100,
						loops: 180,
						math: 230,
						texts: 60,
						lists: 40,
						colour: 20,
						variables: 330,
						functions: 290,
						input: 350,
						tables: 90,
						dicts: 360,
						_default: 500,
					},
				};
			}
			break;
		default:
        // we could set robot specific default colours here, if we wanted to …
	}

	
	
   context.reset = function(gridInfos) {		
      if (gridInfos) {
         context.tiles = gridInfos.tiles;
         context.initItems = gridInfos.initItems;
         context.nbRows = context.tiles.length;
         context.nbCols = context.tiles[0].length;
      }
      context.items = [];
      context.lost = false;
      context.nbMoves = 0;
      context.success = false;
      context.nbTransportedItems = 0;
      context.nbCollectedItems = 0;
	  
		//custom MULTIROBOT
		context.robotRankInUse = 0;
	  
      if (context.display) {
         context.resetDisplay();
         $("#nbMoves").html(context.nbMoves);
      } else {
         resetItems();
      }
      //resetScores();
   };
   
	//custom for DEBUGGED button+door COMBO
	context.resetDisplay = function() {
		this.delayFactory.destroyAll();
		this.raphaelFactory.destroyAll();
		paper = this.raphaelFactory.create("paperMain", "grid", infos.cellSide * context.nbCols * scale, infos.cellSide * context.nbRows * scale);
		resetBoard();
		context.blocklyHelper.updateSize();
		resetItems();
		context.updateScale();
		
		//custom DEBUGGED!!!
		var items = context.items;
		for(var i=0; i<context.items.length; i++){
			itemType = infos.itemTypes[items[i].type];
			//closing DOORs MULTIROBOT
			if(itemType.category == "door") itemType.isObstacle = true; 
			//custom for repairing img_og!! MULTIROBOT
			if(itemType.img_og != undefined){ 
				itemType.img = itemType.img_og[0]; 
				itemType.img2 = itemType.img_og[1]; 
			}
		}
	};
	
	
   context.unload = function() {
      if (context.display) {
         if (paper != null) {
            paper.remove();
         }
      }
   };
   context.updateScale = function() {
      if (!context.display) {
         return;
      }
      if (paper == null) {
         return;
      }
      var newCellSide;
      if (context.nbCols && context.nbRows) {
         var marginAsCols = infos.leftMargin / infos.cellSide;
         var marginAsRows = infos.topMargin / infos.cellSide;
         newCellSide = Math.min(infos.cellSide, Math.min(400 / (context.nbCols + marginAsCols), 600 / (context.nbRows + marginAsRows)));
      } else {
         newCellSide = 0;
      }
      scale = newCellSide / infos.cellSide;
      paper.setSize((infos.cellSide * context.nbCols + infos.leftMargin) * scale, (infos.cellSide * context.nbRows + infos.topMargin) * scale);
      for (var iRow = 0; iRow < context.nbRows; iRow++) {
         for (var iCol = 0; iCol < context.nbCols; iCol++) {
            if (cells[iRow][iCol] != undefined) {
               var x = (infos.cellSide * iCol + infos.leftMargin) * scale;
               var y = (infos.cellSide * iRow + infos.topMargin) * scale;
               cells[iRow][iCol].attr({x: x, y: y, width: infos.cellSide * scale, height: infos.cellSide * scale});
            }
         }
      }
      if (infos.showLabels) {
         for (var iRow = 0; iRow < context.nbRows; iRow++) {
            var x = (infos.leftMargin - infos.cellSide / 2) * scale;
            var y = (infos.cellSide * (iRow + 0.5) + infos.topMargin) * scale;
            rowsLabels[iRow].attr({x: x, y: y}).attr({"font-size": infos.cellSide * scale / 2});
         }
         for (var iCol = 0; iCol < context.nbCols; iCol++) {
            var x = (infos.cellSide * iCol + infos.leftMargin + infos.cellSide / 2) * scale;
            var y = (infos.topMargin - infos.cellSide / 2) * scale;
            colsLabels[iCol].attr({x: x, y: y}).attr({"font-size": infos.cellSide * scale / 2});
         }
      }
      for (var iItem = 0; iItem < context.items.length; iItem++) {
         var item = context.items[iItem];
         redisplayItem(item);
         item.element.attr(itemAttributes(item));
      }
   };	
   
	//custom MULTIROBOT
	context.getRobotItem = function(robotRank) {
		var items = context.getItems(undefined, undefined, {category: "robot", rank: robotRank});
		if(items.length == 0)  items = context.getItems(undefined, undefined, {category: "robot"});
		return items[0];
	};
	context.robot.changeRobot = function(status, callback) {
		var count = 0;
		for(var i=0; i<infos.numberOfRobots; i++){
			if(context.getRobotItem(i).type == status){
				context.robotRankInUse = i;		
				count = 1;
			}
		}
		if(count == 0) throw(strings.messages.robotNotOnGrid);
		context.waitDelay(callback);
	};
	
	
   
   context.robot.forward = function(callback) {
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      var coords = getCoordsInFront(0);
      if (!checkTileAllowed(coords.row, coords.col)) {
         context.waitDelay(callback);
      }
      if (infos.hasGravity) {
         context.fall(item, coords, callback);
      } else {
         context.nbMoves++;
         moveRobot(coords.row, coords.col, item.dir, callback);
      }
   };
   context.fall = function(item, coords, callback) {
      var row = coords.row;
      var platforms = context.getItems(row+1, coords.col, {category: "platform"});
      while ((!isOutsideGrid(row + 1, coords.col)) && (platforms.length == 0)) {
         row++;
         platforms = context.getItems(row+1, coords.col, {category: "platform"});
      }
      if (isOutsideGrid(row + 1, coords.col)) {
         context.lost = true;
         throw(strings.messages.falls);
      }
      if (row - coords.row > 2) {
         context.lost = true;
         throw(strings.messages.willFallAndCrash);
      }
      coords.row = row;
      context.nbMoves++;
      moveRobot(coords.row, coords.col, item.dir, callback);
   };
   context.robot.jump = function(callback) {
      if (!infos.hasGravity) {
         throw("Error: can't jump without gravity");
      }
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      if (isOutsideGrid(item.row - 2, item.col)) {
         context.lost = true;
         throw(strings.messages.jumpOutsideGrid);
      }
      var obstacle = context.getItems(item.row - 2, item.col, {category: "obstacle"});
      if (obstacle.length > 0) {
         context.lost = true;
         throw(strings.messages.jumpObstacleBlocking);
      }
      var platforms = context.getItems(item.row - 1, item.col, {category: "platform"});
      if (platforms.length == 0) {
         context.lost = true;
         throw(strings.messages.jumpNoPlatform);
      }
      context.nbMoves++;
      moveRobot(item.row - 2, item.col, item.dir, callback);
   };
   context.robot.down = function(callback) {
      if (!infos.hasGravity) {
         throw("Error: can't go down without gravity");
      }
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      if (isOutsideGrid(item.row + 2, item.col)) {
         context.lost = true;
         throw(strings.messages.downOutsideGrid);
      }
      var platforms = context.getItems(item.row + 3, item.col, {category: "platform"});
      if (platforms.length == 0) {
        context.lost = true;
         throw(strings.messages.downNoPlatform);
      }
      context.nbMoves++;
      moveRobot(item.row + 2, item.col, item.dir, callback);
   };
   context.robot.turnAround = function(callback) {
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      var newDir = (item.dir + 2) % 4;
      moveRobot(item.row, item.col, newDir, callback);
   };
   context.robot.platformInFront = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var col = robot.col;
      if (robot.dir == 0) {
         col += 1;
      } else {
         col -= 1;
      }
      var platforms = context.getItems(robot.row + 1, col, {category: "platform"});
      context.runner.noDelay(callback, (platforms.length > 0));
   };
   context.robot.platformInFrontAndBelow = function(callback) {
      var item = context.getRobotItem(context.robotRankInUse);
      var col = item.col;
      if (item.dir == 0) {
         col += 1;
      } else {
         col -= 1;
      }
      var row = item.row + 3;
      var platforms = context.getItems(row, col, {category: "platform"});
      context.runner.noDelay(callback, (platforms.length > 0));
   };
   context.robot.platformAbove = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var platforms = context.getItems(robot.row - 1, robot.col, {category: "platform"});
      context.runner.noDelay(callback, (platforms.length > 0));
   }

   function gridEdgeCoord(row, col, callback) {
      var gridEdge = false;
      if (isOutsideGrid(row, col)) {
         gridEdge = true;
      } else if (context.tiles[row][col] == 0) {
         gridEdge = true;
      }
      context.runner.noDelay(callback, gridEdge);
   };

   context.robot.gridEdgeInFront = function(callback) {
      var coords = getCoordsInFront(0);
      gridEdgeCoord(coords.row, coords.col, callback);
   };
   context.robot.gridEdgeAbove = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      gridEdgeCoord(robot.row - 1, robot.col, callback);
   };
   context.robot.gridEdgeBelow = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      gridEdgeCoord(robot.row + 1, robot.col, callback);
   };
   context.robot.gridEdgeEast = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      gridEdgeCoord(robot.row, robot.col + 1, callback);
   };
   context.robot.gridEdgeWest = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      gridEdgeCoord(robot.row, robot.col - 1, callback);
   };

   function destroyItem(row, col, category) {
      var foundItem = -1;
      for (var iItem = 0; iItem < context.items.length; iItem++) {
         var item = context.items[iItem];
         if ((item.row == row) && (item.col == col) && (item.category == category)) {
            foundItem = iItem;
            break;
         }
      }
      if (foundItem != -1) {
         if (context.display) {
            context.items[foundItem].element.remove();
         }
         context.items.splice(foundItem, 1);
      }
   };
   function createItem(newItem) {
      var robot = context.getRobotItem(context.robotRankInUse);
      if (isOutsideGrid(newItem.row, newItem.col)) {
         throw("La case est en dehors de la grille");
      }
      var addItem = function() {
         resetItem(newItem);
         if (context.display) {
            resetItemsZOrder(newItem.row, newItem.col);
            if ((robot.col != newItem.col) || (robot.row != newItem.row)) {
               resetItemsZOrder(robot.row, robot.col);
            }
         }
      };
      if ((infos.actionDelay > 0) && (context.display)) {
         context.delayFactory.createTimeout("addItem" + "_" + Math.random(), function() {
            addItem();
         }, infos.actionDelay / 2);
      } else {
         addItem();
      }
   };
   function addPlatform(row, col, callback) {
      var platforms = context.getItems(row, col, {category: "platform"});
      if (platforms.length > 0) {
         throw(strings.messages.platformOnCell);
      }
      var obstacles = context.getItems(row, col, {isObstacle: true});
      if (obstacles.length > 0) {
         throw(strings.messages.obstacleOnCell);
      }
      createItem({row: row, col: col, type: "platform"});
      context.waitDelay(callback);
   };

   context.robot.addPlatformInFront = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var coords = getCoordsInFront(robot.dir);
      addPlatform(coords.row + 1, coords.col, callback);
   };
   context.robot.addPlatformAbove = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      addPlatform(robot.row - 1, robot.col, callback);
   };

   function paint(row, col, paintType, callback) {
      if (context.lost) {
         return;
      }

      var newItem = {row: row, col: col, type: paintType};
      var paintItems = context.getItems(row, col, {isPaint: true});
      if ((paintItems.length != 0) && (paintItems[0].type != paintType)) {
         destroyItem(row, col, "paint");
         paintItems.splice(0, 1);
      }
      if (paintItems.length == 0) {
         createItem(newItem);
      }
      context.waitDelay(callback);
   }

   context.robot.paint = function(callback) {
      var item = context.getRobotItem(context.robotRankInUse);
      paint(item.row, item.col, "paint", callback);
   };
   context.robot.paintGray = function(callback) {
      var item = context.getRobotItem(context.robotRankInUse);
      paint(item.row, item.col, "paintGray", callback);
   };
   context.robot.wait = function(callback) {
      context.waitDelay(callback);
   };
   context.robot.right = function(callback) {
      if (context.lost) {
         return;
      }
      var dDir = 1;
     
      var item = context.getRobotItem(context.robotRankInUse);
      var newDir = (item.dir + dDir) % 4;
      moveRobot(item.row, item.col, newDir, callback);
   };
   context.robot.left = function(callback) {
      if (context.lost) {
         return;
      }
      var dDir = 3;
     
      var item = context.getRobotItem(context.robotRankInUse);
      var newDir = (item.dir + dDir) % 4;
      moveRobot(item.row, item.col, newDir, callback);
   };
   context.robot.east = function(callback) {
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      if (!checkTileAllowed(item.row, item.col + 1)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         moveRobot(item.row, item.col + 1, 0, callback);
      }
   };
   context.robot.west = function(callback) {
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      if (!checkTileAllowed(item.row, item.col - 1)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         moveRobot(item.row, item.col - 1, 2, callback);
      }
   };
   context.robot.north = function(callback) {
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      if (!checkTileAllowed(item.row - 1, item.col)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         moveRobot(item.row - 1, item.col, 3, callback);
      }
   };
   context.robot.south = function(callback) {
      if (context.lost) {
         return;
      }
      var item = context.getRobotItem(context.robotRankInUse);
      if (!checkTileAllowed(item.row + 1, item.col)) {
         context.waitDelay(callback);
      } else {
         context.nbMoves++;
         moveRobot(item.row + 1, item.col, 1, callback);
      }
   };
   context.robot.itemInFront = function(callback) {
      var itemsInFront = getItemsInFront({isObstacle: true});
      context.callCallback(callback, itemsInFront.length > 0);
   };
   context.robot.obstacleInFront = function(callback) {
      categoryInFront("obstacle", false, callback);
   };
   context.robot.obstacleRight = function(callback) {
      var coords = getCoordsInFront(1);
      var items = context.getItems(coords.row, coords.col, {isObstacle: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.obstacleLeft = function(callback) {
      var coords = getCoordsInFront(-1);
      var items = context.getItems(coords.row, coords.col, {isObstacle: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.obstacleEast = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row, robot.col + 1, {isObstacle: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.obstacleWest = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row, robot.col - 1, {isObstacle: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.obstacleNorth = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row - 1, robot.col, {isObstacle: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.obstacleSouth = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row + 1, robot.col, {isObstacle: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.paintInFront = function(callback) {
      var coords = getCoordsInFront(0);
      var items = context.getItems(coords.row, coords.col, {isPaint: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.paintOnCell = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row, robot.col, {isPaint: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.paintNorthWest = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row - 1, robot.col - 1, {isPaint: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.paintNorth = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row - 1, robot.col, {isPaint: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.paintNorthEast = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var items = context.getItems(robot.row - 1, robot.col + 1, {isPaint: true});
      context.callCallback(callback, items.length > 0);
   };
   context.robot.colorUnder = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var itemsUnder = context.getItems(robot.row, robot.col, {hasColor: true});
      if (itemsUnder.length == 0) {
         context.callCallback(callback, "blanc");
      } else {
         context.callCallback(callback, infos.itemTypes[itemsUnder[0].type].color);
      }
   };
   context.robot.numberUnder = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var itemsUnder = context.getItems(robot.row, robot.col, {category: "number"});
      if (itemsUnder.length == 0) {
         context.callCallback(callback, 0);
      } else {
         context.callCallback(callback, infos.itemTypes[itemsUnder[0].type].value);
      }
   };
   context.robot.writeNumber = function(value, callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var itemsUnder = context.getItems(robot.row, robot.col, {category: "number"});
      if (itemsUnder.length == 0) {
         context.callCallback(callback);
      } else {
         itemsUnder[0].type = value;
         if (context.display) {
            redisplayItem(itemsUnder[0]);
         }
         context.callCallback(callback);
      }
   };
   context.robot.col = function(callback) {
      var item = context.getRobotItem(context.robotRankInUse);
      var col = item.col + 1;
      
      context.callCallback(callback, col);
   };
   context.robot.row = function(callback) {
      var item = context.getRobotItem(context.robotRankInUse);
      context.callCallback(callback, item.row + 1);
   };

   var findTransportable = function(id) {
      var transportables = context.getItems(undefined, undefined, {isTransportable: true});
      for (var iItem = 1; iItem < transportables.length; iItem++) {
         var item = transportables[iItem];
         if (item.id == id) {
            return item;
         }
      }
      return null;
   };

   context.transportable_exists = function(id, callback) {
      var transportable = findTransportable(id);
      context.runner.noDelay(callback, transportable != null);
   };
   context.transportable_col = function(id, callback) {
      var transportable = findTransportable(id);
      var res = 0;
      if (transportable != null) {
         res = transportable.col + 1;
      }
      context.callCallback(callback, res);
   };
   context.transportable_row = function(id, callback) {
      var transportable = findTransportable(id);
      var res = 0;
      if (transportable != null) {
         res = transportable.row + 1;
      }
      context.callCallback(callback, res);
   };
   context.transportable_number = function(callback) {
      var transportables = context.getItems(undefined, undefined, {isTransportable: true});
      context.callCallback(callback, transportables.length);
   };
   context.robot.onTransportable = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var transportables = context.getItems(robot.row, robot.col, {isTransportable: true});
      context.callCallback(callback, (transportables.length != 0));
   };
   context.robot.onHole = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var holes = context.getItems(robot.row, robot.col, {isHole: true});
      context.callCallback(callback, (holes.length != 0));
   };
   context.robot.onRoundObject = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var objects = context.getItems(robot.row, robot.col, {isRound: true});
      context.callCallback(callback, (objects.length != 0));
   };
   context.robot.onSquareObject = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var objects = context.getItems(robot.row, robot.col, {isSquare: true});
      context.callCallback(callback, (objects.length != 0));
   };
   context.robot.onTriangleObject = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var objects = context.getItems(robot.row, robot.col, {isTriangle: true});
      context.callCallback(callback, (objects.length != 0));
   };
   context.robot.onFullObject = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var objects = context.getItems(robot.row, robot.col, {isFull: true});
      context.callCallback(callback, (objects.length != 0));
   };
   context.robot.onDottedObject = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var objects = context.getItems(robot.row, robot.col, {isDotted: true});
      context.callCallback(callback, (objects.length != 0));
   };
   context.robot.onStripedObject = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var objects = context.getItems(robot.row, robot.col, {isStriped: true});
      context.callCallback(callback, (objects.length != 0));
   };
   context.robot.transportableColor = function(callback) {
      var result = getTransportableProperty("color");
      context.callCallback(callback, result);
   };
   context.robot.transportableSquare = function(callback) {
      var result = getTransportableProperty("shape");
      context.callCallback(callback, result == "carré");
   };
   context.robot.transportableRed = function(callback) {
      var result = getTransportableProperty("color");
      context.callCallback(callback, result == "rouge");
   };

   var robotCellIsColor = function(callback, color) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var result = false;
      var painted = context.getItems(robot.row, robot.col, {category: "paint"});
      if (painted.length > 0) {
         var itemType = infos.itemTypes[painted[0].type];
         if ((painted.length > 0) && (itemType.color != undefined)) {
            result = (itemType.color == color);
         }
      }
      context.callCallback(callback, result);
   };
   context.robot.greenCell = function(callback) {
      robotCellIsColor(callback, "vert");
   };
   context.robot.markedCell = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var markers = context.getItems(robot.row, robot.col, {isMarker: true});
      var result = (markers.length > 0);
      context.callCallback(callback, result);
   };
   context.robot.brownCell = function(callback) {
      robotCellIsColor(callback, "brown");
   };

   var getTransportableProperty = function(property) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var transportables = context.getItems(robot.row, robot.col, {isTransportable: true});
      if (transportables.length == 0) {
         return "";
      }
      var itemType = infos.itemTypes[transportables[0].type];
      if ((transportables.length > 0) && (itemType[property] != undefined)) {
         return itemType[property];
      }
      return "";
   };

   context.robot.transportableShape = function(callback) {
      var result = getTransportableProperty("shape");
      context.callCallback(callback, result);
   };
   
	//MULTIROBOT optional
	function redisplayRobotTransporting(robot, transportable){
		var redisplayBool = false
		var itemType = infos.itemTypes[transportable.type];
		if(itemType.category == "robot"){
			var temp = infos.itemTypes[robot.type].img;
			infos.itemTypes[robot.type].img = infos.itemTypes[robot.type].img2;	
			infos.itemTypes[robot.type].img2 = temp;
			redisplayBool = true
		};
		return redisplayBool;
	}
   
	//custom MULTIROBOT --> IMPORTANT BUG; Transportable Robot cant pick himself up!!
	context.robot.pickTransportable = function(callback) {
		var robot = context.getRobotItem(context.robotRankInUse);
		var transportables = context.getItems(robot.row, robot.col, {isTransportable: true});
		if (transportables.length == 0) {
			throw(context.strings.messages.nothingToPickUp);
		}
		/*
		if (transportables[0].rank != context.nbTransportedItems + 1) {
			throw("L'objet n'est pas celui qu'il faut ramasser maintenant.");
		}
		*/
		if (context.nbTransportedItems > 0) {
			throw(context.strings.messages.alreadyTransporting);
		}
		
		//custom MULTIROBOT --> IMPORTANT BUG; Transportable Robot cant pick himself up!!
		var i=0;
		for(i=0; i<transportables.length; i++){
			var itemType = infos.itemTypes[transportables[i].type];
			if(itemType.category != "robot" || itemType.rank != context.robotRankInUse) break;
		}
		
		if(i == transportables.length) throw(context.strings.messages.cantPickHimself);
		var transportable = transportables[i];
				
		context.items.splice(transportable.index, 1);
		context.nbTransportedItems++;
		context.transportedItem = transportable;
		/*
		if (context.nbTransportedItems == context.nbTransportableItems) {
			context.success = true;
			throw("Bravo, vous avez ramassé tous les objets dans le bon ordre !");
		}
		*/
		context.waitDelay(function() {
			if (context.display) {
				transportable.element.remove();
				if(redisplayRobotTransporting(robot, transportable)) redisplayItem(robot); //MULTIROBOT optional
			}
			callback();
		});
	};
   
   
	context.robot.dropTransportable = function(callback) {
		var robot = context.getRobotItem(context.robotRankInUse);
		if (context.transportedItem == undefined) {
			throw(context.strings.messages.notTransporting);
		}
		/*
		if (context.tiles[robot.row][robot.col] != 2) { // TODO : replace
			throw("Le robot essaie de déposer un objet ailleurs que sur une étoile.");
		}
		*/
		context.nbDroppedItems++;
		context.nbTransportedItems = 0;
		if (context.nbDroppedItems == context.nbTransportableItems - 1) {
			context.success = true;
			throw(context.strings.messages.successDroppedAllObjects);
		}
		context.waitDelay(function() {
			context.items.push(context.transportedItem);
			context.transportedItem.row = robot.row;
			context.transportedItem.col = robot.col;
			if (context.display) {
				redisplayItem(context.transportedItem);
				if(redisplayRobotTransporting(robot, context.transportedItem)) redisplayItem(robot); //MULTIROBOT optional
			}
			context.transportedItem = undefined;
			callback();
		});
	};

   var dirNames = ["E", "S", "O", "N"];
   context.robot.dir = function(callback) {
      var item = context.getRobotItem(context.robotRankInUse);
      context.callCallback(callback, dirNames[item.dir]);
   };

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
            // blocklyXml: optional Blockly xml string
            // codeGenerators: optional object:
            //   { Python: function that generates Python code
            //     JavaScript: function that generates JS code
            //   }
         }]
      }
      [1] https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
      [2] https://developers.google.com/blockly/guides/create-custom-blocks/type-checks
    */

   var isOutsideGrid = function(row, col) {
      return ((col < 0) || (row < 0) || (col >= context.nbCols) || (row >= context.nbRows));
   };
   var delta = [[0,1],[1,0],[0,-1],[-1,0]];
   var getCoordsInFront = function(dDir) {
      var item = context.getRobotItem(context.robotRankInUse);
      var lookDir = (item.dir + dDir + 4) % 4;
      return {
         row: item.row + delta[lookDir][0],
         col: item.col + delta[lookDir][1]
      };
   };
   var getItemsInFront = function(filters) {
      var coords = getCoordsInFront(0);
      return context.getItems(coords.row, coords.col, filters);
   };
   var nbOfCategoryInFront = function(category) {
      var itemsInFront = getItemsInFront({category: category});
      return itemsInFront.length;
   };
   var categoryInFront = function(category, count, callback) {
      var nbOfCategoryFound = nbOfCategoryInFront(category);
      var result = 0;
      if (count) {
         result = nbOfCategoryFound;
      } else {
         result = (nbOfCategoryFound > 0);
      }
      context.callCallback(callback, result);
   };

    // positions and dimensions will be set later by updateScale
    // add backgroundColor, borderColor and noBorders
    var resetBoard = function() {
        for(var iRow = 0;iRow < context.nbRows;iRow++) {
            cells[iRow] = [];
            for(var iCol = 0;iCol < context.nbCols;iCol++) {
                cells[iRow][iCol] = paper.rect(0, 0, 10, 10);
                if(context.tiles[iRow][iCol] == 0)
                    cells[iRow][iCol].attr({'stroke-width': '0'});
                if(infos.backgroundColor && context.tiles[iRow][iCol] != 0)
                    cells[iRow][iCol].attr({'fill': infos.backgroundColor});
                if(infos.noBorders && context.tiles[iRow][iCol] != 0)
                    cells[iRow][iCol].attr({'stroke': infos.backgroundColor});
                if(infos.borderColor && context.tiles[iRow][iCol] != 0)
                    cells[iRow][iCol].attr({'stroke': infos.borderColor});
            }
        }
        if(infos.showLabels) {
            for(var iRow = 0;iRow < context.nbRows;iRow++) {
                rowsLabels[iRow] = paper.text(0, 0, (iRow + 1));
            }
            for(var iCol = 0;iCol < context.nbCols;iCol++) {
                colsLabels[iCol] = paper.text(0, 0, (iCol + 1));
            }
        }
    };
   var resetItem = function(initItem) {
      var item = {};
      context.items.push(item);
      for (var property in initItem) {
         item[property] = initItem[property];
      }
      var itemType = infos.itemTypes[item.type];
	  
		if(itemType.img_og != undefined){  //REDUNDANT its already in context.resetDisplay, BUT here it resets images SOONER!!
			itemType.img = itemType.img_og[0]; 
			itemType.img2 = itemType.img_og[1]; 
		}
		
      item.side = itemType.side;
      item.category = itemType.category;
      if (itemType.team != undefined) {
         item.team = itemType.team;
      }
      item.offsetX = 0;
      if (itemType.offsetX != undefined) {
         item.offsetX = itemType.offsetX;
      }
      item.offsetY = 0;
      if (itemType.offsetY != undefined) {
         item.offsetY = itemType.offsetY;
      }
      item.nbStates = 1;
      if (itemType.nbStates != undefined) {
         item.nbStates = itemType.nbStates;
      }
      if (itemType.zOrder != undefined) {
         item.zOrder = itemType.zOrder;
      } else {
         item.zOrder = 0;
      }
      if (context.display) {
         redisplayItem(item);
      }
   };
	
	//debugging door+button COMBO
	var resetItems = function() {
		context.items = [];
		var itemTypeByNum = {};
		for (var type in infos.itemTypes) {
			var itemType = infos.itemTypes[type];
			if (itemType.num != undefined) {
				itemTypeByNum[itemType.num] = type;
			}
		}
		for (var iRow = 0; iRow < context.nbRows; iRow++) {
			for (var iCol = 0; iCol < context.nbCols; iCol++) {
				var itemTypeNum = context.tiles[iRow][iCol];
				if (itemTypeByNum[itemTypeNum] != undefined) {
					resetItem({	row: iRow,  col: iCol,  type: itemTypeByNum[itemTypeNum]  });
				}
			}
		}
		
		for (var iItem = context.initItems.length - 1; iItem >= 0; iItem--) {
			resetItem(context.initItems[iItem]);
		}
	  
	};
   
	var resetItemsZOrder = function(row, col) {
		var cellItems = [];
		for (var iItem = context.items.length - 1; iItem >= 0; iItem--) {
			var item = context.items[iItem];
			if ((item.row == row) && (item.col == col)) {
				cellItems.push(item);
			}
		}
		cellItems.sort(function(itemA, itemB) {
			if (itemA.zOrder < itemB.zOrder) {
				return -1;
			}
			if (itemA.zOrder == itemB.zOrder) {
				return 0;
			}
			return 1;
		});
		for (var iItem = 0; iItem < cellItems.length; iItem++) { //robot on cell is implicitly included
			cellItems[iItem].element.toFront();
		}
		//for robots not on the same cell!! custom MULTIROBOT
		var robots = context.getItems(undefined, undefined, {category: "robot"});
		robots.sort(function(robotA, robotB) {return -(robotA.rank - robotB.rank)})
		for(var iRobot=0; iRobot<robots.length; iRobot++){
			robots[iRobot].element.toFront();
		}
		
	};
   
   var redisplayItem = function(item) {
      if (item.element != null) {
         item.element.remove();
      }
      var x = (infos.cellSide * item.col + infos.leftMargin) * scale;
      var y = (infos.cellSide * item.row + infos.topMargin) * scale;
      var itemType = infos.itemTypes[item.type];
      if (itemType.img) {
         item.element = paper.image(itemType.img, x, y, item.side * item.nbStates * scale, item.side * scale);
      } else if (itemType.value !== undefined) {
         item.element = paper.text(x + item.side * scale / 2, y + item.side * scale / 2, itemType.value).attr({"font-size": item.side * scale / 2});
      }
      item.element.attr(itemAttributes(item));
      resetItemsZOrder(item.row, item.col);
   };
	
	//custom MULTIROBOT button + door COMBO
	var moveRobot = function(newRow, newCol, newDir, callback) {
		var iRobot = context.robotRankInUse;
		var item = context.getRobotItem(iRobot);
		var animate = (item.row != newRow) || (item.col != newCol) || (newDir == item.dir);
		// If the robot turns and moves at the sime time, we do an instant turn (for now).
		if ((item.dir != newDir) && ((item.row != newRow) || (item.col != newCol))) {
			item.dir = newDir;
			if (context.display) {
				attr = itemAttributes(item);
				item.element.attr(attr);
			}
		}
		item.dir = newDir;
		item.row = newRow;
		item.col = newCol;

		//collectibles
		var collectibles = context.getItems(newRow, newCol, {isCollectible: true});
		var collected = [];
		while (collectibles.length > 0) {
			var collectible = collectibles[0];
			collected.push(collectible);
			context.items.splice(collectible.index, 1);
			collectibles.splice(0, 1);
			context.nbCollectedItems++;
		}

		function removeItemsElements(items) {
			for (var iItem = 0; iItem < items.length; iItem++) {
				items[iItem].element.remove();
			}
		}	
		
		//custom button + door COMBO ---> oneTime BUTTON !! PERMA-CHANGE
		//TODO multiTime BUTTON like a switch
		//TODO pressure plate
		function buttonDoor(row, col){
			var buttons = context.getItems(row, col, {category: "button"});
			if(buttons.length > 0){
				var button = buttons[0];
				var doors = context.getItems(undefined, undefined, {category: "door", id: infos.itemTypes[button.type].id});
				infos.itemTypes[button.type].img = infos.itemTypes[button.type].img2;	
				redisplayItem(button);
				for(var i=0; i<doors.length; i++){
					infos.itemTypes[doors[i].type].isObstacle = false;
					infos.itemTypes[doors[i].type].img = infos.itemTypes[doors[i].type].img2;	
					redisplayItem(doors[i]);
				}
			}
		}

		if (context.display) {
			var attr;
			//custom - optional
			buttonDoor(newRow, newCol);
			
			if (collected.length > 0) {
				context.delayFactory.createTimeout("removeItems" + iRobot + "_" + Math.random(), function() {
					removeItemsElements(collected);
				}, infos.actionDelay);
			}
			if (animate) {
				attr = itemAttributes(item);
				context.raphaelFactory.animate("animRobot" + iRobot + "_" + Math.random(), item.element, attr, infos.actionDelay);
			}
			else {
				attr = itemAttributes(item);
				if (infos.actionDelay > 0) {
					context.delayFactory.createTimeout("moveRobot" + iRobot + "_" + Math.random(), function() {
						item.element.attr(attr);
					}, infos.actionDelay / 2);
				}
				else {
					item.element.attr(attr);
				}
			}
			$("#nbMoves").html(context.nbMoves);
		}
		context.waitDelay(callback);
	};

   context.getItems = function(row, col, filters) {
      var listItems = [];
      for (var iItem = 0; iItem < context.items.length; iItem++) {
         var item = context.items[iItem];
         var itemType = infos.itemTypes[item.type];
         if ((row == undefined) || ((item.row == row) && (item.col == col))) {
            var accepted = true;
            for (var property in filters) {
               var value = filters[property];
               if ((itemType[property] == undefined) && (value != undefined)) {
                  accepted = false;
                  break;
               }
               if ((itemType[property] != undefined) && (itemType[property] != value)) {
                  accepted = false;
                  break;
               }
            }
            if (accepted) {
               item.index = iItem;
               listItems.push(item);
            }
         }
      }
      return listItems;
   };

   var checkTileAllowed = function(row, col) {
      if (isOutsideGrid(row, col) || (context.tiles[row][col] == 0)) {
         if (infos.ignoreInvalidMoves) {
            return false;
         }
         throw(context.strings.messages.leavesGrid);
      }
      var itemsInFront = context.getItems(row, col, {isObstacle: true});
      if (itemsInFront.length > 0) {
         if (infos.ignoreInvalidMoves) {
            return false;
         }
         throw(strings.messages.obstacle);
      }
      return true;
   };
   var itemAttributes = function(item) {
      var itemType = infos.itemTypes[item.type];
      var x = (infos.cellSide * item.col + item.offsetX + infos.leftMargin) * scale;
      var y = (infos.cellSide * item.row - (item.side - infos.cellSide) + item.offsetY + infos.topMargin) * scale;
      var xClip = x;
      if (item.dir != undefined) {
//         var dirToState = [3, 0, 1, 2];
         var dirToState = [0, 2, 4, 6];
         x = x - (dirToState[item.dir] * item.side * scale);
      }
      var clipRect = "" + xClip + "," + y + "," + (item.side * scale) + "," + (item.side * scale);
      if (!itemType.img) {
         x += item.side * scale / 2;
         y += item.side * scale / 2;
      }
      return { x: x, y: y, width: item.side * item.nbStates * scale, height: item.side * scale, "clip-rect": clipRect};
   };

   context.customBlocks = {
      robot: {
         actions: [
			{ 
				name: "changeRobot", //custom MULTIROBOT
				blocklyJson: {
					"args0": [
						{
							"type": "field_dropdown", 
							"name": "PARAM_0", 
							"options": [
								[localLanguageStrings[window.stringsLanguage]["messages"]["robotName0"], localLanguageStrings[window.stringsLanguage]["messages"]["robotName0"]],
								[localLanguageStrings[window.stringsLanguage]["messages"]["robotName1"], localLanguageStrings[window.stringsLanguage]["messages"]["robotName1"]],
							],
						}
					],
				},
			},
            { name: "paint" },
            { name: "paintGrey" },
            { name: "forward" },
            { name: "turnAround" },
            { name: "jump" },
            { name: "down" },
            { name: "right" },
            { name: "left" },
            { name: "east" },
            { name: "west" },
            { name: "north" },
            { name: "south" },
            { name: "wait" },
            { name: "pickTransportable" },
            { name: "dropTransportable" },
            { name: "writeNumber", params: [null] },
            { name: "addPlatformAbove",   yieldsValue: false },
            { name: "addPlatformInFront",   yieldsValue: false }
         ],
         sensors: [
            { name: "onTransportable",    yieldsValue: true },
            { name: "onRoundObject",      yieldsValue: true },
            { name: "onSquareObject",     yieldsValue: true },
            { name: "onTriangleObject",   yieldsValue: true },
            { name: "onDottedObject",     yieldsValue: true },
            { name: "onStripedObject",    yieldsValue: true },
            { name: "onFullObject",       yieldsValue: true },
            { name: "onHole",             yieldsValue: true },
            { name: "transportableShape", yieldsValue: true },
            { name: "transportableColor", yieldsValue: true },
            { name: "transportableRed",   yieldsValue: true },
            { name: "transportableBlue",  yieldsValue: true },
            { name: "transportableSquare", yieldsValue: true },

            { name: "greenCell",          yieldsValue: true },
            { name: "brownCell",          yieldsValue: true },
            { name: "markedCell",         yieldsValue: true },

            { name: "obstacleInFront",    yieldsValue: true },
            { name: "obstacleRight",      yieldsValue: true },
            { name: "obstacleLeft",       yieldsValue: true },
            { name: "obstacleEast",       yieldsValue: true },
            { name: "obstacleWest",       yieldsValue: true },
            { name: "obstacleNorth",      yieldsValue: true },
            { name: "obstacleSouth",      yieldsValue: true },

            { name: "paintInFront",       yieldsValue: true },
            { name: "paintOnCell",        yieldsValue: true },
            { name: "paintNorth",         yieldsValue: true },
            { name: "paintNorthWest",     yieldsValue: true },
            { name: "paintNorthEast",     yieldsValue: true },
            { name: "colorUnder",         yieldsValue: true },
            { name: "numberUnder",        yieldsValue: true },
            { name: "gridEdgeInFront",    yieldsValue: true },
            { name: "gridEdgeEast",       yieldsValue: true },
            { name: "gridEdgeWest",       yieldsValue: true },
            { name: "gridEdgeAbove",      yieldsValue: true },
            { name: "gridEdgeBelow",      yieldsValue: true },
            { name: "platformInFront",    yieldsValue: true },
            { name: "platformInFrontAndBelow", yieldsValue: true },
            { name: "platformAbove",      yieldsValue: true },
            { name: "dir",                yieldsValue: true },
            { name: "col",                yieldsValue: true },
            { name: "row",                yieldsValue: true },
            { name: "onPill",             yieldsValue: true }
         ]
      },
      transport: {
         sensors: [
            { name: "number", yieldsValue: true,                     handler: context.transportable_number },
            { name: "exists", yieldsValue: true,   params: [null],   handler: context.transportable_exists },
            { name: "trans_row",    yieldsValue: true,   params: [null],   handler: context.transportable_row },
            { name: "trans_col",    yieldsValue: true,   params: [null],   handler: context.transportable_col }
         ]
      },
      debug: {
         debug: [
            { name: "alert", params: [null], handler: context.debug_alert }
         ]
      }
   };

   return context;
};
//checkEndConditions
var robotEndConditions = {
	checkMarkersPainted: function(context, lastTurn) {
		var solved = true;
		for (var iRow = 0; iRow < context.tiles.length; iRow++) {
			var row = context.tiles[iRow];
			for (var iCol = 0; iCol < row.length; iCol++) {
				var markers = context.getItems(iRow, iCol, {isMarker: true});
				var paint = context.getItems(iRow, iCol, {isPaint: true});
				if (paint.length != markers.length) {
					solved = false;
				}
			}
		}
		if (solved) {
			context.success = true;
			throw(window.languageStrings.messages.successMarkersPainted);
		}
		if (lastTurn) {
			context.success = false;
			throw(window.languageStrings.messages.failureMarkersPainted);
		}
	},
	checkPickedAllCollectibles: function(context, lastTurn) {
		var solved = true;
		for (var iRow = 0; iRow < context.tiles.length; iRow++) {
			var row = context.tiles[iRow];
			for (var iCol = 0; iCol < row.length; iCol++) {
				var collectibles = context.getItems(iRow, iCol, {isCollectible: true});
				if (collectibles.length != 0) {
					solved = false;
				}
			}
		}
		if (solved) {
			context.success = true;
			throw(window.languageStrings.messages.successPickedAllCollectibles);
		}
		if (lastTurn) {
			context.success = false;
			throw(window.languageStrings.messages.failurePickedAllCollectibles);
		}
	},
	checkReachGreenArea: function(context, lastTurn) {
		var robot = context.getRobotItem(context.robotRankInUse);
		var paints = context.getItems(robot.row, robot.col, {color: "vert"}); // TODO: internationalize color
		if (paints.length != 0) {
			context.success = true;
			throw(window.languageStrings.messages.successReachGeenArea);
		}
		if (lastTurn) {
			context.success = false;
			throw(window.languageStrings.messages.failureReachGeenArea);
		}
	},
	checkReachGreenAreaMULTIROBOTspecific: function(context, lastTurn) {
		var robot = context.getRobotItem(context.robotRankInUse);
		var robots = context.getItems(undefined, undefined, {category: "robot"});
		var paints = context.getItems(robot.row, robot.col, {color: "vert"}); // TODO: internationalize color
		var solved = false;
		var string = window.languageStrings.messages.failureReachGeenArea;
		
		if (paints.length != 0) {
			if(robots.length > 1){
				solved = false;
				string = window.languageStrings.messages.failureReachGeenAreaSpecific;
			}
			else{
				solved = true;
				string = window.languageStrings.messages.successReachGeenArea;
			}
		}
		
		if(solved){
			context.success = true;
			throw(string);			
		}
		else if (lastTurn) {
			context.success = false;
			throw(string);
		}
	},
	checkMarblesInHoles: function(context, lastTurn) {
		var solved = true;
		var nbHoles = 0;
		for (var iRow = 0; iRow < context.tiles.length; iRow++) {
			var row = context.tiles[iRow];
			for (var iCol = 0; iCol < row.length; iCol++) {
				var marbles = context.getItems(iRow, iCol, {category: "marble"});
				var holes = context.getItems(iRow, iCol, {category: "hole"});
				nbHoles += holes.length;
				if (marbles.length != holes.length) {
					solved = false;
				}
			}
		}
		if (solved) {
			context.success = true;
			if (nbHoles == 1) {
				throw(window.languageStrings.messages.successOneMarbleInHole);
			}
			else {
				throw(window.languageStrings.messages.successAllMarblesInHoles);
			}
		}
		if (lastTurn) {
			context.success = false;
			if (nbHoles == 1) {
				throw(window.languageStrings.messages.failureOneMarbleInHole);
			}
			else {
				throw(window.languageStrings.messages.failureAllMarblesInHoles);
			}
		}
	}
};
//klic knjižnic
if(window.quickAlgoLibraries) {
	quickAlgoLibraries.register('robot', getContext);
}
else {
	if(!window.quickAlgoLibrariesList) {
		window.quickAlgoLibrariesList = []; 
	}
	window.quickAlgoLibrariesList.push(['robot', getContext]);
}
