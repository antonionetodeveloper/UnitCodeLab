import Head from "next/head"
import { useContext } from "react"
import LoadingContext from "./context/Context"

import { Main } from "./style"

import Header from "../components/Header"
import HomeBanner from "./components/HomeBanner"
import DividerWave from "../components/divider/Wave"
import TiraDuvidas from "./components/TiraDuvidas"
import Contribua from "./components/Contribua"
import TiltDivider from "../components/divider/Tilt"
import ApiSection from "./components/Api"
import Footer from "../components/Footer"

export default function Index() {
	const { setSelectedHeaderItem } = useContext(LoadingContext)
	setSelectedHeaderItem("inicio")

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<Header />

			<Main>
				<HomeBanner />
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
