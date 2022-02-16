import ProductList from './ProductList.js'
import SearchBar from './SearchBar.js'
import React from 'react';

const allProducts = [
        {
        name: 'product1',
        productCode: '1',
        numberAvailable: '1',
        nextDelivery: new Date(2022, 2, 21),
        productImage: 'https://via.placeholder.com/150'
      },
      {
        name: 'product2',
        productCode: '2',
        numberAvailable: '2',
        nextDelivery: new Date(2022, 2, 22),
        productImage: 'https://via.placeholder.com/150'
      }];

function App() {
  const location = window.location;
  const query = new URLSearchParams(location.search).get('q');
  console.log(`loading app`)
    return (
      <div className="App">
        <SearchBar />
        <ProductList allProducts={allProducts} query={query}/>
      </div>
    );

}

export default App;
