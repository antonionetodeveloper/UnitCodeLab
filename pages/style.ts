import styled from "styled-components"

export const Container = styled.main`
	background-image: url("/background.svg");
	min-height: 90vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2vw;

	h1 {
		font-size: 3vw;
		color: white;
		font-weight: 900;
	}

	section {
		div {
			display: flex;
			gap: 5vw;

			a {
				text-decoration: none;
			}
		}
	}
`
export default Container
