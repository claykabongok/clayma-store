import React,{useContext} from "react";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GlobalCartContext} from '../../context/CartContext';

export default function CartSummary(props) {
  const {cartTransaction}=useContext(GlobalCartContext);
  let cartTotal=0;
 
  let amountSaved=0;
  cartTransaction.map((product) => (
   
    cartTotal+=  product.price*product.product_selected_qty
     
    ))

    cartTransaction.map((product) => (
   
      amountSaved += (product.discount > 0 ? ((product.price * product.product_selected_qty)* product.discount / 100) : 0)
       
      ))
  
      

    
   
    
  const estimatedShippingCost = 50;
  return (
    <div className="cart-items-summary">
      <h2>Cart summary</h2>
      <div className="row">
        <div className="col-lg-7">
          <h4>Item Subtotal</h4>
        </div>
        <div className="col-lg-5">
          <h3>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "ZAR",
            }).format(cartTotal)}
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <h4>Estimated Shipping</h4>
        </div>
        <div className="col-lg-5">
          <h3>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "ZAR",
            }).format(estimatedShippingCost)}
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <h4>Discounted Amount</h4>
        </div>
        <div className="col-lg-5">
          <h3 className="product-discount-rate">
            -
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "ZAR",
            }).format(amountSaved)}
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h4>Total</h4>
        </div>
        <div className="col-lg-6">
          <h3>
            <span className="product-price-after-discount">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "ZAR",
              }).format(
                cartTotal + estimatedShippingCost - amountSaved
              )}
            </span>
          </h3>
        </div>
      </div>
      <div className="row">
        <button className="btn-check-out">
          <FontAwesomeIcon icon={faCreditCard} className="btn-check-out-icon" />
          CHECK OUT NOW
        </button>
      </div>
    </div>
  );
}
