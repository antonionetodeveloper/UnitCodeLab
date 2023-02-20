import styled from "styled-components"

const ApiSection = () => {
	return (
		<Container>
			<div>
				<h3>Use nossa API</h3>
				<p>
					Veja as docs e use os endpoints públicos para suas aplicações. Grátis
					e prático.
				</p>
				<span>
					Leia aqui a <a href="#">documentação</a> e aprenda como.
				</span>
			</div>
		</Container>
	)
}

const Container = styled.section`
	height: 50vh;

	div {
		margin-top: 10vw;

		color: white;
		text-align: center;

		h3 {
			font-size: 3rem;
		}

		p {
			font-size: 2rem;
		}

		span {
			font-size: 1.5rem;
			a {
				font-family: monospace;
				color: #3b82f6;
			}
		}
	}
`

export default ApiSection
