import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
import Page from './Page'
import Cart from './Cart'

function App() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}

export default App;