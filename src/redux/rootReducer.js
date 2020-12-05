import { albumsReducer } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  albums: albumsReducer,
});

export default rootReducer;
