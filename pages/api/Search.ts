import { PostModule } from "./../../models/posts"
import { CORS } from "../../middleware/Cors"
import { ConnectDB } from "../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"

const SearchEndPoint = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	const { query } = request.body
	const regex = { $regex: query, $options: "i" }

	const data = await PostModule.find({ title: regex })
		.sort({ commentsCount: -1 })
		.limit(3)

	try {
		if (!data[0]) {
			return response
				.status(200)
				.json({ message: "Nenhuma discussão encontrada." })
		}

		return response.status(200).json(data)
	} catch (error) {
		return response.status(400).json({ error: "Error -> " + error })
	}
}

export default CORS(ConnectDB(SearchEndPoint))
