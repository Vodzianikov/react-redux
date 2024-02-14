import { COUNTER_ACTION_TYPES } from "./actionTypes"

export const increment = () => {
    return {
        type: COUNTER_ACTION_TYPES.INCREMENT
    }
}

// export const increment2 = () => ({
//     type: COUNTER_ACTION_TYPES.INCREMENT
// })

export const decrement = () => {
    return {
        type: COUNTER_ACTION_TYPES.DECREMENT
    }
}

export const reset = () => {
    return {
        type: COUNTER_ACTION_TYPES.RESET
    }
}

export const incrementByValue = (value) => {
    return {
        type: COUNTER_ACTION_TYPES.INC_BY_VALUE,
        payload: value
    }
}