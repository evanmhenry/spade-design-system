import LightLogo from '@/assets/brand/design-system-logo-light.svg'
import DarkLogo from '@/assets/brand/design-system-logo-dark.svg'
import { useTheme } from '@/components/theming/ThemeProvider'
import { useNavigate } from 'react-router-dom'
import DiscordDark from '@/assets/social-icons/discord-dark.svg'
import DiscordLight from '@/assets/social-icons/discord-light.svg'
import FacebookDark from '@/assets/social-icons/facebook-dark.svg'
import FacebookLight from '@/assets/social-icons/facebook-light.svg'
import GitHubDark from '@/assets/social-icons/github-dark.svg'
import GitHubLight from '@/assets/social-icons/github-light.svg'
import InstagramDark from '@/assets/social-icons/instagram-dark.svg'
import InstagramLight from '@/assets/social-icons/instagram-light.svg'
import TwitterDark from '@/assets/social-icons/twitter-dark.svg'
import TwitterLight from '@/assets/social-icons/twitter-light.svg'
import YouTubeDark from '@/assets/social-icons/youtube-dark.svg'
import YouTubeLight from '@/assets/social-icons/youtube-light.svg'

type LinkItem = {
	label: string
	link: string
}

type FooterLinksProps = {
	title: string
	items: LinkItem[]
}

const FooterLinks = ({ title, items }: FooterLinksProps) => (
	<div className='flex flex-col items-start gap-2 md:w-40'>
		<div className='text-md font-semibold mb-1'>{title}</div>
		{items.map((item) => (
			<a key={item.label} href={item.link} className='inline-block text-primary/55 hover:text-primary'>
				{item.label}
			</a>
		))}
	</div>
)

const Footer = () => {
	const { theme } = useTheme()
	const navigate = useNavigate()

	const description = 'A design system for building intuitive web applications'

	return (
		<footer className='w-full border-t border-light/10'>
			<div className='container max-w-screen-2xl flex flex-col md:flex-row items-start py-12 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-20 '>
				<div className='flex flex-col justify-between items-start w-full gap-y-4 flex-1 md:w-40 lg:w-60'>
					<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={theme === 'dark' ? DarkLogo : LightLogo} onClick={() => navigate('/')} />
					<div className='text-sm text-muted-foreground'>{description}</div>
				</div>
				<div className='flex flex-col items-start gap-2 md:w-40'>
					<div className='text-md font-semibold mb-1'>Social</div>
					<div className='flex gap-3'>
						<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
							<img src={theme === 'dark' ? InstagramDark : InstagramLight} alt='Instagram' className='h-5 w-5' />
						</a>
						<a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
							<img src={theme === 'dark' ? TwitterDark : TwitterLight} alt='Twitter' className='h-5 w-5' />
						</a>
						<a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
							<img src={theme === 'dark' ? GitHubDark : GitHubLight} alt='GitHub' className='h-5 w-5' />
						</a>
						<a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
							<img src={theme === 'dark' ? FacebookDark : FacebookLight} alt='Facebook' className='h-5 w-5' />
						</a>
						<a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
							<img src={theme === 'dark' ? YouTubeDark : YouTubeLight} alt='YouTube' className='h-5 w-5' />
						</a>
						<a href='https://discord.com/' target='_blank' rel='noopener noreferrer'>
							<img src={theme === 'dark' ? DiscordDark : DiscordLight} alt='Discord' className='h-5 w-5' />
						</a>
					</div>
				</div>
				<FooterLinks
					title='Product'
					items={[
						{ label: 'Docs', link: '/docs' },
						{ label: 'Change log', link: '/change-log' },
						{ label: 'Report a bug', link: '/report-bug' },
					]}
				/>
				{/* <FooterLinks
                            title='Company'
                            items={[
                                { label: 'Community', link: '/community' },
                                { label: 'Careers', link: '/careers' },
                                { label: 'Contact', link: '/contact' },
                            ]}
                        /> */}
				<FooterLinks
					title='Resources'
					items={[
						{ label: 'Help Center', link: '/help-center' },
						{ label: 'Terms of Use', link: '/terms-of-use' },
						{ label: 'Privacy Policy', link: '/privacy-policy' },
					]}
				/>
			</div>
		</footer>
	)
}

export default Footer
