import styled from "styled-components"
import Image from "next/image"
import RegularButton from "../../components/Buttons/RegularButton"

const TiraDuvidas = () => {
	return (
		<Container>
			<div>
				<div>
					<h2>Tire suas dúvidas</h2>
					<p>
						Tá com &#34;aquela&#34; dúvida em uma atividade ou em algum projeto?
						<br />
						<br />
						Aqui você pode perguntar, participar e contribuir fazendo sua
						pergunta, ou achando a solução do seu problema em outros problemas.
					</p>
				</div>
				<RegularButton>Tirar minha dúvida</RegularButton>
			</div>
			<div className="ImageContainer">
				<div className="SVG">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="#2256F4"
							d="M43.3,-72.9C54.8,-68.3,62,-54.1,62.9,-40.4C63.8,-26.6,58.4,-13.3,60.8,1.4C63.1,16.1,73.3,32.1,71,43.4C68.6,54.7,53.8,61.2,39.9,68.3C26,75.4,13,83.1,-1,84.8C-15,86.5,-30,82.2,-37.6,71.5C-45.1,60.7,-45.3,43.5,-51.2,30.5C-57.1,17.5,-68.9,8.7,-75.2,-3.7C-81.6,-16.1,-82.6,-32.1,-76.1,-44.2C-69.6,-56.2,-55.6,-64.2,-41.7,-67.5C-27.8,-70.7,-13.9,-69.2,1,-70.9C15.9,-72.6,31.8,-77.5,43.3,-72.9Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
				<div className="Image">
					<Image src={"/home/test4.svg"} height={450} width={450} />
				</div>
			</div>
		</Container>
	) // home/screen-shot-page.png
}

const Container = styled.section`
	background-color: white;
	width: 100%;
	min-height: 90vh;
	color: black;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5vw;
	padding-top: 10vw;

	div {
		width: 40vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2vw;

		div {
			text-align: center;
			z-index: 2;
			h2 {
				font-size: 2.5rem;
			}

			p {
				width: 30vw;
				font-size: 1.2rem;
			}
		}
	}
	.ImageContainer {
		display: flex;
		align-items: center;
		justify-content: center;

		.SVG {
			position: absolute;
			z-index: 1;
			width: 50%;
		}
		.Image {
			z-index: 2;
		}
	}
`

export default TiraDuvidas
