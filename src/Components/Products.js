import React from "react";
import data from "../data/Allproducts.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Products.scss";
import Product from "./Product";

export default function Products(props) {
  const collectionname = props.collectionname;
  let products = [];
  let header_collection;

  switch (collectionname) {
    case "women":
      products = data.filter((product) => product.category === collectionname);
      header_collection = "Collection: " + collectionname.toUpperCase();
      break;
    case "kids":
      products = data.filter((product) => product.category === collectionname);
      header_collection = "Collection: " + collectionname.toUpperCase();
      break;
    case "men":
      products = data.filter((product) => product.category === collectionname);
      header_collection = "Collection: " + collectionname.toUpperCase();
      break;
    case "Trending":
      products = data.filter(
        (product) => product.product_status === collectionname
      );
      header_collection = "Collection: " + collectionname.toUpperCase();
      break;
    case "New":
      products = data.filter(
        (product) => product.product_status === collectionname
      );
      header_collection = "Collection: " + collectionname.toUpperCase();
      break;
    default:
      products = data;
      header_collection="Products list";
  }

  return (
    <div className="container-products">
      <div className="header-products">
        <h1>
        
            {header_collection}
        </h1>
      </div>

      <div className="row">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
