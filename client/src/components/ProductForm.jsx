import { useState } from "react";
import axios from "axios";
import React from "react";

function ProductForm({ setLoaded }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTitle('');
    setDescription('');
    setPrice(0);
    const newProduct = {
        title,
        price,
        description,
    };

    axios
        .post('http://localhost:5001/api/products', newProduct)
        .then(res => {
            console.log(res.data)
            setLoaded(false);
        })
        .catch(err => console.log(err));
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
