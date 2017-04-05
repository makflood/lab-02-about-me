'use strict';

/**
Takes the return from a prompt() and returns if yes or y were entered. Returns null if given a null.
**/
var checkInput = function(input) {
  if (typeof input != 'string') {
    return input;
  } else {
    var tInput = input.toUpperCase().trim();
    return tInput == 'YES' || tInput == 'Y';
  }
};

/**
Takes the question to be asked in a prompt, the answer for a response of 'yes', and the answer for a response of 'no'. Asks the question until the 'OK' button is pressed. Prints the user response as a boolean or null to the console. Responds to the user with the given answer in an alert. Returns nothing.
**/
var askQuestion = function(question, yesAns, noAns) {
  var response;
  do {
    response = checkInput(prompt(question));
    console.log(question, response);
  } while (typeof response != 'boolean')
  if (response) {
    alert(yesAns);
  } else {
    alert(noAns);
  }
};

askQuestion('Am I alive?', 'Affirmative, I am a living creature.', 'Negative, I am not a computer...');
askQuestion('Am I a mammal?', 'I am indeed a mammal.', 'Not an insect...');
askQuestion('Am I smaller than a breadbox?', 'Haha, no.', 'Quite a bit larger in fact.');
askQuestion('Am I female?', 'Yes, of the rare minority.', 'Nope. Nope. Nope.');
askQuestion('Am I Megan?', 'Yay, you win! :D', 'Seriously?');
