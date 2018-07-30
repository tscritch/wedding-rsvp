import { call, put, take } from 'redux-saga/effects'
import * as api from '../../api/guests'

import { SUBMIT_RESERVATION_START, submitReservationSucceded, submitReservationFail } from '../actions/seats'

export function * reserveSeatsForGuest () {
  while (true) {
    const { id, seats } = yield take(SUBMIT_RESERVATION_START)
    yield call(reserveSeats, id, seats)
  }
}

function * reserveSeats (id, seats) {
  try {
    yield call(api.reserveSeatsForGuest, id, seats)
    yield put(submitReservationSucceded())
  } catch (e) {
    yield put(submitReservationFail(e.message))
  }
}
