import React from "react";
import "../../styles/HeroImage.scss";

export default function HeroImage(props) {
  let collection='';
  if(props.header){
collection=': '+props.header;
collection=collection.replace("_"," ");


  }
  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <h1>
          <span>Clayma</span> store  <span>{collection}</span>
        </h1>
        
      </div>
    </div>
  );
}
