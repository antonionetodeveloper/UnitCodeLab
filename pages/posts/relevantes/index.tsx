/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Head from "next/head"
import Header from "../../../components/Header"
import { Container } from "./style"
import { API_URL } from "../../_document"
import PostList from "../components/PostList"
import { useContext } from "react"
import LoadingContext from "../../context/Context"

export default function Relevantes({ posts }) {
	const { setSelectedHeaderItem } = useContext(LoadingContext)
	setSelectedHeaderItem("relevantes")

	return (
		<>
			<Head>
				<title>Discussões</title>
			</Head>

			<Header />

			<Container>
				<h1>Discussões relevantes!</h1>
				<PostList Posts={posts} />
			</Container>
		</>
	)
}

export async function getServerSideProps() {
	const response = await fetch(API_URL + "api/posts/RelevantPosts")
	const posts = await response.json()

	return {
		props: { posts: posts },
	}
}
