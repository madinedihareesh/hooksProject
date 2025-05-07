import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [qnt,setQnt]=useState(1)
  return (
    <div className="container">
      <h2 className="text-center">Cart Items</h2>
      <div className="row">
        {cart.length === 0 ? (
          <p className="text-center">No items in cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="d-flex">
              <div>{item.image}</div>
              <div>{item.title}</div>
              <div>
                  <div className="btn-group">
                    <div className="btn btn-secondary" onClick={()=>{setQnt(qnt+1)}}>INC</div>
                    {qnt}
                    <div className="btn btn-secondary" onClick={()=>{setQnt(qnt<=0?qnt==0:qnt-1)}}>Dec</div>
                  </div>
                  <div>
                    productPrice:{qnt*(item.price)}
                  </div>
              </div>


            </div>
          ))
        )}
      </div>
    </div>
  );
};
