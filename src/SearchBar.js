import React from 'react';

class SearchBar extends React.Component {
    render() { 
        return (
            <form action ="/" method="get">
                <input
                    type="text"
                    id = "search-bar"
                    placeholder="Search name or product code"
                    name = "q"
                />
                <button type="submit">Press to search</button>
            </form>
        );
    }
}
 
export default SearchBar;