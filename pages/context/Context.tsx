import { createContext, useState } from "react"
import { ContextType } from "../../types/ContextType"

const Context = createContext<ContextType>({} as ContextType)

// eslint-disable-next-line react/prop-types
export function ContextProvider({ children }) {
	const [auth, setAuth] = useState(false)
	const [selectedHeaderItem, setSelectedHeaderItem] = useState("inicio")

	return (
		<Context.Provider
			value={{
				auth,
				setAuth,
				selectedHeaderItem,
				setSelectedHeaderItem,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
