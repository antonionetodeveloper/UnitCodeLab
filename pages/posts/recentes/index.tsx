import { useContext } from "react"
import LoadingContext from "../../context/Context"
import { Container } from "./style"
import Header from "../../../components/Header"
import Head from "next/head"

export default function Recentes() {
	const CONTEXT = useContext(LoadingContext)
	CONTEXT.setLoading(false)
	console.log(CONTEXT)

	return (
		<>
			<Head>
				<title>Discussões</title>
			</Head>

			<Header />

			<Container>
				<h1>Discussões recentes!</h1>
			</Container>
		</>
	)
}
