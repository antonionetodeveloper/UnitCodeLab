import { CORS } from "./../../../middleware/Cors"
import { PostModule } from "./../../../models/posts"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"

const CreatePost = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "PUT") {
		const { PostID, Comment } = await request.body
		const Post = await PostModule.findById(PostID)

		if (!PostID || !Post) {
			return response
				.status(400)
				.json({ error: "ID não identificada corretamente." })
		}

		if (!Comment || typeof Comment != "string") {
			return response.status(400).json({ error: "Comentário inválido." })
		}

		try {
			const currentDate = new Date()
			const commentID = PostID + " " + currentDate
			const CommentIndex = Post.comments.length

			Post.comments.push({ commentID, CommentIndex, Comment, nextLevel: [] })
			Post.commentsCount += 1
			Post.updatedAt = Date.now

			await PostModule.findByIdAndUpdate({ _id: PostID }, Post)
			return response
				.status(201)
				.json({ message: "Comentário adicionado com sucesso." })
		} catch (error) {
			return response.status(400).json({
				error: "Erro ao tentar adicionar o comentário. Erro -> " + error,
			})
		}
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default CORS(ConnectDB(CreatePost))
