import { ACTION_TYPES } from "../../constants"

const initalState = {
    isFetching: false,
 
}

export function getDetailsReducer(state = initalState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_DETAILS:
            return {
                ...state,
                ...action.details,
            }

        default:
            return state
    }
    
}