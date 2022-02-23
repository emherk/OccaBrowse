import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../reduxElements/querySlice.js";

/**
 * The searchbar. Type to search among the list of products.
 * The search query is stored in the querySlice redux store slice.
 * @returns A searchbar input field
 */
function SearchBar() {
  const dispatch = useDispatch();
  const stateQuery = useSelector((state) => state.queryReducer.query);
  return (
    <div className="self-center mt-5">
      <input
        className="w-full h-xl
                        rounded-lg
                        border-4 border-solid border-orange-300"
        type="text"
        id="search-bar"
        placeholder={"Search name or product code"}
        value={stateQuery || ""}
        arial-label="Search name or product code"
        onChange={(event) => {
          const query = event.target.value;
          dispatch(search(query));
        }}
      />
    </div>
  );
}

export default SearchBar;
