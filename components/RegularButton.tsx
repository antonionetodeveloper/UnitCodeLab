/* eslint-disable react/prop-types */
import { useContext } from "react"
import styled from "styled-components"
import LoadingContext from "../pages/context/Context"

const RegularButton = (props) => {
	const CONTEXT = useContext(LoadingContext)

	return (
		<Container>
			<button
				onClick={() => {
					CONTEXT.setLoading(true)
				}}
			>
				{props.children}
			</button>
		</Container>
	)
}

const Container = styled.div`
	button {
		padding: 17px 40px;
		border-radius: 50px;
		border: 0;
		background-color: white;
		box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		font-size: 15px;
		transition: all 0.5s ease;
	}

	button:hover {
		letter-spacing: 3px;
		background-color: black;
		color: hsl(0, 0%, 100%);
		box-shadow: rgb(255 255 255) 0px 7px 29px 0px;
		cursor: pointer;
	}

	button:active {
		letter-spacing: 3px;
		background-color: black;
		color: hsl(0, 0%, 100%);
		box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
		transform: translateY(10px);
		transition: 100ms;
	}
`

export default RegularButton
