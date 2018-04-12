import { RETRIEVE_DECK, RESET_STATE, GET_DECK } from './../Constants/ActionTypes';
import { getDeck } from './../Mocker';

const initialState = {
  deck: getDeck()
};

const Reducer = function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECK: {
      return {
        ...state,
        deck: action.deck
      };
    }
    case RETRIEVE_DECK: {
      alert(action);
      return {
        ...state,
        deck: action.payload.cards
      };
    }
    case RESET_STATE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
export default Reducer;