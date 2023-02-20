import { CORS } from "../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { PostModule } from "../../../models/posts"

const GetIdPosts = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "GET") {
		const AllPosts = await PostModule.find()
		const Data = AllPosts.map((item) => item._id)
		return response.status(200).json({ Data })
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default CORS(ConnectDB(GetIdPosts))
