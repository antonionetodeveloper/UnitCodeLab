import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { method } = req
	if (method === "POST") {
		const { title, content, commentsCount } = req.body

		const post = await prisma.post.create({
			data: {
				title,
				content,
				commentsCount,
			},
		})
		return res.status(200).json(post)
	}
	if (method === "GET") {
		const posts = await prisma.post.findMany()
		return res.status(200).json(posts)
	}
	return res.status(405).end(`Method ${method} Not Allowed`)
}
