export const LAST_NAME_CHANGE = 'LAST_NAME_CHANGE'

export const changeLastName = (text) => ({ type: LAST_NAME_CHANGE, text })

export const NAME_FETCH_START = 'NAME_FETCH_START'
export const NAME_FETCH_WITH_MANY = 'NAME_FETCH_WITH_MANY'
export const NAME_FETCH_NOT_FOUND = 'NAME_FETCH_NOT_FOUND'
export const NAME_FETCH_FAILED = 'NAME_FETCH_FAILED'

export const nameFetchStart = (name) => ({ type: NAME_FETCH_START, name })

export const nameFetchSuccededWithMany = (guests) => ({ type: NAME_FETCH_WITH_MANY, guests })

export const nameFetchNotFound = (message) => ({ type: NAME_FETCH_NOT_FOUND, message })

export const nameFetchFail = (message) => ({ type: NAME_FETCH_FAILED, message })
