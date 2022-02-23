import React from "react";
import { Outlet } from "react-router-dom";

import ProductList from "./ProductList.js";
import SearchBar from "./SearchBar.js";
import { useProducts } from "../fetchData.js";
import Header from "./Header.js";

/**
 * Gets the data form the server and stores it in the redux store.
 * @returns
 */
function App() {
  const { isLoading, error, data = [] } = useProducts();
  if (isLoading) return "Loading...";
  if (error) return error.message;

  return (
    <div
      class="flex flex-col items-center 
    min-h-screen
    bg-background-color"
    >
      <Header />
      <main
        class="flex flex-col items-center
       w-2/6"
      >
        <h2 class="text-5xl mt-3 md:mt-28">Select a product</h2>
        <div class="w-full">
          <SearchBar />
          <ProductList />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
