/* eslint-disable no-var */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styled from "styled-components"
import { formatDate } from "../../../api/posts/services/formatDate"

const Comments = ({ Comments }) => {
	console.log(Comments)
	console.log(formatDate(Date.parse(Comments[0].children[2].updatedAt)))

	return (
		<>
			{Comments ? (
				<Container>
					{Comments.map(
						(Comment: {
							content: string
							author: string
							ID: string
							updatedAt: string
							children: Array<object>
						}) => (
							<PaddingCommentContainer>
								<div className="parent">
									<p className="author">{Comment?.author}</p>
									<span>:</span>
									<p className="updatedAt">
										{formatDate(Date.parse(Comment?.updatedAt))}
									</p>
								</div>
								<p>{Comment?.content}</p>
								{Comment.children.length > 0 ? (
									Comment.children.map(
										(ChildComment: {
											content: string
											author: string
											reference: string
											updatedAt: string
											ID: string
										}) => (
											<PaddingCommentContainer>
												<div>
													<div className="header">
														<p className="author">{ChildComment?.author}</p>
														<span>:</span>
														<p className="updatedAt">
															{formatDate(Date.parse(ChildComment?.updatedAt))}
														</p>
													</div>
													{ChildComment?.reference != null ? (
														<p className="reference">
															{ChildComment?.reference.substring(0, 20)} ...
														</p>
													) : null}
												</div>
												<p>{ChildComment?.content}</p>
											</PaddingCommentContainer>
										),
									)
								) : (
									<></>
								)}
							</PaddingCommentContainer>
						),
					)}
				</Container>
			) : (
				<></>
			)}
		</>
	)
}

const PaddingCommentContainer: any = styled.div`
	border-radius: 10px;
	padding: 1vw;

	border: 1px solid rgba(255, 255, 255, 0.222);
	border-radius: 10px;
	padding: 1vw;
	background-color: #020c13;

	display: flex;
	flex-direction: column;
	gap: 1vw;

	.parent {
		display: flex;
		flex-direction: row;
		gap: 10px;

		.updatedAt {
			color: #ccc;
		}
	}
	.header {
		color: #ccc;
		display: flex;
		gap: 5px;
	}
	.reference {
		background-color: #313335;
		display: inline;
		border-radius: 5px;
		padding: 0px 5px;
		position: relative;
		top: 4px;
	}
`

const Container = styled.section`
	color: #fff;
	display: flex;
	flex-direction: column;
	gap: 2vw;
`

export default Comments
