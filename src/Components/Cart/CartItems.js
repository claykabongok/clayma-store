import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/CartItems.scss";
import CartItem from "./CartItem";
import CartSummary from './CartSummary';
import SavedItems from './SavedItems';

import data from "../../data/CartItem.json";

export default function CartItems() {
  let cartTotal=0;
 
  let amountSaved=0;
  return (
    <div className="container-cart-items">
      <h1 className="text-center">Items in your cart <span className="cart-header-number-of-items"> {data.length>0 ? data.length+" items": ""}</span></h1>
      <div className="row">
        <div className="col-lg-8  ">
          <div className="cart-items-products">
            {" "}
            <table className="table table-borderless table-responsive">
              <thead className="header-cart-item">
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  {/* <th scope="col">QTY</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                //  prod_price = data.discount > 0 ? ( data.price -  (data.price * data.discount / 100)) : data.price,
                cartTotal+=  product.price,
                amountSaved += (product.discount > 0 ? (product.price * product.discount / 100) : 0),
                
                //  console.log(amountSaved),
                //   cartTotal += prod_price,
                  <CartItem data={product} key={product.id} />
                 
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-4 ">
      
          <CartSummary total={cartTotal} savedAmount={amountSaved}/>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8  ">
        <SavedItems/>
        </div>
      </div>
     
    </div>
  );
}
