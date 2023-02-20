/* eslint-disable react/prop-types */
import { Container } from "./style"
import { API_URL } from "../../_document"

export async function getStaticPaths() {
	const response = await fetch(API_URL + "api/posts/ShowIDposts")
	const Data = await response.json()
	const IDs = Data.Data

	const paths = IDs.map((ID) => ({ params: { post_ID: ID } }))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const response = await fetch(API_URL + "api/posts/SinglePost", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ PostID: context.params.post_ID }),
	})
	const postData = await response.json()

	return {
		props: {
			post: postData,
		},
		revalidate: 10,
	}
}

export default function Post({ post }) {
	const Post = post.Post

	return (
		<Container>
			<h4>Título: {Post.title}</h4>
			<p>Conteúdo: {Post.content}</p>
			<span>Autor: {Post.author}</span>
			<span>Quantidade de comentários: {Post.commentsCount}</span>
			<span>Ultima atualização em: {Post.updatedAt}</span>
		</Container>
	)
}
