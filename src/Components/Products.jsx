import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

export const Products = () => {
  const [data, setData] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container row">
      {data.map((item) => (
        <div key={item.id} className="col-4 card m-2 p-2">
          <img src={item.image} alt="product" width="100%" height="250px" />
          <h5>{item.title.slice(0, 20)}...</h5>
          <p>{item.description.slice(0, 30)}...</p>
          <h6>${item.price}</h6>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary">Details</button>
            <button
              className="btn btn-outline-success"
              onClick={() => setCart([...cart, item])}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
