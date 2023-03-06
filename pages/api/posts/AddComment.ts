import { CORS } from "./../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { primaryAnswearModule } from "../../../models/primary_answear"
import { formatDate } from "./formatDate/service"

const CreatePost = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "POST") {
		const { PostID, Author, Content } = await request.body

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
			const commentsCount = await primaryAnswearModule.count({ ID: /@/ })
			const commentID = PostID + "@" + commentsCount

			const Comment = {
				ID: commentID,
				content: Content,
				author: Author,
			}

			await primaryAnswearModule.create(Comment)

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
