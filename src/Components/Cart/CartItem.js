import React from "react";

export default function CartItem(props) {
  return (
    <>
      <tr className="row-cart-item ">
        <td className="row-cart-item-image-container">
          <div className="row-cart-item-image">
            <img
              className="card-img-top"
              src={require("../../assets/products/allproducts/" +
                props.data.product_image)}
              alt={props.data.product_image}
            />
          </div>
        </td>
        <td className="row-cart-item-description-container">
          <div className="row-cart-item-description">
            <h2 className="product-name">{props.data.productname}</h2>
            <h3 className="product-size">Size: {props.data.size[0]}</h3>
            <h3 className="product-color">Color: {props.data.color}</h3>
        
            <label for="quantity">QTY:</label>

            <select class="form-control cartitem-select-quantity-size" name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">5</option>
            </select>

            <button className="btn-cart-item-action-remove">Remove</button>
            <button className="btn-cart-item-action-save-edit">
              Save for later
            </button>
            <button className="btn-cart-item-action-save-edit">Edit</button>
          </div>
        </td>
        <td className="row-cart-item-price-container">
          <div className="row-cart-item-price">
            {/* <h3 className="product-prices"></h3> */}
            {props.data.discount > 0 ? (
              <h3>
                {" "}
                <span className="product-price-after-discount">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "ZAR",
                  }).format(
                    props.data.price -
                      (props.data.price * props.data.discount) / 100
                  )}
                </span>{" "}
                <span className="product-price-before-discount">
                  {" "}
                  {
                    /* R{props.data.price} */
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "ZAR",
                    }).format(props.data.price)
                  }
                </span>{" "}
                <span className="product-discount-rate">
                  -{props.data.discount}%{" "}
                </span>
              </h3>
            ) : (
              <h3>
                {" "}
                <span className="product-price-whit-no-discount">
                  {
                    // props.data.price
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "ZAR",
                    }).format(props.data.price)
                  }
                </span>
              </h3>
            )}
          </div>
        </td>
        {/* <td className="row-cart-item-quantity-container">
          <div className="row-cart-item-quantity">
            <h3 className="product-quantity">10</h3>
            
          </div>
        </td> */}
      </tr>
    </>
  );
}
