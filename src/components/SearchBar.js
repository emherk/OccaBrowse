import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {search} from '../querySlice.js'

/**
 * The searchbar. Type to search among the list of products. 
 * The search query is stored in the querySlice redux store slice.
 * @returns A searchbar input field
 */
function SearchBar() {
        const dispatch = useDispatch();
        return (
            <div className="searchBar">
                <input
                    type="text"
                    id = "search-bar"
                    placeholder="Search name or product code"
                    arial-label= "Search name or product code"
                    onChange ={ (event) => {
                        const query = event.target.value;
                        dispatch(search(query));
                    }}
                />
            </div>
        );
}
 
export default SearchBar;