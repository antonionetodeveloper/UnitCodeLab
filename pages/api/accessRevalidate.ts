import axios from "axios"
import { CORS } from "../../middleware/Cors"

async function Access(req, res) {
	const { PostID } = req.body

	try {
		const Revalidate = await axios.post(
			"https://unitedcodelab.tech/api/revalidate",
			{
				PostID,
			},
		)
		console.log(Revalidate)

		return res.json({ success: true })
	} catch (err) {
		return res.status(500).json({ success: false })
	}
}

export default CORS(Access)
