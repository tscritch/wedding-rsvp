export const FIRST_NAME_CHANGE = 'FIRST_NAME_CHANGE'
export const LAST_NAME_CHANGE = 'LAST_NAME_CHANGE'

export function changeFirstName (text) {
  return {
    type: FIRST_NAME_CHANGE,
    text
  }
}

export function changeLastName (text) {
  return {
    type: LAST_NAME_CHANGE,
    text
  }
}

const initialState = {
  first_name: '',
  last_name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRST_NAME_CHANGE:
      return {
        ...state,
        first_name: action.text
      }
    case LAST_NAME_CHANGE:
      return {
        ...state,
        last_name: action.text
      }
    default:
      return state
  }
}
