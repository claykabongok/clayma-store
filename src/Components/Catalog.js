import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import HeroImage from "./Navigation/HeroImage";
// import Products from "./Products";
import TopBanner from "./Navigation/TopBanner";
// import Product from "./Product";
import data from "../data/Allproducts.json";
import ProductDetails from './ProductDetails';

export default function Catalog(props) {
  const product_id = props.match.params.id;
  //let product="";
  let selectedProduct="";
 

  // let product=[];
  //let product="";
  if (product_id != null) {
     selectedProduct = data.filter((product) => product.id === product_id);
    // product = selectedProduct.map((product) => 
    // <h2>{product.productname}</h2>);
  }
  

  return (
    <div>
      <TopBanner />
      <NavBar />
      <HeroImage />
      {/* {product} */}
      {/* data={product} key={product.id} */}
      <ProductDetails product={selectedProduct} key={selectedProduct.id}/>

      <Footer />
    </div>
  );
}
