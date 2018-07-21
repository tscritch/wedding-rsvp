import React from 'react'
import Input from '../../Input/Input.display'
import Button from '../../Button/Button.display'
import { css } from 'emotion'

class RSVP extends React.Component {
  state = {
    rsvp: true,
    loading: false
  }

  onChange = () => {
    this.setState({ [input]: value })
  }

  handleClick = () => {

  }

  render() {
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
        {(this.state.success && this.state.rsvp) && <Redirect to='/seats'/>}
        {(this.state.success && !this.state.rsvp) && <Redirect to='/receptions'/>}
        {this.state.failure && <Error />}
        <h3 className={welcome}>Welcome! Tell us your name.</h3>
        <div className={name}>
          
          <Button
            text='Next'
            hasArrow
            _onClick={this.handleClick}
            loading={this.state.loading}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Name
