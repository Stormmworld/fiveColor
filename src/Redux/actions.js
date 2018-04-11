import { RESET_STATE, GET_DECK, UPDATE_DECK } from '../Constants/ActionTypes';

export const updateDeck = () => ({
  type: GET_DECK
});
export const resetState = () => ({
  type: RESET_STATE
});
export function ApiGetTeams() {
  return dispatch => {
      return axios.get("http://elementalserver.servehttp.com/NFLScheduleApi/api/teams")
      .then((response) => {
          dispatch({
              type: "ApiGetTeams",
              payload: response.data
          })
      })
      .catch((error) => {
          dispatch ({
              type: "axiosException",
              payload: error,
              customMessage: "Error while getting teams from api call"
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