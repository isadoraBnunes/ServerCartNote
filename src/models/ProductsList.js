const mongoose = require('mongoose');
const ProductSchemas = require('./Product')

const ProductsListSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    totalValue: { type: Number, required: true },
    products: [ProductSchemas]
});

mongoose.model('ProductsList', ProductsListSchema);
