/* eslint-disable react/prop-types */
import { Container } from "./style"
import Header from "../../../components/Header"
import Head from "next/head"
import { API_URL } from "../../_document"
import PostList from "../components/PostList"
import { useContext } from "react"
import Context from "../../context/Context"

export default function Recentes({ posts }) {
	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("recentes")

	return (
		<>
			<Head>
				<title>Discussões</title>
			</Head>

			<Header />

			<Container>
				<h2>Discussões recentes!</h2>
				<PostList Posts={posts} />
			</Container>
		</>
	)
}

export async function getServerSideProps() {
	const response = await fetch(API_URL + "api/posts/RecentPosts")
	const posts = await response.json()

	return {
		props: { posts: posts },
	}
}
