import AsyncStorage from '@react-native-community/async-storage';

// IMPORT TYPES
import { REGISTRATION_START, REGISTRATION_SUCCESS, REGISTRATION_FAILED, VERIFICATION_START, VERIFICATION_SUCCESS, VERIFICATION_FAILED, CANCEL_REGISTRATION_STATUS, GET_USER_DATA } from '../../types/auth/auth';

// IMPORT URLS
import { VERIFICATION_URL, REGISTRATION_URL } from '../../urls/auth/auth';



export const registrationStart = () => {
    return {
        type: REGISTRATION_START
    }
}

export const registrationSuccess = (registrationdata) => {
    return {
        type: REGISTRATION_SUCCESS,
        registrationdata: registrationdata,

    }
}

export const cancelRegistrationSuccess = () => {
    return {
        type: CANCEL_REGISTRATION_STATUS,
    }
}

export const registrationFailed = (error) => {
    return {
        type: REGISTRATION_FAILED,
        error: error
    }
}

export const registrationService = (number, platform) => {

    return dispatch => {
        dispatch(registrationStart())
        fetch(REGISTRATION_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                "number": number,
                "platform": platform
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.responseStatus === 200) {
                    dispatch(registrationSuccess(response.data.response))


                }
                else {
                    // console.log(error)
                    dispatch(registrationFailed("Error Registration List"));
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(registrationFailed(error));
            })
    }
}





export const verificationStart = () => {
    return {
        type: VERIFICATION_START
    }
}

export const verificationSuccess = (token) => {
    return {
        type: VERIFICATION_SUCCESS,
        token: token,

    }
}

export const verificationFailed = (error) => {
    return {
        type: VERIFICATION_FAILED,
        error: error
    }
}

export const verificationService = (userId, code, name, surname) => {

    return dispatch => {
        dispatch(verificationStart())
        fetch(VERIFICATION_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                "userId": userId,
                "code": code,
                "name": name,
                "surname": surname
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.responseStatus === 200) {
                    dispatch(verificationSuccess(response.data.response))
                    saveDataToStorage(response.data.response)
                }
                else {
                    dispatch(verificationFailed("Error Registration List"));
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(verificationFailed(error));
            })
    }
}


const saveDataToStorage = async (token) => {
    console.log("Setting", token)
    try {
        await AsyncStorage.setItem('userData', JSON.stringify({
            token: token.toString(),
        }));
        console.log("setSuccessfully")
    } catch (error) {
        console.log("SetItem error ", error)
        return null;
    }
}



export const getUserData = (data) => {

    return {
        type: GET_USER_DATA,
        data: data
    }
}






