export const SEAT_CHANGE = 'SEAT_CHANGE'

export const changeSeatCount = (number) => ({ type: SEAT_CHANGE, number })

export const SUBMIT_RESERVATION_START = 'SUBMIT_RESERVATION_START'
export const SUBMIT_RESERVATION_SUCCEDED = 'SUBMIT_RESERVATION_SUCCEDED'
export const SUBMIT_RESERVATION_FAILED = 'SUBMIT_RESERVATION_FAILED'

export const submitReservationStart = (id, seats) => ({ type: SUBMIT_RESERVATION_START, id, seats })

export const submitReservationSucceded = () => ({ type: SUBMIT_RESERVATION_SUCCEDED })

export const submitReservationFail = (message) => ({ type: SUBMIT_RESERVATION_FAILED, message })
