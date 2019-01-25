import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import currency from './currency.reducers'

const store = createStore(
    currency,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store