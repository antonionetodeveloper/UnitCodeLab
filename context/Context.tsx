import { parseCookies } from "nookies"
import { createContext, ReactNode, useEffect, useState } from "react"
import { ContextType } from "../types/ContextType"

const Context = createContext<ContextType>({} as ContextType)

export function ContextProvider({ children }: { children: ReactNode }) {
	const [auth, setAuth] = useState(false)
	const [selectedHeaderItem, setSelectedHeaderItem] = useState("inicio")

	const cookies = parseCookies()
	useEffect(() => {
		if (cookies.token) {
			setAuth(true)
		}
	}, [])

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
