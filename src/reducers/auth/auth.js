import * as actionTypes from '../../types/auth/auth';

const initialState = {
    error: null,
    loading: false,
    registrationdata: [],
    registrationstatus: false,
    token: null,
    auth: false

}

const ReducerAuth = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.REGISTRATION_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                registrationdata: action.registrationdata,
                registrationstatus: true,
                error: false
            }
        case actionTypes.REGISTRATION_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case actionTypes.CANCEL_REGISTRATION_STATUS:
            return {
                ...state,
                registrationstatus: false,
            }

        case actionTypes.VERIFICATION_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.VERIFICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                auth:true,
                error: false
            }
        case actionTypes.VERIFICATION_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case actionTypes.GET_USER_DATA:
            return {
                ...state,
                auth: true,
                token: action.data
            }

        default:
            return state
    }

}

export default ReducerAuth