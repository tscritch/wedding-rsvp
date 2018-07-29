import React from 'react'
import { css } from 'emotion'

export default ({ message }) => {
  const error = css`
    color: #B62424;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    margin: 10px;
    width: 100%;
  `

  return (
    <div className={error}>
      <p>{message || 'There was an error connecting to the server. Try again.'}</p>
    </div>
  )
}