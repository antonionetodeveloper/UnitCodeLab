import { CORS } from "./../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { waterfallAnswearModule } from "../../../models/waterfall_answear"
import { formatDate } from "./formatDate/service"

const CreatePost = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "POST") {
		const { CommentID, Author, Content } = await request.body

		if (!CommentID) {
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
			const commentsCount = await waterfallAnswearModule.count({ ID: /@/ })
			const newCommentID = CommentID + "@" + commentsCount

			const Comment = {
				ID: newCommentID,
				content: Content,
				author: Author,
			}

			await waterfallAnswearModule.create(Comment)

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
