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
		axios
			.post(API_URL + "api/user/Login", {
				login: login,
				password: password,
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res)

					setLogin("")
					setPassword("")

					const token = res.data.token
					setCookie(null, "token", token, {
						maxAge: 604800, // 7 days = 604800 sec
						path: "/",
					})

					setAuth(true)
					Router.push("/usuario/dashboard")
				}
			})
			.catch((err) => {
				setTextError(err.response.data.error)
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
