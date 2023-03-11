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
import Router from "next/router"

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch(API_URL + "api/posts/ShowIDposts")
	const Data = await response.json()
	const IDs = Data.Data

	const paths = IDs?.map((ID: string) => ({ params: { post_ID: ID } }))
	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const response = await fetch(API_URL + "api/posts/" + context.params.post_ID)
	const postData = await response.json()

	return {
		props: {
			post: postData,
		},
	}
}

export default function Post({ post }) {
	const Post = post?.Post

	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("none")

	const [loading, setLoading] = useState(false)
	const [comment, setComment] = useState("")

	const PostId = post?.Post?._id
	const author = "Um cara legal!"

	const addComment = async () => {
		setLoading(true)

		const CommentData = {
			commentID: PostId,
			PostID: PostId,
			Content: comment,
			Author: author,
			Reference: null,
		}

		const REVALIDATE_SECRET = process.env.NEXT_PUBLIC_REVALIDATE_SECRET

		await axios
			.post(API_URL + `api/posts/${PostId}/addComment`, CommentData)
			.then(() => {
				fetch(API_URL + "api/revalidate?secret=" + REVALIDATE_SECRET)
				Router.reload()
				setLoading(false)
			})
			.catch((err) => {
				alert(err.data.error)
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

				{post?.Comments?.length == 0 ? null : (
					<section className="comments">
						<Comments post={post} />
						<AddComment
							submit={() => {
								addComment()
							}}
							comment={comment}
							setComment={setComment}
							loading={loading}
						/>
					</section>
				)}
			</Container>
		</>
	)
}
