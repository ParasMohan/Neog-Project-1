import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function ProductListing({ products }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add quantity: 1 when adding to cart
  };

  return (
    <div>
      {products.map((product) => {
        const { id, name, price } = product;
        return (
          <div
            key={id}
            style={{
              border: "1px solid gray",
              margin: "0.5rem",
              padding: "0.5rem"
            }}
          >
            <h2>
              {name} <small> INR {price} </small>
            </h2>
            <button onClick={() => handleAddToCart(product)}>
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
