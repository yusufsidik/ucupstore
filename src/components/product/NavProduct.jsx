export default function NavProduct() {
  return (
    <nav className="flex justify-center">
      <ul className="list-none flex pt-3 pb-2">
        <li className="border-b-orange-400 text-orange-400 border-b-4 hover:text-orange-400 hover:border-b-orange-400 px-5 pb-2">
          <a href="">All</a>
        </li>
        <li className="border-b-slate-500 border-b-4 hover:text-orange-400 hover:border-b-orange-400 px-5 pb-2">
          <a href="">Men's Clothing</a>
        </li>
        <li className="border-b-slate-500 border-b-4 hover:text-orange-400 hover:border-b-orange-400 px-5 pb-2">
          <a href="">Women's Clothing</a>
        </li>
        <li className="border-b-slate-500 border-b-4 hover:text-orange-400 hover:border-b-orange-400 px-5 pb-2">
          <a href="">Electronic</a>
        </li>
        <li className="border-b-slate-500 border-b-4 hover:text-orange-400 hover:border-b-orange-400 px-5 pb-2">
          <a href="">Sneakers</a>
        </li>
      </ul>
    </nav>
  );
}
