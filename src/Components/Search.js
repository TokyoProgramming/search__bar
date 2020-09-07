import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className="search">
            <div className='search__bar'>
                <SearchIcon />
                <input
                    className="search__bar__input"
                    placeholder="Search"
                />
            </div>
        </div>
      )
 }

 export default Search;
