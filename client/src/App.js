import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'tachyons-components'
import NavItems from './components/NavItems'
import Home from './components/Home'
import Search from './components/Search'
import Saved from './components/Saved'
import Footer from './components/Footer'

const Flex = styled('div')`
  f7
  flex flex-column
  min-vh-100
  sans-serif
`

const Navigation = styled('section')`
  bg-light-yellow
  ma0
  pa3
`

const Wrapper = styled('section')`
  flex-auto
  ma0
  pa3
`

const App = () => {
  return (
    <Router>
      <Flex>
        <Navigation>
          <NavItems />
        </Navigation>
        <Wrapper>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/saved' component={Saved} />
        </Wrapper>
       <Footer name='John Kelly' github='drukelly' repo='gbooks-search' portfolio='https://www.drukelly.com' />
      </Flex>
    </Router>
  )
}

export default App
