import axios from "axios"
import { useRouter } from "next/router"
import { setCookie } from "nookies"
import { useContext, useState } from "react"
import RegularButton from "../../../components/Buttons/RegularButton"
import { RegularInput } from "../../../components/Inputs/RegularInput"
import Context from "../../../context/Context"
import { API_URL } from "../../_document"

export const Login = () => {
	const Router = useRouter()

	const { setAuth } = useContext(Context)

	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const [textError, setTextError] = useState("")

	const handleLoginSubmit = async () => {
		await axios
			.post("http://localhost:3000/" + "api/user/Login", {
				login,
				password,
			})
			.then((res) => {
				const response = res.data
				if (response.success) {
					setLogin("")
					setPassword("")

					const token = response.data.token
					setCookie(null, "token", token, {
						maxAge: 604800, // 7 days = 604800 sec
						path: "/",
					})

					const name = response.data.user.name
					setCookie(null, "name", name, {
						maxAge: 604800, // 7 days = 604800 sec
						path: "/",
					})

					setAuth(true)
					Router.push("/usuario/dashboard")
				}
			})
			.catch((err) => {
				setTextError(err.data)
			})
	}

	return (
		<form action="">
			<h5>Login</h5>
			<div className="fields">
				<div>
					<RegularInput
						setValue={setLogin}
						placeholder="Login"
						type="text"
						value={login}
					/>
				</div>
				<div>
					<RegularInput
						setValue={setPassword}
						placeholder="Senha"
						type="password"
						value={password}
					/>
				</div>
				<RegularButton
					clicked={() => {
						handleLoginSubmit()
					}}
				>
					Entrar
				</RegularButton>
				{textError !== "" ? <span>{textError}</span> : <></>}
			</div>
		</form>
	)
}

export default Login
