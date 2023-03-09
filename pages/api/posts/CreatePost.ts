import { CORS } from "./../../../middleware/Cors"
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
			!BodyPost.author ||
			typeof BodyPost.author != "string" ||
			BodyPost.comments ||
			BodyPost.commentsCount ||
			BodyPost.updatedAt
		) {
			return response
				.status(400)
				.json({ error: "Body não preenchido adequadamente." })
		}

		const capitalize = (str: string) =>
			str.charAt(0).toUpperCase() + str.substring(1)
		const CapitalizedTitle = capitalize(BodyPost.title)

		const POST: CreatePostType = {
			title: CapitalizedTitle,
			content: BodyPost.content,
			author: BodyPost.author,
			commentsCount: BodyPost.commentsCount,
		}

		await PostModule.create(POST)

		return response.status(201).json({ success: true, POST })
	}
	return response.status(405).json({ success: false })
}

export default CORS(ConnectDB(CreatePost))
