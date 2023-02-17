import Link from "next/link"
import { useContext } from "react"
import styled from "styled-components"
import LoadingContext from "../pages/context/Context"

const Header = () => {
	const CONTEXT = useContext(LoadingContext)

	return (
		<Container>
			<nav>
				<div>
					<span
						onClick={() => {
							CONTEXT.setLoading(true)
						}}
					>
						<Link href="/">
							<a href="/">Início</a>
						</Link>
					</span>
					<span
						onClick={() => {
							CONTEXT.setLoading(true)
						}}
					>
						<Link href="/posts/recentes/">
							<a href="/posts/recentes/">Recentes</a>
						</Link>
					</span>
					<span
						onClick={() => {
							CONTEXT.setLoading(true)
						}}
					>
						<Link href="/posts/relevantes/">
							<a href="/posts/relevantes/">Relevantes</a>
						</Link>
					</span>
				</div>
				<div></div>
			</nav>
		</Container>
	)
}

const Container = styled.header`
	width: 100vw;
	height: 10vh;

	background-color: white;
	display: flex;
	align-items: center;

	nav {
		margin-left: 2vw;
		div {
			display: flex;
			gap: 2vw;

			span {
				a {
					text-decoration: none;
					letter-spacing: 1px;
					font-family: "Sono";
					color: black;

					:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
`

export default Header
