class Letter{
    constructor(letter){
        if(typeof letter == "string"){
            this.letter = letter.toLowerCase();
            this.guessed = false;//initially not guessed
        }else{
            throw "Invalid input. Letter needs to be string"  
        }
    }

    outputLetter(){
        return this.guessed ? this.letter : '_';
    }

    checkLetter(input){
        if(typeof input == "string"){
            this.guessed = (input.toLowerCase() === this.letter);
        }else{
            throw "Invalid input. Letter needs to be string"  
        }
    }
}

module.exports = Letter;