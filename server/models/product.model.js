const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
      minlength: [2, 'Title must be at least 2 characters long']
    },
    price: {
     type: Number,
     min:[1, 'Price must be above zero'],
     max:[1000, 'Price must be below 1000'],
     required: [true, 'Price is required.']
    },
    description:{
     type: String,
     required: [true, 'Description is required.'],
     minlength: [5, 'Description must be at least 5 characters long']
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;