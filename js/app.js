'use strict'

let yourName = prompt("please insetr your name ?");
alert('Hi ' + yourName + ' , let us play a guessing game, just insert yes/no or y/n');
let userScore = 0;


let answerOne = prompt('do you think i like football ?'); // yes
// console.log(answerOne.toUpperCase());
if (answerOne.toUpperCase() == 'YES' || answerOne.toUpperCase() == 'Y') {
    alert('your answer is correct');
    userScore ++;
} else {
    alert('come on how doesn\'t');
}


let answerTwo = prompt('do you think i have a car ?'); // yes
// console.log(answerTwo.toUpperCase());
if (answerTwo.toUpperCase() == 'YES' || answerTwo.toUpperCase() == 'Y') {
    alert('good guessing');
    userScore ++;
} else {
    alert('thanks god you\'er wrong');
}


let answerThree = prompt('do you think i live in aqaba ?'); // no
// console.log(answerThree.toUpperCase());
if (answerThree.toUpperCase() == 'YES' || answerThree.toUpperCase() == 'Y') {
    alert('no i don\'t');
} else {
    alert('that is right pal');
    userScore ++;
}


let answerFour = prompt('do you think i know what is your age?'); // no
// console.log(answerFour.toUpperCase());
if (answerFour.toUpperCase() == 'YES' || answerFour.toUpperCase() == 'Y') {
    alert('how should i know ???!');
} else {
    alert('surely i don\'t');
    userScore ++;
}


let answerFive = prompt('do you think i go to cinemas ?'); // yes
// console.log(answerFive.toUpperCase());
if (answerFive.toUpperCase() == 'YES' || answerFive.toUpperCase() == 'Y') {
    alert('well done, i like going cinemas');
    userScore ++;
} else {
    alert('actually i do');
}


let answerSix;
for (let i = 1; i <= 5; i++) {
    if (i < 5) {
        answerSix = prompt('try to guess a number in my head', 'insert a number between 1 - 20');
        if (answerSix == 9) {
            userScore ++;
            alert('you\'er correct');
            break;
         } else if (Math.abs(answerSix - 9) <= 3) {
             if (answerSix - 9 > 0) {
                alert('try again your close, you\'er ahead of the value');
            }
            else {
                alert('try again your close, you\'er behind of the value');
            }
        } else {
            if (answerSix - 9 > 0) {
                alert('try again, you\'er too high ');
            }
            else {
                alert('try again, you\'er too low');
            }
        }
    } else {
        alert('the right answer was 9');
    }
    // console.log(answerSix);
}


let answerSeven;
let movieVar;
let userAnswer = false;
alert('type of movies: ' + 'drama, ' + 'horror, ' + 'fantasy, ' + 'mystrey, ' + 'sci-fi, ' + 'comedy, ' + 'action, ' + 'romance and ' + 'thriller');
let typeOfMovies = ['action','comedy','sci-fi','horror'];
for (let i = 1; i <= 6; i++) {
    answerSeven = prompt('try to guess one of the movies types i do like', 'insert your answer');
    for (let j = 0; j < typeOfMovies.length; j++) {
        movieVar = typeOfMovies[j];
        if (answerSeven.toLowerCase() == movieVar) {
            userAnswer = true;
            userScore ++;
            alert('you\'er correct');
            break;
        } else {
        }  
    }
    if (userAnswer) {
        break;
    } else {
    }
    // console.log(answerSeven);
}

alert('the answers are: yes, yes,no, no, yes, 9, [action-comedy-(sci-fi)-horror]');
alert('your score is ' + userScore);
alert(yourName + ' , thanks for playing');




