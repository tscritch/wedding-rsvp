import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { css } from 'emotion'

export default () => {
  const title = css`
    color: #000000;
    font-family: 'Playfair Display', serif;
    margin-top: 60px;
    text-align: center;
    h1 {
      font-size: 32px;
      margin-bottom: 6px;
    }
    h2 {
      font-family: 'Raleway', serif;
      font-size: 16px;
      font-weight: normal;
      margin-top: 0;
      span {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        margin: 20px;
      }
    }
  `

  return (
    <div className={title}>
      <h1>Eden &amp; Tad</h1>
      <h2>
        October
        <span>20th</span>
        2018
      </h2>
    </div>
  )
}
