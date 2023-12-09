"use client";

import React from "react";
import store from "./store";
import { Provider } from "react-redux";

const CartProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CartProvider;
