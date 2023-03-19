import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next"
import type { RegularAnswear } from "../types/RegularAnswear"
import NextCors from "nextjs-cors"

export const CORS =
	(handler: NextApiHandler) =>
	async (req: NextApiRequest, res: NextApiResponse<RegularAnswear>) => {
		try {
			await NextCors(req, res, {
				origin: "https://www.unitedcodelab.tech",
				methods: ["GET", "POST", "PUT"],
				optionsSuccessStatus: 200, // navegadores antigos dao problema quando se retorna 204
			})

			return handler(req, res)
		} catch (e) {
			console.log("Erro ao tratar a politica de CORS: ", e)
			return res
				.status(500)
				.json({ error: "Ocorreu erro ao tratar a politica de CORS." })
		}
	}
