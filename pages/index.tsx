import { useContext } from "react"
import LoadingContext from "./context/loading"

export default function Index() {
	const CONTEXT = useContext(LoadingContext)

	return (
		<div>
			<h1 style={{ color: "white", textAlign: "center" }}>
				Bem vindo à Unit Code Lab!
			</h1>
		</div>
	)
}
