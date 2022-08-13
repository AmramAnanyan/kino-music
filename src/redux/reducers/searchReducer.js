import { ACTION_TYPES } from "../../constants"

const initialState = {
    isFetching: false,
    isOpenModal:false,
    movies:[],
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SEARCH_MOVIES:

            return {
                ...state,
                movies:[...action.movie.results]
            }
        case ACTION_TYPES.SEARCH_MODAL_OPEN: {
            return {
                ...state,
                isOpenModal:!state.isOpenModal,
            }
        }

        default:
            return state
    }
}