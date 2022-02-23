# OccaBrowse

This is a React webapp for searching through a list of products.

Built using React, Redux, Tailwindcss, and React Query.

## The Components

### Search Bar

A text input, for the search query. The query is stored in the redux store. The query is updated live, while the user is typing.

### Product List

A list of products. By default our app redirects to /products, where this component is displayed.
Initially, or while the search query is empty, it shows all products. Otherwise only the products which the query matches (on the product name or product code) are shown.

### Products

Displays information about the specific product when navigated to /products/{productCode}.
This includes the:
- product name
- number of available products left.
- next delivery date.
- productCode, displayed in barcode format.
- a (placeholder) picture of the product

The page also includes a back button to the /product page.

### Header

The *OccaBrowse* text and div at the top of the pages. Clicking the text takes us back to /products.

### App

Retrieves the data from the mock server, and wraps around the other components.

## Future Improvements / Changes / Alternatives

- Expanding the test suite.
- Possibly displaying more info about the products in the list.
- Deploy on github pages.
- The search could be done through the search parameters in the url instead of in the redux store.
