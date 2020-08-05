import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import HeroImage from "./Navigation/HeroImage";

import TopBanner from "./Navigation/TopBanner";

import data from "../data/Allproducts.json";
import ProductDetails from "./ProductDetails";

export default function Catalog(props) {
  const product_id = props.match.params.id;

  let selectedProduct = "";

 
  if (product_id != null) {
    selectedProduct = data.filter((product) => product.id === product_id);
  
  }

  return (
    <div>
      <TopBanner />
      <NavBar />
      <HeroImage />
      
      <ProductDetails product={selectedProduct} key={selectedProduct.id} />

      <Footer />
    </div>
  );
}
