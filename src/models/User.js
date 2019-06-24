const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

mongoose.model("User", UserSchema);
