import './style.css';
import displayScoreList from './modules/displayScoreList.js';
import addScore from './modules/addScore.js';
import Score from './modules/score.js';
import createGame from './modules/createGame.js';

displayScoreList();

const name = document.getElementById('name');
const number = document.getElementById('number');
const submit = document.getElementById('submit-button');
const refresh = document.getElementById('refresh-button');

const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const newGame = createGame();
newGame.then((value) => {
  const newValue = JSON.stringify(value);
  const myGameID = newValue.split(' ');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const score = new Score(name.value, number.value);
    addScore(score);
    fetch(`${API_URL}games/${myGameID[3]}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: number.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`${API_URL}games/${myGameID[3]}/scores/`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
});