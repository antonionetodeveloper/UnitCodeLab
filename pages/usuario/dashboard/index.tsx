import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import Header from "../../../components/Header"
import Context from "../../../context/Context"
import Container from "./style"

export default function Dashboard() {
	const Router = useRouter()

	const { setSelectedHeaderItem, auth } = useContext(Context)
	setSelectedHeaderItem("none")

	useEffect(() => {
		if (!auth) {
			Router.push("/usuario")
		}
	})

	return (
		<>
			<Header />

			<Container style={{ paddingTop: "10vh" }}>
				{/* <Link href="/posts/criar/">
					<p>Criar uma discussão</p>
				</Link>

				<Link href="/posts/criar/">
					<p>Ver minhas discussões</p>
				</Link>

				<Link href="/">
					<p>Editar perfil</p>
				</Link> */}
				<p>Em breve...</p>
			</Container>
		</>
	)
}
