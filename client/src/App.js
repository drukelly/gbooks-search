import React from 'react'
import styled from 'tachyons-components'
import Nav from './components/Nav'

const Wrapper = styled('section')`
  bg-light-yellow
  ma0 ph4 pv3
`

const App = () => {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  )
}

export default App
