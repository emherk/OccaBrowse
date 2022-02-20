import React from 'react';
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { addProducts } from '../reduxElements/productsSlice.js'
import ProductList from './ProductList.js'
import SearchBar from './SearchBar.js'
import { LoadProductsFromApi, LoadMockProducts } from '../fetchData.js'
import Header from './Header.js'


/**
 * Gets the data form the server and stores it in the redux store.
 * @returns 
 */
function App() {
  const dispatch = useDispatch();
  let products = [];
  try {
    products = LoadMockProducts();
  } catch (err) {
    return err.message;
  }
  dispatch(addProducts(products));

  return (
    <div class="flex flex-col items-center 
    min-h-screen
    bg-background-color">
      <Header />
      <main class="flex flex-col items-center
       w-2/6">
        <h2 class="text-5xl mt-3 md:mt-28">Select a product</h2>
        <div class="w-full">
          <SearchBar />
          <ProductList />
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default App;