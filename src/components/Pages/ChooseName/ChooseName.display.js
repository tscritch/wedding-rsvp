import React from 'react'
import { Redirect } from 'react-router-dom'
import Select from '../../Controls/Select/Select.display'
import Button from '../../Button/Button.display'
import { css } from 'emotion'

export default ({ guest, guests, guestChoice, _chooseGuest, _submitParty }) => {
  if (!guests) {
    return (<Redirect to='/' />)
  }

  const welcome = css`
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: normal;
    padding: 0 10px;
  `

  const choices = css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 600px;
  `

  const options = guests.map(guest => {
    return { text: guest.firstName }
  })

  return (
    <React.Fragment>
      { guest && <Redirect to='/rsvp' /> }
      <h3 className={welcome}>Choose your party:</h3>
      <div className={choices}>
        <Select
          options={options}
          _select={_chooseGuest}
          selected={guestChoice}
        />
        <Button
          text='Next'
          hasArrow
          disabled={guestChoice < 0}
          _onClick={() => { _submitParty(guests[guestChoice]) }}
        />
      </div>
    </React.Fragment>
  )
}
