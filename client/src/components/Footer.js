import React from 'react'
import styled from 'tachyons-components'

const Wrapper = styled('footer')`
bg-orange
f7
ma0
pa3
tr
`

const Footer = props => {
  return (
    <Wrapper>
      <a href={`${props.portfolio}`} className='dib mr2 link near-black' target='_blank' rel='noopener noreferrer'>{props.name}</a>
      <a href={`https://www.github.com/${props.github}/${props.repo}`} target='_blank' rel='noopener noreferrer' className='dib link near-black'>Github Repo</a>
    </Wrapper>
  )
}

export default Footer
