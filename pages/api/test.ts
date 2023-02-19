import { CORS } from "../../middleware/Cors"
import { ConnectDB } from "../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"

const endPoint = async (request: NextApiRequest, response: NextApiResponse) => {
	return response.status(200).json({ message: "Working!" })
}

export default CORS(ConnectDB(endPoint))
