import { ACTION_TYPES } from "../../constants"

const initalRecomended = {
    isFetching: false,
    recomended: {
        results:[]
    }
    
}

export function recomendedReducer(state = initalRecomended, action) {
    switch (action.type) {

        case ACTION_TYPES.GET_REQUEST_RECOMENDED:
           
            return state
        
        case ACTION_TYPES.GET_SUCCSES_RECOMENDED_MOVIES:
           
            return {
                ...state,
                recomended: {
                    ...action.recomended,
                }
            }
       
        default:
            return state
    }
}