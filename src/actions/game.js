export const SET_SCORE = 'SET_SCORE'
export const SET_TRIES = 'SET_TRIES'

export const setScore = (value) => {
    return {
        type: SET_SCORE,
        payload: value
    }
}

export const setTries = (value) => {
    return {
        type: SET_TRIES,
        payload: value
    }
}