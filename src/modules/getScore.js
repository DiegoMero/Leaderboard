const getScore = () => {
  let scoreArray;
  if (localStorage.getItem('score') === null) {
    scoreArray = [];
  } else {
    scoreArray = JSON.parse(localStorage.getItem('score'));
  }
  return scoreArray;
};

export default getScore;