import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box, Calendar, Dot, LayoutGrid, Notebook, Pin, Settings } from 'lucide-react'
import Logo from '@/assets/spade-design-system-box.svg'
import { useEffect, useState } from 'react'

type SideMenuHeaderProps = {
	title: string
	logo?: string
}

const SideMenuHeader = ({ title, logo }: SideMenuHeaderProps) => {
	return (
		<div className='py-4 px-3 h-14 flex-shrink-0'>
			<a className='flex items-center gap-2 text-xl font-semibold hover:cursor-pointer' href={`/`}>
				<img alt='Logo' className='h-7 flex-none hover:cursor-pointer' src={logo} /> {title}
			</a>
		</div>
	)
}

type MenuOptionProps = {
	label: string
	path: string
	icon?: JSX.Element
}

const MenuOption = ({ label, path, icon }: MenuOptionProps) => {
	const location = useLocation()

	const isPathSelected = (path: string) => location.pathname.startsWith(path)

	return (
		<Link
			to={path}
			className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isPathSelected(path) ? 'text-primary bg-muted' : 'text-muted-foreground'}`}
		>
			{icon}
			{label}
		</Link>
	)
}

type CollapsingMenuGroupProps = {
	title?: string
	options: {
		label: string
		path: string
		icon: JSX.Element
	}[]
	icon?: JSX.Element
}

const CollapsingMenuGroup = ({ title = '', options, icon }: CollapsingMenuGroupProps) => {
	const [isCollapsed, setIsCollapsed] = useState(true)
	const navigate = useNavigate()
	const location = useLocation()

	const isPathSelected = (path: string) => location.pathname.startsWith(path)
	const isSectionSelected = (title: string) => location.pathname.toLowerCase().includes(title.toLowerCase())

	useEffect(() => {
		if (isSectionSelected(title)) {
			setIsCollapsed(false)
		} else {
			setIsCollapsed(true)
		}
	}, [location.pathname, title])

	return (
		<>
			<div
				className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:cursor-pointer ${isSectionSelected(title) ? 'text-primary' : 'text-muted-foreground'}`}
				key={title}
				onClick={() => navigate(options[0].path)}
			>
				{icon}
				{title}
			</div>
			{!isCollapsed && (
				<div className='ml-[21.5px] pl-3 border-l mb-2'>
					{options.map((option) => (
						<Link
							to={option.path}
							className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isPathSelected(option.path) ? 'text-primary bg-muted' : 'text-muted-foreground'}`}
							key={option.path}
						>
							{option.label}
						</Link>
					))}
				</div>
			)}
		</>
	)
}

export const SideMenuGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div className='my-3'>
		<div className='text-zinc-400 text-xs font-semibold mb-2 flex'>{title}</div>
		{children}
	</div>
)

export const SideMenuContent = ({ children }: { children: React.ReactNode }) => <div className='p-3 pt-3 h-full overflow-scroll'>{children}</div>

export const SideMenuFooter = ({ children }: { children: React.ReactNode }) => <div className='p-3 border-t'>{children}</div>

export const SideMenuContainer = ({ children }: { children: React.ReactNode }) => <div className='flex h-screen flex-col w-64 border-r flex-shrink-0'>{children}</div>

export const SideMenuExample = () => {
	const PROJECTS = [
		{
			label: 'Pay Grids',
			path: `/projects/pay-grids`,
			icon: <Dot strokeWidth={3} />,
		},
		{
			label: 'Back Ops',
			path: `/projects/back-ops`,
			icon: <Dot strokeWidth={3} />,
		},
	]

	const COMPONENTS = [
		{
			label: 'Buttons',
			path: `/components/buttons`,
			icon: <Dot strokeWidth={3} />,
		},
		{
			label: 'Charts',
			path: `/components/charts`,
			icon: <Dot strokeWidth={3} />,
		},
		{
			label: 'Cards',
			path: `/components/cards`,
			icon: <Dot strokeWidth={3} />,
		},
	]

	return (
		<SideMenuContainer>
			<SideMenuHeader title='Spade UI' logo={Logo} />
			<SideMenuContent>
				<MenuOption label='Dashboard' path='/dashboard' icon={<LayoutGrid className='h-5 w-5' />} />
				<MenuOption label='Schedule' path='/Schedule' icon={<Calendar className='h-5 w-5' />} />
				<MenuOption label='Areas' path='/Areas' icon={<Pin className='h-5 w-5' />} />
				<CollapsingMenuGroup title='Components' icon={<Box className='h-5 w-5' />} options={COMPONENTS} />
				<CollapsingMenuGroup title='Projects' icon={<Notebook className='h-5 w-5' />} options={PROJECTS} />
			</SideMenuContent>
			<SideMenuFooter>
				<MenuOption label='Settings' path='/d' icon={<Settings className='h-5 w-5' />} />
			</SideMenuFooter>
		</SideMenuContainer>
	)
}

