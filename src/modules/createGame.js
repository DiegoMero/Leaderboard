const createGame = async () => {
  const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const response = await fetch(`${API_URL}games/`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'PACMAN',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const result = await response.json();
  return result;
};

export default createGame;