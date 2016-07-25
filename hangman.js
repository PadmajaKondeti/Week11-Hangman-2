// 
// 
// var obj {
//   character: "a"
// }

function Letter (character){
  this.character = character;
  this.visible = false;
  if (this.visible === false){
    this.displayedCharacter = "_"
  } else {
    this.displayedCharacter = this.character;
  }
}

// var obj = {
//   letters: [],
//   wordComplete: false,
//   word: "Apple"
// }

function Word (word){
  this.phrase = word;
  this.letters = [];
  this.wordComplete = false;
  for (var i = 0; i < this.phrase.length; i++){
    this.letters.push(new Letter(this.phrase[i]))
  }
  this.guessLetter = function(letter){
    for (var i = 0; i < this.letters.length; i++){
      if (this.letters[i].character === letter){
        this.letters[i].displayedCharacter = this.letters[i].character;
        this.letters[i].visible = true;
        this.isComplete();
      }
    }
  }
  this.isComplete = function(){
    for (var i = 0; i < this.letters.length; i++){
      if (this.letters[i].visible !== true){
        console.log("Not done yet");
        return false;
      }
    }
    console.log("Congrats, you win");
    this.wordComplete = true;
  }
}

