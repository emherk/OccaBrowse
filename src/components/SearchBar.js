import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {search} from '../querySlice.js'

function SearchBar() {
        // const storeText = (event) => {
        //     const query = event.target.value;
        //     console.log(query);
        //     useDispatch(search(query));
        // }
        const dispatch = useDispatch();
        return (
            // <form action ="/" method="get">
            <div className="searchBar">
                <input
                    type="text"
                    id = "search-bar"
                    placeholder="Search name or product code"
                    name = "q"
                    onChange ={ (event) => {
                        const query = event.target.value;
                        console.log(query);
                        dispatch(search(query));
                    }}
                />
            </div>
            // </form>
        );
}
 
export default SearchBar;