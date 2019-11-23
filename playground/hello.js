console.log('Welcome to the course');

function greeting(name) {
    console.log('Welcome to the course ' + name);
}

greeting('Mohammed');

let myString = 'I am a string';
let newString = myString.replace('string','sausage');
console.log(newString);

// let ask = (question) => confirm(question) ? alert("you agrees.") : alert("You canceled the execution");
// 
// ask("Are you over 18?");

function capitalize(text){
    if (typeof text !== 'string'){
        console.log('');
    }else {
        console.log(text.charAt(0).toUpperCase() +  text.slice(1).toLowerCase());
    }
}

capitalize('flavio'); // Flavio
capitalize('f');      // F
capitalize('MOHAMMED'); //Mohammed
capitalize(''); // 

function lastLetter(text) {
    let lastLet = text.charAt(text.length - 1);
    console.log(lastLet);
}

lastLetter('Sidi');
