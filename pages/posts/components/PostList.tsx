/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Link from "next/link"
import styled from "styled-components"

const PostList = ({ Posts }) => {
	const ArrayPosts = Posts

	return (
		<Container>
			<ul>
				{ArrayPosts?.map(
					(item: { title: string; _id: number; author: string }) => (
						<Link href={`/posts/post/${item._id}`}>
							<a href={`/posts/post/${item._id}`}>
								<li>{item.title}</li>
								<span>{item.author}</span>
							</a>
						</Link>
					),
				)}
			</ul>
		</Container>
	)
}

const Container = styled.section`
	width: 60%;
	min-height: 75vh;

	ul {
		margin-top: 2vw;
		margin-bottom: 5vw;
		list-style-type: none;

		display: flex;
		flex-direction: column;
		gap: 1vw;

		a {
			color: white;
			text-decoration: none;
			transition: 0.3s;

			:hover {
				padding: 1vw;
			}

			li {
				font-size: 2rem;
				font-weight: 700;
				text-decoration: underline;
			}
			span {
				margin-left: 2vw;
			}
		}
	}
`

export default PostList
