import { FIRST_NAME_CHANGE, LAST_NAME_CHANGE } from '../actions/name'

const initialState = {
  firstName: '',
  lastName: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRST_NAME_CHANGE:
      return {
        ...state,
        firstName: action.text
      }
    case LAST_NAME_CHANGE:
      return {
        ...state,
        lastName: action.text
      }
    default:
      return state
  }
}
