import React, { createContext, useEffect, useState } from "react"
import axios from "axios";

// FIXED: consistent name
export const CartContext = createContext();

export const Products = () => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="container row">
        {data.map((item) => (
          <div key={item.id} className="col-4 card">
            <img src={item.image} alt="product" width={"100%"} height={"450px"} />
            <h3>Title: {item.title.length > 10 ? item.title.slice(0, 10) : item.title}</h3>
            <p>{item.description.length > 20 ? item.description.slice(0, 20) + "..." : item.description}</p>
            <h5>${item.price}</h5>
            <div className="d-flex">
              <button className="btn btn-outline-primary">Details</button>
              <button
                className="btn btn-outline-primary"
                onClick={() => setCart([...cart, item])}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </CartContext.Provider>
  );
};
