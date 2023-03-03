/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Head from "next/head"
import Header from "../../../components/Header"
import { Container } from "./style"
import { API_URL } from "../../_document"
import PostList from "../components/PostList"
import { useContext } from "react"
import Context from "../../../context/Context"

export default function Relevantes({ posts }) {
	const Posts = posts?.Posts
	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("relevantes")

	return (
		<>
			<Head>
				<title>Discussões</title>
			</Head>

			<Header />

			<Container>
				<h2>Discussões relevantes!</h2>
				<PostList Posts={Posts} />
			</Container>
		</>
	)
}

export async function getStaticProps() {
	const response = await fetch(API_URL + "api/posts/RelevantPosts")
	const posts = await response.json()

	return {
		props: { posts: posts },
		revalidate: 5, // 5 seconds
	}
}
