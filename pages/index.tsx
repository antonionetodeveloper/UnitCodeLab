import Head from "next/head"
import { useContext } from "react"
import Context from "../context/Context"

import { Main } from "./style"

import Header from "../components/Header"
import HomeBanner from "./components/HomeBanner"
import DividerWave from "../components/divider/Wave"
import TiraDuvidas from "./components/TiraDuvidas"
import Contribua from "./components/Contribua"
import TiltDivider from "../components/divider/Tilt"
import ApiSection from "./components/Api"
import Footer from "../components/Footer"

export default function Index({ data }: any) {
	const { setSelectedHeaderItem } = useContext(Context)
	setSelectedHeaderItem("inicio")

	const GIF = data.data.images.original.url

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<Header />

			<Main>
				<HomeBanner GIF={GIF} />
				<DividerWave />
				<TiraDuvidas />
				<Contribua />
				<TiltDivider />
				<ApiSection />
			</Main>

			<Footer />
		</>
	)
}

export async function getServerSideProps() {
	const ApiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY

	const response = await fetch(
		`https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}&tag=computer`,
	)

	const data = await response.json()

	return {
		props: {
			data,
		},
	}
}
