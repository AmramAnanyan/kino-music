import { ACTION_TYPES } from "../../constants"

const initialState = {
    isFetching: false,
    isOpenModal:false,
    movies:[],
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SEARCH_MOVIES:
            let newResult=action.movie.results?action.movie.results:[]
        console.log(action.movie)
            return {
                ...state,
                movies:[...newResult]
            }
        case ACTION_TYPES.SEARCH_MODAL_OPEN: {
            return {
                ...state,
                isOpenModal:true,
            }
        }
        case ACTION_TYPES.CLOSE_SEARCH_MODAL: {
            return {
                ...state,
                isOpenModal:false,
            }
            }

        default:
            return state
    }
}