export default function NavProduct() {
  return (
    <nav className="flex justify-center">
      <ul className="list-none flex pt-3 pb-2">
        <li className="border-b-orange-400 border-b-4 px-5 pb-2">
          <a href="">All</a>
        </li>
        <li className="border-b-slate-500 border-b-4 px-5 pb-2">
          <a href="">Accessories</a>
        </li>
        <li className="border-b-slate-500 border-b-4 px-5 pb-2">
          <a href="">T-Shirt</a>
        </li>
        <li className="border-b-slate-500 border-b-4 px-5 pb-2">
          <a href="">Shoes</a>
        </li>
      </ul>
    </nav>
  );
}
