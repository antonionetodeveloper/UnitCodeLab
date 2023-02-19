import { prisma } from "../../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

const CreatePostPrisma = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "POST") {
		const BodyPost = request.body

		if (
			!BodyPost ||
			!BodyPost.title ||
			typeof BodyPost.title != "string" ||
			!BodyPost.content ||
			typeof BodyPost.content != "string" ||
			!BodyPost.commentsCount ||
			typeof BodyPost.commentsCount != "number"
		) {
			return response
				.status(400)
				.json({ error: "Body não preenchido adequadamente." })
		}

		/* const POST: CreatePostType = {
			title: BodyPost.title,
			content: BodyPost.content,
			commentsCount: BodyPost.commentsCount,
		} */

		try {
			await prisma?.post.create({
				data: {
					title: BodyPost.title,
					content: BodyPost.content,
					commentsCount: BodyPost.commentsCount,
				},
			})
			return response.status(201).json({ message: "Criado com sucesso." })
		} catch (error) {
			console.log(error)
			return response.status(400).json({ erro: "erro -> ", error })
		}
	}
}

export default CreatePostPrisma
