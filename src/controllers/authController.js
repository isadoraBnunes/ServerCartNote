const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const authConfig = require("../config/auth");

const generateToken = (params = {}) => {
	return jwt.sign(params, authConfig.secret, {
		expiresIn: 86400
	});
};

const register = async (req, res) => {
	const { username } = req.body;
	try {
		if (await User.findOne({ username }))
			return res.status(400).send({ error: "User already exists" });
		const user = await User.create(req.body);
		user.password = undefined;
		return res.send({
			user,
			token: generateToken({ id: user.id })
		});
	} catch (err) {
		return res.status(400).send({ error: "Registration failed" });
	}
};

const authenticate = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username }).select("+password");
	if (!user) return res.status(400).send({ error: "User not found" });
	if (!(await bcrypt.compare(password, user.password)))
		return res.status(400).send({ error: "Invalid password" });
	user.password = undefined;
	res.send({
		user,
		token: generateToken({ id: user.id })
	});
};

module.exports = {
	register,
	authenticate
};
