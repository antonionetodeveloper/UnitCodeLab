import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		login: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: false, default: "NoEmail" },
		updatedAt: { type: Date, default: Date.now },
	},
	{ collection: "Users" },
)

export const UserModule: any =
	mongoose.models.users || mongoose.model("users", UserSchema, "Users")
