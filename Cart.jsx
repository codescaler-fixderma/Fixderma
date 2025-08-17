import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>
                  ₹
                  {(item.price - (item.price * item.discount) / 100) *
                    item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total: ₹{totalPrice}</h4>
        </>
      )}
    </div>
  );
}
