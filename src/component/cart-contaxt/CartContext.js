import React, { useState } from "react";

export const CartContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const CartContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [userId, setUserId] = useState("");

  const [token, setToken] = useState(initialToken);
  console.log(token);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <CartContext.Provider
      value={{
        userId,
        setUserId,
        contextValue,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;