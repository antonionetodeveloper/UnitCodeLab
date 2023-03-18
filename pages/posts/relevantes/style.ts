import styled, { DefaultTheme, StyledComponent } from "styled-components"

export const Container: StyledComponent<
	"main",
	DefaultTheme,
	{ currentPage: number },
	never
> = styled.main`
	padding-top: 15vh;
	min-height: 85vh;
	color: white;

	background-image: url("/posts/postBG.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		font-size: 2.5rem;
		font-weight: 900;
	}

	.pageOptions {
		display: flex;
		gap: 1vw;
		margin-bottom: 2vh;

		.${({ currentPage }: { currentPage: number }) => `button_${currentPage}`} {
			text-decoration: underline;
			font-size: 2rem;
		}

		button {
			background-color: transparent;
			border: none;
			color: white;
			font-size: 1.5rem;
			font-weight: 700;
			transition: 0.3s;

			:hover {
				cursor: pointer;
				padding: 0 1vw 0 1vw;
			}
		}
	}
`
export default Container
