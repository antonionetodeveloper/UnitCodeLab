import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { parseCookies } from "nookies"
import { useContext, useEffect, useState } from "react"
import RegularButton from "../../../components/Buttons/RegularButton"
import Header from "../../../components/Header"
import SimpleLoader from "../../../components/Loaders/simple"
import Context from "../../../context/Context"
import { API_URL } from "../../_document"
import Container from "./style"

export default function CreatePost() {
	const Router = useRouter()

	const { setSelectedHeaderItem, auth } = useContext(Context)
	setSelectedHeaderItem("none")

	const cookies = parseCookies()
	const [author, setAuthor] = useState("")
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	useEffect(() => {
		if (window) {
			setTitle(localStorage.getItem("Title"))
			setContent(localStorage.getItem("Content"))

			if (localStorage.getItem("Author")) {
				setAuthor(localStorage.getItem("Author"))
			} else {
				setAuthor(auth ? cookies.name : "Anônimo")
			}
		}
	}, [])

	const [loading, setLoading] = useState(false)

	const handleCreatePost = async () => {
		setAuthor(author == "" ? "Anônimo" : author)

		if (title == "" || content == "") {
			alert("Preencha todos os campos!")
		} else {
			setLoading(true)

			await axios
				.post(API_URL + "/api/posts/CreatePost", {
					title,
					content,
					author,
				})
				.then(() => {
					alert("Post criado com sucesso!")
					localStorage.removeItem("Title")
					localStorage.removeItem("Content")
					localStorage.removeItem("Author")
					Router.push("/posts/recentes")
					setLoading(false)
				})
				.catch(() => {
					alert(
						"Ocorreu algum erro ao tentar adicionar seu post, tente novamente mais tarde!",
					)
					setLoading(false)
				})
		}
	}

	return (
		<>
			<Head>
				<title>Criar</title>
			</Head>

			<Header />

			<Container>
				<form>
					<input
						type="text"
						placeholder="Autor"
						value={author}
						onChange={(event) => {
							setAuthor(event.target.value)
							localStorage.setItem("Author", event.target.value)
						}}
					/>
					<input
						type="text"
						placeholder="Título"
						value={title}
						onChange={(event) => {
							setTitle(event.target.value)
							localStorage.setItem("Title", title)
						}}
					/>
					<textarea
						placeholder="Coloque aqui a sua dúvida ou sugestão para discussão"
						value={content}
						onChange={(event) => {
							setContent(event.target.value)
							localStorage.setItem("Content", content)
						}}
					/>
					<RegularButton
						clicked={() => {
							handleCreatePost()
						}}
					>
						{loading ? <SimpleLoader /> : "Criar"}
					</RegularButton>
				</form>
			</Container>
		</>
	)
}
