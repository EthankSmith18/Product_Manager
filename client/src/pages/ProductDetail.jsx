import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Details:</h1>
      {product && (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <h4>Price: ${product.price}</h4>
            <h4>Description: {product.description}</h4>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <Link
              to={`/products/${product._id}/edit`}
              className="btn btn-primary me-2"
            >
              Edit
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
