import { LayoutGridIcon, Play } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavSections } from './Constants'

const DocsSideMenu = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const MainOptions = [
		{
			label: 'Start Here',
			path: '/docs',
			icon: <Play size={20} />,
		},
		{
			label: 'Guides',
			path: '/docs/guides',
			icon: <LayoutGridIcon size={20} />,
		},
		{
			label: 'Resources',
			path: '/docs/resources',
			icon: <LayoutGridIcon size={20} />,
		},
	]

	const isPathSelected = (path: string) => {
		if (path === '/') {
			return location.pathname === path
		}
		return location.pathname.endsWith(path)
	}

	return (
		<div className='hidden lg:flex flex-col gap-8 overflow-y-auto flex-shrink-0 max-w-xs h-screen sticky top-16 w-64 scrollbar-thin overflow-clip py-10'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-3'>
					{MainOptions.map((option) => (
						<div key={option.label} className='flex flex-col'>
							<a
								key={option.label}
								className={`flex gap-2 hover:cursor-pointer items-center font-medium ${isPathSelected(option.path) ? 'text-brand border-l-brand' : 'text-muted-foreground hover:text-primary hover:border-l-muted-foreground'}`}
								onClick={() => navigate(option.path)}
							>
								<div className='rounded-md border p-[6px]'>{option.icon}</div>
								{option.label}
							</a>
						</div>
					))}
				</div>

				{NavSections.map((section) => (
					<div key={section.title} className='flex flex-col gap-2'>
						<div className='font-semibold text-lg'> {section.title} </div>
						<div className='flex flex-col gap-2 border-l'>
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
		</div>
	)
}

export default DocsSideMenu
