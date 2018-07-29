import { CHOOSE_GUEST, CHOOSE_RSVP, SELECT_GUEST } from '../actions/guest'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_GUEST:
      return {
        ...state,
        guestChoice: action.index
      }
    case CHOOSE_RSVP:
      return {
        ...state,
        rsvpChoice: action.index
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
