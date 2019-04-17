const Letter = require("./letter")

class Word{
    constructor(wordInput){
        this.letters = [];
        //TODO:check alphabetic and space
        if(typeof wordInput == "string"){
            wordInput.split('').forEach(letter=>{
                this.letters.push(new Letter(letter));
            })
        }else{
            throw "Invalid input. Word needs to be string"  
        }
    }

    outputWord(){
        let outputWord = "";
        this.letters.forEach(letter=>{
            outputWord += letter.outputLetter()+' ';
        })
        return outputWord;
    }

    checkLetter(input){
        let correctGuess = false;
        this.letters.forEach(letter=>{
            if(letter.checkLetter(input)){
                correctGuess = true;
            }
        })
        return correctGuess;
    }

    guessedAll(){
        let guessedAll = true;
        this.letters.forEach(letter=>{
            if(!letter.guessed){
                guessedAll = false;
            }
        })
        return guessedAll;
    }
}

module.exports = Word;


