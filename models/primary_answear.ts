import mongoose, { Schema } from "mongoose"

const primaryAnswearSchema = new Schema(
	{
		ID: { type: String, required: true },
		content: { type: String, required: true },
		author: { type: String, required: true },
		updatedAt: { type: Date, default: Date.now },
	},
	{ collection: "primary_answear" },
)

export const primaryAnswearModule: any =
	mongoose.models.primary_answear ||
	mongoose.model("primary_answear", primaryAnswearSchema, "primary_answear")
