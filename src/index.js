import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import ReactDOM from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom'
import { Provider } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'
import App from './components/App/App.display'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
