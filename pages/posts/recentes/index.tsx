/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Container } from "./style"
import Header from "../../../components/Header"
import Head from "next/head"
import { API_URL } from "../../_document"
import PostList from "../components/PostList"
import { useContext } from "react"
import Context from "../../../context/Context"
import { useRouter } from "next/router"

export default function Recentes({ posts, CurrentPage }) {
	const Router = useRouter()

	const Posts = posts?.Posts
	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("recentes")

	const pages = []
	for (let i = 1; i <= posts?.PageCount; i++) {
		pages.push(<span>{i}</span>)
	}

	return (
		<>
			<Head>
				<title>Discussões</title>
			</Head>

			<Header />

			<Container currentPage={CurrentPage}>
				<h2>Discussões recentes!</h2>
				<PostList Posts={Posts} />
				{posts?.PageCount <= 1 ? null : (
					<div className="pageOptions">
						{pages.map((element) => (
							<button
								className={`button_${element.props.children}`}
								onClick={() => {
									Router.push("/posts/recentes?page=" + element.props.children)
								}}
							>
								{element.props.children}
							</button>
						))}
					</div>
				)}
			</Container>
		</>
	)
}

export async function getServerSideProps(context) {
	const CurrentPage = context.query.page || 1

	const response = await fetch(
		API_URL + "api/posts/RecentPosts" + "?page=" + CurrentPage,
	)
	const posts = await response.json()

	return {
		props: { posts: posts, CurrentPage },
	}
}
