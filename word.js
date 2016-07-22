var inquirer = require('inquirer');
var GuessedWord = require('./letter.js');		
var CmpWord = function(word){
	this.word = word;
	this.wordlength = word.length;
	this.numGuesses=0;
	var guess = new GuessedWord(this.word);
	guess.createBlankWord();
	this.numGuesses=0;
	this.guessLetter = function(){
		console.log('i am in guessLetter');
		this.guesswrd = guess.guessedword.toString().replace(/,/g, ' ');
		if ((this.guesswrd.indexOf('_') >= 0) && (this.numGuesses < this.wordlength)){
			inquirer.prompt([{
				name: "letterguess",
				message: "Guess a letter?"
				}
			]).then(function(answer) {
				guess.createGuessedWord(answer.letterguess);
				this.numGuesses =+ 1;
				this.guessLetter();
			});
			
		} else{
			if (this.guessedWord.replace(/ /g, '') == word) {
				console.log("Hooray, you won!!");
			} else {
				console.log("Sorry the word is " + word );
			}
		};
	};
};
module.exports = CmpWord;