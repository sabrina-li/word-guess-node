const Letter = require("./letter")

class Word{
    constructor(wordInput){
        this.letters = [];
        //TODO:check alphabetic
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
        this.letters.forEach(letter=>{
            letter.checkLetter(input);
        })
    }
}

module.exports = Word;