import Link from "next/link"
import { useContext } from "react"
import styled from "styled-components"
import Context from "../pages/context/Context"
import RegularButton from "./Buttons/RegularButton"
import Search from "./search/Search"

const Header = () => {
	const { selectedHeaderItem, auth } = useContext(Context)

	return (
		<Container SelectedItem={selectedHeaderItem}>
			<nav>
				<div className="leftSideDiv">
					<div className="hooks">
						<div>
							<Link href="/">
								<p className="inicio">Início</p>
							</Link>
						</div>

						<div>
							<Link href="/posts/recentes/">
								<p className="recentes">Recentes</p>
							</Link>
						</div>

						<div>
							<Link href="/posts/relevantes/">
								<p className="relevantes">Relevantes</p>
							</Link>
						</div>

						<div>
							<a
								href="https://github.com/antonionetodeveloper/UnitCodeLab"
								className="api"
								target="_blank"
								rel="noreferrer"
							>
								<p>API</p>
							</a>
						</div>
					</div>
					<Search />
				</div>
				<div>
					{auth ? (
						<>
							<Link href="/">
								<RegularButton>Criar uma discussão</RegularButton>
							</Link>
							<Link href="/">
								<img src="/assets/user.png" alt="usuario" />
							</Link>
						</>
					) : (
						<>
							<Link href="/usuario/">
								<RegularButton>Criar uma discussão</RegularButton>
							</Link>
							<Link href="/usuario/">
								<img src="/assets/user.png" alt="usuario" />
							</Link>
						</>
					)}
				</div>
			</nav>
		</Container>
	)
}

const Container: any = styled.header`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 10vh;
	position: fixed;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	z-index: 3;

	nav {
		width: 95%;
		margin-left: 2vw;
		display: flex;
		align-items: center;
		justify-content: space-between;

		div {
			display: flex;
			align-items: center;
			gap: 2vw;

			button {
				width: 100%;
				height: 6vh;
			}

			img {
				width: 10%;
				padding: 0.5vw;
				border-radius: 50%;
				transition: 0.3s;

				:hover {
					background-color: #ccc;
					cursor: pointer;
				}
			}
		}

		.leftSideDiv {
			display: flex;
			gap: 2vw;
			justify-content: center;

			.hooks {
				display: flex;
				flex-direction: row;
				gap: 2vw;
			}

			div {
				display: flex;
				align-items: center;

				p {
					letter-spacing: 1px;
					font-size: 1.2vw;
					font-weight: 700;
					color: black;

					:hover {
						text-decoration: underline;
						cursor: pointer;
					}
				}
				a.api {
					text-decoration: none;
				}
			}
		}
	}

	p.inicio {
		text-decoration: ${(props: any) =>
			props.SelectedItem == "inicio" ? "underline" : "none"};
	}
	p.recentes {
		text-decoration: ${(props: any) =>
			props.SelectedItem == "recentes" ? "underline" : "none"};
	}
	p.relevantes {
		text-decoration: ${(props: any) =>
			props.SelectedItem == "relevantes" ? "underline" : "none"};
	}
`

export default Header
