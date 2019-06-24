const express = require('express');
const routes = express.Router();

const User = require('./controllers/User');
const Product = require('./controllers/Product');
const ProductsList = require('./controllers/ProductsList');

routes.get('/products', Product.index);
routes.get('/products/:id', Product.show);
routes.post('/products', Product.store)
routes.put('/products/:id', Product.update);
routes.delete('/products/:id', Product.destroy);

routes.get('/productsList', ProductsList.index);
routes.get('/productsList/:id', ProductsList.show);
routes.post('/productsList/', ProductsList.store);
routes.put('/productsList/:id', ProductsList.update);
routes.delete('/productsList/:id', ProductsList.destroy);

routes.post('/user/:id', User.store);

module.exports = routes;