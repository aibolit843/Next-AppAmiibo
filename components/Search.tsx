import React, { useState } from "react";


const Search = (props) => {
    
const [searchValue, setSearchValue] = useState("")

const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

const resetInputField = () => {
    setSearchValue("")
}

const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
}

return (
    <>
      <div>
        <h1 className="header__title">Searching Amiibo</h1>
      </div>
        <form className="search">
          <input
            value={searchValue}
            type="text"
            onChange={handleSearchInputChanges}
            
          />
          <input   
            value="SEARCH"
            type="submit"
            onClick={callSearchFunction}
          />
        </form>
      </>
    )
}

export default Search;