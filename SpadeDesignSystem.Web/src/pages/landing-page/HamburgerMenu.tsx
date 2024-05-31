import { Dispatch, SetStateAction } from 'react'

type HamburgerMenuProps = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    className?: string
}

const HamburgerMenu = ({ isOpen, setIsOpen, className }: HamburgerMenuProps) => {
    return (
        <button onClick={() => setIsOpen(!isOpen)} className={`flex flex-col w-6 h-6 justify-center items-center gap-2 ${className}`}>
            <div className={`w-5 h-[2px] rounded bg-primary transition-transform duration-200 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-[2px] rounded bg-primary transition-transform duration-200 ${isOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></div>
        </button>
    )
}

export default HamburgerMenu