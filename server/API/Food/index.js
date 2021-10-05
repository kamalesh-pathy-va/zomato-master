import express from "express";

import {FoodModel} from "../../database/food";

const Router = express.Router();

/*
Router		/
Description	Get all food in particular restaurant
Params		_id
Access		Public
Method		Get
*/

Router.get("/:_id", async(req, res) =>{
	try{
		const {_id} = req.params;
		const foods = await FoodModel.find({restaurant: _id});

		return res.json({foods});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
});

/*
Router		/r
Description	Get all food based on particular category
Params		category
Access		Public
Method		Get
*/

Router.get("/r/:category", async(req, res) =>{
	try {
		const {category} = req.params;
		const foods = await FoodModel.find({
			category: {$regex: category, $options: "i"}
		});
		return res.json({foods});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
});

export default Router;