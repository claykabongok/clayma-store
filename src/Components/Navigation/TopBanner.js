import React from "react";
import "../../styles/TopBanner.scss";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function TopBanner() {
  return (
    <div className="top-banner-container">
      <div className="row">
        <div className="col-lg-3">
          <FontAwesomeIcon icon={faPhone} className="top-banner-icon" />
          +0199999999
        </div>
        <div className="col-lg-3">
          <FontAwesomeIcon icon={faEnvelope} className="top-banner-icon" />
          sales@store.com
        </div>
        <div className="col-lg-6">
          On sale now up to 50% off!
          <Link to="/shop" className="shop_now_link_top_banner">
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
}
