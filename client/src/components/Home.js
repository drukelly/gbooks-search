import React from 'react'
import styled from 'styled-components'

const Splash = styled('div')`
`

const Home = () => {
  return (
    <Splash>
      <h1 className='lh-title'>Google Books Search</h1>
      <p class='lh-copy'>Search for and Save Books of Interest</p>
    </Splash>
  )
}

export default Home
