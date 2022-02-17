import React from 'react';
import Product from './Product.js'
import {useSelector} from 'react-redux'

/**
 * This component takes care of filtering and displaying the products
 */
function ProductList(props) {
    /**
     * Filters an array of product objects on the product name and productCode
     * @param {Array} productsArray 
     * @param {String} query 
     * @returns only the products which match the query
     */
    function filterProducts(productsArray, query) {
        const filteredProducts= productsArray
        .filter(product => 
            query == null || 
            product.name.toLowerCase().includes(query) || 
            product.productCode.includes(query))

        return filteredProducts;
    }

    /**
     * 
     * @param {Array} productsArray 
     * @returns 
     */
    function mapProductsToComponents(productsArray) {
        const componentProducts = productsArray.map(product =>{
            return (
                <li key = {product.productCode}>
                    <Product product = {product}/>
                </li>
            )
        })
        return componentProducts;
    }

    const query = useSelector((state) => state.queryReducer.query)
    const productsArray = props.allProducts;
    const searchedProducts = filterProducts(productsArray, query)
    const productComponents = mapProductsToComponents(searchedProducts);

    return (
    <div className="product-list">
        <ul>
            {productComponents}
        </ul>
    </div>
    )
}
 
export default ProductList;