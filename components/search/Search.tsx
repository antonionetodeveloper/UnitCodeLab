/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import axios from "axios"
import { API_URL } from "../../pages/_document"
import { Item } from "./Item"
import Container from "./style"
import Loader from "../Loader"
import { useState, useEffect } from "react"

/* eslint-disable react/no-unknown-property */
const Search = () => {
	const [search, setSearch] = useState("")
	const [isSearching, setIsSearching] = useState(false)
	const [arraySearchs, setArraySearchs] = useState([])

	useEffect(() => {
		SearchHandle(search)
		setIsSearching(true)
	}, [search])

	const capitalize = (str: string) =>
		str.charAt(0).toUpperCase() + str.substring(1)

	async function SearchHandle(search: string) {
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

					setIsSearching(false)
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
							strokeWidth="1.333"
							strokeLinecap="round"
							strokeLinejoin="round"
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
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</form>
			{search.length > 0 ? (
				<div className="options">
					<ul>
						{isSearching ? (
							<Loader little />
						) : typeof arraySearchs != "string" ? (
							arraySearchs.map(
								(item: { title: string; author: string; _id: number }) => (
									<Item
										title={item.title}
										author={item.author}
										path={item._id}
									/>
								),
							)
						) : (
							<li className="notFound">{arraySearchs}</li>
						)}
					</ul>
				</div>
			) : (
				<div style={{ display: "none" }} />
			)}
		</Container>
	)
}

export default Search
