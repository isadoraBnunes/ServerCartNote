const mongoose = require('mongoose');
const ProductList = mongoose.model('ProductList');
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const productList = ProductList.findByIdAndUpdate(req.body.id)
    const products = await productList.products.paginate({}, { page, limit: 100 });

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id)//parent().id

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body.product)
    const productList = await ProductList.findByIdAndUpdate(req.body.id,//parent().id 
      {$push: {products:product}}, {new: true}) 
    return res.json(productList)
  },

  async update(req, res) {
    const product = await Product.create(req.body)
    const productList = ProductList.findById(req.body.id)//parent().id
    productList.products.id(req.params.id) = product
    productList.save()
    return res.json(productList);
  },

  async destroy(req, res) {
    const productList = ProductList.findById(req.body.id)//parent().id
    productList.products.id(req.params.id).remove();

    return res.json(productList);
  }
};

/*
{
	"id": "5d0eae2946f77651c8e4e2ba",
	"description": "product",
    "unit": "kg",
    "quantity": 2,
    "finalized": false ,
    "value": 30.5
}
*/