import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import saga from 'redux-saga'
import { initSagas } from './initSagas'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

export default () => {

  const persistedState = loadState()

  const sagaMiddleware = saga()

  const middleware = applyMiddleware(sagaMiddleware, thunk)

  const store = createStore(
    rootReducer,
    persistedState,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
  )

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  initSagas(sagaMiddleware)

  return store
}
