const  Word = require("./word");
const inquirer = require('inquirer');


async function askUserToGuess(word){
    let answers = await inquirer
                .prompt([
                    {
                        type:"input",
                        name:"letter",
                        message:"Guess a letter! ",
                        validate:(input)=>{
                            if(typeof input == "string" && input.length == 1){
                                var letters = /[a-zA-Z]/;
                                if(input.match(letters)){
                                    return true
                                }
                            }
                            return ("error: please input alphabetical charactor");
                        }
                    }
                ])
    if(word.checkLetter(answers.letter)){
        console.log("CORRECT!");
    }else{
        attempts--;
        console.error("WRONG!");
        console.log("you have "+attempts+" remaining!");
    }
    console.log(word.outputWord())
    if (word.guessedAll()){
        console.log("Yout got it right!! Next word:")
        // askUserToGuess(new Word());
    }else{
        askUserToGuess(word);
    }
    
    
}

let attempts = 12;
const word = new Word("ttta");

askUserToGuess(word);
// console.log(word.outputWord())