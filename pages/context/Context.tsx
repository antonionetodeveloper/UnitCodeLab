import { createContext, ReactNode, useState } from "react"
import { ContextType } from "../../types/ContextType"

const Context = createContext<ContextType>({} as ContextType)

export function ContextProvider({ children }: { children: ReactNode }) {
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
