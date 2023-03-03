/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styled from "styled-components"

const Comments = ({ Comments }) => {
	return (
		<Container>
			{Comments?.map((comment) => (
				<ul>
					<li>
						<h6>{comment.Comment}</h6>
					</li>
					<ul>
						{comment.nextLevel.length > 0 ? (
							comment.nextLevel.map((comment) => <li>{comment.Comment}</li>)
						) : (
							<></>
						)}
					</ul>
				</ul>
			))}
		</Container>
	)
}

const Container = styled.section``

export default Comments
