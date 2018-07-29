import { apply, call, put, take } from 'redux-saga/effects'
import * as api from '../../api/guests'

import { NAME_FETCH_START, nameFetchSuccededWithMany, nameFetchNotFound, nameFetchFail } from '../actions/name'
import { selectGuest } from '../actions/guest'

export function * findGuestByName () {
  while (true) {
    const { name } = yield take(NAME_FETCH_START)
    yield call(fetchName, name)
  }
}

function * fetchName (name) {
  try {
    const response = yield call(api.findGuestByName, name)
    const data = yield apply(response, response.json)
    console.log(data)
    if (data.length > 1) {
      yield put(nameFetchSuccededWithMany(data))
    } else if (data.length === 1) {
      yield put(selectGuest(data[0]))
    } else {
      yield put(nameFetchNotFound(data.message))
    }
  } catch (e) {
    yield put(nameFetchFail(e.message))
  }
}
