//generatedBlocks
var getContext = function(display, infos) {
	var localLanguageStrings = {
		fr: {
         label: {
            print: "écrire",
            read: "lire une ligne",
            readInteger: "lire un entier sur une ligne",
            readFloat: "lire un nombre à virgule sur une ligne",
            eof: "fin de la saisie"
         },
         code: {
            print: "print",
            read: "input",
            readInteger: "lireEntier",
            readFloat: "lireDecimal",
            eof: "finSaisie"
         },
         description: {
         },
         startingBlockName: "Programme",
         messages: {
            outputWrong: "Votre programme n'a pas traité correctement toutes les lignes.",
            outputCorrect: "Bravo ! Votre programme a traité correctement toutes les lignes.",
            tooFewChars: "Ligne trop courte : ligne ",
            tooManyChars: "Ligne trop longue : ligne ",
            tooFewLines: "Trop peu de lignes en sortie",
            tooManyLines: "Trop de lignes en sortie",
            correctOutput: "La sortie est correcte !",
            moreThan100Moves: "La sortie est correcte, mais vous l'avez produite en plus de 100 étapes…"
         }
      },
		de: {
         label: {
            print: "schreibe",
            read: "lies Zeile",
            readInteger: "lies Zeile als ganze Zahl",
            readFloat: "lies Zeile als Komma-Zahl",
            eof: "Ende der Eingabe"
         },
         code: {
            print: "schreibe",
            read: "lies",
            readInteger: "liesGanzzahl",
            readFloat: "liesKommazahl",
            eof: "eingabeEnde"
         },
         description: {
         },
         startingBlockName: "Programm",
         messages: {
            outputWrong: "Das Programm hat nicht alle Zeilen richtig ausgegeben.",
            outputCorrect: "Bravo! Das Programm hat alle Zeilen richtig ausgegeben.",
            tooFewChars: "Zeile zu kurz: Zeile ",
            tooManyChars: "Zeile zu lang: Zeile ",
            tooFewLines: "Zu wenig Zeilen ausgegeben",
            tooManyLines: "Zu viele Zeilen ausgegeben",
            correctOutput: "Die Ausgabe ist richtig!",
            moreThan100Moves: "Die Ausgabe ist richtig, aber du hast mehr als 100 Schritte benötigt …"
         }
      },
		sl: {
			startingBlockName: "Program", 	//Začetni blok programa
			categories: {								//Imena kategorij
				print: "Pisanje",
				read: "Branje",
				manipulate: "Obdelava",
			},
			label: {										//Imena ukazov
				print: "izpiši",
				print_end: "izpiši %1 na koncu dodaj %2",
				read: "preberi vrstico",
				readInteger: "preberi celo število",
				readFloat: "preberi decimalno število",
				eof: "konec vhoda", 
				charToNumber: "Spremeni znak %1 v števko",
				numberToChar: "Spremeni števko %1 v znak",
				asciiToChar: "Spremeni ASCII število %1 v znak",
				charToAscii: "Spremeni znak %1 v ASCII število",
				special_case: "naredi %1",
			},
			code: {
				print: "napisi",
				print_end: "napisi",
				read: "preberi",
				readInteger: "preberiCelo",
				readFloat: "preberiDecimalno",
				eof: "konecVhoda",
				charToNumber: "ZnakVStevilko",
				numberToChar: "StevilkaVZnak",
				asciiToChar: "ASCIIvZnak",
				charToAscii: "ZnakvASCII",
				special_case: "specialCase",
			},
			description: {								//Opis ukazov
				print: "naprinta",
				read: "prebere",
				readInteger: "preberi celo stevilo",
				readFloat: "prebere stevilo z decimalkami (4)",
				eof: "konecVhoda",
				special_case: "specialCase",
			},
			messages: { 								//Besedila sporočil
				inputPrompt: "Prosim napiši vrstico za program.",
				inputEmpty: "Tvoj program poskuša prebrati vrstico, čeprav ni nobene vrstice več za prebrati!",
				outputWrong: "Program ni napisal vseh vrstic pravilno.",
				outputCorrect: "Čestitamo! Program je pravilno napisal vse vrstice.",
				tooFewChars: "Vrstica prekratka",
				tooManyChars: "Vrstica predolga",
				line: "vrstica",
				tooFewLines: "Premalo vrstic na izhodu!",
				tooManyLines: "Preveč vrstic na izhodu!",
				correctOutput: "Pravilen izhod!",
				intro: "Izhod tvojega programa je napačen",
				expected: "Pričakovano",
				answer: "Vaš odgovor",
				charToNumberError: "Znak ni števka!",
				numberToCharError: "Število mora biti števka med  0 in 9!",
				tabulator: "zamik",
				jump: "skok v novo vrstico",
			},
		},
		none: {
			comment: {
			}
		}
	}

	var context = quickAlgoContext(display, infos);
	var strings = context.setLocalLanguageStrings(localLanguageStrings);
	var cells = [];
	var texts = [];
	var scale = 1;
	var firstLineHighlight = null;
	var libOptions = infos.libOptions ? infos.libOptions : {};

	context.printer = {
		input_text : "",
		output_text : "",
		input_reset: true
	};

	if (infos.showIfMutator) {
		context.showIfMutator = true;
	}
	            
	function escapeHtml(unsafe) {
		return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
	}
	
	//Funkcija za določanje barv blokov ukazov
	switch (infos.blocklyColourTheme) {
		case "bwinf":
			context.provideBlocklyColours = function() {
				return {
					categories: {
						print: 260,
						manipulate: 230,
						read: 200,
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
						print: 260,
						read: 200,
						manipulate: 230,
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
        // we could set printer specific default colours here, if we wanted to …
	}

	context.reset = function(taskInfos) {
		this.success = false;
		if (context.display) {
			context.resetDisplay();
		}
		else {
         // resetItems();
		}
      
		context.printer.output_text = "";
		context.printer.input_text = "";
		context.printer.input_reset = true;
      
		if (taskInfos) {
			context.taskInfos = taskInfos;
		}
		if (context.taskInfos.input) {
			context.printer.input_text = context.taskInfos.input;
		}
		context.updateScale();
	};
	context.resetDisplay = function() {
		this.delayFactory.destroyAll();

		$("#grid").html(
			'<div style="width: 400px; margin: 0; padding: 0; overflow: hidden; text-align: left;">' +
			'  <div style="width: 175px; height: 200px; padding: 5px; margin: 5px; border: 1px solid black; overflow-y: auto; float: right;">' +
			'    <div style="font-size:small">Izhod:</div>' +
			'    <pre id="output" style="margin:0px;">a</pre>' +
			'  </div>' +
			'  <div style="width: 175px; height: 200px; padding: 5px; margin: 5px; border: 1px solid black; overflow-y: auto; float: right;">' +
			'    <div style="font-size:small">Vhod:</div>' +
			(libOptions.highlightRead ? '    <pre id="inputHighlight" style="margin: 0px; background-color: lightgray; border-bottom: 1px solid black;"></pre>' : '') +
			'    <pre id="input" style="margin: 0px;">a</pre>' +
			'  </div>' +
			'</div>')

		$("#output").html("");
		$("#input").html("");
		$("#inputHighlight").html("");
		firstLineHighlight = null;

		context.blocklyHelper.updateSize();
		context.updateScale();
	};
	context.unload = function() {
		if (context.display) {
		}
	};
	context.updateScale = function() {
		if (!context.display) {
			return;
		}
		$("#output").text(context.printer.output_text);
		$("#input").text(context.printer.input_text);
		$("#inputHighlight").text(firstLineHighlight ? firstLineHighlight : '');
	};

	//custom vnesi posebni znak
	context.printer.special_case = function(string, callback){
		if (context.lost) {
			return;
		}
		context.printer.output_text += string;
		context.updateScale();
      
		context.waitDelay(callback);
	}
	
	context.printer.commonPrint = function(args, end, callback) {
		if (context.lost) {
			return;
		}

		// Fix display of arrays
		var valueToStr = function(value) {
			if(value && value.length && typeof value == 'object') {
				var oldValue = value;
				value = [];
				for(var i=0; i < oldValue.length; i++) {
					if(oldValue[i] && typeof oldValue[i].v != 'undefined') {
						// When used inside Skulpt (Python mode)
						value.push(oldValue[i].v);
					}
					else {
						value.push(oldValue[i]);
					}
					value[i] = valueToStr(value[i]);
				}
				return '[' + value.join(', ') + ']';
			}
			else if(value && value.isFloat && Math.floor(value) == value) {
				return value + '.0';
			}
			else if(value === true) {
				return 'True';
			}
			else if(value === false) {
				return 'False';
			}
			return value;
		}

		var text = '';
		for(var i=0; i < args.length; i++) {
			text += (i > 0 ? ' ' : '') + valueToStr(args[i]);
		}

		context.printer.output_text += text + end;
		context.updateScale();
      
		context.waitDelay(callback);
	}
	context.printer.print = function() {
		context.printer.commonPrint(Array.prototype.slice.call(arguments, 0, -1), "\n", arguments[arguments.length-1]);
	}
	context.printer.print_end = function() {
		if(arguments.length > 1) {
			context.printer.commonPrint(Array.prototype.slice.call(arguments, 0, -2), arguments[arguments.length-2], arguments[arguments.length-1]);
		}
		else {
			context.printer.commonPrint([], "\n", arguments[arguments.length-1]);
		}
	}
	context.printer.commonRead = function() {
		if(context.taskInfos.freeInput && context.display) {
			if(context.printer.input_reset) {
				// First read, reset input display
				context.printer.input_text = '';
				context.printer.input_reset = false;
			}
			var result = window.prompt(strings.messages.inputPrompt);
			context.printer.input_text += result + '\n';
		}
		else {
			// This test has a predefined input
			var result = "";
			var index = context.printer.input_text.indexOf('\n');
         
			if (index < 0) {
				if(!context.printer.input_text) {
					throw strings.messages.inputEmpty;
				}
				result = context.printer.input_text;
				context.printer.input_text = "";
			}
			else {
				result = context.printer.input_text.substring(0,index);
				context.printer.input_text = context.printer.input_text.substring(index+1);
			}
		}
		if(libOptions.highlightRead) {
			firstLineHighlight = result;
		}
		context.updateScale();
		return result;
	}
	context.printer.read = function(callback) {
		var str = context.printer.commonRead()
		context.waitDelay(callback, str);
	}
	context.printer.readInteger = function(callback) {
		var num = parseInt(context.printer.commonRead());
		context.waitDelay(callback, num);
	}
	context.printer.readFloat = function(callback) {
		var num = parseFloat(context.printer.commonRead());
		context.waitDelay(callback, num);
	}
	context.printer.eof = function(callback) {
		var index = context.printer.input_text.indexOf('\n');
      
		if (index < 0) {         
			context.waitDelay(callback, true);
		}
		context.waitDelay(callback, false);
	}
	context.printer.charToAscii = function(char, callback) {
		var number = char.charCodeAt(0);
		context.waitDelay(callback, number);
	}	
	context.printer.asciiToChar = function(number, callback) {
		var char = String.fromCharCode(number);
		context.waitDelay(callback, char);
	}
	context.printer.charToNumber = function(char, callback) {
		znak = char.charCodeAt(0)
		if(znak < 48 || znak > 57) throw(strings.messages.charToNumberError)
		var number = znak - 48;
		context.waitDelay(callback, number);
	}
	context.printer.numberToChar = function(number, callback) {
		if(number%1 != 0 || number < 0 || number > 9) throw(strings.messages.numberToCharError)
		var char = String.fromCharCode(number + 48);
		context.waitDelay(callback, char);
	}

	context.checkOutputHelper = function() {
		var expectedLines = this.taskInfos.output.replace(/\s*$/,"").split("\n");
		var actualLines = this.printer.output_text.replace(/\s*$/,"").split("\n");
      
		var iLine = 0;
      
		for (iLine = 0; iLine < expectedLines.length && iLine < actualLines.length; iLine++) {
			var expectedLine = expectedLines[iLine].replace(/\s*$/,"");
			var actualLine = actualLines[iLine].replace(/\s*$/,"");
         
			var iChar = 0;
			for (iChar = 0; iChar < expectedLine.length && iChar < actualLine.length; iChar++) {
				if (actualLine[iChar] != expectedLine[iChar]) {
					this.success = false;
					var errorstring = (
						strings.messages.intro + ": " 
						+ (iLine + 1) + ". " 
						+ strings.messages.line + ".<br>" 
						+ strings.messages.expected + ": \"<b>" 
						+ escapeHtml(expectedLine) + "</b>\", " 
						+ strings.messages.answer + ": \"<b>" 
						+ escapeHtml(actualLine) + "</b>\".");
					throw(errorstring); // add line info iLine + 1, add char info iChar + 1
				}
			}

			if (actualLine.length < expectedLine.length) {
				this.success = false;
				throw(strings.messages.tooFewChars + ": " 
					+ (iLine + 1)) + ". " 
					+ strings.messages.line + "."; // add line info iLine + 1
			}
         
			if (actualLine.length > expectedLine.length) {
				this.success = false;
				throw(strings.messages.tooManyChars + ": " 
					+ (iLine + 1)) + ". " 
					+ strings.messages.line + "."; // add line info iLine + 1
			}
		}

		if (actualLines.length < expectedLines.length) {
			this.success = false;
			throw(strings.messages.tooFewLines);
		}
      
		if (actualLines.length > expectedLines.length) {
			this.success = false;
			throw(strings.messages.tooManyLines);
		}
	}
      
	context.customBlocks = {
		printer: {
			print: [
				// TODO : variants is not properly supported yet, once supported properly, print and print_end should be merged
				{ name: "print", params: [null], variants: [[null], [null, null]], anyArgs: true},
				{ name: "print_end", params: [null, null], variants: [[null], [null, null]], anyArgs: true, blocklyJson: {inputsInline: true}},
				{ 
					name: "special_case", 
					blocklyJson: {
						"args0": [
							{
								"type": "field_dropdown", 
								"name": "PARAM_0", 
								"options": [					
									[localLanguageStrings[window.stringsLanguage]["messages"]["tabulator"],"\t"],
									[localLanguageStrings[window.stringsLanguage]["messages"]["jump"],"\n"]
								]
							}
						]
					}
				},
			],
			read:  [
				{ name: "read", yieldsValue: true, blocklyJson: {output: "String"} },
				{ name: "readInteger", yieldsValue: true, blocklyJson: {output: "Number"} },
				{ name: "readFloat", yieldsValue: true, blocklyJson: {output: "Number"} },
				{ name: "eof", yieldsValue: true, blocklyJson: {output: "Boolean"}}
			],
			manipulate: [
				{ name: "charToNumber", params: ["String"], yieldsValue: true, blocklyJson: {output: "Number"}},
				{ name: "numberToChar", params: ["Number"], yieldsValue: true, blocklyJson: {output: "String"}},
				{ name: "charToAscii",  params: ["String"], yieldsValue: true, blocklyJson: {output: "Number"}},
				{ name: "asciiToChar",  params: ["Number"], yieldsValue: true, blocklyJson: {output: "String"}}
			]
		}
	}

	return context;
}
//checkEndConditions
var printerEndConditions = {
	checkMessagesEqual: function(context, lastTurn) {
		if (!lastTurn) return;
		// throws, if something is wrong …
		context.checkOutputHelper();
		// Seems like everything is okay: Right number of lines and all lines match …
		context.success = true;
		throw(window.languageStrings.messages.outputCorrect);
	},
};
//klic knjižnic
if(window.quickAlgoLibraries) {
	quickAlgoLibraries.register('printer', getContext);
}
else {
	if(!window.quickAlgoLibrariesList) {
		window.quickAlgoLibrariesList = [];
	}
	window.quickAlgoLibrariesList.push(['printer', getContext]);
}
