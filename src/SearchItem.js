import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm'  onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">search</label>
            <input type="text"
              id='search' 
              role='search'
              placeholder='Search Items'
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
        
    </form>
  )
}

export default SearchItem