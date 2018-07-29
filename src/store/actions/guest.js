export const CHOOSE_GUEST = 'CHOOSE_GUEST'
export const CHOOSE_RSVP = 'CHOOSE_RSVP'
export const SELECT_GUEST = 'SELECT_GUEST'

export const chooseGuest = (index) => ({ type: CHOOSE_GUEST, index })

export const chooseRsvp = (index) => ({ type: CHOOSE_RSVP, index })

export const selectGuest = (guest) => ({ type: SELECT_GUEST, guest })
