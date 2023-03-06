import mongoose, { Schema } from "mongoose"

const waterfallAnswearSchema = new Schema(
	{
		ID: { type: String, required: true },
		content: { type: String, required: true },
		author: { type: String, required: true },
		updatedAt: { type: Date, default: Date.now },
	},
	{ collection: "waterfall_answear" },
)

export const waterfallAnswearModule: any =
	mongoose.models.waterfall_answear ||
	mongoose.model(
		"waterfall_answear",
		waterfallAnswearSchema,
		"waterfall_answear",
	)
