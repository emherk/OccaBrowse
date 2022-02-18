import React from 'react';
import { useDispatch } from 'react-redux'

import { addProducts } from '../reduxElements/productsSlice.js'
import ProductList from './ProductList.js'
import SearchBar from './SearchBar.js'
import { LoadProductsFromApi, LoadMockProducts } from '../fetchData.js'


/**
 * Gets the data form the server and stores it in the redux store.
 * @returns 
 */
function App() {
  const dispatch = useDispatch();
  let products = [];
  try{
    products = LoadMockProducts();
  } catch(err){
    return err.message;
  }
  dispatch(addProducts(products));

  const errorMessage = LoadMockProducts();
  if (errorMessage) return errorMessage;

  return (
    <div className="App">
      <SearchBar />
      <ProductList />
    </div>
  )
}

export default App;