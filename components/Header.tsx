import Link from "next/link"
import { useContext } from "react"
import styled from "styled-components"
import LoadingContext from "../pages/context/Context"
import Search from "./search/Search"

const Header = () => {
	const { selectedHeaderItem } = useContext(LoadingContext)

	return (
		<Container SelectedItem={selectedHeaderItem}>
			<nav>
				<div className="leftSideDiv">
					<div className="hooks">
						<span>
							<Link href="/">
								<a href="/" className="inicio">
									Início
								</a>
							</Link>
						</span>

						<span>
							<Link href="/posts/recentes/">
								<a href="/posts/recentes/" className="recentes">
									Recentes
								</a>
							</Link>
						</span>

						<span>
							<Link href="/posts/relevantes/">
								<a href="/posts/relevantes/" className="relevantes">
									Relevantes
								</a>
							</Link>
						</span>

						<span>
							<Link href="/posts/relevantes/">
								<a
									href="https://github.com/antonionetodeveloper/UnitCodeLab"
									className="api"
									target="_blank"
									rel="noreferrer"
								>
									API
								</a>
							</Link>
						</span>
					</div>
					<Search />
				</div>
				<div></div>
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
		margin-left: 2vw;

		.leftSideDiv {
			display: flex;
			gap: 2vw;
			justify-content: center;

			.hooks {
				display: flex;
				flex-direction: row;
				gap: 2vw;
			}

			span {
				display: flex;
				align-items: center;

				a {
					letter-spacing: 1px;
					font-size: 1.2vw;
					font-weight: 700;
					color: black;

					:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	a.inicio {
		text-decoration: ${(props: any) =>
			props.SelectedItem == "inicio" ? "underline" : "none"};
	}
	a.recentes {
		text-decoration: ${(props: any) =>
			props.SelectedItem == "recentes" ? "underline" : "none"};
	}
	a.relevantes {
		text-decoration: ${(props: any) =>
			props.SelectedItem == "relevantes" ? "underline" : "none"};
	}
	a.api {
		text-decoration: none;
	}
`

export default Header
