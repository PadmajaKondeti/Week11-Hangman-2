var inquirer = require('inquirer');
//var guessWord = require('./letter.js');
//var numGuesses =0;
//var wordBlank =[];
	
var CmpWord = function(word){
	this.word = word;
	
	// console.log(wordlength);}
 
// // var wordBlankArray = guessedWord;
this.guessLetter = function(){
	inquirer.prompt([{
		name: "guess",
		message: "Guess a letter?"
		}
	]).then(function(answer) {
		console.log(answer.guess);
		// if(numGuesses < word.length){
		// var guessWord = new GuessWord(word, answer.guess, wordBlank);
		// numGuesses++;    
		// guessLetter(); 
	//}
	});
// } else{
// 	if (guessedWord.replace(/ /g, '') == word) {
// 		console.log("Hurray, You won!!");
// 	} else {
// 		console.log("Sorry the word is " + word );
// 	};
// 	guessLetter();
// };
};
};

module.exports = CmpWord;