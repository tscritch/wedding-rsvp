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
    padding: 0 24px;
  `

  const name = css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 600px;
  `

  const oneSeat = (
    <React.Fragment>
      <h3 className={welcome}>
      Great! We have reserved one seat for you.
      </h3>
      <Button
        hasArrow
        loading={loading}
        text='Next'
        _onClick={() => { _submitReservation(guest._id, 1) }}
      />
    </React.Fragment>
  )

  const manySeats = (
    <React.Fragment>
      <h3 className={welcome}>
        Great! We have reserved {guest.seats} seats for you.<br />
        How many of you will be attending?
      </h3>
      <div className={name}>
        <Input
          error={seatCount > guest.seats}
          value={seatCount}
          _onChange={_changeSeatCount}
          placeholder='Number of Seats'
        />
        <Button
          disabled={seatCount > guest.seats || !seatCount || seatCount < 0}
          hasArrow
          loading={loading}
          text='Next'
          _onClick={() => { _submitReservation(guest._id, seatCount) }}
        />
      </div>
      { message && <Error message={message} /> }
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {reserved && <Redirect to='/attending' /> }
      { guest.seats > 1 ? manySeats : oneSeat }
    </React.Fragment>
  )
}
