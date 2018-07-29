import React from 'react'
import { Redirect } from 'react-router-dom'
import Input from '../../Controls/Input/Input.display'
import Button from '../../Button/Button.display'
import Error from '../../Error/Error'
import { css } from 'emotion'

export default ({ lastName, loading, guests, hasMany, message, _changeLastName, _submitName }) => {
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
      { (guests && hasMany) && <Redirect to='/rsvp' /> }
      { (guests && !hasMany) && <Redirect to='/rsvp' /> }
      <h3 className={welcome}>Welcome! Tell us your name.</h3>
      <div className={name}>
        <Input
          value={lastName}
          _onChange={_changeLastName}
          placeholder='Last Name'
        />
        <Button
          text='Next'
          hasArrow
          _onClick={() => { _submitName(lastName) }}
          loading={loading}
        />
      </div>
      { message && <Error message={message} /> }
    </React.Fragment>
  )
}
