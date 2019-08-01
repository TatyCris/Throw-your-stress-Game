import { combineReducers } from 'redux'
import score from './score'
import tries from './tries'
import objects from './objects'
import giphy from './giphy'

export default combineReducers({
    score,
    tries,
    objects,
    giphy
})