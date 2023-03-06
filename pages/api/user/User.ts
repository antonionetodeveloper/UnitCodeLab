import { validateTokenJWT } from "./../../../middleware/validateTokenJWT"
import { CORS } from "./../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"

import { UserModule } from "./../../../models/users"

import { NextApiRequest, NextApiResponse } from "next"

const UserEndpoint = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "GET") {
		const { UserID } = await request.body
		try {
			const User = await UserModule.findById(UserID)
			User.__v = null
			User.login = null
			User.password = null

			return response
				.status(200)
				.json({ message: "Usuário encontrado com sucesso!", User })
		} catch (error) {
			return response.status(400).json({ error: "Erro. -> " + error })
		}
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default validateTokenJWT(CORS(ConnectDB(UserEndpoint)))
