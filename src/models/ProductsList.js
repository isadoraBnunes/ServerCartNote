const mongoose = require('mongoose')
const Product = mongoose.model('Product')

const ProductsListSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    totalValue: { type: Number, required: true },
    products: [Product.schema]
});
mongoose.model('ProductsList', ProductsListSchema);
