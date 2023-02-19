import { CORS } from "../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { PostModule } from "../../../models/posts"

const GetRelevantPosts = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "GET") {
		// Get the 10 most popular discussions
		const Posts = await PostModule.find().sort({ commentsCount: -1 }).limit(10)

		if (!Posts) {
			return response
				.status(400)
				.json({ error: "Não foi possivel encontrar os posts." })
		}

		return response
			.status(200)
			.json({ message: "Posts encontrados com sucesso!", Posts })
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default CORS(ConnectDB(GetRelevantPosts))
