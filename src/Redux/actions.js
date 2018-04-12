import { RESET_STATE, GET_DECK, UPDATE_DECK,RETRIEVE_DECK } from '../Constants/ActionTypes';

export const updateDeck = () => ({
  type: UPDATE_DECK
});
export const resetState = () => ({
  type: RESET_STATE
});

export function retrieveDeck(deckId) {
  return dispatch => {
    return fetch("http://72.49.137.37/fivecolorapi/api/deck/" + deckId)
      .then((response) => {
        dispatch({
          type: RETRIEVE_DECK,
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