import React, { useState } from "react";
import NavBar from "./Navigation/NavBar";
import HeroImage from "./Navigation/HeroImage";
import Footer from "./Navigation/Footer";

import Product from "./Product";
import products from "../data/Allproducts.json";
import TopBanner from './Navigation/TopBanner';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SearchProducts.scss";
import loadingIcon from "../assets/images/dashboardloader3.gif";
import { useToasts } from "react-toast-notifications";
export default function SearchProducts() {
  const { addToast } = useToasts();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchresult, setsearchresult] = useState([]);

  const SearchProducts = (e) => {
    e.preventDefault();
    if (query !== "") {
      setLoading(true);
      const results = products.filter((product) =>
        product.productname.toLowerCase().includes(query.toLowerCase())
      );

      setsearchresult(results);
      setLoading(false);
      if (results.length < 1) {
        addToast(
          " No result found for the following product: " +
            query +
            ". Please provide a valid product name and try again.",
          { appearance: "error", autoDismiss: true }
        );
      }
    } else {
      addToast("Please type something.", {
        appearance: "info",
        autoDismiss: true,
      });
    }
  };

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
    setsearchresult([]);
  
  };
  return (
    <div>
      <TopBanner/>
      <NavBar />
      <HeroImage />
      <div className="row container-search-bar">
        <div className="col-lg-12">
          <h1>
            Search products. {query.length > 0 ? "Search query: " + query : ""}
          </h1>
          <div className="mb-3">
            {loading && (
              <img src={loadingIcon} alt="loading" className="loadingIcon" />
            )}
          </div>

          <form onSubmit={SearchProducts}>
            <div className="input-group">
              <input
                className="form-control form-control-lg shadow-none form-input-search-bar"
                type="text"
                placeholder="Search for any product"
                autoFocus
                name="query"
                value={query}
                onChange={handleSearchInput}
              />
              <div className="input-group-append">
                <button className="btn search-button shadow-none" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="containet-search-product">
        <div className="container-products">
          <div className="row">
            {searchresult.length >= 1
              ? searchresult.map((product) => (
                  <Product data={product} key={product.id} />
                ))
              : ""}
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
