import { combineReducers } from "redux";
import { moviesPopularReducer } from "./moviesReducers";
import { recomendedReducer } from "./recomendedReducer";

export const rootReducer = combineReducers({
    popularMovies: moviesPopularReducer,
    recomendedMovies:recomendedReducer,
})