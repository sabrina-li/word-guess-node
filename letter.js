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
        let correct = false;
        if(typeof input == "string"){
            if(!this.guessed){
                this.guessed = (input.toLowerCase() === this.letter);
                correct = this.guessed;
            }
        }else{
            throw "Invalid input. Letter needs to be string"  
        }
        return correct;
    }
}

module.exports = Letter;