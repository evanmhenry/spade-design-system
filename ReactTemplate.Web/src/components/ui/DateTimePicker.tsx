import React from 'react'

type DateTimePickerProps = React.InputHTMLAttributes<HTMLInputElement>

const DateTimePicker = (props: DateTimePickerProps) => (
	<input
		{...props}
		className='bg-background h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
		type='datetime-local'
	/>
)

export default DateTimePicker
