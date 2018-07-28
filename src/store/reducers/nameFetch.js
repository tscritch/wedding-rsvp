import {
  NAME_FETCH_START,
  NAME_FETCH_WITH_ONE,
  NAME_FETCH_WITH_MANY,
  NAME_FETCH_NOT_FOUND,
  NAME_FETCH_FAILED } from '../actions/nameFetch'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_FETCH_START:
      return {
        ...state,
        loading: true
      }
    case NAME_FETCH_WITH_ONE:
      return {
        ...state,
        guest: action.guest,
        loading: false
      }
    case NAME_FETCH_WITH_MANY:
      return {
        ...state,
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
