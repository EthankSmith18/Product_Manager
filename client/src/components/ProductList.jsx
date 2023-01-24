import React from "react";
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    products && products.map(product =>{
        return(
            <div key={product._id} className="card mb-3">
                <div className="card-body">
                    <p><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                </div>
            </div>
        )
    })
  );

}

export default ProductList;
