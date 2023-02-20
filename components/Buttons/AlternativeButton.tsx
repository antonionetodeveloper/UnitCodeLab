/* eslint-disable react/prop-types */
import styled from "styled-components"

const AlternativeButton = (props) => {
	return (
		<Container isEspecial={props.especial}>
			<button>{props.children}</button>
		</Container>
	)
}

const Container: any = styled.div`
	button {
		padding: 17px 40px;
		border-radius: 50px;
		border: 0;
		background-color: ${(props: any) =>
			props.isEspecial ? "#2256f4" : "white"};
		box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		font-size: 15px;
		transition: all 0.5s ease;
		color: ${(props: any) => (props.isEspecial ? "white" : "black")};
		font-weight: 700;
	}

	button:hover {
		letter-spacing: 3px;
		background-color: ${(props: any) =>
			props.isEspecial ? "white" : "#2256f4"};

		color: hsl(0, 0%, 100%);
		box-shadow: rgb(255 255 255) 0px 7px 29px 0px;
		cursor: pointer;

		color: ${(props: any) => (props.isEspecial ? "black" : "white")};
	}

	button:active {
		letter-spacing: 3px;
		color: hsl(0, 0%, 100%);
		box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
		transform: translateY(10px);
		transition: 100ms;
	}
`

export default AlternativeButton
