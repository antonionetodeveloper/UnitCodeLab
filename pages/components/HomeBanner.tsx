import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import RegularButton from "../../components/Buttons/AlternativeButton"

const HomeBanner = ({ GIF }: { GIF: string }) => {
	return (
		<Container>
			<div>
				<h1>Bem-vindo à United Code Lab!</h1>
				<p>
					Forúm de programação, troca de experiências e discussões entre alunos
					da Unit.
				</p>
			</div>
			<div className="buttons">
				<Link href="/posts/criar">
					<a href="/posts/criar">
						<RegularButton especial>Tirar uma dúvida</RegularButton>
					</a>
				</Link>
				<Link href="/posts/recentes/">
					<a href="/posts/recentes/">
						<RegularButton>Ir para discussões</RegularButton>
					</a>
				</Link>
			</div>
			<div className="Image">
				<Image src={GIF} height={500} width={900} quality={100} priority />
			</div>
		</Container>
	)
}

const Container = styled.section`
	display: flex;
	padding-top: 10vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 3vw;

	margin-top: 3vw;

	color: white;

	h1,
	p {
		margin: 0px;
	}

	h1 {
		text-align: center;
		font-size: 3rem;
		font-weight: 900;
	}

	p {
		text-align: center;
		font-weight: 500;
		font-size: 1.5rem;
	}

	div.buttons {
		display: flex;
		justify-content: center;
		gap: 5vw;

		a {
			text-decoration: none;
		}
	}

	.Image {
		span {
			box-shadow: 0px 0px 50px rgb(255 255 255 / 10%);
		}
		margin-bottom: 5vw;
	}
`

export default HomeBanner
