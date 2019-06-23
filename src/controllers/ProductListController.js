const mongoose = require('mongoose');
const ProductList = mongoose.model('ProductList');
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const productLists = await ProductList.paginate({}, { page, limit: 10 });
    return res.json(productLists);
  },

  async show(req, res) {
    const productList = await ProductList.findById(req.params.id).populate;
    return res.json(productList);
  },

  async store(req, res) {//fix with auth
    const productList = await ProductList.create(req.body)
    productList.save()
    return res.json(productList)
  },

  async update(req, res) {
    const productList = await ProductList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(productList);
  },

  async destroy(req, res) {
    await ProductList.findByIdAndRemove(req.params.id);
    return res.send();
  }
};