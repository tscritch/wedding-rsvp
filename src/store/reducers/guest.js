import { CHOOSE_GUEST, CHOOSE_RSVP, SELECT_GUEST, SUBMIT_RSVP_START, SUBMIT_RSVP_FAILED, SUBMIT_RSVP_SUCCEDED } from '../actions/guest'

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
    case SUBMIT_RSVP_START:
      return {
        ...state,
        loading: true
      }
    case SUBMIT_RSVP_SUCCEDED:
      const guest = Object.assign({}, state.guest, { rsvp: action.answer })
      console.log(guest)
      return {
        ...state,
        loading: false,
        rsvped: true,
        guest
      }
    case SUBMIT_RSVP_FAILED:
      return {
        ...state,
        loading: false,
        failure: true
      }
    default:
      return state
  }
}
