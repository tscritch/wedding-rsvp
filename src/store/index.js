import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import saga from 'redux-saga'

import { initSagas } from './initSagas'

import nameFields from './reducers/nameFields'
import nameFetch from './reducers/nameFetch'

export default () => {
  const reducer = combineReducers({ nameFields, nameFetch })

  const sagaMiddleware = saga()

  const middleware = applyMiddleware(sagaMiddleware, thunk)

  const store = createStore(reducer, compose(middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  initSagas(sagaMiddleware)

  return store
}
