import React from 'react'
import { css } from 'emotion'
import LinkArrow from '../Icons/LinkArrow'

export default ({ width, text, url }) => {
  const link = css`
    align-items: center;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 30px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    color: #000;
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    height: 30px;
    justify-content: space-around;
    margin: 10px auto;
    padding: 6px 8px 6px 14px;
    width: ${width || 150}px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    z-index: 10;
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
    color: #000;
  `

  return (
    <a href={url} className={link} target='_blank'>
      <div className={_text}>
        {text}
      </div>
      <div className={arrow}>
        <LinkArrow />
      </div>
    </a>
  )
}
