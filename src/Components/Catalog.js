import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import HeroImage from "./Navigation/HeroImage";

import TopBanner from "./Navigation/TopBanner";

import data from "../data/Allproducts.json";
import ProductDetails from "./ProductDetails";
import {
  
  useParams
} from "react-router-dom";

export default function Catalog(props) {
  const {id,action} =useParams();

  let selectedProduct = "";

 
  if (id != null) {
    selectedProduct = data.filter((product) => product.id === id);
  
  }

  return (
    <div>
      <TopBanner />
      <NavBar />
      <HeroImage />
      
      <ProductDetails product={selectedProduct} key={selectedProduct.id} action={action}/>

      <Footer />
    </div>
  );
}
