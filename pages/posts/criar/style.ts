import styled from "styled-components"

const Container = styled.main`
	padding-top: 10vh;
	min-height: 90vh;
	width: 100%;

	background-image: url("/posts/postBG.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;

	form {
		display: flex;
		gap: 2vw;
		flex-direction: column;

		margin-top: 5vh;

		textarea,
		input {
			width: 70vw;
			background-color: #020c13;
			border: 1px solid rgba(255, 255, 255, 0.222);
			color: white;
			font-family: "system-ui";
			resize: vertical;
			padding: 10px;
		}

		textarea {
			min-height: 10vw;
		}

		button {
			background-color: #1c720b;
			color: white;

			width: 10vw;
			margin-left: auto;

			display: flex;
			justify-content: center;
			align-items: center;

			:hover {
				background-color: #34b91a;
				box-shadow: 0 0 0 5px rgba(0, 255, 0, 0.3);
			}
		}
	}
`

export default Container
