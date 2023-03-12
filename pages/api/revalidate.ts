import { CORS } from "./../../middleware/Cors"
async function handler(req, res) {
	const path = req.query.path

	try {
		await res.revalidate(`/posts/post/${path}`)
		return res.json({ success: true })
	} catch (err) {
		return res.status(500).send("Error revalidating")
	}
}

export default CORS(handler)
