const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    productLists: [ProductsList.schema]

mongoose.model('User', UserSchema);
