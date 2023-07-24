'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(document.querySelector('.message').textContent);

document.querySelector('#again').addEventListener('click', function restar() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'guessing...';

  document.querySelector('.guess').value = '';
  document.querySelector('#top-body-box').textContent = '?';
  document.querySelector('#top-body-box').style.padding = '40px 25px';
  document.querySelector('body').style.backgroundColor = '#222';
});

document
  .querySelector('.check-btn')
  .addEventListener('click', function logic() {
    const guessedNumber = document.querySelector('.guess').value;

    if (!guessedNumber) {
      document.querySelector('.message').textContent = '⛔️ No Number';
      document.querySelector('.score').textContent = --score;
    } else if (guessedNumber > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too Hight';
      document.querySelector('.score').textContent = --score;
    } else if (guessedNumber < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too Low';
      document.querySelector('.score').textContent = --score;
    } else if (guessedNumber == secretNumber) {
      document.querySelector('.message').textContent = '🎉 you won';
      document.querySelector('.score').textContent = --score;

      document.querySelector('body').style.backgroundColor = '#12b1fe';
      document.querySelector('#top-body-box').textContent = secretNumber;
      document.querySelector('#top-body-box').style.padding =
        '40px 60px 40px 60px';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highScore').textContent = score;
      }
    }
  });
