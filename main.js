var inquirer = require('inquirer');
//var guessedWord=require('./letter.js');
//var numGuesses = 0;
inquirer.prompt([{
	type: "list",
	message: "Do you want to play Hangman?",
	choices: ["Yes", "No"],
	name: "gameDecision"
	}
]).then(function(answer) {
	if (answer.gameDecision == "Yes"){
		var word = require('./game.js');
		var CmpWord = require('./word.js');
		var CmpWord1 = new CmpWord(word);
		console.log('CmpWord1.word:  '+CmpWord1.word);
		console.log('CmpWord1.wordlen:  '+CmpWord1.wordlength);
		CmpWord1.getInitWord(word);
		
		CmpWord1.guessLetter(word);
		

	}
});
