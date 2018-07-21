import React from 'react'
import Title from '../Title'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Title />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
