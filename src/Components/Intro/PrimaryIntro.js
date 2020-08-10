import React from "react";

import "../../styles/PrimaryIntro.scss";

export default function PrimaryIntro() {
  return (
    <div>
    
      <div className="row mt-5">
        <div className="col-lg-4 primary-intro-fisrt-image">
          <div className="primary-intro-fisrt-image-text">
            <h4>SALE & OFFERS</h4>
            <p>
              {" "}
              <span className="product-banner-dicsount">30% OFF</span> and Much more
            </p>
          </div>
         
        </div>
        <div className="col-lg-4 primary-intro-second-image">
          <div className="content">
          <div className="content-text">
          <h2>Latest <span>brands</span></h2>
            </div>
           

          </div>
        </div>
        <div className="col-lg-4 primary-intro-third-image">
          <div className="primary-intro-third-image-text">
          

            <div className="sign_up_ad_one-text">
                                <span className="intro-ad-two-text-banner">Limited Time Offer</span>
                    <h4>SALE & OFFERS</h4>
                    <p>  <span className="product-banner-dicsount">30% OFF</span>  and Much more</p>  
          </div>
         
        </div>
        </div>
      </div>
 
     
    </div>
  );
}
