import { Dispatch, SetStateAction } from "react"

export interface ContextType {
	auth: boolean
	setAuth: Dispatch<SetStateAction<boolean>>
	selectedHeaderItem: string
	setSelectedHeaderItem: Dispatch<SetStateAction<string>>
}
