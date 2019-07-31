import { combineReducers } from 'redux'
import score from './score'
import tries from './tries'

export default combineReducers({
    score,
    tries
})