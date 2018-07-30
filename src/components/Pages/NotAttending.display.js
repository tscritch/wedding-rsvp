import React from 'react'
import withLayout from '../Layout/Layout.display'
import Link from '../Link/Link'
import { css } from 'emotion'

const NotAttending = () => {
  const ragrats = css`
    font-family: 'Raleway', sans-serif;
    margin: 0 24px 26px;
    max-width: 600px; 
  `

  return (
    <React.Fragment>
      <p className={ragrats}>
        We're sorry you can't join us.<br /><br />
        If you would still like to send us a gift we are registered at the following sites:
      </p>
      <Link text={'Amazon'} url={'https://www.amazon.com/wedding/share/eden-and-tad'} />
      <Link text={'Wayfair'} url={'https://www.wayfair.com/registry/wedding/EdenAndTad'} />
    </React.Fragment>
  )
}

export default withLayout(NotAttending)
