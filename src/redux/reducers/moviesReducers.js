import { ACTION_TYPES } from "../../constants"

const initalPopularMovies = {
    isFetching: false,
    isModalOpen:false,
    movies: [],
    trailers:"",
}

export function moviesPopularReducer(state=initalPopularMovies, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_POPULAR_MOVIES_SWIPER:
            console.log(state)
            return {
                ...state,
                movies:[...action.movies.results]
            }
        case ACTION_TYPES.GET_SUCCSES_TRAILER:
            if (action.trailers.results.length > 0) {
                return {
                    ...state,
                    trailers:action.trailers.results[0].key
                }
            }
            return state
        case ACTION_TYPES.TOGGLE_MODAL:
            return {
                ...state,
                isModalOpen:!state.isModalOpen,
            }
       
        default:
            return state
    }
}