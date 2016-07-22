

var GuessedWord = function(word){
	this.wordBlank = [];
	this.word = word;
	this.createBlankWord = function(){
		var wordLength = this.word.length;
		for (var i=0; i< wordLength; i++){
			this.wordBlank += "_ ";
		};
		 console.log(this.wordBlank);
	};

	this.createGuessedWord = function(letter){
		this.letter = letter;
		console.log(letter);
		var indices = [];
		// for(var i=0; i<word.length;i++) {
		// 	if (word[i] == guessLetter){
		// 			indices.push(i);
		// 	} 
		// }
		// if (indices.length > 0 ){
		// 	for(var i=0; i<indices.length;i++) {
		// 		guessedword[indices[i]] = guessLetter ;
		// 	}
		// 	//guessedWord = (wordBlankArray.toString()).replace(/,/g, ' ');
		// 	//console.log((guessedWord));
		// }
	}
}	

module.exports = GuessedWord;



// var wordBlank="";// =[];


// var indices = [];
// // 			
// var wordBlank = function(){
// 	for(var i=0; i<wordlength;i++) {
// 		if (word[i] == answer.guess){
// 			indices.push(i);
// 		} 
// 	}
// if (indices.length > 0 ){
// for(var i=0; i<indices.length;i++) {
// wordBlankArray[indices[i]] = answer.guess ;
// }
// guessedWord = (wordBlankArray.toString()).replace(/,/g, ' ');
// console.log((guessedWord));
// }

// 	for (var i=0; i<wordlength; i++){
// 		wordBlankArray += "_ ";
// 	};
// }
// var wordlength = word.length;
// for (var i=0; i<wordlength; i++){
// 	wordBlank += "_ ";
// };
// guessedWord = wordBlank;
// //guessedWord = wordBlank.replace(/ /g, '');
// module.exports =  guessedWord;