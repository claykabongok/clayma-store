import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";
import HeroImage from './Navigation/HeroImage';
import Products from './Products';
import TopBanner from './Navigation/TopBanner';

export default function Shopping(props) {
  const collectionname = props.match.params.collectionname;



  return (
    <div>
      <TopBanner/>
      <NavBar />
   
      <HeroImage />
      
     <Products collectionname={collectionname}/>

      <Footer /> 
    </div>
  );
}
