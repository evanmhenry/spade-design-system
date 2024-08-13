type DateTimeCellProps = {
	value: string
}

const DateTimeCell = ({ value }: DateTimeCellProps) => {
	const date = new Date(value)

	const timeString = date.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	})

	const dateString = date.toLocaleDateString('en-US', {
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
	})

	const formattedDateTime = `${dateString} - ${timeString}`

	return <div>{formattedDateTime}</div>
}

export default DateTimeCell
