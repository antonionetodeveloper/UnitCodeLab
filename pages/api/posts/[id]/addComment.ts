import { PostModule } from "./../../../../models/posts"
/* eslint-disable no-var */
import { NextApiRequest, NextApiResponse } from "next"

import { CORS } from "../../../../middleware/Cors"
import { ConnectDB } from "../../../../middleware/ConnectDB"
import { CommentsModule } from "../../../../models/comments"

import { generateRandomHexdecimal } from "./../services/GenRandomHexNumber"

const AddComment = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "POST") {
		const { PostID, PostOwerID, Author, Content, Reference } =
			await request.body

		const ParentID = PostOwerID == PostID ? null : PostOwerID

		const Post = await PostModule.findOne({ _id: PostID })

		if (!PostID) {
			return response
				.status(400)
				.json({ error: "ID não identificada corretamente." })
		}

		if (!Author) {
			return response.status(400).json({ error: "Faça o login antes." })
		}

		if (!Content || typeof Content != "string") {
			return response.status(400).json({ error: "Comentário inválido." })
		}

		try {
			Post.updatedAt = Date.now()
			Post.commentsCount += 1

			// have child
			if (ParentID != null) {
				const Comment = {
					_id: generateRandomHexdecimal(24),
					post: PostID,
					reference: Reference,
					content: Content,
					author: Author,
					updatedAt: new Date(),
				}

				const ParentComment = await CommentsModule.findOne({ _id: ParentID })
				ParentComment.children.push(Comment)
				await ParentComment.save()
				await Post.save()

				const AllComments = await CommentsModule.find({ post: PostID })

				return response.status(201).json({
					success: true,
					data: AllComments,
				})
			}

			// doesn't have child
			if (ParentID == null) {
				const Comment = {
					post: PostID,
					reference: null,
					content: Content,
					author: Author,
					updatedAt: new Date(),
					children: [],
				}

				await CommentsModule.create(Comment)
				await Post.save()

				const AllComments = await CommentsModule.find({ post: PostID })

				return response.status(201).json({
					success: true,
					data: AllComments,
				})
			}
		} catch (error) {
			return response.status(400).json({
				success: false,
				error: "Erro ao tentar adicionar o comentário. Erro -> " + error,
			})
		}
	}
	return response
		.status(405)
		.json({ success: false, error: "Método inválido." })
}

export default CORS(ConnectDB(AddComment))
