/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styled from "styled-components"

const Comments = ({ Comments }) => {
	console.log(Comments)

	return (
		<>
			{Comments ? (
				<Container>
					{Comments.map((AllCommentsOfComment: Array<object>) => (
						<div className="Comment">
							{AllCommentsOfComment.map(
								(Comment: { content: string; author: string }) => (
									<div className="CommentBox">
										<div>
											<p className="author">{Comment?.author}</p>
											{/* <p>{Comment.}</p> */}
										</div>
										<p>{Comment?.content}</p>
									</div>
								),
							)}
						</div>
					))}
				</Container>
			) : (
				<></>
			)}
		</>
	)
}

const Container = styled.section`
	color: #fff;
	display: flex;
	flex-direction: column;
	gap: 2vw;

	div.Comment {
		border: 1px solid rgba(255, 255, 255, 0.222);
		border-radius: 10px;
		padding: 1vw;
		background-color: #020c13;

		div.CommentBox {
			border: 1px solid rgba(255, 255, 255, 0.222);
			border-radius: 10px;
			padding: 1vw;
			p.author {
				color: #ccc;
			}
		}
	}
`

export default Comments
