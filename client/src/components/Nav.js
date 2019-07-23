import React from 'react'
import styled from 'tachyons-components'

const Link = styled('a')`
  b blue
  f6
  link mr3
  sans-serif
`

const Nav = () => {
  return (
    <nav className='flex'>
      <Link href='/'>Google Book</Link>
      <Link href='/search'>Search</Link>
      <Link href='/saved'>Saved</Link>
    </nav>
  )
}

export default Nav
