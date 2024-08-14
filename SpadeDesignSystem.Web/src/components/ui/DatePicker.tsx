import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils1'
import { Button } from '@/components/ui/Button'
import { Calendar } from '@/components/ui/Calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { useState } from 'react'

type DatePickerProps = {
	label?: string
}

const DatePicker = ({ label }: DatePickerProps) => {
	const [date, setDate] = useState<Date>()

	return (
		<div>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant={'outline'} className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date ? format(date, 'PPP') : <span>{label || 'Select a date'}</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0'>
					<Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
				</PopoverContent>
			</Popover>
		</div>
	)
}

export default DatePicker

