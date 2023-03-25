import styled from "styled-components"

const Container = styled.main`
	display: flex;
	justify-content: space-between;

	p {
		margin: 1vw 0 0 1vw;
	}

	button {
		background-color: #b53b3b;
		color: white;
		transition: 0.3s;

		margin: 1vw 1vw 0 0;

		:hover {
			background: #ff0000;
			box-shadow: 0 0 0 5px #ff00005f;
		}
	}
`
export default Container
