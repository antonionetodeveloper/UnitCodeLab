export function formatDate(updatedAtDate) {
	const postDate = Intl.DateTimeFormat("pt-BR", {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	}).format(updatedAtDate)

	const currentDate = Intl.DateTimeFormat("pt-BR", {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	}).format(Date.now())

	const currentYear = parseInt(currentDate[7] + currentDate[8] + currentDate[9])
	const postYear = parseInt(postDate[7] + postDate[8] + postDate[9])
	if (currentYear > postYear) {
		if (currentYear - postYear == 1) {
			return "Ano passado"
		} else {
			return `Há ${currentYear - postYear} anos atrás`
		}
	}

	const currentMonth = parseInt(currentDate[3] + currentDate[4])
	const postMonth = parseInt(postDate[3] + postDate[4])
	if (currentMonth - postMonth > 1) {
		return `Há ${currentMonth - postMonth} meses atrás`
	}
	if (currentMonth - postMonth == 1) {
		return "Mês passado"
	}

	const currentDay = parseInt(currentDate[0] + currentDate[1])
	const postDay = parseInt(postDate[0] + postDate[1])
	if (currentDay - postDay > 1) {
		return `Há ${currentDay - postDay} dias atrás`
	}
	if (currentDay - postDay == 1) {
		return "Ontem"
	}
	if (currentDay - postDay == 0) {
		return "Hoje"
	}
}
