import HamburgerMenu from './HamburgerMenu'
import Logo from '@/assets/spade-design-system-box.svg'
import { Button } from '@/components/ui/Button'
import { HashLink } from 'react-router-hash-link'
import { NavMenuOptions } from '@/pages/landingPage/Content'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ThemeToggleV2 from '@/components/theming/ThemeToggleV2'
import { GitHubIcon } from '@/components/icons/SocialIcon'
import { Separator } from '@/components/ui/Separator'
import ThemeToggleV3 from '@/components/theming/ThemeToggleV3'
import { Search } from 'lucide-react'
import SearchDialog from './SearchDialog'

const HeaderV2 = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)

	const handleSearch = () => {
		setSearchOpen((searchOpen) => !searchOpen)
	}

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setSearchOpen((searchOpen) => !searchOpen)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	const isDocsLayout = () => {
		return location.pathname.startsWith('/docs')
	}

	return (
		<>
			<header className={`z-20 sticky top-0 w-full border-b transition-all duration-300 bg-background ${hamburgerMenuOpen ? 'h-screen' : 'h-16'}`}>
				<div className='container max-w-screen-2xl'>
					<div className='flex justify-between w-full items-center h-16'>
						<div className='flex items-center justify-between gap-1 w-full '>
							<div className='flex items-center gap-4 w-full justify-between'>
								<a href='/'>
									<div className='flex items-center gap-2 text-2xl font-semibold'>
										<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={Logo} onClick={() => navigate('/')} />{' '}
										<span className={`${isDocsLayout() ? 'hidden' : ''} md:flex`}>Spade UI</span>
									</div>
								</a>
								<Button
									variant='outline'
									size='sm'
									className={`${isDocsLayout() ? '' : 'hidden'} md:flex text-muted-foreground gap-2 text-left w-56 justify-between`}
									onClick={handleSearch}
								>
									<div className='flex items-center gap-2'>
										<Search size={16} strokeWidth={2} />
										Search...
									</div>
									<kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
										<span className='text-xs'>⌘</span>K
									</kbd>
								</Button>
								<HamburgerMenu isOpen={hamburgerMenuOpen} setIsOpen={setHamburgerMenuOpen} className='md:hidden' />
							</div>
							<div className='hidden md:flex gap-1 md:items-center'>
								{NavMenuOptions.map((option) => (
									<Button variant='ghost' key={option.name}>
										<option.type to={option.path}>{option.name}</option.type>
									</Button>
								))}
								<Separator orientation='vertical' className='h-6 ml-2' />
								<div className='flex gap-1 pl-2 items-center text-muted-foreground'>
									<ThemeToggleV2 />
									<GitHubIcon />
								</div>
							</div>
						</div>
					</div>

					{/* DROP DOWN MENU */}
					<div
						className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
							hamburgerMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
						} w-full gap-4 pt-6 bg-background`}
					>
						<div className='flex flex-col gap-8'>
							<div className='flex flex-col gap-3'>
								{/* <Button type='button' variant='brandGradient' size='lg' onClick={handlePrimaryCtaClick}>
								Contact Sales
							</Button>
							<Button
								type='button'
								variant='outline'
								size='lg'
								// onClick={handleSignInClick}
							>
								Sign in
							</Button> */}
								<ThemeToggleV3 />
							</div>
							<div className='flex flex-col gap-6'>
								{NavMenuOptions.map((option) => (
									<div key={option.name} className='text-3xl font-medium'>
										<HashLink to={option.path}>{option.name}</HashLink>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</header>
			<SearchDialog open={searchOpen} setOpen={setSearchOpen} />
		</>
	)
}

export default HeaderV2

