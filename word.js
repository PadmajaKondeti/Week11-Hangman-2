var inquirer = require('inquirer');
var GuessedWord = require('./letter.js');	
// var numGuesses = 0;	
var letter = '';
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
		var letter ="";
	// 	if (this.numGuesses < this.wordlength){
			inquirer.prompt([{
				name: "lettergGuess",
				message: "Guess a letter?"
				}
			]).then(function(answer) {
				//console.log(this);
				letter = answer.letterGuess;
				// console.log('lllll');
				// console.log(answer.letterguess);
				// console.log(this.guess);
				// this.guess.createGuessedWord();
				
				
				// CmpWord.guess.createGuessedWord(answer.letterguess);
				//  this.numGuesses++;
				// //this.guessLetter(word);
				// console.log(this.numGuesses );
			});	
			console.log(letter);
	// 	};
	};
};
module.exports = CmpWord;