import { createContext, useState } from "react"
import { LoadingContextType } from "../../types/LoadingContextType"

const LoadingContext = createContext<LoadingContextType>(
	{} as LoadingContextType,
)

// eslint-disable-next-line react/prop-types
export function Loading({ children }) {
	const [loading, setLoading] = useState(false)

	return (
		<LoadingContext.Provider value={{ loading, setLoading }}>
			{children}
		</LoadingContext.Provider>
	)
}

export default LoadingContext
