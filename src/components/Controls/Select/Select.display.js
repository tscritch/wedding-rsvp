import React from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { css } from 'emotion'
import Option from './Option.display'

class Select extends React.Component {
  state = {
    selected: -1
  }

  handleClick = (s) => {
    console.log(s)
    this.setState({ selected: s })
  }

  render () {
    const select = css`
      display: block;
    `

    const options = this.props.options.map((option, i) => {
      return <Option 
        text={option.text}
        title={option.title}
        selected={ this.state.selected === i }
        _onClick={() => this.handleClick(i)} />
    })

    return (
      <div className={select}>
        {options}
      </div>
    )
  }
  
}

export default Select