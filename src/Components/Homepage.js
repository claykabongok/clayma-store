import React from "react";
import "../styles/Homepage.scss";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import PrimaryIntro from "./Intro/PrimaryIntro";
import SecondaryIntro from "./Intro/SecondaryIntro";
import ProductCategories from "./ProductCategories";
import PopularProducts from "./PopularProducts";
import TopBanner from './Navigation/TopBanner';

import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
  return (
    <div>
      <TopBanner/>
      <NavBar />

      <div className="hero-section-homepage">
        <div className="hero-section-text">
          <h1 className="mb-4"> <span>Clayma</span> store</h1>
          <h1>The <span>home</span> of <span>Fashion</span>.</h1>
          <a href="/shop" className="shop-now-button">
            Shop now

          </a>
        </div>
      </div>
      <PrimaryIntro />
      <SecondaryIntro />
    
      
     
      <ProductCategories />
     
      <PopularProducts />
     
      <Footer />
    </div>
  );
}
