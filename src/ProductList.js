import React from 'react';
import Product from './Product.js'

class ProductList extends React.Component {
    render() {
        console.log(`loading product list with query ${this.props.query}`)
        const productsArray = this.props.allProducts;
        const query = this.props.query;


        const searchedProducts = productsArray
        // filter according to the search
        .filter(product => query == null || product.name.includes(query) || product.productCode.includes(query))
        // map the product objects to React components
        .map(product =>{
            return (
                <li key = {product.productCode}>
                    <Product product = {product}/>
                </li>
            )
        })
        return (
        <div className="product-list">
            <ul>
                {searchedProducts}
            </ul>
        </div>
        )
    }
}
 
export default ProductList;