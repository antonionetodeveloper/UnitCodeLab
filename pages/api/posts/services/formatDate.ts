export function formatDate(updatedAt) {
	const date = new Date(updatedAt)
	const now = new Date()

	const diffInMilliseconds = now.getTime() - date.getTime()
	const diffInSeconds = Math.floor(diffInMilliseconds / 1000)

	let timeDescription = ""

	if (diffInSeconds >= 31536000) {
		const diffInYears = Math.floor(diffInSeconds / 31536000)
		timeDescription = `${diffInYears} ${
			diffInYears === 1 ? "ano" : "anos"
		} atrás`
	} else if (diffInSeconds >= 2592000) {
		const diffInMonths = Math.floor(diffInSeconds / 2592000)
		timeDescription = `${diffInMonths} ${
			diffInMonths === 1 ? "mês" : "meses"
		} atrás`
	} else if (diffInSeconds >= 86400) {
		const diffInDays = Math.floor(diffInSeconds / 86400)
		timeDescription = `${diffInDays} ${diffInDays === 1 ? "dia" : "dias"} atrás`
	} else if (diffInSeconds >= 3600) {
		const diffInHours = Math.floor(diffInSeconds / 3600)
		timeDescription = `${diffInHours} ${
			diffInHours === 1 ? "hora" : "horas"
		} atrás`
	} else if (diffInSeconds >= 60) {
		const diffInMinutes = Math.floor(diffInSeconds / 60)
		timeDescription = `${diffInMinutes} ${
			diffInMinutes === 1 ? "minuto" : "minutos"
		} atrás`
	} else {
		timeDescription = "agora mesmo"
	}

	return timeDescription
}
