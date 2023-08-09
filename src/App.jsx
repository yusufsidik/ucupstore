import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";

export default function App() {
  return (
    <main className="min-h-screen py-4 bg-gradient-to-b from-sky-200 to-sky-400">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  );
}
