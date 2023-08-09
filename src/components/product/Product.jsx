export default function Product() {
  return (
    <div className="max-w-[279px] bg-sky-700 rounded-lg shadow-lg">
      <img
        src="./img/shoes-1.jpg"
        alt=""
        loading="lazy"
        className="pb-2 w-full bg-cover rounded-t-lg"
      />
      <div className="flex justify-between px-4 pb-3 text-white items-center relative">
        <span className="absolute -mt-10 text-black right-3 top-0 flex gap-1 items-center">
          <img src="./img/star.svg" alt="" className="w-4 h-4" />
          <span className="text-sm">7,5</span>
        </span>
        <div>
          <span className="font-semibold text-[18px]">Nike</span> <br />
          <span className="font-semibold text-sm">Rp.20.000</span>
        </div>
        <div className="flex items-center gap-1">
          <a
            href=""
            className="font-semibold text-white bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </a>
          <a
            href=""
            className="font-semibold text-white text-sm bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-sm"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
