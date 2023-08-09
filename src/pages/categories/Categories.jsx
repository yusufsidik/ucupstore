import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-screen-xl">
        <ul className="rounded-lg flex gap-2 justify-center w-full flex-wrap">
          <li className="bg-orange-300 rounded-xl py-4 px-6 min-w-[250px] shadow-lg hover:bg-orange-400">
            <Link to="/categories" className="flex items-center gap-4">
              <div>
                <img
                  src="./img/tshirt.png"
                  alt="tshirt"
                  className="max-w-[30px]"
                />
              </div>
              <span className="font-bold">Men Clothing</span>
            </Link>
          </li>
          <li className="bg-orange-300 rounded-xl py-4 px-6 min-w-[250px] shadow-lg hover:bg-orange-400">
            <Link to="/categories" className="flex items-center gap-4">
              <div>
                <img
                  src="./img/dress.png"
                  alt="dress"
                  className="max-w-[30px]"
                />
              </div>
              <span className="font-bold">Women Clothing</span>
            </Link>
          </li>
          <li className="bg-orange-300 rounded-xl py-4 px-6 min-w-[250px] shadow-lg hover:bg-orange-400">
            <Link to="/categories" className="flex items-center gap-4">
              <div>
                <img
                  src="./img/sneakers.png"
                  alt="sneakers"
                  className="max-w-[30px]"
                />
              </div>
              <span className="font-bold">Sneakers</span>
            </Link>
          </li>
          <li className="bg-orange-300 rounded-xl py-4 px-6 min-w-[250px] shadow-lg hover:bg-orange-400">
            <Link to="/categories" className="flex items-center gap-4">
              <div>
                <img
                  src="./img/electronic.png"
                  alt="electronic"
                  className="max-w-[30px]"
                />
              </div>
              <span className="font-bold">Electronic</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
