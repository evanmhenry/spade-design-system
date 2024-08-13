import { Link, useLocation } from 'react-router-dom'
import { Settings } from 'lucide-react'
import Logo from '@/assets/spade-software-icon.svg'
import { SITE_NAME } from '@/pages/landingPage/Content'
import { NAV_OPTIONS } from './AppContent'

const AppSideMenu = () => {
	const location = useLocation()

	const isPathSelected = (path: string) => {
		if (path === '/') {
			return location.pathname === path
		}
		return location.pathname.startsWith(path)
	}

	return (
		<div className='flex h-screen flex-col w-64 border-r flex-shrink-0'>
			<div className='p-3 border-b h-14 flex-shrink-0'>
				<div className='flex items-center gap-2 text-2xl font-semibold'>
					<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={Logo} />
					{SITE_NAME}
				</div>
			</div>
			<div className='p-3 h-full'>
				{NAV_OPTIONS.map((option) => (
					<Link
						key={option.label}
						to={option.path}
						className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
							isPathSelected(option.path) ? 'text-primary bg-muted' : 'text-muted-foreground'
						}`}
					>
						{option.icon}
						{option.label}
					</Link>
				))}
			</div>
			<div className='p-3 border-t'>
				<Link
					key='Settings'
					to='/settings'
					className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
						isPathSelected('/settings') ? 'text-primary bg-muted' : 'text-muted-foreground'
					}`}
				>
					<Settings className='h-5 w-5' />
					Settings
				</Link>
			</div>
		</div>
	)
}

export default AppSideMenu
