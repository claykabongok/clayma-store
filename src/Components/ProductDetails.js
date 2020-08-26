import React,{useContext, useState} from "react";
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
import {GlobalCartContext} from '../context/CartContext';
import {  useToasts } from 'react-toast-notifications';

export default function ProductDetails(props) {

  // const {action} =props;
  // let product_display_mode="action_view";

  //TODO 
   
  // switch(action){
 
  //   case "edit":
  //        product_display_mode="action_edit";
  //        break;
  //   default: 
  //        product_display_mode="action_view";

  // }

  
   
 

  const { addToast } = useToasts();
  const [prod_quantity,setProd_quantity]=useState(1)
  const [prod_selected_size,setProd_prod_selected_size]=useState("")
  
  let ProductDetails;
  let productDescription = [];
  let productSize = [];
  props.product.map((product) => (ProductDetails = product));
  productDescription = ProductDetails.product_details;
  productSize = ProductDetails.size;

  const productStockLevel = ProductDetails.product_stock;
  let bannerStockLevel = "";
  let stockLevelMessage = "";
 
  if (productStockLevel > 0 && productStockLevel < 100) {
    bannerStockLevel = "product-details-banner-stock-level-low";
    stockLevelMessage = `Low stock, only ${productStockLevel} left.`;
  } else if (productStockLevel === 0) {
    bannerStockLevel = "product-details-banner-stock-level-out-of-stock";
    stockLevelMessage = `Out of  stock`;
  }

    
  const {addItemTocart}= useContext(GlobalCartContext)
  
  function  handleAddToCart(data) {
    //alert(data.productname+" Added to cart");
    
    const newCartItem={
      productname: data.productname,
      id: data.id,
      price: data.price,
      discount: data.discount,
      color: data.color,
      size: data.size,
      selectedSize: prod_selected_size,
      product_status: data.product_status,
      product_stock: data.product_stock,
      product_selected_qty:prod_quantity,
      product_image: data.product_image,
      brand: data.brand,
  
      product_details: data.product_details,
      

    }
    addItemTocart(newCartItem);
    addToast(data.productname+" has been saved for later shopping", { appearance: 'success', autoDismiss: true, })
   
    
   
  }
  
  function handleChange(event) {
    
    setProd_quantity(event.target.value)
    //console.log(event.target.value)
    
  }


function handleChangeSize(event) {
    
    setProd_prod_selected_size(event.target.value)
    //console.log(event.target.value)
    
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
            value={prod_selected_size} onChange={handleChangeSize}
         
          >
            {product_size}
          </select>
          {/* <div className="mb-4 mt-4">{product_size}</div> */}
          <h3>QTY:</h3>
          <select 
           className="form-control product-size-option"
           value={prod_quantity} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          
          </select>

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

          {/* {
            product_display_mode ==="action_edit" 
            ?
            <h2> Editing product </h2>
            : 
            <h2> Viewing product </h2>
          }
         */}
          {productStockLevel === 0 ? (
            <h2 className="out-of-stock-notice">
              <FontAwesomeIcon icon={faChartBar} /> Out of Stock
            </h2>
          ) : (

         
            <button className="product-btn-add-to-cart shadow-none "
            onClick={ () => handleAddToCart(ProductDetails)}
            >
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
