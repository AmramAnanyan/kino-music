import { ACTION_TYPES } from "../../constants"

const initialState = {
    isFetching: false,
    nowPlaying:[],
}

export function nowPlayingReducer(state=initialState,action) {
    switch (action.type) {
        case ACTION_TYPES.GET_NOW_PLAYING:
            console.log(action.movies)
            return {
                ...state,
                ...action.movies,
                nowPlaying:[...action.movies.results]
            }
        default:
            return state
    }
}