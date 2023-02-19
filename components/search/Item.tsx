/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Item = ({ title, author }) => {
	return (
		<Container>
			<li>
				<img src="/assets/chat.png" alt="discussão" />
				<div>
					<h5>{title}</h5>
					<span>{author}</span>
				</div>
			</li>
		</Container>
	)
}

const Container = styled.div`
	li {
		display: flex;
		align-items: center;
		gap: 1vw;
		justify-content: space-around;
		padding: 1vw;
		transition: 0.3s;
		width: 23vw;

		img {
			width: 10%;
		}

		div {
			flex-direction: column;
			width: 70%;
			gap: 0.5vw;

			display: flex;
			flex-direction: column;

			font-family: "Sono";

			h5 {
				font-weight: 900;
				font-size: 1.2vw;
				text-align: justify;
				word-spacing: -5px;
			}

			span {
				margin-left: 2vw;
				font-weight: 200;
				font-size: 1vw;
			}
		}

		:hover {
			cursor: pointer;
			background-color: #ccc;
		}
	}
`
