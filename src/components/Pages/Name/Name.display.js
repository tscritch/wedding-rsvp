import React from 'react'
import Input from '../Input/Input.display'
import Button from '../Button/Button.display'
import { css } from 'emotion'

class Name extends React.Component {
  state = {
    first_name: '',
    last_name: ''
  }

  onChange = (value, input) => {
    this.setState({ [input]: value })
  }

  handleClick = () => {

  }

  render() {
    const name = css`
      display: flex;
      flex-wrap: wrap;
    `

    return (
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
        />
      </div>
    )
  }
}

export default Name
