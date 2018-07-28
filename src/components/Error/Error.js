import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
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