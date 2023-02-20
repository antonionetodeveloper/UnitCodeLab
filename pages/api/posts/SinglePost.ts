import { CORS } from "./../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { PostModule } from "../../../models/posts"

const GetPost = async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method == "POST") {
		const { PostID } = await request.body
		const Post = await PostModule.findById(PostID)
		Post.__v = null

		return response
			.status(200)
			.json({ message: "Post Encontrado com sucesso!", Post })
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default CORS(ConnectDB(GetPost))
