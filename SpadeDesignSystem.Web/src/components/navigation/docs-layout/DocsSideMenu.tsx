import { Link, useLocation } from 'react-router-dom'

const DocsSideMenu = () => {
	const location = useLocation()

	const navOptions = [
		{
			label: 'Getting Started',
			path: '/docs',
		},
	]

	const isPathSelected = (path: string) => {
		if (path === '/') {
			return location.pathname === path
		}
		return location.pathname.startsWith(path)
	}

	return (
		<div className='flex h-screen flex-col w-64 flex-shrink-0 bg-orange-200'>
			{navOptions.map((option) => (
				<Link
					key={option.label}
					to={option.path}
					className={`flex items-center gap-3 rounded-lg py-2 transition-all hover:text-primary ${isPathSelected(option.path) ? 'text-primary bg-muted' : 'text-muted-foreground'}`}
				>
					{option.label}
				</Link>
			))}
		</div>
	)
}

export default DocsSideMenu
