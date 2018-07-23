import React from 'react'
import { Redirect } from 'react-router-dom'
import Input from '../Controls/Input/Input.display'
import Button from '../Button/Button.display'
import withLayout from '../Layout/Layout.display'
import { css } from 'emotion'

class Name extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    loading: false
  }

  onChange = (value, input) => {
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
        {this.state.success && <Redirect to='/rsvp'/>}
        <h3 className={welcome}>Welcome! Tell us your name.</h3>
        <div className={name}>
          <Input 
            value={this.state.name}
            _onChange={(e) => this.onChange(e.target.value, 'first_name')}
            placeholder='First Name'
          />
          <Input
            value={this.state.name}
            _onChange={(e) => this.onChange(e.target.value, 'last_name')}
            placeholder='Last Name'
          />
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

export default withLayout(Name)
