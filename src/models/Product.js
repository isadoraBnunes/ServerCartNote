const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    description: {
        type: String, required: true
    },
    unit: {
        type: String, required: true
    },
    quantity: {
        type: Number, required: true
    },
    finalized: {
        type: Boolean, default: false, required: true
    },
    value: {
        type: Number, required: true
    },
});
ProductSchema.methods.setFinalized = function (isFinalized) {
    this.setFinalized = isFinalized
}
ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema);


