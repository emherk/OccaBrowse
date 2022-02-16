import React from 'react';
import Product from './Product.js'

/**
 * This component takes care of filtering and displaying the products
 */
class ProductList extends React.Component {
    filterMapProducts(productsArray, query) {
        // filter according to the search and
        // map the product objects to React components
        const filteredProductComponents = productsArray
        .filter(product => query == null || 
            product.name.includes(query) || 
            product.productCode.includes(query))
        .map(product =>{
            return (
                <li key = {product.productCode}>
                    <Product product = {product}/>
                </li>
            )
        })

        return filteredProductComponents;

    };
    render() {
        console.log(`loading product list with query ${this.props.query}`)
        const productsArray = this.props.allProducts;
        const query = this.props.query;
        const searchedProducts = this.filterMapProducts(productsArray, query)
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