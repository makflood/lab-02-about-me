'use strict';

// yes/no question, correct answer, response to yes, response to no
var ynQuestions = [['Am I alive?', 'YES', 'Affirmative, I am a living creature.', 'Negative, I am not a computer...'],
                   ['Am I a mammal?', 'YES', 'I am indeed a mammal.', 'Not an insect...'],
                   ['Am I smaller than a breadbox?', 'NO', 'Quite a bit larger in fact.', 'Haha, no.'],
                   ['Am I female?', 'YES', 'Yes, of the rare minority.', 'Nope. Nope. Nope.'],
                   ['Am I Megan?', 'YES', 'Yep, that\'s my name!', 'Seriously?']];

var correctCount = 0; // counter for correct answers

var user = prompt('Hey, what\'s your name?');
console.log('user name:', user);
var hasName = user != null && user != '';
var printUser;
if (hasName) {
  printUser = user;
} else {
  printUser = 'nameless one';
}
alert('Hello, ' + printUser + '. I\'m going to ask some questions about me, try and get them all right!');

var userAns;
var question;
var correctAns;
var correctResp;
var wrongResp;
for (var ask = 0; ask < ynQuestions.length; ask++) {
  question = ynQuestions[ask][0];
  correctAns = ynQuestions[ask][1];
  correctResp = ynQuestions[ask][2];
  wrongResp = ynQuestions[ask][3];
  do {
    userAns = prompt(question);
    if (typeof userAns === 'string') {
      userAns = userAns.toUpperCase().trim();
      userAns = userAns.charAt(0) === correctAns.charAt(0);
    }
    console.log(question, userAns);
  } while (typeof userAns != 'boolean')
  if (userAns) {
    alert(correctResp);
    correctCount++;
  } else {
    alert(wrongResp);
  }
}
console.log(correctCount);

// /**
// Takes the return from a prompt() and returns if yes or y were entered. Returns null if given a null.
// **/
// var checkInput = function(input) {
//  if (typeof input != 'string') {
//    return input;
//  } else {
//    var tInput = input.toUpperCase().trim();
//    return tInput == 'YES' || tInput == 'Y';
//  }
// };
//
// /**
// Takes the question to be asked in a prompt, the answer for a response of 'yes', and the answer for a response of 'no'. Asks the question until the 'OK' button is pressed. Prints the user response as a boolean or null to the console. Responds to the user with the given answer in an alert. Returns nothing.
// **/
// var askQuestion = function(question, yesAns, noAns) {
//   var response;
//   do {
//     response = checkInput(prompt(question));
//     console.log(question, response);
//   } while (typeof response != 'boolean')
//   if (response) {
//     alert(yesAns);
//   } else {
//     alert(noAns);
//   }
// };
//
// askQuestion('Am I alive?', 'Affirmative, I am a living creature.', 'Negative, I am not a computer...');
// askQuestion('Am I a mammal?', 'I am indeed a mammal.', 'Not an insect...');
// askQuestion('Am I smaller than a breadbox?', 'Haha, no.', 'Quite a bit larger in fact.');
// askQuestion('Am I female?', 'Yes, of the rare minority.', 'Nope. Nope. Nope.');
// askQuestion('Am I Megan?', 'Yay, you win! :D', 'Seriously?');
