// IMPORT TYPES
import { SEND_MESSAGE, GET_CONTACT_USERS_START, GET_CONTACT_USERS_SUCCESS, GET_CONTACT_USERS_FAİLED, GET_CHAT_SCREEN_USER_DETAIL, GET_CHAT_SCREEN_USER_DETAIL_CANCEL } from '../../types/home/home';

// IMPORT URLS
import { GET_CONTACT_USER_URL } from '../../urls/home/home'

export const sendMessage = (messages) => {
    return {
        type: SEND_MESSAGE,
        messages: messages
    }
}

export const getContactUserStart = () => {
    return {
        type: GET_CONTACT_USERS_START
    }
}

export const getContactUserSuccess = (contact) => {
    return {
        type: GET_CONTACT_USERS_SUCCESS,
        contact: contact,

    }
}

export const getContactUserFailed = (error) => {
    return {
        type: GET_CONTACT_USERS_FAİLED,
        error: error
    }
}

export const getContactUserService = () => {

    return dispatch => {
        dispatch(getContactUserStart())
        fetch(GET_CONTACT_USER_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `bearer ${token}`
            },
            //    body: JSON.stringify({
            //     "productsouscategoryId":souscategoryId
            //    })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.responseStatus === 200) {
                    dispatch(getContactUserSuccess(response.data.response))
                }
                else {
                    console.log(error)
                    dispatch(getContactUserFailed("Error getting List"));
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(getContactUserFailed(error));
            })
    }
}



export const getChatScreenUserDetail = (screenuserdetail) => {
    return {
        type: GET_CHAT_SCREEN_USER_DETAIL,
        screenuserdetail: screenuserdetail
    }
}

export const getChatScreenUserDetailCancel = () => {
    return {
        type: GET_CHAT_SCREEN_USER_DETAIL_CANCEL,


    }
}





