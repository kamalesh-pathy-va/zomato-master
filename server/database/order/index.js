import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectID,
		ref: "Users"
	}

	orderDetails: [
		{
			food: {
				type: mongoose.Types.ObjectID,
				quantity: {type: Number, required: true},
				paymode: {type: String, required: true},
				status: {type: String, default: "Placed"},
				paymentDetails: {
					itemTotal: {type: Number, required: true},
					promo: {type: Number},
					tax: {type: Number, required: true}
				}
			}
		}
	],

	orderRating: {type: Number, required: true},
},
{
	timestamps: true
});

export const OrderModel = mongoose.model("Orders", OrderSchema);