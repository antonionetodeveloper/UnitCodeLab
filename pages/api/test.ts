import { CORS } from "../../middleware/Cors"
import { ConnectDB } from "../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"

const endPoint = async (request: NextApiRequest, response: NextApiResponse) => {
	try {
		return response.status(200).json({ success: true, message: "Working!" })
	} catch (error) {
		return response
			.status(400)
			.json({ success: false, message: "Not Working!", error: error })
	}
}

export default CORS(ConnectDB(endPoint))
