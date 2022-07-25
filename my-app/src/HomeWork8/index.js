import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./components/Navigation";
import Customer from "./Pages/Customers";
import CustomerList from "./Pages/Customers/Pages/CustomersList";
import CustomerForm from "./Pages/Customers/Pages/CustomersForm";

import Product from "./Pages/Products";
import ProductList from "./Pages/Products/Pages/ProductList";
import ProductForm from "./Pages/Products/Pages/ProductForm";

export default function HomeWork8() {
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="customer" element={<Customer />}>
            <Route index element={<CustomerList />} />
            <Route path="list" element={<CustomerList />} />
            <Route path="form" element={<CustomerForm />} />
          </Route>

          <Route path="product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="form" element={<ProductForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
