const  Word = require("./word");
const inquirer = require('inquirer');
const axios = require('axios');



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
    }else if(guessedLetters.indexOf(answers.letter) == -1){
        attempts--;
        console.warn("WRONG!");
        console.log("you have "+attempts+" remaining!");
        if(attempts == 0){
            console.warn("You lost!!");
            return
        }
    }else{
        console.log("You've guessed it already!")
    }

    console.log(word.outputWord())
    guessedLetters.push(answers.letter);
    
    if (word.guessedAll()){
        console.log("Yout got it right!! Next word:")
        init();
    }else{
        askUserToGuess(word);
    }
}

function getCountries(){
    return new Promise(async (resolve,reject)=>{
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

function init(){
    attempts = 12;
    guessedLetters=[];
    const i = Math.floor(Math.random()*contries.length);
    console.log(contries[i]);
    word = new Word(contries[i]) 
    console.log(word.outputWord())
    askUserToGuess(word);   
}



let attempts = 12;
let contries = [];
let guessedLetters = [];
console.log("Welcome! This is a word guess game for all the contries int he world!")
process.stdout.write("getting contries...");
let timer = setInterval(() => {
    process.stdout.write('.');
}, 500);

getCountries().then((contries)=>{
    clearInterval(timer);
    process.stdout.write('\n');
    contries = contries;
    init();
});
