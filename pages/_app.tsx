import type { AppProps } from "next/app"
import { Router } from "next/router"
import { useState, useEffect } from "react"
import { ThemeProvider, DefaultTheme } from "styled-components"
import Loader from "../components/Loader"
import GlobalStyle from "../styles/GlobalStyle"
import { ContextProvider } from "./context/Context"

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
			setLoading(true)
		}
		const end = () => {
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
		<ContextProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{loading ? <Loader /> : <Component {...pageProps} />}
			</ThemeProvider>
		</ContextProvider>
	)
}
