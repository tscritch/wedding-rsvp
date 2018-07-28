export const NAME_FETCH_START = 'NAME_FETCH_START'
export const NAME_FETCH_WITH_ONE = 'NAME_FETCH_WITH_ONE'
export const NAME_FETCH_WITH_MANY = 'NAME_FETCH_WITH_MANY'
export const NAME_FETCH_NOT_FOUND = 'NAME_FETCH_NOT_FOUND'
export const NAME_FETCH_FAILED = 'NAME_FETCH_FAILED'

export const nameFetchSuccededWithOne = (guest) => ({ type: NAME_FETCH_WITH_ONE, guest })

export const nameFetchSuccededWithMany = (guests) => ({ type: NAME_FETCH_WITH_MANY, guests })

export const requestNamesNotFound = () => ({ type: NAME_FETCH_NOT_FOUND })

export const requestFail = () => ({ type: 'REQUEST_FAIL', message: 'There was an error connecting to the server.' })
