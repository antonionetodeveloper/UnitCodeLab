import styled from "styled-components"

const Footer = () => {
	return (
		<Container>
			<a href="https://storyset.com/online" className="storySet">
				Online illustrations by Storyset
			</a>
			<p>
				O código é open source.{" "}
				<a
					href="https://github.com/antonionetodeveloper/UnitCodeLab"
					target="_blank"
					rel="noreferrer"
				>
					Veja e contribua com o projeto.
				</a>
			</p>
		</Container>
	)
}

const Container = styled.footer`
	height: 10vh;
	background: #051826;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: end;

	.storySet {
		font-size: 0.8rem;
		height: 5vh;
		margin-left: 2vw;
		font-family: monospace;
		color: #3b82f6;
	}

	p {
		font-size: 1rem;
		height: 5vh;
		margin-right: 2vw;

		a {
			font-family: monospace;
			color: #3b82f6;
		}
	}
`

export default Footer
