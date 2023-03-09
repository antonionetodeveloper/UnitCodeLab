import { ConnectDB } from "./../../../middleware/ConnectDB"
import { CORS } from "./../../../middleware/Cors"
import jwt from "jsonwebtoken"
import { UserModule } from "./../../../models/users"
import { NextApiResponse, NextApiRequest } from "next"
import md5 from "md5"

const endPointLogin = async (req: NextApiRequest, res: NextApiResponse) => {
	const { JWT_KEY_TOKEN } = process.env
	if (!JWT_KEY_TOKEN) {
		res.status(500).json({
			success: false,
			error: "JWT key token não informada corretamente.",
		})
	}

	if (req.method === "POST") {
		const { login, password } = req.body

		try {
			const foundUsers = await UserModule.find({
				login: login,
				password: md5(password),
			})

			if (foundUsers && foundUsers.length > 0) {
				const foundSingleUser = foundUsers[0]
				const token = jwt.sign({ _id: foundSingleUser._id }, JWT_KEY_TOKEN)
				return res.status(200).json({ success: true, token })
			} else {
				return res
					.status(400)
					.json({ success: false, error: "Usuário ou senha inválidos." })
			}
		} catch (error) {
			return res.status(400).json({ success: false, error })
		}
	}
	return res.status(405).json({ success: false, error: "Metodo inválido." })
}
export default CORS(ConnectDB(endPointLogin))
