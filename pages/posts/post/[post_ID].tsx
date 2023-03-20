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
import { parseCookies } from "nookies"

import { PostModule } from "../../../models/posts"
import { CommentsModule } from "../../../models/comments"
import mongoose from "mongoose"
import { ConnectDB } from "../../../middleware/ConnectDB"

const connectDB = async () => {
	const { MONGO_DB_URL } = process.env
	await mongoose.connect(MONGO_DB_URL)
}

export const getStaticPaths: GetStaticPaths = async () => {
	await connectDB()
	const data = await PostModule.find().distinct("_id")
	// const teste = await data.json()

	// const { data } = await response.json()

	const paths = data.map((ID: string) => ({ params: { post_ID: String(ID) } }))

	return {
		paths,
		fallback: "blocking",
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	await connectDB()
	const Post = await PostModule.findOne({ _id: context.params?.post_ID })

	const AllComments = await CommentsModule.find({
		post: context.params?.post_ID,
	})

	const postData = {
		Post: JSON.parse(JSON.stringify(Post)),
		Comments: JSON.parse(JSON.stringify(AllComments)),
	}

	return {
		props: {
			post: postData,
		},
	}
}

export default function Post({ post }) {
	const Post = post?.Post

	const { setSelectedHeaderItem, auth } = useContext(Context)
	setSelectedHeaderItem("none")
	const cookies = parseCookies()

	const [loading, setLoading] = useState(false)
	const [comment, setComment] = useState("")
	const [comments, setComments] = useState(post?.Comments || [])

	const PostId = post?.Post?._id

	const addComment = async (body = null, callback = null) => {
		setLoading(true)

		const CommentData = body || {
			commentID: PostId,
			PostID: PostId,
			Content: comment,
			Author: auth ? cookies.name : "Anônimo",
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

		revalidate()
	}

	const revalidate = async () => {
		await axios.post(API_URL + "api/accessRevalidate", {
			PostID: PostId,
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
