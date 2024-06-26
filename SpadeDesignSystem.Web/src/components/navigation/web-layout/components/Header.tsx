import { BoxIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/NavigationMenu'
import LightLogo from '@/assets/brand/design-system-logo-light.svg'
import DarkLogo from '@/assets/brand/design-system-logo-dark.svg'
import { useTheme } from '@/components/theming/ThemeProvider'

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
	const { theme } = useTheme()

	return (
		<header className={`z-50 fixed top-0 w-full border-b transition-all duration-300 bg-background ${isOpen ? 'h-screen' : 'h-16'}`}>
			<div className='container max-w-screen-2xl'>
				<div className='flex justify-between w-full items-center h-16'>
					<a href='/'>
						<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={theme === 'dark' ? DarkLogo : LightLogo} />
					</a>
					<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} className='md:hidden' />
					<div className='hidden md:flex gap-4'>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<Link to='/buttons'>
										<NavigationMenuLink className={navigationMenuTriggerStyle()}>Components</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link to='/getting-started'>
										<NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
				<div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-full' : 'hidden'} w-full gap-4 pt-10 bg-background`}>
					<div className='flex flex-col gap-10'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-sm text-muted-foreground'>Docs</h3>
							{docsItems.map((item) => (
								<div key={item.name} className='flex gap-2 items-center'>
									<item.icon size={24} />
									<Link to={item.path}>{item.name}</Link>
								</div>
							))}
						</div>
						<div className='flex flex-col gap-4'>
							<h3 className='text-sm text-muted-foreground'>Components</h3>
							{menuItems.map((item) => (
								<div key={item.name} className='flex gap-2 items-center'>
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
