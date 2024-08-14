import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/Drawer'
import { ChevronRight, PanelLeftOpen, X } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavSections from './DocsSideMenu'

const DocsMobileMenu = () => {
	const location = useLocation()
	const [isOpen, setIsOpen] = useState(false)

	const isPathSelected = (path: string) => {
		if (path === '/') {
			return location.pathname === path
		}
		return location.pathname.startsWith(path)
	}

	const toggleDrawer = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='lg:hidden z-10 sticky top-16 w-full border-b bg-background h-14 flex items-center container'>
			<div className='flex justify-between w-full items-center h-16'>
				<Drawer direction='left'>
					<DrawerTrigger className='flex items-center gap-4'>
						<button className='flex items-center gap-2' onClick={toggleDrawer}>
							<PanelLeftOpen />
						</button>
						<div className='flex items-center gap-1 text-muted-foreground'>
							Getting Started
							<ChevronRight size={16} />
							<span className='text-primary'>Installation</span>
						</div>
					</DrawerTrigger>

					<DrawerContent className='h-full w-80 p-6'>
						<DrawerClose asChild className='absolute right-6 top-6'>
							<X className='h-6 w-6' />
						</DrawerClose>
						<div className='flex flex-col gap-8'>
							{NavSections.map((section) => (
								<div key={section.title} className='flex flex-col gap-4'>
									<div className='font-semibold text-lg'> {section.title} </div>
									<div className='flex flex-col gap-6 border-l'>
										{section.options.map((option) => (
											<a
												key={option.label}
												className={`flex gap-2 pl-4 border-l -ml-px hover:cursor-pointer ${isPathSelected(option.path) ? 'text-brand border-l-brand' : 'text-muted-foreground hover:text-primary hover:border-l-muted-foreground'}`}
											>
												{option.label}
											</a>
										))}
									</div>
								</div>
							))}
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	)
}

export default DocsMobileMenu

