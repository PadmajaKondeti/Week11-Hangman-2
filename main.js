var inquirer = require('inquirer');
//var guessedWord=require('./letter.js');


var numGuesses = 0;
inquirer.prompt([{
	type: "list",
	message: "Do you want to play Hangman?",
	choices: ["Yes", "No"],
	name: "gameDecision"
	}
]).then(function(answer) {
	if (answer.gameDecision == "Yes"){
		var word = require('./game.js');
		

		var CmdWord = require('./word.js');
		
		var cmdWord = new CmdWord(word);
		cmdWord.guessLetter();
		
		
	}
});
