import React from 'react'
import withLayout from '../Layout/Layout.display'
import Link from '../Link/Link'
import { css } from 'emotion'

const Attending = () => {
  const attending = css`
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    margin: 0 24px 26px;
    max-width: 600px;
    text-align: center; 
  `

  return (
    <React.Fragment>
      <p className={attending}>
        You’re all set! We can’t to see you there!<br /><br />
        We have registered on the following sites:
      </p>
      <Link text={'Amazon'} url={'https://www.amazon.com/wedding/share/eden-and-tad'} />
      <Link text={'Wayfair'} url={'https://www.wayfair.com/registry/wedding/EdenAndTad'} />
    </React.Fragment>
  )
}

export default withLayout(Attending)
