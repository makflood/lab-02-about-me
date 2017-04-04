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

var alive;
do {
  alive = checkInput(prompt('Am I alive?'));
  console.log('alive:', alive);
} while (typeof alive != 'boolean')
if (alive) {
  alert('Affirmative, I am a living creature.');
} else {
  alert('Negative, I am not a computer...');
}

var mammal;
do {
  mammal = checkInput(prompt('Am I a mammal?'));
  console.log('mammal:', mammal);
} while (typeof mammal != 'boolean')
if (mammal) {
  alert('I am indeed a mammal.');
} else {
  alert('Not an insect...');
}

var breadbox;
do {
  breadbox = checkInput(prompt('Am I smaller than a breadbox?'));
  console.log('breadbox:', breadbox);
} while (typeof breadbox != 'boolean')
if (!breadbox) {
  alert('Quite a bit larger in fact.');
} else {
  alert('Haha, no.');
}

var female;
do {
  female = checkInput(prompt('Am I female?'));
  console.log('female:', female);
} while (typeof female != 'boolean')
if (female) {
  alert('Yes, indeed.');
} else {
  alert('Nope. Nope. Nope.');
}

var megan;
do {
  megan = checkInput(prompt('Am I Megan?'));
  console.log('megan:', megan);
} while (typeof megan != 'boolean')
if (megan) {
  alert('Yay, you win! :D');
} else {
  alert('Seriously?');
}
