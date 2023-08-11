import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";
import DetailProduct from "./components/product/DetailProduct";

export default function App() {
  return (
    <main className="min-h-screen py-4 bg-gradient-to-b from-sky-200 to-sky-400">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<DetailProduct />}></Route>
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  );
}
