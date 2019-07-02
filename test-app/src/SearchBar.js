import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="top-bar-right">
                <ul className="menu">
                <li>
                    <input type="search" ></input>
                </li>
                    <li>
                        <button type="button" className="button">
                        Search
                        </button>
                    </li>
                </ul>
            </div>
 
        ); 
    }
}

export default SearchBar; 
