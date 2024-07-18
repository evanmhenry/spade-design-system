import HamburgerMenu from './HamburgerMenu'
import Logo from '@/assets/spade-design-system-box.svg'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../../../ui/NavigationMenu'
import { Button } from '@/components/ui/Button'
import { HashLink } from 'react-router-hash-link'
import { NavMenuOptions, PrimaryCta, SITE_NAME, handlePrimaryCtaClick } from '@/pages/landingPage/Content'
import { useState } from 'react'
// import { useMsal } from '@azure/msal-react'
// import { loginRequest } from '../../../../security/AuthConfig'

const HeaderV1 = () => {
	const [isOpen, setIsOpen] = useState(false)

	// const { instance } = useMsal()

	// const handleSignInClick = () => {
	// 	instance.loginRedirect(loginRequest)
	// }

	return (
		<header className={`z-10 sticky top-0 w-full border-b transition-all duration-300 bg-background ${isOpen ? 'h-screen' : 'h-16'}`}>
			<div className='container max-w-screen-2xl'>
				<div className='flex justify-between w-full items-center h-16'>
					<a href='/'>
						<div className='flex items-center gap-3 text-2xl font-semibold'>
							<a href='/'>
								<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={Logo} /> {SITE_NAME}
							</a>
						</div>
					</a>

					<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} className='md:hidden' />
					<div className='hidden md:flex gap-4'>
						<NavigationMenu>
							<NavigationMenuList>
								{NavMenuOptions.map((option) => (
									<NavigationMenuItem key={option.name}>
										<option.type to={option.path}>
											<NavigationMenuLink className={navigationMenuTriggerStyle()}>{option.name}</NavigationMenuLink>
										</option.type>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
							<div className='flex gap-2 pl-3'>
								<Button
									type='button'
									variant='outline'
									size='sm'
									// onClick={handleSignInClick}
								>
									Sign in
								</Button>
								<Button type='button' variant='brandGradient' size='sm' onClick={handlePrimaryCtaClick}>
									{PrimaryCta}
								</Button>
							</div>
						</NavigationMenu>
					</div>
				</div>
				<div
					className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
						isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
					} w-full gap-4 pt-6 bg-background`}
				>
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-3'>
							<Button type='button' variant='brandGradient' size='lg' onClick={handlePrimaryCtaClick}>
								Contact Sales
							</Button>
							<Button
								type='button'
								variant='outline'
								size='lg'
								// onClick={handleSignInClick}
							>
								Sign in
							</Button>
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
	)
}

export default HeaderV1
