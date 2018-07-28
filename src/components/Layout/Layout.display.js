import React from 'react'
import Title from './Title'
import Footer from './Footer'
import { css } from 'emotion'

export default (Component) => {
  return class extends React.Component {
    render () {
      const layout = css`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
      `

      return (
        <div className={layout}>
          <Title />
          <div>
            <Component {...this.props} />
          </div>
          { this.props.location.pathname !== '/our-story' &&
            <Footer link='/our-story' text='Our Story' />
          }
        </div>
      )
    }
  }
}
