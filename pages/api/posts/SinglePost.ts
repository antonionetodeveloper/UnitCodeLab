import { NextApiRequest, NextApiResponse } from "next"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { CORS } from "./../../../middleware/Cors"

import { PostModule } from "../../../models/posts"
import { primaryAnswearModule } from "../../../models/primary_answear"
import { waterfallAnswearModule } from "./../../../models/waterfall_answear"

import { formatDate } from "./formatDate/service"

const GetPost = async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method == "POST") {
		const { PostID } = await request.body
		try {
			const Post = await PostModule.findById(PostID)

			if (!Post) {
				return response.status(404).json({ error: "Post não encontrado." })
			}

			const primaryComments = await primaryAnswearModule.find({
				ID: { $regex: PostID + "@" },
			})

			const allComments = await Promise.all(
				primaryComments.map(
					async (primaryComment: { ID: string; updatedAt: any }) => {
						const waterfallComments = await waterfallAnswearModule.find({
							ID: { $regex: primaryComment.ID },
						})
						return [primaryComment, ...waterfallComments]
					},
				),
			)

			/* allComments.map((item) => {
				item.map((comment) => {
					console.log(comment.updatedAt.toISOString())
				})
			})

			console.log(allComments)

			const Comments = {
				allComments,
			} */

			// Parei aqui

			Post.__v = null
			const FormatedDate = formatDate(Post.updatedAt)

			return response.status(200).json({
				message: "Post Encontrado com sucesso!!!",
				Post,
				Comments: allComments,
				FormatedDate: FormatedDate,
			})
		} catch (error) {
			return response.status(400).json({ error: "Erro. -> " + error })
		}
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default CORS(ConnectDB(GetPost))
