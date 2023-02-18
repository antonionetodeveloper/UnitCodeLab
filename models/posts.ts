import mongoose, { Schema } from "mongoose"

const PostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	updatedAt: { type: String, required: true },
	comentsCont: { type: String, required: true },
})

export const PostModule: any =
	mongoose.models.posts || mongoose.model("posts", PostSchema)
