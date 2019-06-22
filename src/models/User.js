const mongoose = require('mongoose')
const ProductsList = mongoose.model('ProductsList')

const UserSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: Number, required: true },
    productLists: [ProductsList.schema]
});

mongoose.model('User', UserSchema);