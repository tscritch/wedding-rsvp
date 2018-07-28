import React from 'react'
import { css } from 'emotion'

export default ({ message }) => {
  const error = css`
    color: #B62424;
    font-size: 12px;
  `

  return (
    <div className={error}>
      <p>{message || 'There was an error connecting to the server. Try again.'}</p>
    </div>
  )
}