import getScore from './getScore.js';
import addScore from './addScore.js';

const displayScoreList = () => {
  const scoreArray = getScore();
  scoreArray.forEach((score) => addScore(score));
};

export default displayScoreList;