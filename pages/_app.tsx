import type { AppProps } from "next/app"
import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { Context } from "./context/Context"
import LoaderContainer from "./_loadContainer"

const theme: DefaultTheme = {
	colors: {
		primary: "#fff",
		secondary: "#fff",
	},
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Context>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Sono:wght@300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>

				<LoaderContainer Component={Component} pageProps={pageProps} />
			</Context>
		</ThemeProvider>
	)
}
