import React, { useContext } from "react";
import { CartContext } from "./Products";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
