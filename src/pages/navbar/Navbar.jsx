import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-screen-xl mx-auto bg-sky-700 text-white rounded-xl shadow-lg mb-6">
      <div className="flex justify-between py-6 px-8">
        <div>
          <span className="font-bold text-[18px]">
            <Link to="/">TokoUcup</Link>
          </span>
        </div>
        <div className="flex gap-6 font-semibold">
          <Link
            to="/"
            className="no-underline hover:border-b-2 hover:border-white"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="no-underline hover:border-b-2 hover:border-white"
          >
            Products
          </Link>
          <Link
            to="/categories"
            className="no-underline hover:border-b-2 hover:border-white"
          >
            Categories
          </Link>
          <Link
            to="/"
            className="no-underline hover:border-b-2 hover:border-white"
          >
            About
          </Link>
        </div>
        <div>
          <a href="" className="no-underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
