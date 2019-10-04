export const ADD_SCORE = 'ADD_SCORE'
export const SET_SCORE = 'SET_SCORE'
export const ADD_TRIES = 'ADD_TRIES'
export const SET_TRIES = 'SET_TRIES'
export const GET_OBJECTS = 'GET_OBJECTS'

export const addScore = (value) => {
    return {
        type: ADD_SCORE,
        payload: value
    }
}

export const setScore = (value) => {
    return {
        type: SET_SCORE,
        payload: value
    }
}

export const addTries = (value) => {
    return {
        type: ADD_TRIES,
        payload: value
    }
}

export const setTries = (value) => {
    return {
        type: SET_TRIES,
        payload: value
    }
}

export const getObjects = (value) => {
    return {
        type: GET_OBJECTS,
        payload: value
    }
}