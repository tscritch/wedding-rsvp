import { CHOOSE_GUEST, CHOOSE_RSVP, SELECT_GUEST, SUBMIT_RSVP } from '../actions/guest'

const initialState = {
  guestChoice: -1,
  rsvpChoice: -1
}

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
    case SUBMIT_RSVP:
      const guest = Object.assign({}, {rsvp: action.answer}, state.guest)
      console.log(guest)
      return {
        ...state,
        guest
      }
    default:
      return state
  }
}
