import ProductList from './ProductList.js'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [
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
      }
  ],
    }
  }
  
  render() {
    return (
      <div className="App">
        <ProductList allProducts={this.state.allProducts}/>
      </div>
    );

  }
}

export default App;
