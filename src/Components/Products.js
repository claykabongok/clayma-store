import React from 'react'
import data from '../data/Allproducts.json';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Products.scss';
import Product from './Product';

export default function Products(props) {

    const collectionname=props.collectionname;


 
    return (
        <div  className="container-products">
            <div className="header-products">
            <h1 > {collectionname != null ? collectionname.toUpperCase()+"'s collection " : "Products list" }</h1>
       
      
            </div>
           
            <div className="row">
                {
                    collectionname != null ?
                 data.filter((product) =>
        product.category === collectionname).map((product)=>(
              <Product data={product} key={product.id} />
        ))
      

                    :
                    data.map((product)=>(
                        <Product data={product} key={product.id}/>

                        

                    ))
                }

            </div>

            
        </div>
    )
}
