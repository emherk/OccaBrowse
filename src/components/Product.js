import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Barcode from "react-barcode";
import Header from "./Header.js";
import { useProducts } from "../fetchData";

function Product() {
  const params = useParams();
  const { data } = useProducts();
  const navigate = useNavigate();

  // Select the product based on the parameters
  const product = data.filter(
    (product) => product.productCode === params.productCode
  )[0];

  return (
    <div class="flex flex-col bg-orange-100 min-h-screen">
      <Header />
      <main class="md:mt-8 md:ml-64 md:w-1/2 flex flex-row">
        <div>
          <button
            class="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <h2 class="text-7xl">{product.name}</h2>
          <ul>
            <li class="mt-8">{product.numberAvailable} available</li>
            <li>Next delivery on: {product.nextDelivery}</li>
            <li>
              <Barcode value={product.productCode} />
            </li>
          </ul>
        </div>
        <img
          class="object-contain rounded-lg ml-8"
          src={product.productImage}
          alt={`${product.name} in an interesting scenery`}
        />
      </main>
    </div>
  );
}

export default Product;