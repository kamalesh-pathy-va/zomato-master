import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
	food: {type: mongoose.Types.ObjectID, ref: "Foods"},
	restaurant: {type: mongoose.Types.ObjectID, ref: "Restaurants"},
	user: {type: mongoose.Types.ObjectID, ref: "Users"},
	rating: {type: Number, required: true},
	reviewText: {type: String, required: true},
	photos: [
		{
			type: mongoose.Types.ObjectID,
			ref: "Images"
		}
	]
},
{
	timestamps: true
});

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);