import { useRouter } from "next/router"
import { setCookie } from "nookies"
import { useContext, useState } from "react"
import Context from "../../../context/Context"
import axios from "axios"

import RegularButton from "../../../components/Buttons/RegularButton"
import { RegularInput } from "../../../components/Inputs/RegularInput"
import { API_URL } from "../../_document"

export const SignUp = () => {
	const Router = useRouter()

	const { setAuth } = useContext(Context)

	const [name, setName] = useState("")
	const [loginRegister, setLoginRegister] = useState("")
	const [passwordRegister, setPasswordRegister] = useState("")

	const [textError, setTextError] = useState("")

	const handleSingUpSubmit = async () => {
		axios
			.post(API_URL + "api/user/CreateAccount", {
				Name: name,
				Login: loginRegister,
				Password: passwordRegister,
			})
			.then((res) => {
				if (res.status === 201) {
					setLoginRegister("")
					setPasswordRegister("")

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
		<form>
			<h5>Criar conta</h5>
			<div className="fields">
				<div>
					<RegularInput
						setValue={setName}
						placeholder="Nome"
						type="text"
						value={name}
					/>
				</div>
				<div>
					<RegularInput
						setValue={setLoginRegister}
						placeholder="Login"
						type="text"
						value={loginRegister}
					/>
				</div>
				<div>
					<RegularInput
						setValue={setPasswordRegister}
						placeholder="Senha"
						type="password"
						value={passwordRegister}
					/>
				</div>
				<RegularButton
					clicked={() => {
						handleSingUpSubmit()
					}}
				>
					Cadastrar
				</RegularButton>
				{textError !== "" ? <span>{textError}</span> : <></>}
			</div>
		</form>
	)
}

export default SignUp
