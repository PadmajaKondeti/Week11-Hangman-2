var inquirer = require('inquirer');
var GuessedWord = function(word){
	this.letter=' ';
	this.displayWord = [];
	this.wordBlank = [];
	this.word = word;
	this.wordLength = word.length;
	this.createBlankWord = function(){
		var wordLength = this.word.length;
		for (var i=0; i< wordLength; i++){
			this.wordBlank += "_ ";
		};
		 this.displayWord= this.wordBlank.trim().split(' ');	
	};
	this.createGuessedWord = function(word, letter){
		var self = this;
		// var newWord1 = this.displayWord.toString().replace(/,/g, ' ');
		// console.log(newWord1);
		// inquirer.prompt([{
		// 	name: "letterGuess",
		// 	message: "Guess a letter?"
		// 	}
		// ]).then(function(result) {
			console.log("aaa : "+letter)
		
		var indices = [];

		
		
			for(var i=0; i<self.word.length;i++) {

				if (self.word[i] == self.letter){
					indices.push(i);
				} 
			}
			if (indices.length > 0 ){
				for(var i=0; i<indices.length;i++) {
					console.log (self.letter);
					console.log(self.displayWord);
					self.displayWord[indices[i]] = result.letterGuess;	
				}	
				console.log(self.displayWord.toString().replace(/,/g, ' '));
				console.log(self.word);
					
			}

		//});
		//createGuessedWord();
	};
}	
module.exports = GuessedWord;