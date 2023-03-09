import { PostModule } from "../../../../models/posts"
/* eslint-disable prefer-const */
import { CommentsModule } from "../../../../models/comments"
import { NextApiRequest, NextApiResponse } from "next"
import { ConnectDB } from "../../../../middleware/ConnectDB"
import { CORS } from "../../../../middleware/Cors"
import { formatDate } from "../services/formatDate"

const GetPost = async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method == "GET") {
		const post_id = await request.query
		console.log(post_id)

		try {
			const Post = await PostModule.findOne({ _id: post_id.id })
			const AllComments = await CommentsModule.find({ post: post_id.id })

			if (!post_id.id || !Post) {
				return response.status(404).json({ error: "Post não encontrado." })
			}

			return response.status(200).json({
				success: true,
				Post,
				Comments: AllComments,
				FormatedDate: formatDate(Post.updatedAt),
			})
		} catch (error) {
			return response
				.status(400)
				.json({ success: false, error: "Erro. -> " + error })
		}
	}

	return response
		.status(405)
		.json({ success: false, error: "Método inválido." })
}

export default CORS(ConnectDB(GetPost))
