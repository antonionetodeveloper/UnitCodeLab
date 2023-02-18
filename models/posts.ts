import mongoose, { Schema } from "mongoose"

const PostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	comentsCount: { type: Number, required: true },
	alterationID: { type: Number, required: true },
})

export const PostModule: any =
	mongoose.models.posts || mongoose.model("posts", PostSchema)
