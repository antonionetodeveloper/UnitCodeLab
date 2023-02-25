import { useState } from "react"
import RegularButton from "../../components/Buttons/RegularButton"
import Header from "../../components/Header"
import { RegularInput } from "../../components/Inputs/RegularInput"
import Container from "./style"

export function UserPage() {
	const [name, setName] = useState("")
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	return (
		<>
			<Header />
			<Container>
				<form action="">
					<h5>Login</h5>
					<div className="fields">
						<div>
							<RegularInput
								setValue={setLogin}
								placeholder="Login"
								type="text"
							/>
						</div>
						<div>
							<RegularInput
								setValue={setPassword}
								placeholder="Senha"
								type="password"
							/>
						</div>
						<RegularButton>Entrar</RegularButton>
					</div>
				</form>

				<form action="">
					<h5>Criar conta</h5>
					<div className="fields">
						<div>
							<RegularInput setValue={setName} placeholder="Nome" type="text" />
						</div>
						<div>
							<RegularInput
								setValue={setLogin}
								placeholder="Login"
								type="text"
							/>
						</div>
						<div>
							<RegularInput
								setValue={setPassword}
								placeholder="Senha"
								type="password"
							/>
						</div>
						<RegularButton>Cadastrar</RegularButton>
					</div>
				</form>
			</Container>
		</>
	)
}

export default UserPage
