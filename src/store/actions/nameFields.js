export const FIRST_NAME_CHANGE = 'FIRST_NAME_CHANGE'
export const LAST_NAME_CHANGE = 'LAST_NAME_CHANGE'

export const changeFirstName = (text) => ({ type: FIRST_NAME_CHANGE, text })

export const changeLastName = (text) => ({ type: LAST_NAME_CHANGE, text })
