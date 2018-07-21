import React from 'react'
import { css } from 'emotion'
import Arrow from '../Icons/Arrow'

export default ({ _onClick, width, text, hasArrow }) => {
  const button = css`
    align-items: center;
    background: #000000;
    border: none;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    color: #ffffff;
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    height: 50px;
    justify-content: space-around;
    margin: 10px;
    padding: 6px 10px;
    width: ${width || 150}px;
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    }
    &:focus, &:active {
      outline: none;
    }
  `

  const arrow = css`
    display: inline-block;
    margin-left: 8px;
  `

  const _text = css`
    display: inline-block;
  `

  return (
    <button
      className={button}
      onClick={_onClick}
    >
      <div className={_text}>
        {text}
      </div>
      {hasArrow && (
        <div className={arrow}>
          <Arrow />
        </div>
      )}
    </button>
  )
}
