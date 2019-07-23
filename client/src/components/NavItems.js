import React from 'react'
import styled from 'tachyons-components'


const Link = styled('a')`
  near-black
  f7
  link mr3
`

const NavItems = () => {
  return (
    <nav>
      <Link href='/' data-is-active={window.location.pathname === '/' ? true : false}>Google Book</Link>
      <Link href='/search' data-is-active={window.location.pathname === '/search' ? true : false}>Search</Link>
      <Link href='/saved' data-is-active={window.location.pathname === '/saved' ? true : false}>Saved</Link>
    </nav>
  )
}

export default NavItems
