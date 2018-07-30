import {
  SEAT_CHANGE,
  SUBMIT_RESERVATION_START,
  SUBMIT_RESERVATION_SUCCEDED,
  SUBMIT_RESERVATION_FAILED
} from '../actions/seats'

const initialState = {
  seatCount: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEAT_CHANGE:
      if (!action.value) {
        return {
          ...state,
          seatCount: ''
        }
      }
      const seatCount = parseInt(action.value[action.value.length - 1], 10)
      if (isNaN(seatCount)) {
        return state
      }
      return {
        ...state,
        seatCount
      }
    case SUBMIT_RESERVATION_START:
      return {
        ...state,
        loading: true,
        message: ''
      }
    case SUBMIT_RESERVATION_SUCCEDED:
      return {
        ...state,
        loading: false,
        reserved: true
      }
    case SUBMIT_RESERVATION_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message
      }
    default:
      return state
  }
}
