import React from "react";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Navigate to='products' />} />
        <Route path='products' element={<Main />} />
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='/products/:id/edit' element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
