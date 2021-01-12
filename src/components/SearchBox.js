import React  from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
      <div className='tc'>
        <input box
        className='pa3 ba b--green bg-lightest-blue searchBox'
        type="search" 
        placeholder='serach robots' 
        name="" 
        id=""
        onChange={searchChange}
        />
      </div>
    )
  
  
}

export default SearchBox;