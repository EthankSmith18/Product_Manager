const { create, message, findAll, findOne } = require('../controllers/product.controller');

const express = require('express');
const productRouter = express.Router();

productRouter
    .route('/')
    .get(message);

productRouter
    .route('/products')
    .post(create)
    .get(findAll);

productRouter
.route('/products/:id')
.get(findOne);

module.exports = productRouter;