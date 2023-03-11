import styled from "styled-components"
import RegularButton from "../../../../components/Buttons/RegularButton"
import SimpleLoader from "../../../../components/Loaders/simple"

const AddComment = ({ comment, setComment, submit, loading }: any) => {
	return (
		<Container>
			<div className="addComment">
				<div>
					<img src="/assets/user.png" alt="usuario" />
					<form>
						<textarea
							placeholder="Adicionar comentário"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>
					</form>
				</div>
				<RegularButton clicked={submit}>
					{loading ? <SimpleLoader /> : "Responder"}
				</RegularButton>
			</div>
		</Container>
	)
}

const Container = styled.div`
	.addComment {
		margin-top: 5vh;

		div {
			display: flex;

			img {
				width: 3.5vw;
				height: 3.5vw;
			}

			form {
				width: 100%;

				textarea {
					width: 98%;
					min-height: 5vw;
					background-color: #020c13;
					border: 1px solid rgba(255, 255, 255, 0.222);
					color: white;
					font-family: "system-ui";
					resize: vertical;
					padding: 10px;
				}
			}
		}

		button {
			background-color: #1c720b;
			color: white;
			margin-left: auto;
			width: 10vw;

			:hover {
				background-color: #34b91a;
				box-shadow: 0 0 0 5px rgba(0, 255, 0, 0.3);
			}
		}
	}
`

export default AddComment
