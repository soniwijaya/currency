const initialState = {
    loading: true,
    error: false,
    currency: [],
    list: [],
    keyword: ''
}

const currency = ( state = {  ...initialState  }, action ) => {
    switch ( action.type ){
        case "GET_ALL" :
            return {
                ...state,
                loading: false,
                error: false,
                currency: action.payload,
                list: action.listcurrency
            }
        case "LOADING" :
            return {
                ...state,
                loading: true,
                error: false
            }
        case "ERROR" :
            return {
                ...state,
                loading: false,
                error: true
            }
        case "KEYWORD" :
            return {
                ...state,
                keyword: action.payload,
                loading: false,
                error: false,
            }
        case "ADDING_CURRENCY" :
            return {
                ...state,
                loading: false,
                error: false,
                currency: action.payload
            }
        case "REMOVE_CURRENCY" :
            return {
                ...state,
                loading: false,
                error: false,
                currency: action.payload
            }
        default:
            return state
    }
}

export default currency