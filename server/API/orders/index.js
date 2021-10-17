import express from "express";
import { get } from "mongoose";
import { reset } from "nodemon";
import passport from "passport";

import { OrderModel } from "../../database/order";

const Router = express.Router();

/*
Router		/
Description	get all orders based on id
Params		_id
Access		Public
Method		Get
*/

Router.get("/:_id", passport.authenticate("jwt", {session: false}) ,async (req, res) => {
    try {
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });

        if (!getOrders)
            return res.status(404).json({ error: "User not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/*
Router		/new
Description	Add new order
Params		_id
Access		Public
Method		Post
*/

Router.post("/new/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {orderDetails: orderDetails}
            }
        );
        return res.json({ order: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;