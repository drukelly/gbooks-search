import React from 'react'
import styled from 'tachyons-components'

const Wrapper = styled('button')`
b--black-50
ba
bg-orange
br2
input-reset
pa1
`

const Button = props => {
  return (
    <Wrapper type={props.type ? props.type : ''}>{props.name}</Wrapper>
  )
}

export default Button
