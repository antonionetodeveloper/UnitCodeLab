/* eslint-disable no-var */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styled from "styled-components"

const Comments = ({ Comments }) => {
	// console.log(Comments[0][1].ID, CountLetter(Comments[0][1].ID, "@"))

	return (
		<>
			{Comments ? (
				<Container>
					{Comments.map((AllCommentsOfComment: Array<object>) => (
						<div className="Comment">
							{AllCommentsOfComment.map(
								(Comment: { content: string; author: string; ID: string }) => (
									<PaddingCommentContainer IdComment={Comment.ID}>
										<div>
											<p className="author">{Comment?.author}</p>
											{/* <p>{Comment.}</p> */}
										</div>
										<p>{Comment?.content}</p>
									</PaddingCommentContainer>
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

/*
padding: ${(props: { IdComment: string }) => {
	const sentence = props.IdComment
	const word = "@"
	var result = 0

	for (var index = 0; index < sentence.length; index++) {
		if (sentence[index] === word) {
			result++
		}
	}

	result.toString()
	console.log(sentence, result)

	return `${result.toString()}vw`
}}; */

//1px solid rgba(255, 255, 255, 0.222)

const PaddingCommentContainer: any = styled.div`
	border-radius: 10px;
	padding: 1vw;

	border: ${(props: { IdComment: string }) => {
		const sentence = props.IdComment
		const word = "@"
		var result = 0

		for (var index = 0; index < sentence.length; index++) {
			if (sentence[index] === word) {
				result++
			}
		}

		if (result === 1) {
			return "0px"
		} else {
			return "1px solid rgba(255, 255, 255, 0.222)"
		}
	}};

	margin-left: ${(props: { IdComment: string }) => {
		const sentence = props.IdComment
		const word = "@"
		var result = 0

		for (var index = 0; index < sentence.length; index++) {
			if (sentence[index] === word) {
				result++
			}
		}

		result.toString()
		console.log(sentence, result)

		return `${result * 2}vw`
	}};

	p.author {
		color: #ccc;
	}
`

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

		display: flex;
		flex-direction: column;
		gap: 1vw;
	}
`

export default Comments
