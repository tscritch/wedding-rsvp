import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import saga from 'redux-saga'

import { initSagas } from './initSagas'

import name from './reducers/name'

export default () => {
  const reducer = combineReducers({ name })

  const sagaMiddleware = saga()

  const middleware = applyMiddleware(sagaMiddleware, thunk)

  const store = createStore(reducer, compose(middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  initSagas(sagaMiddleware)

  return store
}
