import styled from "styled-components"

export const Container = styled.div`
	/* From uiverse.io by @satyamchaudharydev */
	/* removing default style of button */
	display: flex;
	flex-direction: column;
	align-items: center;

	.form button {
		border: none;
		background: none;
		color: #000000;
	}

	.search {
		:hover {
			cursor: text;
		}
	}

	/* styling of whole input container */
	.form {
		--timing: 0.3s;
		--width-of-input: 20vw;
		--height-of-input: 40px;
		--border-height: 2px;
		--input-bg: #fff;
		--border-color: #000000;
		--border-radius: 30px;
		--after-border-radius: 1px;
		position: relative;
		width: var(--width-of-input);
		height: var(--height-of-input);
		display: flex;
		align-items: center;
		padding-inline: 0.8em;
		border-radius: var(--border-radius);
		transition: border-radius 0.5s ease;
		background: var(--input-bg, #fff);
	}
	/* styling of Input */
	.input {
		background-color: transparent;
		width: 100%;
		height: 100%;
		padding-inline: 0.5em;
		padding-block: 0.7em;
		border: none;
		font-size: 1.2vw;
	}
	/* styling of animated border */
	.form:before {
		content: "";
		position: absolute;
		background: var(--border-color);
		transform: scaleX(0);
		transform-origin: center;
		width: 100%;
		height: var(--border-height);
		left: 0;
		bottom: 0;
		border-radius: 1px;
		transition: transform var(--timing) ease;
	}
	/* Hover on Input */
	.form:focus-within {
		border-radius: var(--after-border-radius);
	}

	input:focus {
		outline: none;
	}
	/* here is code of animated border */
	.form:focus-within:before {
		transform: scale(1);
	}
	/* styling of close button */
	/* == you can click the close button to remove text == */
	.reset {
		border: none;
		background: none;
		opacity: 0;
		visibility: hidden;
		z-index: 2;
		:hover {
			cursor: pointer;
		}
	}
	/* close button shown when typing */
	input:not(:placeholder-shown) ~ .reset {
		opacity: 1;
		visibility: visible;
	}
	/* sizing svg icons */
	.form svg {
		width: 17px;
		margin-top: 3px;
	}

	.options {
		position: absolute;
		max-height: 45vh;
		min-height: 15vh;
		width: 25vw;
		top: 70px;

		display: flex;
		flex-direction: column;
		justify-content: center;

		ul {
			padding-inline-start: 0px;
			background-color: white;
		}
	}

	.notFound {
		padding: 2vw;
		text-align: center;
		transition: 0.3s;
		list-style-type: none;

		:hover {
			cursor: not-allowed;
			background-color: #ccc;
		}
	}
`

export default Container
