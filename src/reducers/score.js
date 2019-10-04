import { SET_SCORE } from '../actions/game'
import { ADD_SCORE } from '../actions/game'

const initialState = 0

export default function score(state = initialState, { type, payload }) {
    switch (type) {
        case SET_SCORE:
            return payload
        case ADD_SCORE:
            return state + payload
        default:
            return state
    }
}