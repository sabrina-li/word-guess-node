const  Word = require("./word");
const inquirer = require('inquirer');
const axios = require('axios');



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
        console.warn("WRONG!");
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

function getCountries(){
    return new Promise(async (resolve,reject)=>{
        let contries = [];
        try{
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            const data = response.data;
            
            data.forEach(element => {
                contries.push(element.name);
            });

            resolve(contries);
        }catch(err){
            reject(err);
        }
    })
   
}


let attempts = 12;
const word = new Word("ttta");
getCountries().then((contries)=>{
    const i = Math.floor(Math.random()*contries.length);
    askUserToGuess(new Word(contries[i]));
});


// console.log(word.outputWord())