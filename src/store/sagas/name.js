import { call } from 'redux-saga/effects'
import * as guest from '../../api/guests'

export function * findGuestByName () {
  try {
    const guests = yield call(guest.findGuestByName())
  }
  catch (e) {

  }
}

export function * guestName () {
  const { guests } = yield take()
}