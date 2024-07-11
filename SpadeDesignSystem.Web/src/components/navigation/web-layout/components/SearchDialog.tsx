import { CommandDialog, CommandEmpty, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator } from '@/components/ui/Command'
import { Calculator, Calendar, Smile } from 'lucide-react'

type SearchDialogProps = {
	open: boolean
	setOpen: (isOpen: boolean) => void
}

const SearchDialog = ({ open, setOpen }: SearchDialogProps) => {
	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder='Search site...' />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading='Suggestions'>
					<CommandItem>
						<Calendar className='mr-2 h-4 w-4' />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<Smile className='mr-2 h-4 w-4' />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem>
						<Calculator className='mr-2 h-4 w-4' />
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
			</CommandList>
		</CommandDialog>
	)
}

export default SearchDialog

