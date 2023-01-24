import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";



function ProductList({ products, setLoaded }) {

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res.data)
        setLoaded(false);
      })
      .catch((err) => console.log(err));
      };



  return (
    products &&
    products.map((product) => {
      return (
        <div key={product._id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <p>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
            </p>
            <div>
              <Link
                to={`/products/${product._id}/edit`}
                className="btn btn-primary m-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default ProductList;
