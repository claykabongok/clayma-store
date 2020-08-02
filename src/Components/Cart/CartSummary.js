import React from "react";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartSummary(props) {
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
            }).format(props.total)}
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
            }).format(props.savedAmount)}
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <h4>Total</h4>
        </div>
        <div className="col-lg-5">
          <h3>
            <span className="product-price-after-discount">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "ZAR",
              }).format(
                props.total + estimatedShippingCost - props.savedAmount
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
