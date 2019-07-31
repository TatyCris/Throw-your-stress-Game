import { GET_OBJECTS } from '../actions/game'

const initialState = []

export default function score(state = initialState, { type, payload }) {
    switch (type) {
        case GET_OBJECTS:
            return [...state, payload]
        default:
            return state
    }
}