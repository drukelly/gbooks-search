import React from 'react'
import PageTitle from './PageTitle'
import FormField from './FormField'
import Button from './Button'

const Search = () => {
  return (
    <div>
      <PageTitle title='Search Books' />
      <div className='flex'>
        <FormField name='book' type='text' />
        <Button type='submit' name='Search' />
      </div>
    </div>
  )
}

export default Search
