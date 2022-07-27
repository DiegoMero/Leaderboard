import './style.css';
import displayScoreList from './modules/displayScoreList.js';
import { addScore, addScoreStorage } from './modules/addScore.js';
import Score from './modules/score.js';

displayScoreList();

const name = document.getElementById('name');
const number = document.getElementById('number');
const submit = document.getElementById('submit-button');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const score = new Score(name.value, number.value);
  addScore(score);
  addScoreStorage(score);
});