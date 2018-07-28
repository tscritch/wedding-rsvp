import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import saga from 'redux-saga'

import { initSagas } from './initSagas'

import nameFields from './reducers/nameFields'
import nameFetch from './reducers/nameFetch'

export default () => {
  const reducer = combineReducers({ nameFields, nameFetch })

  const middleware = applyMiddleware(saga(), thunk)

  const store = createStore(reducer, compose(middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  initSagas()

  return store
}
