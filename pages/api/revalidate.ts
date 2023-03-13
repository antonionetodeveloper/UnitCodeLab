import { CORS } from "./../../middleware/Cors"

async function reavlidator(req, res) {
	const { PostID } = req.body

	try {
		await res.revalidate("/posts/post/" + PostID)
		return res.json({ revalidated: true })
	} catch (err) {
		return res.status(500).send("Error revalidating")
	}
}

export default CORS(reavlidator)
