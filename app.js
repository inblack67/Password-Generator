const lengthElement = document.querySelector('input[type=number]');
const passwordElement = document.querySelector('#password');
const upperElement = document.querySelector('#upper');
const lowerElement = document.querySelector('#lower');
const numberElement = document.querySelector('#number');
const symbolElement = document.querySelector('#symbol');
const generateElement = document.querySelector('input[type=submit]');
const formElement = document.querySelector('#form');
const clipboard = document.querySelector('#clipboard');

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    symbol: getRandomSymbol,
    number: getRandomNumber
}

// EVENTS
form.addEventListener('submit', (e) => {

    e.preventDefault();

    const length = +lengthElement.value;
    const hasUpper = upperElement.checked;
    const hasLower = lowerElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

    passwordElement.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
})

clipboard.addEventListener('click', copyToClipboard)


// FUNCTIONS

function copyToClipboard(){
    const textarea = document.createElement('textarea');

    const password = passwordElement.innerText;

    textarea.value = password;

    document.body.appendChild(textarea);

    if(!password){
        return;
    }
    
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    M.toast({ html: 'Password Copied To Clipboard' });


}

function generatePassword(length, upper, lower, number, symbol){

    let resultant = '';

    const typesCount = lower + upper + number + symbol;
    const typesArray = [{lower}, {upper}, {number}, {symbol}];

    const filteredTypesArray = typesArray.filter(i => Object.values(i)[0]);

    if(typesCount === 0){
        M.toast({ html: 'Select Something' });
        return;
    }

    for(let i=0; i<length; i+= typesCount){
        filteredTypesArray.forEach(f => {
            const fnName = Object.keys(f)[0];
            resultant += randomFunctions[fnName]();
        })
    }

    return resultant.slice(0, length);
}

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