import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next"
import { RegularAnswear } from "./../types/RegularAnswear"
import mongoose from "mongoose"

export const ConnectDB =
	(handler: NextApiHandler) =>
	async (req: NextApiRequest, res: NextApiResponse<RegularAnswear>) => {
		if (mongoose.connections[0].readyState) {
			return handler(req, res)
		}

		// Connect if not connect
		else {
			const { MONGO_DB_URL } = process.env
			if (!MONGO_DB_URL) {
				return res.status(401).json({
					error: "dados da '.env' não foram informadas!",
				})
			} else {
				mongoose.connection.on("connected", () => {
					console.log("Conectado ao banco de dados.")
				})
				mongoose.connection.on("error", (error) => {
					"Erro ao conectar no banco. erro: " + error
				})

				await mongoose.connect(MONGO_DB_URL)
				return handler(req, res)
			}
		}
	}
