const  Word = require("./word");
const inquirer = require('inquirer');


async function askUserToGuess(word){
    console.log(word);
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
        console.log("WRONG!");
        console.log("you have "+attempts+" remaining!");
    }
    console.log(word.outputWord())
    if (word.guessedAll()){
        console.log("Yout got it right!! Next word:")
    }
    
    await askUserToGuess(word);
}

let attempts = 12;
const word = new Word("ttta");
word.checkLetter('t');
console.log(word);
word.checkLetter('a');
console.log(word);
// askUserToGuess(word);
// console.log(word.outputWord())