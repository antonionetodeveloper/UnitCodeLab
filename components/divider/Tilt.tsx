import styled from "styled-components"

const TiltDivider = () => {
	return (
		<Container>
			<div className="custom-shape-divider-top-1676931595">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</Container>
	)
}

const Container = styled.div`
	z-index: 1;

	.custom-shape-divider-top-1676931595 {
		position: absolute;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.custom-shape-divider-top-1676931595 svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 150px;
		transform: rotateY(180deg);
	}

	.custom-shape-divider-top-1676931595 .shape-fill {
		fill: #ffffff;
	}
`
export default TiltDivider
