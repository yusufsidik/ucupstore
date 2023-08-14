import Product from "../../components/product/Product";
import NavProduct from "../../components/product/NavProduct";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const listProducts = data.map((data) => {
          return (
            <Product
              key={data.id}
              id={data.id}
              title={data.title}
              price={data.price}
              image={data.image}
            />
          );
        });
        setProducts(listProducts);
      });
  }, []);

  async function triggerCategory(trigger) {
    let url = `https://fakestoreapi.com/products/category/${trigger}`;

    if (trigger == "all") {
      url = "https://fakestoreapi.com/products";
    }

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const listProducts = data.map((data) => {
          return (
            <Product
              key={data.id}
              id={data.id}
              title={data.title}
              price={data.price}
              image={data.image}
            />
          );
        });
        setProducts(listProducts);
      });
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <NavProduct triggerCategoryProps={triggerCategory} />
      <div className="flex justify-center gap-3 pt-5 flex-wrap">
        {products.length > 0 ? "" : <Spinner />}
        {products}
      </div>
    </div>
  );
}
