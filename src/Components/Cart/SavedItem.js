import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import {GlobalCartContext} from '../../context/CartContext';
import {  useToasts } from 'react-toast-notifications';

export default function SavedItem(props) {
  const { addToast } = useToasts();
  const {addItemTocart,removeItemFromSavedForLater}=useContext(GlobalCartContext);
  function  removeFromSavedList(data) {
   
    removeItemFromSavedForLater(data.cartItemId);
    addToast(props.data.productname+" has been  removed from the list", { appearance: 'success', autoDismiss: true, })
   
   
  }

  function  addToCart(data) {
    const cartItem={
      productname: data.productname,
      cartItemId:data.cartItemId,
      id: data.id,
      price: data.price,
      discount: data.discount,
      color: data.color,
      size: data.size,
      selectedSize:data.selected_size,
      product_status: data.product_status,
      product_stock: data.product_stock,
      product_selected_qty:1,
      product_image: data.product_image,
      brand: data.brand,
  
      product_details: data.product_details


    }
    addItemTocart(cartItem);
    
    removeItemFromSavedForLater(data.cartItemId,);
    addToast(data.productname+" successfully added to your cart", { appearance: 'success', autoDismiss: true, })
   

   
  }

    return (
        <>
        <tr className="row-cart-item ">
          <td className="row-cart-item-image-container">
            <div className="row-cart-item-image">
            <Link
            to={`/catalog/item/${props.data.id}/${props.data.productname}`}
            >
        
             <img
                className="card-img-top"
                src={require("../../assets/products/allproducts/" +
                  props.data.product_image)}
                alt={props.data.product_image}
              />
            </Link>
             
            </div>
          </td>
          <td className="row-cart-item-description-container">
            <div className="row-cart-item-description">
            <Link className="cat-item-link-product-details"
            to={`/catalog/item/${props.data.id}/${props.data.productname}`}
            >
            <h2 className="product-name">{props.data.productname}</h2>
            </Link>
   
              <h3 className="product-size">Size: {props.data.selected_size}</h3>
              <h3 className="product-color">Color: {props.data.color}</h3>
    <h3 className="product-quantity">QTY: {props.data.product_selected_qty}</h3>
              <button className="btn-cart-item-action-remove"
              onClick={ () => removeFromSavedList(props.data)}
              >Remove</button>
               <button className="btn-cart-item-action-add-tocart"
               onClick={ () => addToCart(props.data)}
               >Add to Cart</button>
            
            </div>
          </td>
          <td className="row-cart-item-price-container">
            <div className="row-cart-item-price">
              {/* <h3 className="product-prices"></h3> */}
              {props.data.discount > 0 ? (
                  <h3>
                    {" "}
                    <span className="product-price-after-discount">
                      
                      {
                        
                      new Intl.NumberFormat('en-US', {style: 'currency', currency:'ZAR'}).format( props.data.price -  (props.data.price * props.data.discount / 100)
                      )
                    
                    }
                    </span>{" "}
                    <span className="product-price-before-discount">
                      {" "}
                      {
                      /* R{props.data.price} */
                      new Intl.NumberFormat('en-US', {style: 'currency', currency:'ZAR'}).format(  props.data.price) 
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
                     
                      new Intl.NumberFormat('en-US', {style: 'currency', currency:'ZAR'}).format(  props.data.price) 
                      }
                    </span>
                  </h3>
                )}
            </div>
          </td>
      
        </tr>
      </>
    )
}
