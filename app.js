const length = document.querySelector('input[type=number]');
const password = document.querySelector('#password');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const generate = document.querySelector('input[type=submit]');

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    symbol: getRandomSymbol,
    number: getRandomNumber
}













// FUNCTIONS
function getRandomLower(){
    return String.fromCharCode(
        Math.floor(Math.random() * 26 + 97)
    )    
}

function getRandomUpper(){
    return String.fromCharCode(
        Math.floor(Math.random() * 26 + 65)
    )
}

function getRandomNumber(){
    return String.fromCharCode(
        Math.floor(Math.random() * 10 + 48)
    )
}

function getRandomSymbol(){
    const symbols = '[)>%}{!(&]\?<^#$/@|';
    return symbols[Math.floor(Math.random() * symbols.length)];
}