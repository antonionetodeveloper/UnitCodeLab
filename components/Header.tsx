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
					</div>
					<Search />
				</div>
				<div></div>
			</nav>
		</Container>
	)
}

const Container: any = styled.header`
	width: 100vw;
	height: 10vh;

	background-color: white;
	display: flex;
	align-items: center;

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
					font-family: "Sono";
					font-size: 1.2vw;
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
`

export default Header
