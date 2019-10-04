import { ADD_TRIES } from '../actions/game'
import { SET_TRIES } from '../actions/game'

const initialState = 0

export default function tries(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TRIES:
            return state + payload
        case SET_TRIES:
            return payload
        default:
            return state
    }
}