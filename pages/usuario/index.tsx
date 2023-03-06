import Header from "../../components/Header"
import Context from "../../context/Context"
import { useContext } from "react"

import Login from "./components/Login"
import SignUp from "./components/SignUp"

import Container from "./style"

export function UserPage() {
	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("none")

	return (
		<>
			<Header />
			<Container>
				<Login />
				<SignUp />
			</Container>
		</>
	)
}

export default UserPage
