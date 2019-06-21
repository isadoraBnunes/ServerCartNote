const mongoose = require('mongoose');

const ProductList = mongoose.model('ProductList');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const ProductList = await ProductList.paginate({}, { page, limit: 10 });

    return res.json(ProductList);
  },

  async show(req, res) {
    const ProductList = await ProductList.findById(req.params.id);

    return res.json(ProductList);
  },

  async store(req, res) {
    const ProductList = await ProductList.create(req.body);
    
    return res.json(ProductList);
  },

  async update(req, res) {
    const ProductList = await ProductList.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(ProductList);
  },

  async destroy(req, res) {
    await ProductList.findByIdAndRemove(req.params.id);

    return res.send();
  }
};