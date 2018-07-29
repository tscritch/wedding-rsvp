import { CHOOSE_GUEST, SELECT_GUEST } from '../actions/guest'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_GUEST:
      return {
        ...state,
        choice: action.index
      }
    case SELECT_GUEST:
      return {
        ...state,
        guest: action.guest
      }
    default:
      return state
  }
}
