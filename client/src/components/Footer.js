import React from 'react'
import styled from 'tachyons-components'

const Wrapper = styled('footer')`
  bg-light-yellow
  f7
  flex
  ma0
  pa3
`

const Footer = props => {
  return (
    <Wrapper>
      <a href={`${props.portfolio}`} className='link mr3 near-black' target='_blank' rel='noopener noreferrer'>{props.name}</a>
      <a href={`https://www.github.com/${props.github}/${props.repo}`} target='_blank' rel='noopener noreferrer' className='link near-black'>Repo</a>
    </Wrapper>
  )
}

export default Footer
