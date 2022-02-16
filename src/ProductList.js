import React from 'react';
import Product from './Product.js'

class ProductList extends React.Component {
    render() {
        const productsArray = this.props.allProducts;
        const products = productsArray.map(product =>{
            return (
                <li key = {product.productCode}>
                    <Product product = {product}/>
                </li>
            )
        })
        return (
        <div className="product-list">
            <ul>
                {products}
            </ul>
        </div>
        )
    }
}
 
export default ProductList;