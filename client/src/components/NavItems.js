import React from 'react'
import styled from 'tachyons-components'


const Link = styled('a')`
dim
f5
link
mr3
mr4-m
mr5-l
near-black
ph2
pv1
`

const NavItems = () => {
  return (
    <nav>
      <Link href='/' className='b' data-is-active={window.location.pathname === '/' ? true : false}>Google Books</Link>
      <Link href='/search' data-is-active={window.location.pathname === '/search' ? true : false}>Search</Link>
      <Link href='/saved' data-is-active={window.location.pathname === '/saved' ? true : false}>Saved</Link>
    </nav>
  )
}

export default NavItems
