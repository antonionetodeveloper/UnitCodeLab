import Head from "next/head"
import { Container } from "./style"
import RegularButton from "../components/RegularButton"
import Link from "next/link"
import Header from "../components/Header"
import { useContext } from "react"
import LoadingContext from "./context/Context"

export default function Index() {
	const { setSelectedHeaderItem } = useContext(LoadingContext)
	setSelectedHeaderItem("inicio")

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<Header />

			<Container>
				<h1>Bem-vindo à Unit Code Lab!</h1>
				<div>
					<Link href="/posts/recentes/">
						<a href="/posts/recentes/">
							<RegularButton>Ir para discussões</RegularButton>
						</a>
					</Link>
					<RegularButton>Tirar uma dúvida</RegularButton>
				</div>
			</Container>
		</>
	)
}
