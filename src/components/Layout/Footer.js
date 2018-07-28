import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { Link } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom'
import { css } from 'emotion'

export default ({ link, text }) => {
  const footer = css`
    font-family: 'Playfair Display', serif;
    margin-bottom: 40px;
    a {
      background-color: #ffffff;
      color: #000000;
      font-size: 24px;
      padding: 10px 26px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  `

  return (
    <div className={footer}>
      <Link to={link}>{text}</Link>
    </div>
  )
}
