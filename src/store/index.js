import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import name from './reducers/name'

const reducer = combineReducers({ name })

const middleware = applyMiddleware(thunk)

export default createStore(reducer, middleware)
