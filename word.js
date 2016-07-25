
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
	var self = this;
	this.guessLetter = function(word){
		if ((self.guess.displayWord.indexOf('_')>= 0) && (self.numGuesses < self.wordlength)){
			
			inquirer.prompt([{
				name: "letterGuess",
				message: "Guess a letter?"
				}
			]).then(function(result) {
				self.guess.createGuessedWord(self.word, result.letterGuess);
				self.guessLetter(self.word);
				self.numGuesses++;
			});
		} else {
		
			if ((self.guess.displayWord).toString().replace(/,/g, '') == self.word) {

				console.log("Hooray, you won!!");
			} else {
				console.log("Sorry the word is -  " + self.word );
			}
		};
	};
	
};
module.exports = CmpWord;