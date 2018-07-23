export const FIRST_NAME_CHANGE = 'FIRST_NAME_CHANGE'
export const LAST_NAME_CHANGE = 'LAST_NAME_CHANGE'

export const changeFirstName = (text) => ({ type: FIRST_NAME_CHANGE, text })

export const changeLastName = (text) => ({ type: LAST_NAME_CHANGE, text })

const requestStart = () => ({ type: 'REQUEST_START' })

const requestSuccess = () => ({ type: 'REQUEST_SUCCESS' })

const requestNamesNotFound = () => ({ type: 'REQUEST_NAMES_NOT_FOUND' })

const requestFail = () => ({ type: 'REQUEST_FAIL', message: 'There was an error connecting to the server.' })

export function findNames (first, last) {
  return dispatch => {
    dispatch(requestStart())

    // // api call
    // .then(
    //   (res) => { res.found ? dispatch(requestSuccess()) : dispatch(requestNamesNotFound()) }
    //   () => dispatch(requestFail())
    // )
  }
}