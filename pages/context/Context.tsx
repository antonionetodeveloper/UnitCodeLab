import { createContext, useState } from "react"
import { LoadingContextType } from "../../types/LoadingContextType"

const LoadingContext = createContext<LoadingContextType>(
	{} as LoadingContextType,
)

// eslint-disable-next-line react/prop-types
export function Context({ children }) {
	const [loading, setLoading] = useState(true)
	const [auth, setAuth] = useState(false)
	const [selectedHeaderItem, setSelectedHeaderItem] = useState("inicio")

	return (
		<LoadingContext.Provider
			value={{
				loading,
				setLoading,
				auth,
				setAuth,
				selectedHeaderItem,
				setSelectedHeaderItem,
			}}
		>
			{children}
		</LoadingContext.Provider>
	)
}

export default LoadingContext
