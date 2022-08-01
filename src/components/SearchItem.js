import React from 'react'

const SearchItems = ({onSearch,searchTitle}) => {
  return (
    <div><input type="text" placeholder='Search...' onChange={(event) => onSearch(event)} value={searchTitle}/></div>
  )
}

export default SearchItems