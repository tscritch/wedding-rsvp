import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { Redirect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom'
import Select from '../Controls/Select/Select.display'
import Error from '../Error/Error'
import Button from '../Button/Button.display'
import { css } from 'emotion'
import withLayout from '../Layout/Layout.display'

class Rsvp extends React.Component {
  state = {
    selected: -1,
    loading: false
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
        {(this.state.success && this.state.rsvp) && <Redirect to='/seats'/>}
        {(this.state.success && !this.state.rsvp) && <Redirect to='/receptions'/>}
        {this.state.failure && <Error />}
        <h3 className={welcome}>Will you be joining us?</h3>
        <div className={rsvp}>

          <Select 
            options={options}
            selected={this.state.selected}
          />
          
          <Button
            text='Next'
            hasArrow
            _onClick={this.handleClick}
            loading={this.state.loading}
            disabled={this.state.selected > 0}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withLayout(Rsvp)
