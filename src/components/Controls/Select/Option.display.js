import React from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { css } from 'emotion'

export default ({ _onClick, text, title, selected }) => {
  const option = css`
    align-items: center;
    font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: flex-start;
    margin: 20px 0;
    min-width: 100px;
    .text {
      margin-left: 20px;
      h1 {
        font-size: 16px;
        margin: 0;
      }
      p {
        font-size: 16px;
        margin: 0;
      }
    }
  `

  const bubble = css`
    border: 3px solid #000;
    border-radius: 20px;
    background-color: ${selected ? '#000' : '#fff'};
    display: inline-block;
    height: 20px;
    width: 20px;
  `

  return (
    <div className={option} onClick={_onClick}>
      <div className={bubble} />
      <div className='text'>
        { title && <h1>{title}</h1> }
        <p>{text}</p>
      </div>
    </div>
  )
}