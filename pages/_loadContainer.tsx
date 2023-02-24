import { useContext, useEffect } from "react"
import LoadingContext from "./context/Context"
import Loader from "../components/Loader"

// eslint-disable-next-line react/prop-types
export default function DisplayContainer({ Component, pageProps }) {
	const CONTEXT = useContext(LoadingContext)
	useEffect(() => {
		setTimeout(() => CONTEXT.setLoading(false), 2000)
	})

	return CONTEXT.loading ? <Loader /> : <Component {...pageProps} />
}
