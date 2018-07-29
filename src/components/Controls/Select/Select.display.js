import React from 'react'
import { css } from 'emotion'
import Option from './Option.display'

export default ({ options, selected, _select }) => {
  const select = css`
    display: block;
  `

  const o = options.map((option, i) => {
    return <Option 
      key={i}
      text={option.text}
      title={option.title}
      selected={ selected === i }
      _onClick={() => _select(i)} />
  })

  return (
    <div className={select}>
      {o}
    </div>
  )
}
