import React from "react";
import "../../styles/SecondaryIntro.scss";
import FirstImageIntro from '../../assets/images/clothing-store-984396_1920.jpg'
import SecondImageIntro from '../../assets/images/store-984393_1920.jpg';
export default function SecondaryIntro() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-5 secondary-intro-fisrt-image-container">
        <div className="card-product card-secondary-intro">
      <img className="card-img-top" 
      src={FirstImageIntro}
       
       alt="Products" />
     
        <div className="card-body ">
        <div className="secondaryIntroHeader"> New Arrival</div>
        {/* <h2 class="card-title">
        New Arrival
          </h2> */}
          
          {/* <a
            href="/collections/top_rated"
            className="stretched-link"
          > </a> */}
           <a href="/collections/top_rated" className="btn-show-now-secondary-intro">Shop Now</a>
        </div>
       
      </div>
          {/* <div className="row ">
            <div className="col-lg-6 secondary-intro-first-image"></div>
            <div className="col-lg-6 secondary-intro-first-image-text">
              <div className="secondary-intro-fisrt-image-content">
                <h1>New Arrival</h1>
                <a href="/collections/new_products" className="btn-show-now-secondary-intro">Shop Now</a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-lg-5 secondary-intro-second-image-container">
        <div className="card-product card-secondary-intro">
      <img className="card-img-top" 
      src={SecondImageIntro}
       
       alt="Products" />
     
        <div className="card-body">
        <div className="secondaryIntroHeader">Top rated</div>
        {/* <h2 className="card-title">
        Top rated
          </h2> */}
          
          {/* <a
            href="/collections/top_rated"
            className="stretched-link"
          > </a> */}
           <a href="/collections/top_rated" className="btn-show-now-secondary-intro">Shop Now</a>
        </div>
       
      </div>

          {/* <div className="row">
            <div className="col-lg-6 secondary-intro-second-image"></div>
            <div className="col-lg-6 secondary-intro-second-image-text">
              <div className="secondary-intro-second-image-content">
                <h1>Top rated </h1>
                <a href="/collections/top_rated" className="btn-show-now-secondary-intro">Shop Now</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
