import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'tachyons-components'
import Nav from './components/NavItems'
import Home from './components/Home'
import Search from './components/Search'
import Saved from './components/Saved'

const Navigation = styled('section')`
  bg-light-yellow
  ma0 pa3
`

const App = () => {
  return (
    <Router>
      <Navigation>
        <Nav />
      </Navigation>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/saved' component={Saved} />
    </Router>
  )
}

export default App
