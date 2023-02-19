import mongoose, { Schema } from "mongoose"

const PostSchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		author: { type: String, required: true },
		commentsCount: { type: Number, default: 0 },
		updatedAt: { type: Date, default: Date.now },
	},
	{ collection: "Posts" },
)

export const PostModule: any =
	mongoose.models.posts || mongoose.model("posts", PostSchema, "Posts")
