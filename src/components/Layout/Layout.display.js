import React from 'react'
import Title from './Title'
import Footer from './Footer'
import { css } from 'emotion'
import flowers from './flowers.png'

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

      const image = css`
        position: fixed;
        // width: 600px;
        top: -200px;
        z-index: -1;
      `

      return (
        <div className={layout}>
          <img src={flowers} className={image} alt='' />
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
