import { useQuery } from "react-query";

// all generated data: https://api.json-generator.com/templates/qkS_eTtsszAC/data?status=200&access_token=46wjmmpothb7d1flou9ex7u6cyweozowcj4b5d8o
// subset of data using json-server: https://my-json-server.typicode.com/emherk/OccaBrowse/products
const PRODUCTS_API_URL =
  "https://api.json-generator.com/templates/qkS_eTtsszAC/data?status=200&access_token=46wjmmpothb7d1flou9ex7u6cyweozowcj4b5d8o";

/**
 * Reusable hook for fetching the data with useQuery.
 * @returns
 */
const useProducts = () =>
  useQuery(
    "products",
    () => fetch(PRODUCTS_API_URL).then((res) => res.json()),
    { staleTime: 100000 }
  );

/**
 * Loads a small subset of the products for development.
 * @returns {Array} undefined
 */
export function loadMockProducts() {
  return [
    {
      name: "Beer Cherry",
      productCode: "620d77bcdb4aa3c133169666",
      nextDelivery: "2023-06-13T11:33:50.844Z",
      productImage: "https://via.placeholder.com/150",
      numberAvailable: 62,
    },
    {
      name: "Beer Marquez",
      productCode: "620d77bce5a37faad0f0c8e4",
      nextDelivery: "2023-04-16T09:42:45.105Z",
      productImage: "https://via.placeholder.com/150",
      numberAvailable: 80,
    },
    {
      name: "Beer Romero",
      productCode: "620d77bcb248bf408036f9dc",
      nextDelivery: "2022-11-15T03:54:40.945Z",
      productImage: "https://via.placeholder.com/150",
      numberAvailable: 34,
    },
    {
      name: "Beer Hendrix",
      productCode: "620d77bccea0359a602ae1c7",
      nextDelivery: "2022-12-26T07:34:55.252Z",
      productImage: "https://via.placeholder.com/150",
      numberAvailable: 74,
    },
    {
      name: "Beer Mcfarland",
      productCode: "620d77bc8ca4d2992666891b",
      nextDelivery: "2022-06-01T07:50:47.287Z",
      productImage: "https://via.placeholder.com/150",
      numberAvailable: 13,
    },
  ];
}

export { useProducts };
