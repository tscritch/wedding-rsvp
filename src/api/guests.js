const uri = path => `http://localhost:3001/${path}`

export const findGuestByName = name => {
  return fetch(uri(`guest/${name}`))
}

export const rsvpGuest = id => {
  return fetch(uri(`guest/${id}/rsvp`))
}

export const reserveSeatsForGuest = id => {
  return fetch(uri(`guest/${id}/reserve-seats`))
}
