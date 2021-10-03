import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
	fullname: {type:String, required: true},
	email: {type:String, required: true},
	password: {type: String},
	address: [{detail: {type:String}, for:{type:String}}],
	phoneNumber: [{type: Number, required: true}]
},
{
	timestamps: true
});

UserSchema.methods.generateJwtToken = function () {
	return jwt.sign({user: this._id.toString()}, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async ({ email, phoneNumber }) => {
	//check user by email and phonenumber
	const checkUserByEmail = await UserModel.findOne({email});
	const checkUserByPhone = await UserModel.findOne({phoneNumber});

	if(checkUserByEmail || checkUserByPhone) {
		throw new Error("User already exists");
	}
	return false;
};

UserSchema.pre("save", function(next){
	const user = this;

	if(!user.isModified("password")) return next();

	bcrypt.genSalt(8, (error, salt) => {
		if(error) return next(error);

		//hashing 
		bcrypt.hash(user.password, salt, (error, hash) => {
			if(error) return next(error);

			//asigning hashed password
			user.password = hash;
			return next();
		});
	});
});

export const UserModel = mongoose.model("Users", UserSchema);