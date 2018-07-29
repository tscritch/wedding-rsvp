import React from 'react'
import { Redirect } from 'react-router-dom'
import Select from '../../Controls/Select/Select.display'
import Error from '../../Error/Error'
import Button from '../../Button/Button.display'
import { css } from 'emotion'

export default ({ guest, _submitRsvp }) => {
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
      text: 'Yes'
    },
    {
      text: 'No'
    }
  ]

  return (
    <React.Fragment>
      {(this.state.success && this.state.rsvp) && <Redirect to='/seats' />}
      {(this.state.success && !this.state.rsvp) && <Redirect to='/receptions' />}
      {this.state.failure && <Error />}
      <h3 className={welcome}>Will you be joining us?</h3>
      <div className={rsvp}>

        <Select
          options={options}
          selected={this.state.selected}
        />

        { /* _onClick=_submitRsvp(options[choice].text) */ }
        <Button
          text='Next'
          hasArrow
          loading={this.state.loading}
          disabled={this.state.selected > 0}
        />
      </div>
    </React.Fragment>
  )
}
