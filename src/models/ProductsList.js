const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const Product = mongoose.model('Product')

const ProductsListSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    totalValue: { type: Number, required: true },
    products: [Product.schema]
});
ProductsListSchema.plugin(mongoosePaginate);
mongoose.model('ProductsList', ProductsListSchema);
