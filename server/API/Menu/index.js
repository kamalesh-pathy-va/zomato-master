import express from "express";

import {MenuModel} from "../../database/menu";
import {ImageModel} from "../../database/image";

const Router = express.Router();

/*
Router		/list
Description	Get all menu for particular resttaurant
Params		_id
Access		Public
Method		Get
*/

Router.get("/list/:_id", async(req, res) => {
	try {
		const {_id} = req.params;
		const menus = await MenuModel.findOne(_id);
		return res.json({menus});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
});

/*
Router		/image
Description	Get menu image based on id
Params		_id
Access		Public
Method		Get
*/

Router.get("/image/:_id", async (req, res) =>{
	try {
		const {_id} = req.params;
		const menus = await ImageModel.findOne(_id);

		return res.json({menus});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
});

export default Router;