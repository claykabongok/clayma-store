import React from "react";
import SavedItem from './SavedItem';

import data from "../../data/SavedItems.json";

export default function SavedItems() {
  return (
    <div className="cart-items-saved-for-later">
      <h2 className="text-center">SAVED FOR LATER <span className="cart-header-number-of-items"> {data.length>0 ? data.length+" of "+ data.length+" items": ""}</span></h2>
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
                  <SavedItem data={product} key={product.id} />
                ))}
              </tbody>
            </table>
      
    </div>
  );
}
