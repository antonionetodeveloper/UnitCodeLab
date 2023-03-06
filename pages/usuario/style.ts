import styled from "styled-components"

const Container = styled.main`
	height: 90vh;
	width: 100vw;

	padding-top: 10vh;

	background-image: url(${"/user/bg.svg"});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	display: flex;
	gap: 10vw;
	justify-content: center;
	align-items: center;

	font-family: system-ui;

	form {
		background-color: #fff;
		padding: 5vw;
		border-radius: 1vw;
		border: 3px solid #3b82f6;
		box-shadow: 0px 0px 50px rgb(255 255 255 / 40%);

		h5 {
			text-align: center;
			font-size: 3rem;
			font-weight: 900;
		}

		div.fields {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 2vw;

			span {
				color: red;
				top: 1vh;
				position: relative;
				max-width: 30vw;
				text-align: center;
			}
		}

		button {
			margin-top: 1vw;
			font-size: 1.8rem;
		}
	}
`

export default Container
