import React from 'react';
import Product from './Product.js'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

/**
 * This component takes care of filtering and displaying the products
 */
function ProductList() {
    /**
     * Filters an array of product objects on the product name and productCode
     * @param {Array} allProducts An array of product objects.
     * @param {String} query The query to filter on.
     * @returns only the products which match the query
     */
    function filterProducts(allProducts, query) {
        const filteredProducts = allProducts
            .filter(product =>
                query == null ||
                product.name.toLowerCase().includes(query) ||
                product.productCode.includes(query))

        return filteredProducts;
    }

    /**
     * 
     * @param {Array} products An array of product objects
     * @returns 
     */
    function mapProductsToComponents(products) {
        const componentProducts = products.map(product => {
            return (
                <li key={product.productCode}>
                    <Product />
                </li>
            )
        })
        return componentProducts;
    }

    function mapProductsToLinks(products) {
        const productLinks = products.map(product => (
            <li key={product.productCode}>
                <Link
                    style={{ display: 'block', margin: '1rem 0' }}
                    to={`/products/${product.productCode}`}
                    key={product.productCode}
                >
                    {product.name}
                </Link>
            </li>
        ))
        return productLinks;

    }

    const query = useSelector((state) => state.queryReducer.query)
    const products = useSelector((state) => state.productsReducer.products);
    console.log(`Products array in productslist.js ${products}`);
    const filteredProducts = filterProducts(products, query)
    const productLinks = mapProductsToLinks(filteredProducts);

    return (
        <div className="product-list">
            <ul class="list-disc">
                {productLinks}
            </ul>
        </div>
    )
}

export default ProductList;