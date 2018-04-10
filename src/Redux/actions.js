import { RESET_STATE, GET_DECK, UPDATE_DECK } from '../Constants/ActionTypes';

export const updateDeck = () => ({
  type: GET_DECK
});
export const resetState = () => ({
  type: RESET_STATE
});
