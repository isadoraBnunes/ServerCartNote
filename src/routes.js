const express = require('express');
const routes = express.Router();

const User = require('./controllers/User');
const Product = require('./controllers/Product');
const ProductList = require('./controllers/ProductList');

routes.get('/products', Product.index);
routes.get('/products/:id', Product.show);
routes.post('/products', Product.store)
routes.put('/products/:id', Product.update);
routes.delete('/products/:id', Product.destroy);

routes.get('/productsList', ProductList.index);
routes.get('/productsList/:id', ProductList.show);
routes.post('/productsList/', ProductList.store);
routes.put('/productsList/:id', ProductList.update);
routes.delete('/productsList/:id', ProductList.destroy);

routes.get('/user/:id', User.store);

module.exports = routes;