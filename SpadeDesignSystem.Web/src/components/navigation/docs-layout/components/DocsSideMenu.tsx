import { LayoutGridIcon, Play } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export const NavSections = [
	{
		title: 'Section 1',
		options: [
			{
				label: 'Label 1',
				path: '/docs',
			},
			{
				label: 'Label 1',
				path: '/docs2',
			},
			{
				label: 'Label 1',
				path: '/docs2',
			},
		],
	},
	{
		title: 'Section 2',
		options: [
			{
				label: 'Label 2',
				path: '/docs2',
			},
			{
				label: 'Label 2',
				path: '/docs2',
			},
			{
				label: 'Label 2',
				path: '/docs2',
			},
		],
	},
	{
		title: 'Section 3',
		options: [
			{
				label: 'Label 3',
				path: '/docs2',
			},
			{
				label: 'Label 3',
				path: '/docs2',
			},
			{
				label: 'Label 3',
				path: '/docs2',
			},
		],
	},
]

const DocsSideMenu = () => {
	const location = useLocation()

	const MainOptions = [
		{
			label: 'Start Here',
			path: '/docs',
			icon: <Play size={20} />,
		},
		{
			label: 'Guides',
			path: '/guides',
			icon: <LayoutGridIcon size={20} />,
		},
		{
			label: 'Resources',
			path: '/resources',
			icon: <LayoutGridIcon size={20} />,
		},
	]

	const isPathSelected = (path: string) => {
		if (path === '/') {
			return location.pathname === path
		}
		return location.pathname.startsWith(path)
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
