import { useCart } from "../../context/CartContext";
import { useState } from "react";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const handleCheckout = () => {
    console.log("Proceeding to payment with cart items:", cart);
    setIsCheckout(true);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h5>{item.Title}</h5>
          <h6>{item.Price}</h6>
          <button
            onClick={() => removeFromCart(item.Title)}
            style={{
              padding: "0.4rem",
              borderRadius: "1rem",
              border: "none",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <h3>Total Price: ₹{getTotalPrice()}</h3>
      <button
        onClick={handleCheckout}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          border: "none",
          backgroundColor: "darkgreen",
          color: "white",
          marginTop: "1rem",
        }}
      >
        Proceed to Checkout
      </button>
      {isCheckout && (
        <div className="checkout-message">
          <h4>Proceeding to payment...</h4>
        </div>
      )}
    </div>
  );
}
