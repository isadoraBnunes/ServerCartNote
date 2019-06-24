const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});
UserSchema.plugin(mongoosePaginate);
mongoose.model("User", UserSchema);
