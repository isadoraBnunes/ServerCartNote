const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const ProductSchema = mongoose.model('Product').schema

const ProductListSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    totalValue: {
        type: Number
    },
    createdAt: {
        type: Date, default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'//, required: true
    },
    products: [{
        ProductSchema
    }],
});
ProductListSchema.methods.getTotalValue = function () {
    this.totalValue = 0
    this.children.array.forEach(child => {
        this.totalValue += child.value
    });
}

ProductListSchema.plugin(mongoosePaginate);
mongoose.model('ProductList', ProductListSchema);
