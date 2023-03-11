export default async function handler(req, res) {
	const { PostID } = req.body

	if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
		return res.status(401).json({ message: "Invalid token" })
	}

	try {
		await res.revalidate(`/posts/post/${PostID}`)
		return res.json({ success: true })
	} catch (err) {
		return res.status(500).send("Error revalidating")
	}
}
