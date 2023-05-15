//TODO: Check _common/modules/pemFioi/blocklyRobot_lib-1.0.0.js and blocklyRobot_lib-1.0.1-dev.js!!!

// language strings
var localLanguageStrings = {
   sl: {
      startingBlockName: "Program",	//Začetni blok programa
      categories: {							//Imena kategorij
         actions: "Dejanja",
         sensors: "Senzorji",
      },
      label: {									//Imena ukazov
         move: "premakni se v smer %1 za %2",
         changeRobot: "zamenjaj vlogo %1", //custom MULTIROBOT
         wait: "počakaj",
         right: "obrni se desno",
         left: "obrni se levo",
         forward: "premakni se naprej",
         turnAround: "obrni se okoli",
         jump: "skoči",
         down: "pojdi dol",
         east: "premakni se desno",
         south: "premakni se dol2",
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
         move: "premakni",
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
         move: "premakni junaka za N korakov v določeno smer gledano absolutno oz. relativno",
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
      options:{
         north: "severno",
         south: "južno",
         east: "vzhodno",
         west: "zahodno",
         northwest: "severozahodno",
         southwest: "jugozahodno",
         southeast: "jugovzhodno",
         northeast: "severovzhodno",
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
         successPickedAllCoins: "Čestitamo, robot je pobral vse predmete!",
         failurePickedAllCoins: "Robot ni pobral vseh predmetov!",
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

// function for replacing keys inside dictionary
function replaceDict(source, dest) {
   if ((typeof source != "object") || (typeof dest != "object")) {
      return;
   }
   for (var key1 in source) {
      if (dest[key1] != undefined) {
         if (typeof dest[key1] == "object") {
            replaceDict(source[key1], dest[key1]);
         } else {
            dest[key1] = source[key1];
         }
      }
   }
}

//generatedBlocks
var getContext = function(display, infos) {
	var context = quickAlgoContext(display, infos);
	context.robot = {};
  
   // set language strings
	var strings = context.setLocalLanguageStrings(localLanguageStrings);
   if (infos.languageStrings != undefined) {
      replaceDict(infos.languageStrings.blocklyRobot_lib, strings);
   }
   
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

   // setup grid
   context.props = {
      cells: [],
      colsLabels: [],
      rowsLabels: [],
      scale: 1,
      paper: null,
      // dirToState: [0, 2, 4, 6], // [3, 0, 1, 2];
      // delta: [[0,1],[1,0],[0,-1],[-1,0]],
      delta: [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],],
      // dirNames: ["E","S","W","N"],
      dirNames: ["E","SE","S","SW","W","NW","N","NE"],
   }

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

	



















   // Grid DISPLAY functions -------------------------------------------------------------------------
   context.reset = function(gridInfos) {		
      if (gridInfos) {
         this.tiles = gridInfos.tiles;
         this.initItems = gridInfos.initItems;
         this.nbRows = this.tiles.length;
         this.nbCols = this.tiles[0].length;
      }
      this.items = [];
      this.transportingItems = []; // TODO add multirobot
      this.fullTransport = false;
      this.lost = false;
      this.success = false;
      this.nbMoves = 0;
      this.nbCoins = 0;
      this.curRobot = 0;
		this.robotRankInUse = 0;

      if (this.display) {
         this.resetDisplay();
         $("#nbMoves").html(this.nbMoves);
      } else {
         this.resetItems();
      }
   };	
	context.resetDisplay = function() {
		this.delayFactory.destroyAll();
		this.raphaelFactory.destroyAll();
		this.props.paper = this.raphaelFactory.create(
         "paperMain", 
         "grid", 
         infos.cellSide * this.nbCols * this.props.scale, 
         infos.cellSide * this.nbRows * this.props.scale
      );
		this.resetBoard();
		this.blocklyHelper.updateSize();
		this.resetItems();
		this.updateScale();
		
		var items = this.items;
		for(var i=0; i<this.items.length; i++){
			itemType = infos.itemTypes[items[i].type];
		}
	};
   context.resetBoard = function() {
      for(var iRow = 0;iRow < this.nbRows;iRow++) {
          this.props.cells[iRow] = [];
          for(var iCol = 0;iCol < this.nbCols;iCol++) {
             this.props.cells[iRow][iCol] = this.props.paper.rect(0, 0, 10, 10);
             if(this.tiles[iRow][iCol] == 0)
                this.props.cells[iRow][iCol].attr({'stroke-width': '0'});
             if(infos.backgroundColor && this.tiles[iRow][iCol] != 0)
                this.props.cells[iRow][iCol].attr({'fill': infos.backgroundColor});
             if(infos.noBorders && this.tiles[iRow][iCol] != 0)
                this.props.cells[iRow][iCol].attr({'stroke': infos.backgroundColor});
             if(infos.borderColor && this.tiles[iRow][iCol] != 0)
                this.props.cells[iRow][iCol].attr({'stroke': infos.borderColor});
          }
      }
      if(infos.showLabels) {
          for(var iRow = 0;iRow < this.nbRows;iRow++) {
             this.props.rowsLabels[iRow] = this.props.paper.text(0, 0, (iRow + 1));
          }
          for(var iCol = 0;iCol < this.nbCols;iCol++) {
             this.props.colsLabels[iCol] = this.props.paper.text(0, 0, (iCol + 1));
          }
      }
   };
   context.resetItem = function(initItem) {
      // reset item and add it to context.items based on function call parameteres
      var item = {};
      this.items.push(item);
      // pass on properties from function call { row:, col:, type: }
      for (var property in initItem) {
         item[property] = initItem[property];
      }

      // inherit properties from itemTypes
      var itemType = infos.itemTypes[item.type];
      for (var key in itemType) {
         if(!(key in item)){
            if( itemType[key] instanceof Array ){
               item[key] = itemType[key][0];
            }
            else{
               item[key] = itemType[key];
            }
         }
      }

      if (!("offsetX" in item)) item.offsetX = 0;
      if (!("offsetY" in item)) item.offsetY = 0;
      if (!("nbStates" in item)) item.nbStates = 1;
      if (!("zOrder" in item)) item.zOrder = 0;

      if (this.display) {
         this.redisplayItem(item);
      }
   };
   context.resetItems = function() {
      // empty item initialization
		this.items = [];
      // get item type codes
		var itemTypeByNum = {};
      for (var type in infos.itemTypes) {
         var itemType = infos.itemTypes[type];
         if (itemType.num != undefined) {
            itemTypeByNum[itemType.num] = type;
         }
      }
      // reset items on tiles
      for (var iRow = 0; iRow < this.nbRows; iRow++) {
         for (var iCol = 0; iCol < this.nbCols; iCol++) {
            var itemTypeNum = this.tiles[iRow][iCol];
            if (itemTypeByNum[itemTypeNum] != undefined) {
               this.resetItem({	row: iRow,  col: iCol,  type: itemTypeByNum[itemTypeNum]  });
            }
         }
      }
		// reset items in initItems
      for (var iItem = this.initItems.length - 1; iItem >= 0; iItem--) {
         this.resetItem(this.initItems[iItem]);
      }
      
   };
   context.resetItemsZOrder = function(row, col) {
      var cellItems = [];
      for (var iItem = this.items.length - 1; iItem >= 0; iItem--) {
         var item = this.items[iItem];
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
      var robots = this.getItems(undefined, undefined, {isRobot: true});
      robots.sort(function(robotA, robotB) {return -(robotA.rank - robotB.rank)})
      for(var iRobot=0; iRobot<robots.length; iRobot++){
         robots[iRobot].element.toFront();
      }   
   };
   context.redisplayItem = function(item) {
      if (item.element != null) {
         item.element.remove();
      }
      var x = (infos.cellSide * item.col + infos.leftMargin) * this.props.scale;
      var y = (infos.cellSide * item.row + infos.topMargin) * this.props.scale;
      var itemType = infos.itemTypes[item.type];
      if (itemType.img != undefined) {
         item.element = this.props.paper.image(
            item.img, 
            x, y, 
            item.side * item.nbStates * this.props.scale, 
            item.side * this.props.scale
         );
      } else if (itemType.value !== undefined) {
         item.element = this.props.paper.text(
            x + item.side * this.props.scale / 2, 
            y + item.side * this.props.scale / 2, 
            itemType.value
         ).attr({"font-size": item.side * this.props.scale / 2});
      }
      item.element.attr(this.itemAttributes(item));
      this.resetItemsZOrder(item.row, item.col);
   };
   context.unload = function() {
      if (this.display) {
         if (this.props.paper != null) {
            this.props.paper.remove();
         }
      }
   };
   context.updateScale = function() {
      if (!this.display) {
         return;
      }
      if (this.props.paper == null) {
         return;
      }
      var newCellSide;
      if (this.nbCols && this.nbRows) {
         var marginAsCols = infos.leftMargin / infos.cellSide;
         var marginAsRows = infos.topMargin / infos.cellSide;
         newCellSide = Math.min(
            infos.cellSide, 
            Math.min(
               400 / (this.nbCols + marginAsCols), 
               600 / (this.nbRows + marginAsRows)
            )
         );
      } else {
         newCellSide = 0;
      }
      this.props.scale = newCellSide / infos.cellSide;
      this.props.paper.setSize(
         (infos.cellSide * this.nbCols + infos.leftMargin) * this.props.scale, 
         (infos.cellSide * this.nbRows + infos.topMargin) * this.props.scale
      );
      for (var iRow = 0; iRow < this.nbRows; iRow++) {
         for (var iCol = 0; iCol < this.nbCols; iCol++) {
            if (this.props.cells[iRow][iCol] != undefined) {
               var x = (infos.cellSide * iCol + infos.leftMargin) * this.props.scale;
               var y = (infos.cellSide * iRow + infos.topMargin) * this.props.scale;
               this.props.cells[iRow][iCol].attr({
                  x: x, 
                  y: y, 
                  width: infos.cellSide * this.props.scale, 
                  height: infos.cellSide * this.props.scale
               });
            }
         }
      }
      if (infos.showLabels) {
         for (var iRow = 0; iRow < this.nbRows; iRow++) {
            var x = (infos.leftMargin - infos.cellSide / 2) * this.props.scale;
            var y = (infos.cellSide * (iRow + 0.5) + infos.topMargin) * this.props.scale;
            this.props.rowsLabels[iRow].attr({x: x, y: y}).attr({"font-size": infos.cellSide * this.props.scale / 2});
         }
         for (var iCol = 0; iCol < this.nbCols; iCol++) {
            var x = (infos.cellSide * iCol + infos.leftMargin + infos.cellSide / 2) * this.props.scale;
            var y = (infos.topMargin - infos.cellSide / 2) * this.props.scale;
            this.props.colsLabels[iCol].attr({x: x, y: y}).attr({"font-size": infos.cellSide * this.props.scale / 2});
         }
      }
      for (var iItem = 0; iItem < this.items.length; iItem++) {
         var item = this.items[iItem];
         this.redisplayItem(item);
         item.element.attr(this.itemAttributes(item));
      }
   };	
   context.getItems = function(row, col, filters) {
      var listItems = [];
      for (var iItem = 0; iItem < this.items.length; iItem++) {
         var item = this.items[iItem];
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
   context.itemAttributes = function(item) {
      var itemType = infos.itemTypes[item.type];
      var x = (infos.cellSide * item.col + item.offsetX + infos.leftMargin) * this.props.scale;
      var y = (infos.cellSide * item.row - (item.side - infos.cellSide) + item.offsetY + infos.topMargin) * this.props.scale;
      var xClip = x;
      if (item.dir != undefined) {
         // x = x - (this.props.dirToState[item.dir] * item.side * this.props.scale);
         x = x - (item.dir * item.side * this.props.scale);
      }
      var clipRect = "" + xClip + "," + y + "," + (item.side * this.props.scale) + "," + (item.side * this.props.scale);
      if (!itemType.img) {
         x += item.side * this.props.scale / 2;
         y += item.side * this.props.scale / 2;
      }
      return { 
         x: x, 
         y: y, 
         width: item.side * item.nbStates * this.props.scale, 
         height: item.side * this.props.scale, 
         "clip-rect": clipRect
      };
   };
   // override
   context.waitDelay = function(callback, value=undefined, delay=infos.actionDelay) {
      console.log("waitDelay3: ", callback, value);
      // Call the callback with value after actionDelay
      if(context.runner) {
      context.runner.waitDelay(callback, value, delay);
      } else {
      // When a function is used outside of an execution
      setTimeout(function () { callback(value); }, delay);
      }
   };



















   










   // BACKEND functions for blocks -------------------------------------------------------------------   
   var moveRobot = function(newRow, newCol, newDir) {
      var iRobot = context.robotRankInUse;
      var robot = context.getRobotItem(iRobot);
      console.log("robot.dir: ", robot.dir);

      var changeLoc = (robot.row != newRow) || (robot.col != newCol)
      var changeDir = (robot.dir != newDir)

      // If the robot turns and moves at the sime time, we do an instant turn (for now).
      if (changeDir && changeLoc) {
         robot.dir = newDir;
         if (context.display) {
            attr = context.itemAttributes(robot);
            robot.element.attr(attr);
         }
      }
      pathLength = Math.sqrt(Math.pow(robot.row-newRow,2) + Math.pow(robot.col-newCol,2));
		robot.dir = newDir;
		robot.row = newRow;
		robot.col = newCol;
      
      if (context.display) {
         var attr = context.itemAttributes(robot);
         if (changeLoc || !changeDir) {
            context.raphaelFactory.animate(
               "animRobot" + iRobot + "_" + Math.random(), 
               robot.element, 
               attr, 
               infos.actionDelay * pathLength
            );
         }
         else {
            if (infos.actionDelay > 0) {
               context.delayFactory.createTimeout(
                  "moveRobot" + iRobot + "_" + Math.random(), 
                  function() { robot.element.attr(attr); }, 
                  infos.actionDelay / 2
               );
            }
            else {
               robot.element.attr(attr);
            }
         }
         $("#nbMoves").html(context.nbMoves);
      }


      // TODO
      // obstacles
      // coins
      // buttons







      // var animate = (item.row != newRow) || (item.col != newCol) || (newDir == item.dir);
      // // If the robot turns and moves at the sime time, we do an instant turn (for now).
      // if ((item.dir != newDir) && ((item.row != newRow) || (item.col != newCol))) {
      //    item.dir = newDir;
      //    if (context.display) {
      //       attr = context.itemAttributes(item);
      //       item.element.attr(attr);
      //    }
      // }
      // item.dir = newDir;
      // item.row = newRow;
      // item.col = newCol;

      // //collectibles
      // var collectibles = context.getItems(newRow, newCol, {isCollectible: true});
      // var collected = [];
      // while (collectibles.length > 0) {
      //    var collectible = collectibles[0];
      //    collected.push(collectible);
      //    context.items.splice(collectible.index, 1);
      //    collectibles.splice(0, 1);
      //    context.nbCollectedItems++;
      // }

      // function removeItemsElements(items) {
      //    for (var iItem = 0; iItem < items.length; iItem++) {
      //       items[iItem].element.remove();
      //    }
      // }	
      
      // //custom button + door COMBO ---> oneTime BUTTON !! PERMA-CHANGE
      // //TODO multiTime BUTTON like a switch
      // //TODO pressure plate
      // function buttonDoor(row, col){
      //    var buttons = context.getItems(row, col, {category: "button"});
      //    if(buttons.length > 0){
      //       var button = buttons[0];
      //       var doors = context.getItems(undefined, undefined, {category: "door", id: infos.itemTypes[button.type].id});
            
      //       context.redisplayItem(button);
      //       for(var i=0; i<doors.length; i++){
      //          infos.itemTypes[doors[i].type].isObstacle = false;
               
      //          context.redisplayItem(doors[i]);
      //       }
      //    }
      // }

      // if (context.display) {
      //    var attr;
      //    //custom - optional
      //    buttonDoor(newRow, newCol);
         
      //    if (collected.length > 0) {
      //       context.delayFactory.createTimeout("removeItems" + iRobot + "_" + Math.random(), function() {
      //          removeItemsElements(collected);
      //       }, infos.actionDelay);
      //    }
      //    if (animate) {
      //       attr = context.itemAttributes(item);
      //       context.raphaelFactory.animate("animRobot" + iRobot + "_" + Math.random(), item.element, attr, infos.actionDelay);
      //    }
      //    else {
      //       attr = context.itemAttributes(item);
      //       if (infos.actionDelay > 0) {
      //          context.delayFactory.createTimeout("moveRobot" + iRobot + "_" + Math.random(), function() {
      //             item.element.attr(attr);
      //          }, infos.actionDelay / 2);
      //       }
      //       else {
      //          item.element.attr(attr);
      //       }
      //    }
      //    $("#nbMoves").html(context.nbMoves);
      // }
   };
   context.checkTileProhibited = function(row, col) {
      var obstacles = this.getItems(row, col, {isObstacle: true});
      if (infos.ignoreInvalidMoves) {
         return false;
      }
      else if (this.isOutsideGrid(row, col) || (this.tiles[row][col] == 0)) {
         return this.strings.messages.leavesGrid;
      }
      else if (obstacles.length > 0) {
         return this.strings.messages.obstacle;
      }
      else{
         return false;
      }
   };
   context.isOutsideGrid = function(row, col) {
      return ((col < 0) || (row < 0) || (col >= this.nbCols) || (row >= this.nbRows));
   };





	context.getRobotItem = function(robotRank) {
		var items = context.getItems(undefined, undefined, {isRobot: true, rank: robotRank});
		if(items.length == 0)  items = context.getItems(undefined, undefined, {isRobot: true});
		return items[0];
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
         context.resetItem(newItem);
         if (context.display) {
            context.resetItemsZOrder(newItem.row, newItem.col);
            if ((robot.col != newItem.col) || (robot.row != newItem.row)) {
               context.resetItemsZOrder(robot.row, robot.col);
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
   function gridEdgeCoord(row, col, callback) {
      var gridEdge = false;
      if (isOutsideGrid(row, col)) {
         gridEdge = true;
      } else if (context.tiles[row][col] == 0) {
         gridEdge = true;
      }
      context.runner.noDelay(callback, gridEdge);
   };
   var getCoordsInFront = function(dDir) {
      var item = context.getRobotItem(context.robotRankInUse);
      var lookDir = (item.dir + dDir + 4) % 4;
      return {
         row: item.row + context.props.delta[lookDir][0],
         col: item.col + context.props.delta[lookDir][1]
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
	function redisplayRobotTransporting(robot, transportable){
		var redisplayBool = false
		var itemType = infos.itemTypes[transportable.type];
		return redisplayBool;
	}

























	
	
   // BLOCKS functions --------------------------------------------------------------
   context.robot.move = function(dir, amount, callback) {
      var newDir = context.props.dirNames.indexOf(dir);
      if (context.lost) {
         return;
      }
      var robot = context.getRobotItem(context.robotRankInUse);
      // console.log(robot.row, robot.col, robot.dir)

      var dRow = context.props.delta[newDir][0];
      var dCol = context.props.delta[newDir][1];
      var pathLength = 0;
      var newRow = robot.row;
      var newCol = robot.col;
      var crash = false;
      for(var i=0; i<amount; i++){
         newRow = newRow + dRow;
         newCol = newCol + dCol;
         crash = context.checkTileProhibited(newRow, newCol);
         if (!crash) {
            pathLength += Math.sqrt(Math.pow(dRow,2)+Math.pow(dCol,2));
            context.nbMoves++;
         }
         else{
            newRow = newRow - dRow;
            newCol = newCol - dCol;
            break;
         }
      }
      
      moveRobot(newRow, newCol, newDir);
      if (crash) {
         throw crash;
      } 
      context.waitDelay(callback, undefined, infos.actionDelay * pathLength);
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
      if (context.checkTileProhibited(coords.row, coords.col)) {
         context.waitDelay(callback);
      }
      if (infos.hasGravity) {
         context.fall(item, coords, callback);
      } else {
         context.nbMoves++;
         moveRobot(coords.row, coords.col, item.dir, callback);
      }
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
   context.robot.addPlatformInFront = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      var coords = getCoordsInFront(robot.dir);
      addPlatform(coords.row + 1, coords.col, callback);
   };
   context.robot.addPlatformAbove = function(callback) {
      var robot = context.getRobotItem(context.robotRankInUse);
      addPlatform(robot.row - 1, robot.col, callback);
   };
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
      if (context.checkTileProhibited(item.row, item.col + 1)) {
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
      if (context.checkTileProhibited(item.row, item.col - 1)) {
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
      if (context.checkTileProhibited(item.row - 1, item.col)) {
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
      if (context.checkTileProhibited(item.row + 1, item.col)) {
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
            context.redisplayItem(itemsUnder[0]);
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
   context.robot.transportableShape = function(callback) {
      var result = getTransportableProperty("shape");
      context.callCallback(callback, result);
   };
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
				if(redisplayRobotTransporting(robot, transportable)) context.redisplayItem(robot); //MULTIROBOT optional
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
				context.redisplayItem(context.transportedItem);
				if(redisplayRobotTransporting(robot, context.transportedItem)) context.redisplayItem(robot); //MULTIROBOT optional
			}
			context.transportedItem = undefined;
			callback();
		});
	};
   context.robot.dir = function(callback) {
      var item = context.getRobotItem(context.robotRankInUse);
      context.callCallback(callback, context.props.dirNames[item.dir]);
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
            { 
               name: "move", 
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [localLanguageStrings[window.stringsLanguage]["options"]["north"], "N"],
                           [localLanguageStrings[window.stringsLanguage]["options"]["northeast"], "NE"],
                           [localLanguageStrings[window.stringsLanguage]["options"]["east"], "E"],
                           [localLanguageStrings[window.stringsLanguage]["options"]["southeast"], "SE"],
                           [localLanguageStrings[window.stringsLanguage]["options"]["south"], "S"],
                           [localLanguageStrings[window.stringsLanguage]["options"]["southwest"], "SW"],
                           [localLanguageStrings[window.stringsLanguage]["options"]["west"], "W"],
                           [localLanguageStrings[window.stringsLanguage]["options"]["northwest"], "NW"],
                        ],
                     },
                     {
                        "type": "field_number", 
                        "name": "PARAM_1", 
                        "value": 1,
                     },
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
		var robots = context.getItems(undefined, undefined, {isRobot: true});
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
