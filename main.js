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
		console.log(word);
		var CmpWord = require('./word.js');
		var curWord = new CmpWord(word);
		


		
		curWord.getInitWord(word);
// console.log(curWord.word);
// 		console.log(curWord.wordlength);
// console.log(curWord.numGuesses);

		
		curWord.guessLetter(word);
		
// 		console.log(curWord.word);
// 		console.log(curWord.wordlength);
// console.log(curWord.numGuesses);
		

	}
});
