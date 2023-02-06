// Variables Input
const userInput = document.querySelector("#userInput");
const schluessel = document.querySelector("#schluessel");

const btnKodierung = document.querySelector("#kodierung");
const btnDekodierung = document.querySelector("#dekodierung");

//Variables Output

let output = document.querySelector("p");

// Array

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let geheimAlphabet = alphabet.map((element) => element.toUpperCase());
let geheimAlphabet2 = geheimAlphabet.concat(geheimAlphabet);

let textInput = [];

let textOutput = [];

// functions 

const kodieren = () => {
    let key = schluessel.value % 26;
    geheimAlphabet2.splice(0, key);
    console.log(geheimAlphabet2);
}


btnKodierung.addEventListener("click", (event) => {
    event.preventDefault();

    kodieren();

    textInput = (userInput.value).split("");
    console.log(textInput);

    for(let i = 0; i < textInput.length; i++) {
        let indexTextInput = alphabet.indexOf(textInput[i]);

        textOutput.push(geheimAlphabet2[indexTextInput]);
    }

    output.innerHTML = `Verschlüsselter Text : ${textOutput.join('')} <br> Entschlüsselter Text: ${userInput.value}`;

})

btnDekodierung.addEventListener("click", (event) => {
    event.preventDefault();

    kodieren();

    textInput = (userInput.value).split("");
    console.log(textInput);

    for(let i = 0; i < textInput.length; i++) {
        let indexTextInput = geheimAlphabet2.indexOf(textInput[i]);

        textOutput.push(alphabet[indexTextInput]);
    }

    output.innerHTML = `Verschlüsselter Text : ${userInput.value}  <br> Entschlüsselter Text: ${textOutput.join('')} `;

})