import { CORS } from "../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { PostModule } from "../../../models/posts"

const GetIdPosts = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method === "GET") {
		/* const AllPosts = await PostModule.find()
		const Data = AllPosts.map((item) => item._id) */

		const data = {
			success: true,
			data: null,
		}

		return response.status(200).json(data)
	}
	return response.status(405).json({ success: false })
}

export default CORS(ConnectDB(GetIdPosts))
