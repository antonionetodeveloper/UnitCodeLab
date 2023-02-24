import type { AppProps } from "next/app"
import { Router } from "next/router"
import { useEffect, useState } from "react"
import { ThemeProvider, DefaultTheme } from "styled-components"
import Loader from "../components/Loader"
import GlobalStyle from "../styles/GlobalStyle"
import { Context } from "./context/Context"
import DisplayContainer from "./_loadContainer"

const theme: DefaultTheme = {
	colors: {
		primary: "#fff",
		secondary: "#fff",
	},
}

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const start = () => {
			console.log("start")
			setLoading(true)
		}
		const end = () => {
			console.log("findished")
			setLoading(false)
		}
		Router.events.on("routeChangeStart", start)
		Router.events.on("routeChangeComplete", end)
		Router.events.on("routeChangeError", end)
		return () => {
			Router.events.off("routeChangeStart", start)
			Router.events.off("routeChangeComplete", end)
			Router.events.off("routeChangeError", end)
		}
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Context>
				{loading ? (
					<Loader />
				) : (
					<DisplayContainer Component={Component} pageProps={pageProps} />
				)}
			</Context>
		</ThemeProvider>
	)
}
