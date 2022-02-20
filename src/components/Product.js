import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Barcode from 'react-barcode'
import Header from './Header.js'

function Product() {
    const params = useParams();
    const product = useSelector((state) => state.productsReducer.products)
        .filter(product => product.productCode === params.productCode)[0];
    console.log('Product to display:')
    console.log(product);
    return (
        <div class="flex flex-col bg-orange-100 min-h-screen">
            <Header />
            <main class="md:mt-8 md:ml-64 md:w-1/2 flex flex-row">
                <div>
                    <h2 class="text-7xl">{product.name}</h2>
                    <ul>
                        <li class="mt-8">{product.numberAvailable} available</li>
                        <li>Next delivery on: {product.nextDelivery}</li>
                        <li><Barcode value={product.productCode}/></li>
                    </ul>

                </div>
                <img class="ml-8"src={product.productImage} />
            </main>
        </div>
    );
}

export default Product;