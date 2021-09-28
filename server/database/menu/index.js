import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
	menus: [
		{
			name: {type: String, required: true},
			items: [
				{
					type: mongoose.Types.ObjectID,
					ref: "Foods"
				}
			]
		}
	],
	recomended: [
		{
			type: mongoose.Types.ObjectID,
			ref: "Foods",
			unique: true
		}
	]
},
{
	timestamps: true
});

exports const MenuModel = mongoose.model("Menus", MenuSchema)