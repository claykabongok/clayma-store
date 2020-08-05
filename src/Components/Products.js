import React from 'react'
import data from '../data/Allproducts.json';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Products.scss';
import Product from './Product';

export default function Products() {
 
    return (
        <div  className="container-products">
            <div className="header-products">
            <h1 >Products list</h1>
       
      
            </div>
           
            <div className="row">
                {
                    data.map((product)=>(
                        <Product data={product} key={product.id}/>

                        

                    ))
                }

            </div>

            
        </div>
    )
}
