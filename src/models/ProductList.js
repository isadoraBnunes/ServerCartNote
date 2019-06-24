const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const ProductSchema = mongoose.model("Product").schema;

const ProductListSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	totalValue: {
		type: Number
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User" //, required: true
	},
	products: [
		{
			ProductSchema
		}
	]
});
<<<<<<< HEAD
ProductListSchema.methods.getTotalValue = function () {
    this.totalValue = 0
    this.children.array.forEach(child => {
        this.totalValue += child.value*child.quantity
    });
}
=======
ProductListSchema.methods.getTotalValue = function() {
	this.totalValue = 0;
	this.children.array.forEach(child => {
		this.totalValue += child.value;
	});
};
>>>>>>> 3e97814feab84a75a983073811fa51b957d508ba

ProductListSchema.plugin(mongoosePaginate);
mongoose.model("ProductList", ProductListSchema);
