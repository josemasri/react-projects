import React from "react";
import "./Cart.css";

const Cart = ({ products, removeFromCart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {products.map((cartProduct) => (
      <div className="" key={cartProduct.product.id}>
        <h3>{cartProduct.product.title}</h3>
        <h4>${cartProduct.product.price.toFixed(2)}</h4>
        <h5>qty:{cartProduct.qty}</h5>
        <button
          type="button"
          onClick={() => removeFromCart(cartProduct.product.id)}
        >
          Eliminar
        </button>
      </div>
    ))}
  </div>
);

export default Cart;
