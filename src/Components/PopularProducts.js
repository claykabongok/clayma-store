import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PopularProducts.scss";

import PopularProductData from "../data/PopularProducts.json";
import { faShoppingBasket, faEye } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopularProducts() {
  const data = PopularProductData.map((product) => {
    return (
      <div className="popular-product" key={product.id}>
        <div className="card-product">
          <img
            src={require("../assets/products/allproducts/" +
              product.product_image)}
            alt={product.product_image}
          />

          <div className="card-product-extra-info">
            <div className="card-product-icon">
              <span className="card-product-cart-icon add-to-cart-icon">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </span>

              <span>
                <a
                  href={`/shop/item/${product.id}`}
                  className="card-product-cart-icon"
                >
                  <FontAwesomeIcon icon={faEye} />
                </a>
              </span>
            </div>

            <h4>{product.productname}</h4>
            {/* <h5 class="product-price">
              
              {
                // product.price
                // ProductDetails.price
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "ZAR",
                }).format(product.price)
              }
            </h5> */}
            {product.discount > 0 ? (
            <h2>
              <span className="product-price-after-discount">
                {
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "ZAR",
                  }).format(
                    product.price -
                      (product.price * product.discount / 100)
                  )
                  // Math.round(ProductDetails.price - (ProductDetails.price*ProductDetails.discount/100))
                }
              </span>{" "}
              <span className="product-price-before-discount">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "ZAR",
                }).format(product.price)}
              </span>{" "}
              <span className="product-discount-rate">
                -{product.discount}%{" "}
              </span>
            </h2>
          ) : (
            <h2>
              {" "}
              <span className="product-price-whit-no-discount">
                
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "ZAR",
                }).format(product.price)}
              </span>
            </h2>
          )}
          </div>
        </div>
      </div>
    );
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
    lazyLoad: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const settingsSmall = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-popular-products">
      <h1>Customer Favorites</h1>
      <Slider {...settings} className="popular-product-large-screen">{data}</Slider>
      {/* <Slider {...settingsSmall} className="popular-product-small-screen">{data}</Slider> */}
    </div>
  );
}
