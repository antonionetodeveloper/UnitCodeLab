/* eslint-disable react/prop-types */
import { Container } from "./style"
import Header from "../../../components/Header"
import Head from "next/head"
import { API_URL } from "../../_document"
import PostList from "../components/PostList"
import LoadingContext from "../../context/Context"
import { useContext } from "react"

export default function Recentes({ posts }) {
	const { setSelectedHeaderItem } = useContext(LoadingContext)
	setSelectedHeaderItem("recentes")

	return (
		<>
			<Head>
				<title>Discussões</title>
			</Head>

			<Header />

			<Container>
				<h1>Discussões recentes!</h1>
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