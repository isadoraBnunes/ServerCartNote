const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  finalized: {
    type: Boolean,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema);