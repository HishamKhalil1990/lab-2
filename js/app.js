'use strict'

let yourName = prompt("please insetr your name ?");
alert('Hi ' + yourName + ' , let us play a guessing game, just insert yes/no or y/n');


let answerOne = prompt('do you think i like football ?'); // yes
// console.log(answerOne.toUpperCase());
if (answerOne.toUpperCase() == 'YES' || answerOne.toUpperCase() == 'Y') {
    alert('your answer is correct');
} else {
    alert('come on how doesn\'t');
}


let answerTwo = prompt('do you think i have a car ?'); // yes
// console.log(answerTwo.toUpperCase());
if (answerTwo.toUpperCase() == 'YES' || answerTwo.toUpperCase() == 'Y') {
    alert('good guessing');
} else {
    alert('thanks god you\'er wrong');
}


let answerThree = prompt('do you think i live in aqaba ?'); // no
// console.log(answerThree.toUpperCase());
if (answerThree.toUpperCase() == 'YES' || answerThree.toUpperCase() == 'Y') {
    alert('no i don\'t');
} else {
    alert('that is right pal');
}


let answerFour = prompt('do you think i know what is your age?'); // no
// console.log(answerFour.toUpperCase());
if (answerFour.toUpperCase() == 'YES' || answerFour.toUpperCase() == 'Y') {
    alert('how should i know ???!');
} else {
    alert('surely i don\'t');
}


let answerFive = prompt('do you think i go to cinemas ?'); // yes
// console.log(answerFive.toUpperCase());
if (answerFive.toUpperCase() == 'YES' || answerFive.toUpperCase() == 'Y') {
    alert('well done, i like going cinemas');
} else {
    alert('actually i do');
}

alert(yourName + ' , thanks for playing');


