import { COUNTER_ACTION_TYPES } from "./actionTypes";

const initialState = {
    counter: 0,
    isLoading: false,
    data: []
}


export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case COUNTER_ACTION_TYPES.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case COUNTER_ACTION_TYPES.RESET:
            return {
                ...state,
                counter: 0
            }

        case COUNTER_ACTION_TYPES.INC_BY_VALUE:
            return {
                ...state,
                counter: state.counter + action.payload
            }

        default:
            return {
                ...state
            }
    }
}