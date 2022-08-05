import { combineReducers } from "redux";
import { moviesPopularReducer } from "./moviesReducers";

export const rootReducer = combineReducers({
    popularMovies:moviesPopularReducer
})