import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  // Crear listado de productos
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Camisa ReactJs",
      price: 50,
    },
    {
      id: 2,
      title: "Camisa Angular",
      price: 40,
    },
    {
      id: 3,
      title: "Camisa VueJs",
      price: 30,
    },
    {
      id: 4,
      title: "Camisa NodeJs",
      price: 20,
    },
  ]);

  // State for a cart
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    let found = 0;
    cart.forEach((cartProduct) => {
      if (cartProduct.product.id === product.id) {
        cartProduct.qty++;
        setCart([...cart]);
        found = 1;
      }
    });
    if (!found) {
      setCart([...cart, { product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const newProducts = cart.filter((cartProduct) => {
      if (cartProduct.product.id === id) {
        if (cartProduct.qty !== 1) {
          cartProduct.qty--;
          return true;
        }
        return false;
      }
      return true;
    });
    setCart(newProducts);
  };

  useEffect(() => {
    console.log(cart);
  });

  return (
    <Fragment>
      <Header title="Online Shop" />
      <h1>Lista de productos</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} addProduct={addProduct} />
      ))}
      <Cart products={cart} removeFromCart={removeFromCart} />
      <Footer year={new Date().getFullYear()} />
    </Fragment>
  );
}

export default App;
