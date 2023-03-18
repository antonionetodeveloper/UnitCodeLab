import { CORS } from "../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { PostModule } from "../../../models/posts"

const GetRelevantPosts = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "GET") {
		const { page } = request.query as { page: string }
		const pageNumber = parseInt(page) || 1

		// Get the 10 most popular discussions
		const Posts = await PostModule.find()
			.sort({ commentsCount: -1 })
			.skip((pageNumber - 1) * 10)
			.limit(10)

		let PageCount = await PostModule.estimatedDocumentCount({})
		PageCount = Math.ceil(PageCount / 10)

		if (!Posts) {
			return response.status(400).json({ success: false })
		}

		return response.status(200).json({ success: true, Posts, PageCount })
	}
	return response.status(405).json({ success: false })
}

export default CORS(ConnectDB(GetRelevantPosts))
