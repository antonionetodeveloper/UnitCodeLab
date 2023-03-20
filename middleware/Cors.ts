import { cors } from "cors"
import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next"
import type { RegularAnswear } from "../types/RegularAnswear"

const Cors = cors({
	origin: "https://www.unitedcodelab.tech",
	methods: ["GET", "POST", "PUT"],
	allowedHeaders: ["Content-Type"],
})

export const CORS =
	(handler: NextApiHandler) =>
	async (req: NextApiRequest, res: NextApiResponse<RegularAnswear>) => {
		try {
			await Cors(req, res)
			return handler(req, res)
		} catch (e) {
			console.log("Erro ao tratar a politica de CORS: ", e)
			return res
				.status(500)
				.json({ error: "Ocorreu erro ao tratar a politica de CORS." })
		}
	}
