export const CHOOSE_GUEST = 'CHOOSE_GUEST'
export const CHOOSE_RSVP = 'CHOOSE_RSVP'
export const SELECT_GUEST = 'SELECT_GUEST'
export const SUBMIT_RSVP_START = 'SUBMIT_RSVP_START'
export const SUBMIT_RSVP_SUCCEDED = 'SUBMIT_RSVP_SUCCEDED'
export const SUBMIT_RSVP_FAILED = 'SUBMIT_RSVP_FAILED'

export const chooseGuest = (index) => ({ type: CHOOSE_GUEST, index })

export const chooseRsvp = (index) => ({ type: CHOOSE_RSVP, index })

export const selectGuest = (guest) => ({ type: SELECT_GUEST, guest })

export const submitRsvp = (id, answer) => ({ type: SUBMIT_RSVP_START, id, answer })

export const rsvpGuestSucceded = (answer) => ({ type: SUBMIT_RSVP_SUCCEDED, answer })

export const rsvpGuestFail = (message) => ({ type: SUBMIT_RSVP_FAILED, message })
