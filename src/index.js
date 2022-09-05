import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './component/cart-contaxt/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
  <BrowserRouter>
  <App />
</BrowserRouter>
 </CartContextProvider>
  );


