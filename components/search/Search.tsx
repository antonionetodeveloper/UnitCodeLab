/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { API_URL } from "../../pages/_document"
import { Item } from "./Item"

/* eslint-disable react/no-unknown-property */
const Search = () => {
	const [search, setSearch] = useState("")
	const [arraySearchs, setArraySearchs] = useState([])

	useEffect(() => {
		SearchHandle(search)
	}, [search])

	async function SearchHandle(search: string) {
		const capitalize = (str: string) =>
			str.charAt(0).toUpperCase() + str.substring(1)

		if (search.length > 0) {
			const capitalizedSearch = capitalize(search)

			axios
				.post(API_URL + "api/Search", {
					query: capitalizedSearch,
				})
				.then((response) => {
					if (response.data.message != "Nenhuma discussão encontrada.") {
						setArraySearchs(response.data.data)
					} else {
						setArraySearchs(response.data.message)
					}
				})
				.catch((error) => {
					console.log("Erro  ==> ", error)
				})
		}
	}

	return (
		<Container>
			<form className="form">
				<button type="button" className="search">
					<svg
						width="17"
						height="16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-labelledby="search"
					>
						<path
							d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
							stroke="currentColor"
							stroke-width="1.333"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</button>
				<input
					className="input"
					placeholder="Pesquisar"
					required
					type="text"
					onChange={(event) => {
						setSearch(event.target.value)
					}}
				/>
				<button className="reset" type="reset" onClick={() => setSearch("")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</form>
			<div className="options">
				{search.length > 0 ? (
					<ul>
						{typeof arraySearchs != "string" ? (
							arraySearchs.map((item: { title: string; author: string }) => (
								<Item title={item.title} author={item.author} />
							))
						) : (
							<li className="notFound">{arraySearchs}</li>
						)}
					</ul>
				) : (
					<div style={{ display: "none" }} />
				)}
			</div>
		</Container>
	)
}

const Container = styled.div`
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
		--width-of-input: 200px;
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

		:hover {
			cursor: text;
		}
	}
	/* styling of Input */
	.input {
		font-size: 0.9rem;
		background-color: transparent;
		width: 100%;
		height: 100%;
		padding-inline: 0.5em;
		padding-block: 0.7em;
		border: none;
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
		font-family: "Sono";
		padding: 2vw;
		text-align: center;
		transition: 0.3s;

		:hover {
			cursor: not-allowed;
			background-color: #ccc;
		}
	}
`

export default Search
