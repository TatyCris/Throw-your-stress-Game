import { SET_TRIES } from '../actions/game'

const initialState = 0

export default function tries(state = initialState, { type, payload }) {
    switch (type) {
        case SET_TRIES:
            return state + payload
        default:
            return state
    }
}