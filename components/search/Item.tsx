/* eslint-disable react/prop-types */
import Link from "next/link"
import styled from "styled-components"

export const Item = ({ title, author, path }) => {
	return (
		<Container>
			<Link href={`/posts/post/${path}`}>
				<a href={`/posts/post/${path}`}>
					<li>
						<img src="/assets/chat.png" alt="discussão" />
						<div>
							<h5>{title}</h5>
							<span>{author}</span>
						</div>
					</li>
				</a>
			</Link>
		</Container>
	)
}

const Container = styled.div`
	a {
		text-decoration: none;
	}
	li {
		display: flex;
		align-items: center;
		gap: 1vw;
		justify-content: space-around;
		padding: 1vw;
		transition: 0.3s;
		width: 23vw;
		color: black;

		img {
			width: 10%;
		}

		div {
			flex-direction: column;
			width: 70%;
			gap: 0.5vw;

			display: flex;
			flex-direction: column;

			h5 {
				font-weight: 900;
				font-size: 1.2vw;
				text-align: justify;
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
