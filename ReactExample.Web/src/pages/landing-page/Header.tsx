import { BoxIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

type HeaderProps = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const menuItems = [
	{ name: 'Buttons', icon: BoxIcon, path: '/buttons' },
	{ name: 'Charts', icon: BoxIcon, path: '/charts' },
	{ name: 'Data Table', icon: BoxIcon, path: '/data-table' },
	{ name: 'Cards', icon: BoxIcon, path: '/cards' },
	{ name: 'Inputs', icon: BoxIcon, path: '/inputs' },
]

const docsItems = [
	{ name: 'Getting Started', icon: BoxIcon, path: '/getting-started' },
	{ name: 'Project Structure', icon: BoxIcon, path: '/project-structure' },
	{ name: 'Routing', icon: BoxIcon, path: '/routing' },
	{ name: 'State Management', icon: BoxIcon, path: '/state-management' },
	{ name: 'Hooks', icon: BoxIcon, path: '/hook' },
]

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
	return (
		<header className={`fixed top-0 w-full border-b transition-all py-4 duration-300 bg-background ${isOpen ? 'h-screen' : 'h-16'}`}>
			<div className='container'>
				<div id='menu' className='flex justify-between w-full items-center'>
					<h1 className='text-2xl font-bold text-primary'>React Pattern</h1>
					<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-full' : 'max-h-0'} w-full gap-4 pt-10`}>
					<div className='flex flex-col gap-10'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-sm text-muted-foreground'>Docs</h3>
							{docsItems.map((item, index) => (
								<div key={index} className='flex gap-2 items-center'>
									<item.icon size={24} />
									<Link to={item.path}>{item.name}</Link>
								</div>
							))}
						</div>
						<div className='flex flex-col gap-4'>
							<h3 className='text-sm text-muted-foreground'>Components</h3>
							{menuItems.map((item, index) => (
								<div key={index} className='flex gap-2 items-center'>
									<item.icon size={24} />
									<Link to={item.path}>{item.name}</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
