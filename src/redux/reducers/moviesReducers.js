import { ACTION_TYPES } from "../../constants"

const initalPopularMovies = {
    isFetching: false,
    movies:[]
}

export function moviesPopularReducer(state=initalPopularMovies, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_POPULAR_MOVIES_SWIPER:
            return {
                ...state,
                movies:[...action.movies.results]
            }
        default:
            return state
    }
}