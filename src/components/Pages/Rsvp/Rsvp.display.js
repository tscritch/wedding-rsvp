import React from 'react'
import { Redirect } from 'react-router-dom'
import Select from '../../Controls/Select/Select.display'
import Error from '../../Error/Error'
import Button from '../../Button/Button.display'
import { css } from 'emotion'

export default ({ guest, rsvpChoice, rsvped, loading, message, _chooseRsvp, _submitRsvp }) => {
  const welcome = css`
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: normal;
    padding: 0 10px;
  `

  const rsvp = css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 600px;
  `

  const options = [
    {
      text: 'Yes',
      value: true
    },
    {
      text: 'No',
      value: false
    }
  ]

  return (
    <React.Fragment>
      { (rsvped && guest.rsvp === true) && <Redirect to='/seats' /> }
      { (rsvped && guest.rsvp === false) && <Redirect to='/receptions' /> }
      { message && <Error message={message} /> }
      <h3 className={welcome}>Will you be joining us?</h3>
      <div className={rsvp}>

        <Select
          options={options}
          selected={rsvpChoice}
          _select={_chooseRsvp}
        />

        <Button
          text='Next'
          hasArrow
          loading={loading}
          disabled={rsvpChoice < 0}
          _onClick={() => { _submitRsvp(guest._id, options[rsvpChoice].value) }}
        />
      </div>
    </React.Fragment>
  )
}
