/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styled from "styled-components"

const PostList = ({ Posts }) => {
	const ArrayPosts = Posts.Posts
	console.log(ArrayPosts)

	return (
		<Container>
			<ul>
				{ArrayPosts.map((item: { title: string }) => (
					<li>{item.title}</li>
				))}
			</ul>
		</Container>
	)
}

const Container = styled.section``

export default PostList
