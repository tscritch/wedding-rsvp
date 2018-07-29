export const CHOOSE_GUEST = 'CHOOSE_GUEST'

export const chooseGuest = (index) => ({ type: CHOOSE_GUEST, index })

export const SELECT_GUEST = 'SELECT_GUEST'

export const selectGuest = (guest) => ({ type: SELECT_GUEST, guest })
