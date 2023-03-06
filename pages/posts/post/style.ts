import styled from "styled-components"

export const Container = styled.main`
	padding-top: 10vh;
	min-height: 75vh;
	width: 100%;
	padding: 15vh 0 5vw 0;

	background-image: url("/posts/postBG.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	color: #fff;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	section {
		.box {
			width: 70vw;
			min-height: 60vh;
			padding: 1rem;

			background-color: rgba(255, 255, 255, 0.074);
			border: 1px solid rgba(255, 255, 255, 0.222);
			-webkit-backdrop-filter: blur(5px);
			backdrop-filter: blur(5px);
			border-radius: 0.7rem;

			display: flex;
			flex-direction: column;
			justify-content: center;

			div {
				position: absolute;
				top: 1vw;
				left: 5vw;

				h4 {
					font-size: 1.5rem;
				}

				span {
					margin-left: 2vw;
					color: #ccc;
				}
			}

			p {
				margin: 5vw 0 2vw 0;
				text-align: justify;
			}

			span {
				display: block;
			}
		}

		div.obs {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
	section.comments {
		margin-top: 10vw;

		width: 70vw;
		min-height: 10vh;
		padding: 1rem;

		background-color: rgb(5, 24, 38);
		border: 1px solid rgba(255, 255, 255, 0.222);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		border-radius: 0.7rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`
export default Container
