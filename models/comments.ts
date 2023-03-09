import mongoose, { Schema } from "mongoose"

const CommentsSchema = new Schema({
	post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
	reference: { type: String },
	content: { type: String, required: true },
	author: { type: String, required: true },
	updatedAt: { type: Date, default: Date.now },
	children: [],
})

CommentsSchema.methods.toJSON = function () {
	const comment = this.toObject()
	comment.id = comment._id
	delete comment._id
	delete comment.__v
	return comment
}

export const CommentsModule: any =
	mongoose.models.Comments ||
	mongoose.model("Comments", CommentsSchema, "Comments")
