import getScore from './getScore.js';
import { addScore } from './addScore.js';

export default function displayScoreList() {
  const scoreArray = getScore();
  scoreArray.forEach((score) => addScore(score));
}