import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

type SideMenuHeaderProps = {
	title: string
	logo?: string
	version?: string
}

export const SideMenuHeader = ({ title, logo, version }: SideMenuHeaderProps) => {
	return (
		<div className='py-4 px-4 h-14 flex-shrink-0'>
			<a className='flex items-center justify-between hover:cursor-pointer' href={`/dashboard`}>
				<div className='flex items-center gap-2 text-lg font-semibold '>
					<img alt='Logo' className='h-7 flex-none hover:cursor-pointer' src={logo} /> {title}
				</div>
				{version ? <span className='text-xs text-muted-foreground'>{version}</span> : null}
			</a>
		</div>
	)
}

type MenuOptionProps = {
	label: string
	path: string
	icon?: JSX.Element
}

export const MenuOption = ({ label, path, icon }: MenuOptionProps) => {
	const location = useLocation()

	const isPathSelected = (path: string) => location.pathname.endsWith(path)

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
	title: string
	options: {
		label: string
		path: string
	}[]
	icon?: JSX.Element
}

export const CollapsingMenuGroup = ({ title, options, icon }: CollapsingMenuGroupProps) => {
	const [isCollapsed, setIsCollapsed] = useState(true)
	const navigate = useNavigate()
	const location = useLocation()

	const isPathSelected = useCallback((path: string) => location.pathname.startsWith(path), [location.pathname])
	const isSectionSelected = useCallback(() => options.some((option) => isPathSelected(option.path)), [isPathSelected, options])

	useEffect(() => {
		if (isSectionSelected()) {
			setIsCollapsed(false)
		} else {
			setIsCollapsed(true)
		}
	}, [isSectionSelected, location.pathname])

	return (
		<>
			<div
				className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:cursor-pointer ${
					isSectionSelected() ? 'text-primary' : 'text-muted-foreground'
				}`}
				key={title}
				onClick={() => navigate(options[0].path)}
			>
				{icon}
				{title}
			</div>
			{!isCollapsed && (
				<div className='ml-5 pl-3 border-l mb-2'>
					{options.map((option) => (
						<Link
							to={option.path}
							className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
								isPathSelected(option.path) ? 'text-primary bg-muted' : 'text-muted-foreground'
							}`}
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
		<div className='text-muted-foreground text-xs font-semibold mb-2 flex'>{title}</div>
		{children}
	</div>
)

export const SideMenuContent = ({ children }: { children: React.ReactNode }) => <div className='p-4 pt-3 h-full overflow-scroll'>{children}</div>

export const SideMenuFooter = ({ children }: { children: React.ReactNode }) => <div className='p-4'>{children}</div>

export const SideMenuContainer = ({ children }: { children: React.ReactNode }) => <div className='flex h-screen flex-col w-64 border-r flex-shrink-0'>{children}</div>
