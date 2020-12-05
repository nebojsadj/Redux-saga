import initialState from "./initialState";
import { LOADING_DATA, SUCCESS_DATA, ERROR_DATA } from "./types";

export function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return { ...state, loading: true };
    case SUCCESS_DATA:
      return { ...state, loading: false, albums: action.payload, error: "" };
    case ERROR_DATA:
      return {
        ...state,
        albums: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
