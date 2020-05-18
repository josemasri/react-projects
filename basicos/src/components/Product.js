import React from "react";

const Product = ({ product, addProduct }) => {
  const { title, price, id } = product;

  // Agregar producto al carrito
  const select = () => {
    console.log(`comprando...${id}`);
    addProduct(product);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
      <button type="button" onClick={() => select()}>
        Comprar
      </button>
    </div>
  );
};
export default Product;
