import { useContext } from "react";
import { CartContext } from "..";

export function Cart() {
  const {
    cart,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIncreaseQuantity = (item) => {
    increaseQuantity(item);
  };

  const handleDecreaseQuantity = (item) => {
    decreaseQuantity(item);
  };

  return (
    <div>
      <h3>{cart.length} items in your cart</h3>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "0.5rem",
            padding: "0.5rem"
          }}
        >
          {item.name} - Quantity: {item.quantity}
          <button onClick={() => handleIncreaseQuantity(item)}>+</button>
          <button onClick={() => handleDecreaseQuantity(item)}>-</button>
          <button onClick={() => handleRemoveItem(item)}>Remove</button>
        </div>
      ))}
      <div style={{ textAlign: "right", margin: "1rem" }}>
        Total:{" "}
        {cart.reduce(
          (totalPrice, item) => (totalPrice += item.price * item.quantity),
          0
        )}
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}
