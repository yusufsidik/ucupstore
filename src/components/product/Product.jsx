export default function Product() {
  return (
    <div className="max-w-[279px] bg-sky-700 rounded-lg shadow-lg">
      <img
        src="./img/shoes-1.jpg"
        alt=""
        loading="lazy"
        className="pb-2 w-full bg-cover rounded-t-lg"
      />
      <div className="flex justify-between px-4 pb-3 text-white items-center">
        <div>
          <span className="font-semibold text-[18px]">title</span> <br />
          <span className="font-semibold text-sm">Rp.20.000</span>
        </div>
        <div>
          <a
            href=""
            className="font-semibold text-black bg-orange-300 hover:bg-orange-400 px-3 py-1 rounded-md"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
