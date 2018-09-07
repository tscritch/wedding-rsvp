import { combineReducers } from 'redux'
import guest from './guest'
import name from './name'
import seats from './seats'

const rootReducer = combineReducers({
  name,
  guest,
  seats
})

export default rootReducer
