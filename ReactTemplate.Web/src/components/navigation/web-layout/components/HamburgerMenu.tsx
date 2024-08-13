import { Dispatch, SetStateAction } from 'react'

type HamburgerMenuProps = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	className?: string
}

const HamburgerMenu = ({ isOpen, setIsOpen, className }: HamburgerMenuProps) => (
	<button type='button' onClick={() => setIsOpen(!isOpen)} className={`flex flex-col w-6 h-6 justify-center items-center gap-2 ${className}`} aria-label='Toggle Menu'>
		<div className={`w-5 h-[2px] rounded bg-primary transition-transform duration-200 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`} />
		<div className={`w-5 h-[2px] rounded bg-primary transition-transform duration-200 ${isOpen ? 'transform -rotate-45 -translate-y-1' : ''}`} />
	</button>
)

export default HamburgerMenu
