import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./components/App";
import store from "./reduxElements/Store.js";
import Product from "./components/Product";

const queryClient = new QueryClient();
ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="products" element={<App />} />
          <Route path="products/:productCode" element={<Product />} />
          <Route
            path="*"
            element={
              <main class="p-2">
                <h2 class="text-7xl">Hi, 404</h2>
                <p class="pt-2">There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Provider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
