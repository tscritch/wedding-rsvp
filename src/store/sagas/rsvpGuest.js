import { call, put, take } from 'redux-saga/effects'
import * as api from '../../api/guests'

import { SUBMIT_RSVP_START, rsvpGuestSucceded, rsvpGuestFail } from '../actions/guest'

export function * rsvpGuestById () {
  while (true) {
    const { id, answer } = yield take(SUBMIT_RSVP_START)
    yield call(saveRsvp, id, answer)
  }
}

function * saveRsvp (id, answer) {
  try {
    yield call(api.rsvpGuestById, id, answer)
    yield put(rsvpGuestSucceded(answer))
  } catch (e) {
    yield put(rsvpGuestFail(e.message))
  }
}
