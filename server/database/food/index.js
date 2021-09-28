import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	isVeg: {type: Boolean, required:true},
	isContainsEgg: {type: Boolean, required:true},
	category: {type: String, required:true},
	photos: {
		type: mongoose.Types.ObjectID,
		ref: "Images"
	},
	price: {type: Number, default: 150, required: true},
	addOns: [
		{
			type: mongoose.Types.ObjectID,
			ref: "Foods"
		}
	],
	restaurant: {
		type: mongoose.Types.ObjectID,
		ref: "Restaurants",
		required: true
	}
},
{
	timestamps: true
});

export const FoodModel = mongoose.model("Foods", FoodSchema);