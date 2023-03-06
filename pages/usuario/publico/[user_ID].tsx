/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { GetStaticPaths, GetStaticProps } from "next"
import { useContext } from "react"
import Header from "../../../components/Header"
import Context from "../../../context/Context"
import { API_URL } from "../../_document"
import Container from "./style"

export const getStaticPaths: GetStaticPaths = async () => {
	/* const response = await fetch(API_URL + "api/posts/ShowIDposts")
	const Data = await response.json()
	const IDs = Data.Data */

	//const paths = IDs?.map((ID: string) => ({ params: { post_ID: ID } }))

	return {
		//paths,

		paths: [{ params: { user_ID: "nome" } }],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	/* const response = await fetch(API_URL + "api/posts/SinglePost", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ PostID: context.params.post_ID }),
	})
	const postData = await response.json()
 */
	return {
		props: {
			name: "Fulano",
			age: 17,
		},
		revalidate: 5, // 5 seconds
	}
}

export default function Post({ name, age }) {
	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("none")

	return (
		<>
			<Header />
			<Container style={{ paddingTop: "10vh" }}>
				<p>
					{name} tem {age} anos.
				</p>
			</Container>
		</>
	)
}
