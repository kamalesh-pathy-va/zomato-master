import express from "express";
import RestaurantModel from "../../database/restaurant";

const Router = express.Router();

/*
Router		/
Description	Get all Restaurants details
Params		None
Access		Public
Method		Get
*/

Router.get("/", async (req, res) => {
	try{
		const {city} = req.query;
		const restaurants = await RestaurantModel.find({city});
		return res.json({restaurants});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
});

/*
Router		/
Description	Get all Restaurants details
Params		_id
Access		Public
Method		Get
*/

Router.get("/:_id", async(req, res) =>{
	try {
		const {_id} = req.params;
		const restaurant = await RestaurantModel.findOne(_id);

		if (!restaurant)
			return res.status(404).json({error: "Restaurant not found"});

		return res.json({restaurant});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
});

/*
Router		/
Description	Get Restaurants details search
Params		none
Body		searchString
Access		Public
Method		Get
*/

Router.get("/search", async(req, res) => {
	try {
		const {searchString} = req.body;
		const restaurants = await RestaurantModel.find({
			name: {$regex: searchString, $options: "i"}
		});
		return res.json({restaurant});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
});

export default Router;