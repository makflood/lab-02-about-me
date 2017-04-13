'use strict';

var correctCount = 0; // counter for correct answers
var questionCount = 0; // counter for number of questions asked

var questionElements = document.querySelectorAll('ol li');

function userName(){
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
  return printUser;
}

var user = userName();

//YES AND NO QUESTIONS

function askQuestions(){
  // yes/no question, correct answer, response to correct answer, response to wrong answer
  var ynQuestions = [['Do I live in Chicago?', 'NO', 'Right, I actually live in Seattle.', 'Nope, I call Seattle my home.'],
                    ['Do I have any pets?', 'YES', 'I have two cats, in fact.', 'No, well I guess my two cats own me...'],
                    ['Am I a blackbelt in karate?', 'NO', 'That is correct. No karate, just know kenjutsu.', 'I don\'t know any karate, but I do know kenjutsu.'],
                    ['Did I write a thesis about the rearrangement of a platinocyclobutane?', 'YES', 'Yep, watched atoms moving around on a screen.', 'Wrong. And yes, that is a word.'],
                    ['Am I Megan?', 'YES', 'Yep, that\'s my name!', 'Seriously?']];

  var userAns;
  var question;
  var correctAns;
  var correctResp;
  var wrongResp;

  for (var ask = 0; ask < ynQuestions.length; ask++) {
    questionCount++;
    question = ynQuestions[ask][0];
    correctAns = ynQuestions[ask][1];
    correctResp = ynQuestions[ask][2];
    wrongResp = ynQuestions[ask][3];
    do {
      userAns = prompt(question);
      if (typeof userAns === 'string') {
        userAns = userAns.toUpperCase().trim();
        userAns = userAns === correctAns || userAns === correctAns[0];
      }
      console.log(question, 'user correct:', userAns);
    } while (typeof userAns != 'boolean');
    questionElements[ask].innerHTML += '<span class="answer">' + userAns + '</span>';
    if (userAns) {
      alert(correctResp);
      correctCount++;
    } else {
      alert(wrongResp);
    }
  }
  console.log('correct y/n answers:', correctCount);

}

askQuestions();

// GUESS THE NUMBER QUESTIONS

function guessNumber(){
  var userAns;
  var favNum = Math.round((Math.random() * 100));
  console.log('my favorite number is:', favNum);
  questionCount++;

  var isNotDone = true;
  var message;

  for (var guess = 3; guess >= 0 && isNotDone; guess--) {

    if (guess === 3) {
      userAns = prompt('Guess my favorite number!');
    } else {
      userAns = prompt('What\'s another guess?');
    }
    console.log('user gueses:',userAns);
    userAns = parseInt(userAns);

    if (isNaN(userAns)) {
      message = 'That\'s not a number...';
    } else {
      isNotDone = userAns != favNum;
      if (isNotDone) {
        message = 'No, that number is too ';
        if (userAns > favNum) {
          message += 'large.';
        } else {
          message += 'small.';
        }
      } else {
        message = 'Yay! You guessed right!';
        correctCount++;
      }
    }

    if (guess != 0 && isNotDone) {
      message += '\nOnly ' + guess + ' ';
      if (guess != 1) {
        message += 'guesses remain.';
      } else {
        message += 'guess remains.';
      }
    } else if (isNotDone) {
      message += '\nToo bad, all out of guesses.\nIt was ' + favNum + '.';
    }
    alert(message);

  }

  questionElements[questionCount-1].innerHTML += '<span class="answer">' + userAns + '</span>';

  console.log('current correct answers:', correctCount);

}

guessNumber();

// MULTIPLE ANSWER QUESTIONS

function guessCountry(){
  var userAns;
  var message;
  var possibleAns = ['Canada', 'Mexico', 'France', 'England', 'Wales', 'Scotland'];
  questionCount++;
  var isNotDone = true;
  var i;

  for (var guess = 6; guess >= 0 && isNotDone; guess--) {
    if (guess === 6) {
      userAns = prompt('Can you guess one of the countries I have traveled to?');
    } else {
      userAns = prompt('What\'s another guess?');
    }
    console.log('user country guess:', userAns);

    if (userAns != null && userAns != '') {
      userAns = userAns.toUpperCase().trim();
      for (i = 0; i < possibleAns.length; i++) {
        if (possibleAns[i].toUpperCase() === userAns) {
          isNotDone = false;
          message = 'Yep, you got one.\n I have been to ' + possibleAns.join(', ') + ',';
          i = possibleAns.length;
          correctCount++;
        }
      }
      if (isNotDone) {
        message = 'Nope, that isn\'t one.';
      }
    } else {
      message = 'You didn\'t answer the question...';
    }

    if (guess != 0 && isNotDone) {
      message += '\nOnly ' + guess + ' ';
      if (guess != 1) {
        message += 'guesses remain.';
      } else {
        message += 'guess remains.';
      }
    } else if (isNotDone) {
      message += '\nToo bad, all out of guesses.\nI have been to ' + possibleAns.join(', ') + '.';
    }
    alert(message);

  }
  questionElements[questionCount-1].innerHTML += '<span class="answer">' + userAns + '</span>';
  
  console.log('current correct answers:', correctCount);

}

guessCountry();

// INFORM USER OF SCORE

function userMessage(name){

  var message = 'It\'s over! You got ' + correctCount + ' out of ' + questionCount + ' questions right, ' + name + '! ';
  if (correctCount === questionCount) {
    message += 'Excellent job!';
  } else if (correctCount >= questionCount - 2) {
    message += 'So close, better luck next time!';
  } else {
    message += 'Better luck next time.';
  }

  alert(message);
}

userMessage(user);
