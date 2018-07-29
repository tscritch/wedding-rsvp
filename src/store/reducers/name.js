import {
  LAST_NAME_CHANGE,
  NAME_FETCH_START,
  NAME_FETCH_WITH_MANY,
  NAME_FETCH_NOT_FOUND,
  NAME_FETCH_FAILED
} from '../actions/name'

const initialState = {
  lastName: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LAST_NAME_CHANGE:
      return {
        ...state,
        lastName: action.text
      }
    case NAME_FETCH_START:
      return {
        ...state,
        loading: true,
        message: ''
      }
    case NAME_FETCH_WITH_MANY:
      return {
        ...state,
        hasMany: true,
        guests: action.guests,
        loading: false
      }
    case NAME_FETCH_NOT_FOUND:
      return {
        ...state,
        message: action.message,
        loading: false
      }
    case NAME_FETCH_FAILED:
      return {
        ...state,
        message: action.message,
        loading: false
      }
    default:
      return state
  }
}
