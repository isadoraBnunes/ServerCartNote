const mongoose = require('mongoose');

const ProductsList = mongoose.model('ProductsList');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const productsLists = await ProductsList.paginate({}, { page, limit: 10 });

    return res.json(productsLists);
  },

  async show(req, res) {
    const productsList = await ProductsList.findById(req.params.id);

    return res.json(productsList);
  },

  async store(req, res) {
    const productsList = await ProductsList.create(req.body);
    
    return res.json(productsList);
  },

  async update(req, res) {
    const productsList = await ProductsList.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(productsList);
  },

  async destroy(req, res) {
    await ProductsList.findByIdAndRemove(req.params.id);

    return res.send();
  }
};