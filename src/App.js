import React, { lazy } from "react";
import "./styles.css";
const ProductList = lazy(() => import("./modules/productList/ProductList"));

export default function App() {
  return <ProductList />;
}
