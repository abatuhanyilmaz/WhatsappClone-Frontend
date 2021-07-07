import * as actionTypes from '../../types/home/home';

const initialState = {
    error: null,
    loading: false,
    auth: false,
    // data: [{ id: 1, message: "hehellohellohellohellohellohellohellohellohellohellohellohellohellohellollo" }, { id: 2, message: "helqweqweqweqweqweqweqweqwelo" },
    // { id: 1, message: "hello" }, { id: 2, message: "hehellohellohellohellohellohellohellohellohellohellohellohellohellohellollo" },
    // { id: 1, message: "hello" }, { id: 2, message: "hehellohellohellohellohellohellohellohellohellohellohellohellohellohellollo" }
    //     , { id: 1, message: "fatih" },
    // { id: 1, message: "fatih" },
    // { id: 2, message: "fatih" }
    // ]
    data: [],
    contact: [],
    screenuserdetail:[],
    redirecttochat:false

}

const ReducerHome = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SEND_MESSAGE:
            return {
                ...state,
                data: state.data.concat(action.messages)
            }

        case actionTypes.GET_CONTACT_USERS_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.GET_CONTACT_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                contact: action.contact
            }

        case actionTypes.GET_CONTACT_USERS_FAİLED:
            return {
                ...state,
                loading: false,
                error: true
            }

        case actionTypes.SEND_MESSAGE:
            return {
                ...state,
                data: state.data.concat(action.messages)
            }

        case actionTypes.GET_CHAT_SCREEN_USER_DETAIL:
            return {
                ...state,
                screenuserdetail: action.screenuserdetail,
                redirecttochat: true 
            }

        case actionTypes.GET_CHAT_SCREEN_USER_DETAIL_CANCEL:
            return {
                ...state,
                redirecttochat: false
            }


        default:
            return state
    }

}

export default ReducerHome