var GuessedWord = function(word){
	this.letter=' ';
	this.displayWord = [];
	this.wordBlank = [];
	this.word = word;
	this.wordLength = word.length;
	//console	.log(this.word);
	this.createBlankWord = function(){
		var wordLength = this.word.length;
		for (var i=0; i< wordLength; i++){
			this.wordBlank += "_ ";
		};
		 this.displayWord= this.wordBlank.trim().split(' ');
		  
		 //console.log(this.wordBlank);
	};
	this.createGuessedWord = function(letter){
		console.log('kkkk'+letter);
		// this.letter= letter;
		// var indices = [];
		//  for(var i=0; i<this.wordLength;i++) {
		// 	if (this.word[i] == this.letter){
		// 		indices.push(i);
		// 	} 
		// }
		// if (indices.length > 0 ){
		// 	for(var i=0; i<indices.length;i++) {
		// 		this.displayWord[indices[i]] = this.letter;
				
		// 	}	
		// 	//this.guessedWord = (this.displayWord.toString());
			
		// 	console.log(this.displayWord.toString().replace(/,/g, ' '));
		// }
	}
}	
module.exports = GuessedWord;