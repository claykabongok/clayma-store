import React from "react";
import {
  faChartBar,
  faCartPlus,
  faCheckCircle,
  faPlaneDeparture,
  faRedoAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ProductDetails.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ProductDetails(props) {
  let ProductDetails;
  let productDescription = [];
  let productSize = [];
  props.product.map((product) => (ProductDetails = product));
  productDescription = ProductDetails.product_details;
  productSize = ProductDetails.size;

  const productStockLevel = ProductDetails.product_stock;
  let bannerStockLevel = "";
  let stockLevelMessage = "";
  // let product_name = ProductDetails.productname.replace(" ", "_");
  //product_name = product_name.replace(" ", "_");
  if (productStockLevel > 0 && productStockLevel < 100) {
    bannerStockLevel = "product-details-banner-stock-level-low";
    stockLevelMessage = `Low stock, only ${productStockLevel} left.`;
  } else if (productStockLevel === 0) {
    bannerStockLevel = "product-details-banner-stock-level-out-of-stock";
    stockLevelMessage = `Out of  stock`;
  }

  const description = productDescription.map((desc) => (
    <h5  key={desc}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="product-description-icons"
       
      ></FontAwesomeIcon>
      {desc}
    </h5>
  ));

  const product_size = productSize.map((size) => (
    <option value={size}  key={size}> {size}</option>

    // <h5>
    //   <FontAwesomeIcon
    //     icon={faCheckCircle}
    //     className="product-description-icons"
    //   ></FontAwesomeIcon>
    //   {size}
    // </h5>
  ));

  return (
    <div className="container-product-details">
      <div className="row">
        <div className="col-lg-7">
          <img
            className="card-img-top"
            src={require("../assets/products/allproducts/" +
              ProductDetails.product_image)}
            alt={ProductDetails.product_image}
          />
          <div
            className={`${
              ProductDetails.product_status === "New"
                ? "product-details-banner-new"
                : "product-banner-trending"
            }`}
          >
            {ProductDetails.product_status}
          </div>
          <div className={bannerStockLevel}>{stockLevelMessage}</div>
        </div>
        <div className="col-lg-5">
          <h1>{ProductDetails.productname}</h1>

          {ProductDetails.discount > 0 ? (
            <h2>
              <span className="product-price-after-discount">
                {
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "ZAR",
                  }).format(
                    ProductDetails.price -
                      (ProductDetails.price * ProductDetails.discount / 100)
                  )
                  // Math.round(ProductDetails.price - (ProductDetails.price*ProductDetails.discount/100))
                }
              </span>{" "}
              <span className="product-price-before-discount">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "ZAR",
                }).format(ProductDetails.price)}
              </span>{" "}
              <span className="product-discount-rate">
                -{ProductDetails.discount}%{" "}
              </span>
            </h2>
          ) : (
            <h2>
              {" "}
              <span className="product-price-whit-no-discount">
                
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "ZAR",
                }).format(ProductDetails.price)}
              </span>
            </h2>
          )}
          {/* <h2> R{ProductDetails.price} <span> R{ProductDetails.price}</span> <span> 50</span></h2> */}
          <h3>Brand: {ProductDetails.brand}</h3>

          <h3>Color: {ProductDetails.color}</h3>
          <h3>Size:</h3>
          <select
            className="form-control product-size-option"
            name="size-product"
            id="size-product"
          >
            {product_size}
          </select>
          {/* <div className="mb-4 mt-4">{product_size}</div> */}

          <h3>Product Details:</h3>

          <div className="mb-4 mt-4">{description}</div>
          <div className="row product-details-services">
            <div className="col-lg-4">
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                className="product-details-services-icons"
              />
              <h4>SHIPS WITHIN HOURS</h4>
            </div>
            <div className="col-lg-4">
              <FontAwesomeIcon
                icon={faRedoAlt}
                className="product-details-services-icons"
              />
              <h4>EASY RETRUNS</h4>
            </div>

            <div className="col-lg-4">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="product-details-services-icons"
              />
              <h4>24/7 CUSTOMER SERVICE</h4>
            </div>
          </div>

          {productStockLevel === 0 ? (
            <h2 className="out-of-stock-notice">
              <FontAwesomeIcon icon={faChartBar} /> Out of Stock
            </h2>
          ) : (
            <button className="product-btn-add-to-cart shadow-none ">
              <FontAwesomeIcon
                icon={faCartPlus}
                className="product-btn-add-to-cart-icon"
              />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
