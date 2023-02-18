import { PostModule } from "./../../../models/posts"
import { CreatePostType } from "./../../../types/CreatePost"
import { ConnectDB } from "../../../middleware/ConnectDB"
import { NextApiRequest, NextApiResponse } from "next"

const CreatePost = async (
	request: NextApiRequest,
	response: NextApiResponse,
) => {
	if (request.method == "POST") {
		const BodyPost = (await request.body) as CreatePostType

		if (
			!BodyPost ||
			!BodyPost.title ||
			typeof BodyPost.title != "string" ||
			!BodyPost.content ||
			typeof BodyPost.content != "string" ||
			!BodyPost.comentsCont ||
			typeof BodyPost.comentsCont != "number" ||
			!BodyPost.updatedAt ||
			typeof BodyPost.updatedAt != "string"
		) {
			return response
				.status(400)
				.json({ error: "Body não preenchido adequadamente." })
		}

		const POST: CreatePostType = {
			title: BodyPost.title,
			content: BodyPost.content,
			comentsCont: BodyPost.comentsCont,
			updatedAt: BodyPost.updatedAt,
		}

		await PostModule.create(POST)

		return response.status(201).json({ message: "Post criado com sucesso!!!" })
	}
	return response.status(405).json({ error: "Método inválido." })
}

export default ConnectDB(CreatePost)
