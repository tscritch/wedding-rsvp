const uri = path => `http://localhost:3001/${path}`

export const findGuestByName = name => {
  return fetch(uri(`guest/${name}`))
}
