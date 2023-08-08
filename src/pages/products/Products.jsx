import Product from "../../components/product/Product";
import NavProduct from "../../components/product/NavProduct";

export default function Products() {
  return (
    <div>
      <NavProduct />
      <div className="flex justify-center gap-3 pt-5 flex-wrap">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
}
