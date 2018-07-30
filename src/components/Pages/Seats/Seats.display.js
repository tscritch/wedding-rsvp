import React from 'react'
import { Redirect } from 'react-router-dom'
import Input from '../../Controls/Input/Input.display'
import Button from '../../Button/Button.display'
import Error from '../../Error/Error'
import { css } from 'emotion'

export default ({ seatCount, loading, guest, message, reserved, _changeSeatCount, _submitReservation }) => {
  const welcome = css`
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: normal;
    padding: 0 10px;
  `

  const name = css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 600px;
  `

  return (
    <React.Fragment>
      { reserved && <Redirect to='/rsvp' /> }
      <h3 className={welcome}>
        Great! We have reserverd {guest.seats > 1 ? `${guest.seats} seats` : '1 seat'} for you. How many of you will be attending?
      </h3>
      <div className={name}>
        <Input
          value={seatCount}
          _onChange={_changeSeatCount}
          placeholder='Last Name'
        />
        <Button
          text='Next'
          hasArrow
          _onClick={() => { _submitReservation(seatCount) }}
          loading={loading}
        />
      </div>
      { message && <Error message={message} /> }
    </React.Fragment>
  )
}
