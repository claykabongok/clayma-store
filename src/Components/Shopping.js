import React, { Suspense, lazy } from "react";
// import NavBar from "./Navigation/NavBar";
// import Footer from "./Navigation/Footer";
// import HeroImage from './Navigation/HeroImage';
// import Products from './Products';
// import TopBanner from './Navigation/TopBanner';

import loadingIcon from "../assets/images/dashboardloader3.gif";
const NavBar = lazy(() => import("./Navigation/NavBar"));
const Footer = lazy(() => import("./Navigation/Footer"));
const HeroImage = lazy(() => import("./Navigation/HeroImage"));
const Products = lazy(() => import("./Products"));
const TopBanner = lazy(() => import("./Navigation/TopBanner"));

export default function Shopping(props) {
  const collectionname = props.match.params.collectionname;

  return (
    <div>
      <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
        <TopBanner />
        <NavBar />

        <HeroImage />

        <Products collectionname={collectionname} />

        <Footer />
      </Suspense>
    </div>
  );
}
