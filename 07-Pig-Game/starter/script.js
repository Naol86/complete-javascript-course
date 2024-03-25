'use strict';

let currentScoreOfPlayer = 0;
let activePlayer = 0;

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

const scores = [0, 0];

const currentScore = document.querySelectorAll('.current-score');
const score = document.querySelectorAll('.score');
const players = document.querySelectorAll('.player');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

for (let i = 0; i < 2; i++) {
  score[i].textContent = 0;
}

const togglePlayer = () => {
  currentScore[activePlayer].textContent = currentScoreOfPlayer;
  scores[activePlayer] =
    currentScoreOfPlayer > scores[activePlayer]
      ? currentScoreOfPlayer
      : scores[activePlayer];
  currentScoreOfPlayer = 0;
  console.log(scores);
  score[activePlayer].textContent = scores[activePlayer];
  currentScore[activePlayer].textContent = currentScoreOfPlayer;
  if (!activePlayer) {
    players[1].classList.add('player--active');
    players[0].classList.remove('player--active');
    activePlayer++;
  } else {
    players[0].classList.add('player--active');
    players[1].classList.remove('player--active');
    activePlayer--;
  }
};

const rollDice = () => {
  let diceNumber = Math.random() * 6 + 1;
  diceNumber = Math.floor(diceNumber);
  dice.src = `dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    currentScoreOfPlayer = 0;
    togglePlayer();
  } else {
    currentScoreOfPlayer += diceNumber;
    currentScore[activePlayer].textContent = currentScoreOfPlayer;
  }
};

btnRoll.addEventListener('click', rollDice);
holdBtn.addEventListener('click', togglePlayer);

newBtn.addEventListener('click', () => {
  scores[0] = 0;
  scores[1] = 1;
  activePlayer = 0;
  currentScoreOfPlayer = 0;
  for (let i = 0; i < 2; i++) {
    currentScore[i].textContent = 0;
    score[i].textContent = 0;
  }
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
});
