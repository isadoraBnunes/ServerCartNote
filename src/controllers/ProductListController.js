const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ProductList = mongoose.model("ProductList");
const authMiddleware = require("../middlewares/auth");

router.use(authMiddleware);
module.exports = {
	async index(req, res) {
		console.log(req);
		const { page = 1 } = req.query;
		const productLists = await ProductList.paginate({}, { page, limit: 10 });
		return res.json(productLists);
	},

	async show(req, res) {
		const productList = await ProductList.findById(req.params.id).populate;
		return res.json(productList);
	},

	async store(req, res) {
		//fix with auth
		try {
			console.log(req.header.json);
			const productList = await ProductList.create(req.body);
			productList.save();
			return res.json(productList);
		} catch (error) {
			console.log(error);
		}
	},

	async update(req, res) {
		const productList = await ProductList.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		return res.json(productList);
	},

	async destroy(req, res) {
		await ProductList.findByIdAndRemove(req.params.id);
		return res.send();
	}
};
