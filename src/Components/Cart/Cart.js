import React from "react";
import NavBar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";
import HeroImage from "../Navigation/HeroImage";
import CartItems from "./CartItems";
import TopBanner from '../Navigation/TopBanner';
import SavedItems from './SavedItems';

export default function Cart() {
  return (
    <div>

      <TopBanner/>
      <NavBar />
      <HeroImage header=" Cart" />
      <CartItems/>
      {/* <SavedItems/> */}
      <Footer />
    </div>
  );
}
