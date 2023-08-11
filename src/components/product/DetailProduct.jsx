export default function DetailProduct() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto flex">
        <aside className="max-w-[400px]">
          <div className="block rounded-lg">
            <img
              src="/img/shoes-1.jpg"
              alt=""
              className="w-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="flex gap-x-1 justify-between mt-2">
            <img src="/img/shoes-1.jpg" className="max-w-[95px] rounded-md" />
            <img src="/img/shoes-1.jpg" className="max-w-[95px] rounded-md" />
            <img src="/img/shoes-1.jpg" className="max-w-[95px] rounded-md" />
            <img src="/img/shoes-1.jpg" className="max-w-[95px] rounded-md" />
          </div>
        </aside>
        <div className="ml-6">
          <div className="">
            <h2 className="text-2xl font-semibold mb-3">
              XIAOMI OFFICIAL POCO X5 5G Snapdragon 695 5G Layar 120Hz AMOLED
              6,67" - Blue, 8/256GB
            </h2>
            <span className="text-md font-semibold flex items-center gap-x-2 mb-3">
              <img src="/img/star.svg" alt="" className="w-4 h-4" />
              <span>7,5</span>
            </span>
            <h1 className="text-4xl font-semibold mb-6">Rp. 25.000</h1>
            <p className="border-b-2 border-black w-24 mb-2">Deskripsi</p>
            <p className="mb-3 max-w-screen-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis suscipit sit nam quae ex beatae ratione magnam quos
              odio, nobis reiciendis commodi ab recusandae laboriosam eum,
              voluptatem dolor perspiciatis harum! Ipsum optio facilis iusto,
              iste assumenda at dolore unde deserunt magni nulla repellat
              dolores ullam possimus natus odio dignissimos quod voluptatibus
              voluptatem velit voluptatum? Tempora corrupti officiis suscipit
              incidunt porro! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Facere nobis, odit, eum odio repudiandae
              doloremque atque ratione incidunt quidem magni error magnam
              tempora inventore minima quos officia, sunt consequuntur! Eos.
            </p>
            <div className="flex justify-end mt-6 text-sm">
              <button className="px-3 py-2 bg-orange-400 rounded-lg mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span>Add To Cart</span>
              </button>
              <button className="px-3 py-2 bg-orange-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
