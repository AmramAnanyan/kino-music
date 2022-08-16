import { combineReducers } from "redux";
import { getDetailsReducer } from "./getDetailsReducer";
import { moviesPopularReducer } from "./moviesReducers";
import { recomendedReducer } from "./recomendedReducer";
import { searchReducer } from "./searchReducer";


export const rootReducer = combineReducers({
    popularMovies: moviesPopularReducer,
    recomendedMovies: recomendedReducer,
    searchMovies: searchReducer,
    details:getDetailsReducer,
})