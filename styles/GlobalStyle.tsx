import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0px;
	}

 	body {
		font-family: "system-ui";
		background-color: white;
	}

	::-webkit-scrollbar {
		width: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #2256f4;
	}

`

export default GlobalStyle
