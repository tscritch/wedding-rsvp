import React from 'react'
import { css } from 'emotion'

export default ({ _onChange, value, placeholder, error }) => {
  const input = css`
    -webkit-appearance: none;
    background: #FFFFFF;
    border: none;
    border-radius: 0;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.14);
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    flex-grow: 1;
    height: 18px;
    margin: 10px;
    padding: 18px;
    min-width: 200px;
    ${error ? `box-shadow: 0 0 15px 0 #B62424;` : ''}
    &:focus, &:active {
      outline: none;
    }
  `

  return (
    <input
      className={input}
      onChange={_onChange}
      value={value}
      placeholder={placeholder}
    />
  )
}
