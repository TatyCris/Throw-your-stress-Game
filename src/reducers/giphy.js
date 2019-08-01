import { SET_GIPHY } from '../actions/giphy'

const initialState = ''

export default function score(state = initialState, { type, payload }) {
    switch (type) {
        case SET_GIPHY:
            return payload
        default:
            return state
    }
}