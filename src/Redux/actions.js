import { RESET_STATE, GET_DECK, UPDATE_DECK } from '../Constants/ActionTypes';

export const updateDeck = () => ({
  type: GET_DECK
});
export const resetState = () => ({
  type: RESET_STATE
});
export function ApiGetTeams() {
  return dispatch => {
      return fetch("http://72.49.137.37/fivecolorapi/api/deck/1")
      .then((response) => {
          dispatch({
              type: "ApiGetTeams",
              payload: response.json()
          })
      })
  }
} 

// fetch('http://example.com/movies.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   }); 