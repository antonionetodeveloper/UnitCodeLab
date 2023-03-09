import jwt from "jsonwebtoken"
import { CreateAccountType } from "./../../../types/CreateAccount"
import { CORS } from "./../../../middleware/Cors"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"
import { UserModule } from "../../../models/users"
import md5 from "md5"

const CreateAccount = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "POST") {
		const { Name, Login, Password } = await request.body
		const { JWT_KEY_TOKEN } = process.env

		if (
			!Name ||
			!Login ||
			!Password ||
			Name.length < 3 ||
			Login.length < 3 ||
			Password.length < 3
		) {
			return response
				.status(400)
				.json({ success: false, error: "Dados não informados Corretamente." })
		}

		const repeatedLogins = await UserModule.find({ login: Login })
		if (repeatedLogins && repeatedLogins.length > 0) {
			return response
				.status(400)
				.json({ success: false, error: "Este login já está sendo usado." })
		}

		const repeatedName = await UserModule.find({ name: Name })
		if (repeatedName && repeatedName.length > 0) {
			return response.status(400).json({
				success: false,
				error: "Tente usar outro nome, para te diferenciar.",
			})
		}

		const repeatedNames = await UserModule.find({ name: Name })
		if (repeatedNames && repeatedNames.length > 0) {
			return response
				.status(400)
				.json({ success: false, error: "Este Nome já está sendo usado." })
		}

		try {
			const User: CreateAccountType = {
				name: Name,
				login: Login,
				password: md5(Password),
			}

			await UserModule.create(User)

			const foundUsers = await UserModule.find({
				login: Login,
				password: md5(Password),
			})
			const foundSingleUser = foundUsers[0]
			const token = jwt.sign({ _id: foundSingleUser._id }, JWT_KEY_TOKEN)
			return response.status(201).json({ success: true, token })
		} catch (error) {
			return response.status(400).json({
				success: false,
				error: "Erro ao tentar criar conta. ERROR -> " + error,
			})
		}
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default CORS(ConnectDB(CreateAccount))
