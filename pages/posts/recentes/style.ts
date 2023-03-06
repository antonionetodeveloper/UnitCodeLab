import styled from "styled-components"

export const Container = styled.main`
	padding-top: 15vh;
	min-height: 85vh;
	color: white;

	background-image: url("/posts/postBG.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		font-size: 2.5rem;
		font-weight: 900;
	}
`
export default Container
