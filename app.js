'use strict';

var correctCount = 0; // counter for correct answers
var questionCount = 0; // counter for number of questions asked

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
  var ynQuestions = [['Do I live in Chicago?', 'N', 'Right, I actually live in Seattle.', 'Nope, I call Seattle my home.'],
                    ['Do I have any pets?', 'Y', 'I have two cats, in fact.', 'No, well I guess my two cats own me...'],
                    ['Am I a blackbelt in karate?', 'N', 'That is correct. No karate, just know kenjutsu.', 'I don\'t know any karate, but I do know kenjutsu.'],
                    ['Did I write a thesis about the rearrangement of a platinocyclobutane?', 'Y', 'Yep, watched atoms moving around on a screen.', 'Wrong. And yes, that is a word.'],
                    ['Am I Megan?', 'Y', 'Yep, that\'s my name!', 'Seriously?']];

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
        userAns = userAns.charAt(0) === correctAns.charAt(0);
      }
      console.log(question, 'user correct:', userAns);
    } while (typeof userAns != 'boolean')
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

    userAns = prompt('Guess my favorite number!');
    console.log('user gueses:',userAns);
    if (isNaN(userAns)) {
      alert('That\'s not a number...')
    } else {
      userAns = parseInt(userAns);
      isNotDone = userAns != favNum;

      if (isNotDone) {
        message = 'No, that number is too ';
        if (userAns > favNum) {
          message += 'large.';
        } else {
          message += 'small.';
        }
        if (guess != 0) {
          message += '\nOnly ' + guess + ' ';
          if (guess != 1) {
            message += 'guesses remain.';
          } else {
            message += 'guess remains.';
          }
        } else {
          message += '\nToo bad, all out of guesses.\nIt was ' + favNum + '.';
        }
        alert(message);

      } else {
        alert('Yay! You guessed right!');
        correctCount++;
      }

    }
  }

  console.log('current correct answers:', correctCount);

}

guessNumber();

// MULTIPLE ANSWER QUESTIONS

function guessCountry(){
  var userAns;
  var message;
  var possibleAns = ['Canada', 'Mexico', 'France', 'England', 'Wales', 'Scotland'];
  questionCount++;
  var isNotDone = true; // isNotDone defined above

  for (var guess = 6; guess >= 0 && isNotDone; guess--) {
    if (guess === 6) {
      userAns = prompt('Can you guess one of the countries I have traveled to?');
    } else {
      userAns = prompt('What\'s another guess?');
    }
    console.log('user country guess:', userAns);
    if (userAns != null && userAns != '') {
      userAns = userAns.toUpperCase().trim();
      for (var comp = 0; comp < possibleAns.length; comp++) {
        if (possibleAns[comp].toUpperCase() === userAns) {
          isNotDone = false;
          message = 'Yep, you got one.\n I have been to ' + possibleAns[0];
          for (var add = 1; add < possibleAns.length; add++) {
            message += ', ' + possibleAns[add];
          }
          message += '.';
          alert(message);
          correctCount++;
        }
      }
      if (isNotDone) {
        message = 'Nope, that isn\'t one.';
        if (guess != 0) {
          message += '\nOnly ' + guess + ' ';
          if (guess != 1) {
            message += 'guesses remain.';
          } else {
            message += 'guess remains.';
          }
        } else {
          message += '\nToo bad, all out of guesses.\n I have been to ' + possibleAns[0];
          for (var add = 1; add < possibleAns.length; add++) {
            message += ', ';
            if (add === possibleAns.length - 1) {
              message += 'and ';
            }
            message += possibleAns[add];
          }
          message += '.';
        }
        alert(message);
      }
    } else {
      alert('You didn\'t answer the question...');
    }
  }
  console.log('current correct answers:', correctCount);
}

guessCountry();

// INFORM USER OF SCORE

function userMessage(name){

  var message = 'It\'s over! You got ' + correctCount + ' out of ' + questionCount + ' questions right, ' + name + '! ';
  if (correctCount === questionCount) {
    message += 'Great job!';
  } else if (correctCount === questionCount - 1) {
    message += 'So close, better luck next time!';
  } else {
    message += 'Better luck next time.';
  }

  alert(message);
}

userMessage(user);
