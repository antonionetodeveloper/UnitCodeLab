import axios from "axios"

export default function Teste() {
	const obj = {
		title: "Titulo legau",
		content: "DSFGASDFASDF ASDFASF eu vou ficar maluco",
		commentsCount: 51,
	}

	const handle = async () => {
		await axios.post(
			"https://unitcodelab.vercel.app/api/posts2/CreatePost",
			{
				title: obj.title,
				content: obj.content,
				commentsCount: obj.commentsCount,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		)
	}

	return (
		<>
			<button
				onClick={() => {
					handle()
				}}
			></button>
		</>
	)
}
