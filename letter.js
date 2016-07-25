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
	var self = this;
	this.createGuessedWord = function(word, letter){
		var indices = [];
		for(var i=0; i<self.word.length;i++) {

			if (self.word[i] == letter){
				indices.push(i);
			} 
		}
		if (indices.length > 0 ){
			for(var i=0; i<indices.length;i++) {
				self.displayWord[indices[i]] = letter;	
				
			}	
			console.log(self.displayWord.toString().replace(/,/g, ' '));
			
		}
	};
}	
module.exports = GuessedWord;