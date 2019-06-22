const mongoose = require('mongoose');
const ProductsLists = require('./ProductsList')

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: Number, required: true },
    productLists: [ProductsLists]
});

mongoose.model('ProductsList', UserSchema);