
var GuessedWord = require('./letter.js');	
// var numGuesses = 0;	
var inquirer = require('inquirer');

var CmpWord = function(word){
	this.word = word;
	this.wordlength = word.length;
	this.numGuesses = 0;
	this.guess = new GuessedWord(word);

	this.getInitWord = function(word){
		this.guess.createBlankWord();
		console.log(this.guess.displayWord.toString().replace(/,/g, ' '));
	};

	this.guessLetter = function(word){
		console.log('dddddd');
		var self = this;
		inquirer.prompt([{
			name: "letterGuess",
			message: "Guess a letter?"
			}
		]).then(function(result) {
			self.guess.createGuessedWord(self.word);
			self.guessLetter()
		});
	};
	// };
	
};
module.exports = CmpWord;