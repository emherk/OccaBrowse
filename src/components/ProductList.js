import React from 'react';
import Product from './Product.js'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useProducts } from '../fetchData'

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
     * Maps products to links which lead to products/productCode
     * @param {Array} products 
     * @returns 
     */
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
    const {data: products} = useProducts();
    // useSelector((state) => state.productsReducer.products);
    console.log(`Products array in productslist.js`);
    console.log(products)
    const filteredProducts = filterProducts(products, query)
    const productLinks = mapProductsToLinks(filteredProducts);

    return (
        <div class="product-list">
            <ul class="list-disc">
                {productLinks}
            </ul>
        </div>
    )
}

export default ProductList;