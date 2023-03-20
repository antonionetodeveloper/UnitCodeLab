import { CORS } from "../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { PostModule } from "../../../models/posts"

const GetIdPosts = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "GET") {
		const allPosts = await PostModule.find().distinct("_id")
		return response.status(200).json({ success: true, data: allPosts })
	}
	return response.status(405).json({ success: false })
}

export default CORS(ConnectDB(GetIdPosts))
