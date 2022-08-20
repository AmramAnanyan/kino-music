import { combineReducers } from "redux";
import { getDetailsReducer } from "./getDetailsReducer";
import { moviesPopularReducer } from "./moviesReducers";
import { recomendedReducer } from "./recomendedReducer";
import { searchReducer } from "./searchReducer";
import { nowPlayingReducer } from "./nowPlayingReducer";


export const rootReducer = combineReducers({
    popularMovies: moviesPopularReducer,
    recomendedMovies: recomendedReducer,
    searchMovies: searchReducer,
    details: getDetailsReducer,
    nowPlaying:nowPlayingReducer,
})