import type { AppProps } from "next/app"
import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { Loading } from "./context/loading"

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
			<Loading>
				<Component {...pageProps} />
			</Loading>
		</ThemeProvider>
	)
}
