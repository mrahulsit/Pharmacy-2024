/* eslint-disable react/prop-types */
import { useCart } from "../../context/CartContext";
import "./MedicineCard.css";

export default function MedicineCard({ source, Title, Price }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={source} alt={Title} className="card-image" />
      <div className="card-content">
        <h5 className="card-title">{Title}</h5>
        <h6 className="card-price">{Price}</h6>
        <button
          onClick={() => addToCart({ Title, Price })}
          className="card-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
