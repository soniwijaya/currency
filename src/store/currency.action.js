import axios from 'axios'
import swal from 'sweetalert'

const showCurrency = () => {
    return dispatch => {
        dispatch(loading())
        axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then(result => {
            let currency = []
            let list = []
            for(let key in result.data.rates){
                if(key==='IDR' || key==='EUR' || key==='GBP' || key==='SGD'){
                    currency.push({
                        name: key,
                        value: result.data.rates[key],
                    })
                }
                list.push({
                    name: key,
                    value: result.data.rates[key],
                })
            }
            dispatch(getCurrency(currency, list))
        })
        .catch(function(err) {
            console.log('error')
            dispatch(errCurrency(err))
        })
    }
}

const addCurrency = (currency, keyword) => {
    return dispatch => {
        dispatch(loading())
        axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then(function(result) {
            for(let key in result.data.rates){
                if(key===keyword.toUpperCase()){
                    currency.push({
                        name: key,
                        value: result.data.rates[key],
                    })
                }
            }
            swal('success', 'success add new currency', 'success')
            dispatch(addingCurrency(currency))
        })
        .catch(function(err) {
            dispatch(errCurrency(err))
        })
    }
}

const removeCurrency = ( currency, name ) => {
    return dispatch => {
        currency.forEach((filter,index) => {
            if(filter.name===name){
                currency.splice(index,1)
            }
        })
        dispatch(deleteCurrency(currency))
    }
}

const getKeyword = (keyword) => {
    return dispatch => {
        dispatch(saveKeyword(keyword))
    }
}

const getCurrency = (currency, list) => ({
    type: 'GET_ALL',
    payload: currency,
    listcurrency: list
})

const loading = () => ({
    type: 'LOADING'
})

const errCurrency = () => ({
    type: 'ERROR'
})

const saveKeyword = (keyword) => ({
    type: 'KEYWORD',
    payload: keyword
})

const addingCurrency = (currency) => ({
    type: 'ADDING_CURRENCY',
    payload: currency
})

const deleteCurrency = (currency) => ({
    type: 'REMOVE_CURRENCY',
    payload: currency
})

export { showCurrency, getKeyword, addCurrency, removeCurrency }