import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Product(props) {
  const { id, title, price, image } = props;

  return (
    <div className="max-w-[279px] max-h-[550px] rounded-lg shadow-lg flex flex-col">
      <Link
        to={`/products/${id}`}
        className="text-center bg-white rounded-md p-8"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          className="pb-2 bg-cover rounded-t-lg w-[185px] h-[185px] object-fill object-center mx-auto"
        />
      </Link>
      <div className="flex-grow flex flex-col items-start justify-between bg-sky-700 px-4 py-3 text-white rounded-b-lg">
        <span className="font-semibold text-[16px]">{title}</span> <br />
        <span className="font-semibold text-lg">$ {price}</span>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Product;
