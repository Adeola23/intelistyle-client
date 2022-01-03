import React from 'react'
import './SearchBar.style.css'

const SearchBarComponent = ({placeholder,onChange, onClick, onKeyPress}) =>{

    return (
            <div className="searchInput">
                <input className="search"
                       type="text"
                       placeholder={placeholder}
                       onChange = {onChange}
                       onKeyPress={onKeyPress}
                />
                <button className="btn"
                        onClick={onClick}
                >
                    Search
                </button>
            </div>
    )
}

export default SearchBarComponent