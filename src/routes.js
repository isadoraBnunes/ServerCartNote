const express = require("express");
const routes = express.Router();

const Product = require("./controllers/ProductController");
const AuthController = require("./controllers/authController");
const ProductList = require("./controllers/ProductListController");

const middleware = require("./middlewares/auth");
routes.get("/product", Product.index);
routes.get("/product/:id", Product.show);
routes.post("/product", Product.store);
routes.put("/product/:id", Product.update);
routes.delete("/product/:id", Product.destroy);

routes.get("/productList", ProductList.index);
routes.get("/productList/:id", ProductList.show);
routes.post("/productList/", ProductList.store);
routes.put("/productList/:id", ProductList.update);
routes.delete("/productList/:id", ProductList.destroy);

routes.post("/register", AuthController.register);
routes.post("/authenticate", AuthController.authenticate);
routes.use(middleware);

module.exports = routes;
