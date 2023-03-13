/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Container } from "./style"
import { API_URL } from "../../_document"
import Comments from "./components/Comments"
import Header from "../../../components/Header"
import { useContext, useState } from "react"
import Context from "../../../context/Context"
import { GetStaticPaths, GetStaticProps } from "next"
import { formatDate } from "../../api/posts/services/formatDate"
import AddComment from "./components/addComment"
import axios from "axios"

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch(API_URL + "api/posts/ShowIDposts")
	const Data = await response.json()
	const IDs = Data.Data

	const paths = IDs?.map((ID: string) => ({ params: { post_ID: ID } }))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const response = await fetch(API_URL + "api/posts/" + context.params.post_ID)
	const postData = await response.json()

	return {
		props: {
			post: postData,
		},
		revalidate: 5,
	}
}

export default function Post({ post }) {
	const Post = post?.Post

	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("none")

	const [loading, setLoading] = useState(false)
	const [comment, setComment] = useState("")
	const [comments, setComments] = useState(post?.Comments || [])

	const PostId = post?.Post?._id
	const author = "Uma pessoa gente boa"

	const addComment = async (body = null, callback = null) => {
		setLoading(true)

		const CommentData = body || {
			commentID: PostId,
			PostID: PostId,
			Content: comment,
			Author: author,
			Reference: null,
		}

		await axios
			.post(API_URL + `api/posts/${PostId}/addComment`, CommentData)
			.then(({ data }) => {
				setComments(data.data)

				callback && callback()

				setLoading(false)
			})
			.catch((err) => {
				alert(err.data)
				setLoading(false)
			})
	}

	return (
		<>
			<Header />
			<Container hasComment={post?.Comments?.length}>
				<section>
					<div className="box">
						<div>
							<h4>{Post?.title}</h4>
							<span>{Post?.author}</span>
						</div>
						<p>{Post?.content}</p>
					</div>

					<div className="obs">
						<span>Quantidade de comentários: {Post?.commentsCount}</span>
						<span className="updatedAt">
							Ultima atualização: {formatDate(Date.parse(Post?.updatedAt))}
						</span>
					</div>
				</section>

				<section className="comments">
					<Comments
						postId={PostId}
						addComment={addComment}
						comments={comments}
					/>
					<AddComment
						submit={() => {
							addComment(null, () => {
								setComment("")
							})
						}}
						comment={comment}
						setComment={setComment}
						loading={loading}
					/>
				</section>
			</Container>
		</>
	)
}
