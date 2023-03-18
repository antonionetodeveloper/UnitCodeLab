import styled from "styled-components"
import Image from "next/image"
import RegularButton from "../../components/Buttons/RegularButton"

const Contribua = () => {
	return (
		<Container>
			<div>
				<div>
					<h2>Contribua com a comunidade</h2>
					<p>
						Aprendeu algo legal hoje? Tem algum conteúdo que achou massa e quer
						compartilhar? Compartilhe!
						<br />
						<br />
						Deixe aqui qualquer coisa que achar interessante para pessoas da
						área de tecnologia. Sinta-se livre para compartilhar o que quiser!
					</p>
				</div>
				<RegularButton>Contribuir</RegularButton>
			</div>
			<div className="ImageContainer">
				<div className="SVG">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="#2256F4"
							d="M35.5,-65.6C40.3,-58.6,34.6,-37.7,32.5,-24.4C30.5,-11.1,32,-5.6,38.9,4C45.7,13.5,57.9,26.9,60.5,41.2C63.1,55.5,56.3,70.5,44.6,74.8C32.9,79,16.5,72.5,3.1,67.1C-10.3,61.7,-20.5,57.5,-31,52.6C-41.4,47.6,-52,41.9,-57.4,33C-62.8,24.1,-63.1,12,-63.6,-0.3C-64,-12.6,-64.7,-25.2,-59.8,-34.9C-54.9,-44.7,-44.3,-51.6,-33.4,-55.1C-22.5,-58.5,-11.3,-58.5,2,-62C15.3,-65.6,30.6,-72.6,35.5,-65.6Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
				<div className="Image">
					<Image src={"/home/discussao.svg"} height={450} width={450} />
				</div>
			</div>
		</Container>
	)
}

const Container = styled.section`
	background-color: white;
	width: 100%;
	min-height: 90vh;
	color: black;

	display: flex;
	flex-direction: row-reverse;
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
			z-index: 2;
			text-align: center;

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
			animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
		}
	}

	@keyframes slide-in-blurred-top {
		0% {
			-webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
			transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
			-webkit-transform-origin: 50% 0%;
			transform-origin: 50% 0%;
			-webkit-filter: blur(40px);
			filter: blur(40px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0) scaleY(1) scaleX(1);
			transform: translateY(0) scaleY(1) scaleX(1);
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-webkit-filter: blur(0);
			filter: blur(0);
			opacity: 1;
		}
	}
`

export default Contribua
