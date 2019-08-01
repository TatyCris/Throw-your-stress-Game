import * as request from 'superagent'

export const SET_GIPHY = 'SET_GIPHY'


export function setGiphy(quotes) {
    return {
        type: SET_GIPHY,
        payload: quotes
    }
}

export function getGiphy() {
    return function (dispatch) {
        request
            .get("https://api.giphy.com/v1/gifs/random?api_key=meDFRCFHDMmH55KnxfOCnrABDN62JBaw&tag=get relax&rating=G")
            // .then(res => {
            //     console.log('here', res.body.data.image_url)
            // })
            .then(response => {
                dispatch(setGiphy(response.body.data.image_url))
            })
            .catch(console.error)
    }
} 