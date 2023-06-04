import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";


export function Home() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>meKart</h1>
      <h3> items in cart: {cart.length} </h3>
      <nav>
        <NavLink to="/"> home || </NavLink>
        <NavLink to="/cart"> cart </NavLink>
      </nav>
    </div>
  );
}
