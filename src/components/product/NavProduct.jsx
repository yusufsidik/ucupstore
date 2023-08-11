import { useState, useEffect } from "react";

export default function NavProduct(props) {
  const { triggerCategoryProps } = props;
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        const display = data.map((data) => {
          return (
            <li
              key={data}
              className="border-b-black text-black border-b-4 hover:text-orange-400 hover:border-b-orange-400 px-5 pb-2"
            >
              <button className="border-none" onClick={() => setCategory(data)}>
                {data}
              </button>
            </li>
          );
        });
        setDisplay(display);
      });
  }, []);

  useEffect(() => {
    triggerCategoryProps(category);
  }, [category]);

  return (
    <nav className="flex justify-center">
      <ul className="list-none flex pt-3 pb-2">
        <li className="border-b-orange-400 text-orange-400 border-b-4 hover:text-orange-400 hover:border-b-orange-400 px-5 pb-2">
          <button className="border-none" onClick={() => setCategory("all")}>
            All
          </button>
        </li>

        {display}
      </ul>
    </nav>
  );
}
