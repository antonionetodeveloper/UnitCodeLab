import { Dispatch, SetStateAction } from "react"

export interface LoadingContextType {
	loading: boolean
	setLoading: Dispatch<SetStateAction<boolean>>
	auth: boolean
	setAuth: Dispatch<SetStateAction<boolean>>
}
