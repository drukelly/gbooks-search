import React from 'react'
import styled from 'tachyons-components'

const Input = styled('input')`
b--black-80
ba
br2
dib
input-reset
mr2
ph2
pv1
w-100
`

const FormField = props => {
  return (
    <Input type={props.type} name={props.name} />
  )
}

export default FormField
