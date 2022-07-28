export default function addScore(score) {
  const scoreList = document.querySelector('ul');
  const scoreCont = document.createElement('li');

  scoreCont.textContent = `${score.name}: ${score.number}`;

  scoreList.appendChild(scoreCont);
}

/* export function addScoreStorage(score) {
  const scoreArray = getScore();
  scoreArray.push(score);
  localStorage.setItem('score', JSON.stringify(scoreArray));
} */