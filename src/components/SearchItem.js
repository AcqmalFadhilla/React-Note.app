import React from 'react'

const SearchItems = ({onSearch,searchTitle}) => {
  return (
    <div className='style-search'>
      <div className='style-card__search'>
        <div className='style-form__search'>
        <input className='style-input' type="text" placeholder='Search...' onChange={(event) => onSearch(event)} value={searchTitle}/>
        </div>
      </div>
    </div>
  )
}

export default SearchItems