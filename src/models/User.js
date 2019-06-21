const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pass: {
    type: Number,
    required: true,
  },
  products: {
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
createdAt: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.plugin(mongoosePaginate);
mongoose.model('ProductsList', ProductSchema);