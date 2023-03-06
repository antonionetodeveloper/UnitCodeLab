/* eslint-disable react/prop-types */
import { ReactNode } from "react"
import styled from "styled-components"

const RegularButton = ({
	children,
	clicked,
}: {
	children: ReactNode
	clicked?: any
}) => {
	return (
		<Container>
			<button onClick={clicked} type="button">
				{children}
			</button>
		</Container>
	)
}

const Container: any = styled.div`
	button {
		font-family: monospace;
		background-color: #f3f7fe;
		color: #3b82f6;
		border: none;
		border-radius: 8px;
		width: 15vw;
		height: 4vw;
		transition: 0.3s;
		font-size: 1rem;

		:hover {
			background-color: #3b82f6;
			box-shadow: 0 0 0 5px #3b83f65f;
			color: #fff;
			cursor: pointer;
		}
	}
`

export default RegularButton
