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
		
		
		var GuessedWord = require('./letter.js');

		var yyy = new GuessedWord(word);
		yyy.createBlankWord();

		var CmdWord = require('./word.js');
		
		var xxx = new CmdWord(word);
		var letter = xxx.guessLetter();
		console.log(letter)
		// yyy.createGuessedWord(letter);
		
		// if ((guessedWord.indexOf('_')>= 0) && (numGuesses < wordlength)){
		// 	guessLetter();
		// // console.log(guessedWord);
		// var wordlength = guessedWord.length;
		// console.log(wordlength);
		// if ((guessedWord.indexOf('_') >= 0) && (numGuesses < wordlength)){

// 
		 // }

		
	}
});
