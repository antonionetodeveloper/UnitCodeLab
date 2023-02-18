import Head from "next/head"
import Header from "../../../components/Header"
import { Container } from "./style"

export default function Relevantes() {
	//const CONTEXT = useContext(LoadingContext)
	return (
		<>
			<Head>
				<title>Discussões</title>
			</Head>

			<Header />

			<Container>
				<h1>Discussões relevantes!</h1>
			</Container>
		</>
	)
}
