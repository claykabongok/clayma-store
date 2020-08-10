import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/CartItems.scss";
import CartItem from "./CartItem";

import { Link } from "react-router-dom";

import { GlobalCartContext } from "../../context/CartContext";

export default function CartItems() {
  const { myShoppingCart } = useContext(GlobalCartContext);

  return (
   
    <div className="cart-items-products">
      {myShoppingCart.length > 0 ? (
        <table className="table table-borderless table-responsive">
          <thead className="header-cart-item">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
          
            </tr>
          </thead>
          <tbody>
            {myShoppingCart.map((product) => (
              <CartItem data={product} key={product.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center ">
          Your cart is empty.
          <Link to="/shop" className="cart-empty-link">
            Continue shopping
          </Link>
        </h2>
      )}
    </div>
    
  );
}
