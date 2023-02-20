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
				<LoaderContainer Component={Component} pageProps={pageProps} />
			</Context>
		</ThemeProvider>
	)
}
