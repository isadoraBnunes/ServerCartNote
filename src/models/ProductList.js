const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

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
		ref: "User",
		required: true
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product" //, required: true
		}
	]
});
ProductListSchema.methods.getTotalValue = function() {
	this.totalValue = 0;
	this.children.array.forEach(child => {
		this.totalValue += child.value * child.quantity;
	});
};

ProductListSchema.plugin(mongoosePaginate);
mongoose.model("ProductList", ProductListSchema);
