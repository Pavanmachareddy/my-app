import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../cart-contaxt/CartContext'
import ProductItems from './ProductItems'

const Product = () => {
  const {contextValue} = useContext(CartContext);
  const isLoggedIn = contextValue.isLoggedIn;


  const logoutHandler = () => {
    contextValue.logout();

  }

  return (
    <div>
    <h2>Product</h2>
    <div>
    {isLoggedIn && <NavLink to="/login"><li onClick={logoutHandler}>Logout</li></NavLink>}
    </div>
    
    <ProductItems/>
      
    </div>
  )
}

export default Product
