import ProductList from './ProductList.js'
import SearchBar from './SearchBar.js'
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useQuery } from 'react-query';

// we get the data from the "server"
const dataUrl = 'https://api.json-generator.com/templates/qkS_eTtsszAC/data?status=200&access_token=46wjmmpothb7d1flou9ex7u6cyweozowcj4b5d8o'

const fetchProducts = async () => {
    const res = await fetch(dataUrl);
    return res.json();
}

function App() {
  const query = useSelector((state) => state.queryReducer.query)
  const {isLoading, error, data}= useQuery('products',fetchProducts);

  if(isLoading) return `Loading...`;
  if(error) return `An error has occured: ${error.message}`

    return (
      <div className="App">
        <SearchBar />
        <ProductList allProducts={data} query={query}/>
      </div>
    );

}

export default App;
