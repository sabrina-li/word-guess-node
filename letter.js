class Letter{
    constructor(letter){
        if(typeof letter == "string"){
            var letters = /[a-zA-Z]/;
            if(!letter.match(letters)){
                this.letter = letter;
                this.guessed = true;//ignore spaces
            }else{
                this.letter = letter
                this.guessed = false;//initially not guessed
            }
            
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
                this.guessed = (input.toLowerCase() === this.letter.toLowerCase());
                correct = this.guessed;
            }
        }else{
            throw "Invalid input. Letter needs to be string"  
        }
        return correct;
    }
}

module.exports = Letter;