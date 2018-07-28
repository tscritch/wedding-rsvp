import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { css } from 'emotion'
import Arrow from '../Icons/Arrow'
import Spinner from '../Icons/Spinner'

export default ({ _onClick, width, text, hasArrow, loading, disabled }) => {
  const button = css`
    align-items: center;
    background: ${disabled ? '#eee' : '#000000'};
    border: none;
    border-radius: 50px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    color: #ffffff;
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
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
    margin-top: 4px;
  `

  const _text = css`
    display: inline-block;
  `

  const buttonWithText = (
    <React.Fragment>
      <div className={_text}>
        {text}
      </div>
      { hasArrow && (
        <div className={arrow}>
          <Arrow />
        </div>
      )}
    </React.Fragment>
  )

  return (
    <button
      className={button}
      onClick={_onClick}
      disabled={disabled}
    >
      { loading ? <Spinner /> : buttonWithText }
    </button>
  )
}
