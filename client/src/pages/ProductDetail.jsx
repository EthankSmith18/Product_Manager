import React from "react";
import { Params, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/products/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  return (
    <div>
      <h1>Details:</h1>
      { product && <div className="card">
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <h4>Price: ${product.price}</h4>
            <h4>Description: {product.description}</h4>
        </div>
      </div> }
    </div>
  );
}

export default ProductDetail;
