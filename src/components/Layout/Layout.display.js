import React from 'react'
import Title from './Title'
import Footer from './Footer'
import { css } from 'emotion'

export default (component) => {
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
        {component}
      </div>
      <Footer link='our-story' text='Our Story' />
    </div>
  )
}
