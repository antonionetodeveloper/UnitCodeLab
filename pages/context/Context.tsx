import { createContext, useState } from "react"
import { LoadingContextType } from "../../types/LoadingContextType"

const LoadingContext = createContext<LoadingContextType>(
	{} as LoadingContextType,
)

// eslint-disable-next-line react/prop-types
export function Context({ children }) {
	const [loading, setLoading] = useState(true)
	const [auth, setAuth] = useState(false)

	return (
		<LoadingContext.Provider value={{ loading, setLoading, auth, setAuth }}>
			{children}
		</LoadingContext.Provider>
	)
}

export default LoadingContext
