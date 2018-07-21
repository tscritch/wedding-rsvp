import React from 'react'
import { css } from 'emotion'

export default ({ _onChange, width, placeholder }) => {
  const input = css`
  background: #FFFFFF;
  border: none;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.14);
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  height: 18px;
  margin: 10px;
  padding: 18px;
  width: ${width || 200}px;
  &:focus, &:active {
    outline: none;
  }
`

  return (
    <input
      className={input}
      onChange={_onChange}
      placeholder={placeholder}
    />
  )
}
