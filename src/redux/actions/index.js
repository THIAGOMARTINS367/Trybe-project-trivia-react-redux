export const PLAYER_REDUCER = 'PLAYER_REDUCER';
export const GET_TOKEN = 'GET_TOKEN';

export const playerReducer = (player) => ({
  type: PLAYER_REDUCER,
  player,
});

export const fetchApi = () => (dispatch) => {
  const URL = 'https://opentdb.com/api_token.php?command=request';
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_TOKEN, token: data.token }))
    .catch((error) => console.log(error));
};