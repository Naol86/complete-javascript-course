'use strict';

let number = Math.floor(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', e => {
  let guess = Number(document.querySelector('.guess').value);

  if (guess) {
    if (guess === number) {
      displayMessage('you are right');
      document.querySelector('.number').textContent = String(guess);
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (score > 1 && (guess < number || guess > number)) {
      displayMessage(guess > number ? 'Too Large' : 'Too small');
      score -= 1;
    } else {
      displayMessage('you lose the game');
      score--;
      document.querySelector('body').style.backgroundColor = 'red';
    }
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('Enter a number');
  }
});

document.querySelector('.again').addEventListener('click', e => {
  number = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayMessage('guess a number');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
