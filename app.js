'use strict';

window.onload = function() {
  var correctCount = 0; // counter for correct answers
  var questionCount = 0; // counter for number of questions asked

  var questionBox = document.getElementById('question-box');
  // var questionElements = document.querySelectorAll('ol li');

  var user;

  function userName(){
    var userPrompt = document.createElement('p');
    questionBox.appendChild(userPrompt);
    userPrompt.innerHTML = 'Hey, what\'s your name?<form><input type="text" name="inputName"></input><button type="submit">OK</button></form>';
    document.querySelector('form').addEventListener('submit', handleNameSubmit);

    function handleNameSubmit(e) {
      e.preventDefault();
      user = e.target.inputName.value;
      console.log('user name:', user);
      var hasName = user != '';
      if (!hasName) {
        user = 'nameless one';
      }
      userPrompt.innerHTML = 'Hello, ' + user + '. I\'m going to ask some questions about me, try and get them all right!';
    }
  }

  userName();

  //YES AND NO QUESTIONS

  function askQuestions(){
    // yes/no question, correct answer, response to correct answer, response to wrong answer
    var ynQuestions = [['Do I live in Chicago?', 'NO', 'Right, I actually live in Seattle.', 'Nope, I call Seattle my home.'],
    ['Do I have any pets?', 'YES', 'I have two cats, in fact.', 'No, well I guess my two cats own me...'],
    ['Am I a blackbelt in karate?', 'NO', 'That is correct. No karate, just know kenjutsu.', 'I don\'t know any karate, but I do know kenjutsu.'],
    ['Did I write a thesis about the rearrangement of a platinocyclobutane?', 'YES', 'Yep, watched atoms moving around on a screen.', 'Wrong. And yes, that is a word.'],
    ['Am I Megan?', 'YES', 'Yep, that\'s my name!', 'Seriously?']];

    var userAns;
    var compAns;
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
        compAns = userAns;
        if (typeof compAns === 'string') {
          compAns = compAns.toUpperCase().trim();
          compAns = compAns === correctAns || compAns === correctAns[0];
        }
        console.log(question, 'user correct:', compAns);
      } while (typeof compAns != 'boolean');
      questionElements[ask].innerHTML += '<span class="answer">' + userAns + '</span>';
      if (compAns) {
        alert(correctResp);
        correctCount++;
        questionElements[ask].innerHTML += '<span class="correct">&#9711;</span>';
      } else {
        alert(wrongResp);
        questionElements[ask].innerHTML += '<span class="wrong">&#9747;</span>';
      }
    }
    console.log('correct y/n answers:', correctCount);

  }

  // askQuestions();

  // GUESS THE NUMBER QUESTIONS

  function guessNumber(){
    var userAns;
    var compAns;
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
      compAns = userAns;
      compAns = parseInt(compAns);

      if (isNaN(compAns)) {
        message = 'That\'s not a number...';
      } else {
        isNotDone = compAns != favNum;
        if (isNotDone) {
          message = 'No, that number is too ';
          if (compAns > favNum) {
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
    if (isNotDone) {
      questionElements[questionCount-1].innerHTML += '<span class="wrong">&#9747;</span>';
    } else {
      questionElements[questionCount-1].innerHTML += '<span class="correct">&#9711;</span>';
    }

    console.log('current correct answers:', correctCount);

  }

  // guessNumber();

  // MULTIPLE ANSWER QUESTIONS

  function guessCountry(){
    var userAns;
    var compAns;
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
      compAns = userAns;

      if (compAns != null && compAns != '') {
        compAns = compAns.toUpperCase().trim();
        for (i = 0; i < possibleAns.length; i++) {
          if (possibleAns[i].toUpperCase() === compAns) {
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
    if (isNotDone) {
      questionElements[questionCount-1].innerHTML += '<span class="wrong">&#9747;</span>';
    } else {
      questionElements[questionCount-1].innerHTML += '<span class="correct">&#9711;</span>';
    }

    console.log('current correct answers:', correctCount);

  }

  // guessCountry();

  // INFORM USER OF SCORE

  function userMessage(name){
    alert('It\'s over!');
    document.querySelector('.hide').style.display ='block';

    var message = 'You got <span class="num">' + correctCount + '</span> out of <span class="num">' + questionCount + '</span> questions right, ' + name + '! ';
    if (correctCount === questionCount) {
      message += 'Excellent job!';
    } else if (correctCount >= questionCount - 2) {
      message += 'So close, better luck next time!';
    } else {
      message += 'Better luck next time.';
    }

    var printBox = document.getElementById('score-box');
    printBox.innerHTML = '<p>' + message + '</p>';
  }

  // userMessage(user);
};
