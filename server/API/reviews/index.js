import express from "express";

import { ReviewModel } from "../../database/reviews";

const Router = express.Router()

/*
Router		/new
Description	add new reviews
Params		none
Body        Review Object
Access		Public
Method		Get
*/

Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.body;
        await ReviewModel.create(reviewData);
        return res.json({ review: "Successfuly created review" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Router		/delete
Description	add new reviews
Params		_id
Access		Public
Method		Delete
*/

Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({ review: "Successfuly Deleted review" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;