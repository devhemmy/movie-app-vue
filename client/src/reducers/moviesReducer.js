import { ADD_MOVIES, ADD_STATE } from "../actionCreators/addMovies";
import { DELETE_MOVIES } from "../actionCreators/deleteMovies";

export default function movies(state = [], action) {
  if (action.type === ADD_MOVIES) {
    return [...action.payload];
  } else if (action.type === DELETE_MOVIES) {
    return [];
  } else if (action.type === ADD_STATE) {
    return action.payload;
  }
  return state;
}
