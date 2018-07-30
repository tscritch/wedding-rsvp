const uri = path => process.env.NODE_ENV !== 'production' ? `http://localhost:3001/${path}` : `https://wedding-rsvp-api.herokuapp.com/${path}`

export const findGuestByName = name => {
  return fetch(uri(`guest/${name}`))
}

export const rsvpGuestById = (id, answer) => {
  const data = {
    rsvp: answer
  }
  const req = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(uri(`guest/${id}/rsvp`), req)
}

export const reserveSeatsForGuest = (id, reservedSeats) => {
  const data = {
    reservedSeats
  }
  const req = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  console.log(req)
  return fetch(uri(`guest/${id}/reserve-seats`), req)
}
