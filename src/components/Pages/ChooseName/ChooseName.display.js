import React from 'react'
import { Redirect } from 'react-router-dom'
import Select from '../../Controls/Select/Select.display'
import Button from '../../Button/Button.display'
import { css } from 'emotion'

export default ({ guests, choice, chosen, _chooseGuest, _submitParty }) => {
  const welcome = css`
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: normal;
    padding: 0 10px;
  `

  const choices = css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 600px;
  `

  const options = guests.map(guest => {
    return { text: guest.firstName }
  })

  return (
    <React.Fragment>
      { chosen && <Redirect to='/rsvp' /> }
      <h3 className={welcome}>Choose your party:</h3>
      <div className={choices}>
        <Select
          options={options}
          select={_chooseGuest}
          selected={choice}
        />
        <Button
          text='Next'
          hasArrow
          _onClick={() => { _submitParty(guests[choice]) }}
        />
      </div>
    </React.Fragment>
  )
}
