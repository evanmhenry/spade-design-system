/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom'
import { GitHubIcon, InstagramIcon, TwitterIcon } from '@/components/icons/SocialIcon'

export const SITE_NAME = 'Spade UI'

const EMAIL = 'info@placeholder.com'

export const PrimaryCta = 'Browse components'
export const SecondaryCta = 'Learn More'

export const handlePrimaryCtaClick = () => {
	// window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`
}

export const handleSecondaryCtaClick = () => {
	console.log('Learn more')
}

export const NavMenuOptions = [{ name: 'Components', path: '/components', type: Link }]

export const HeroTitle = () => (
	<div>
		A growing <span className='text-brand-gradient'>component library</span>
	</div>
)

export const HeroDescription = 'Modular components for any React project'

export const FooterSections = [
	{
		title: 'Product',
		items: [{ label: 'Support', link: `mailto:${EMAIL}` }],
	},
	{
		title: 'Company',
		items: [
			{ label: 'About Us', link: '/about' },
			{ label: 'Contact', link: '/contact' },
		],
	},
]

export const SocialMediaLinks = [
	{ name: 'GitHub', icon: <GitHubIcon link='https://www.github.com' /> },
	{ name: 'Twitter', icon: <TwitterIcon link='https://www.twitter.com' /> },
	{ name: 'Instagram', icon: <InstagramIcon link='https://www.instagram.com' /> },
	// { name: 'Discord', icon: <DiscordIcon link='https://www.discord.com' /> },
	// { name: 'Facebook', icon: <FacebookIcon link='https://www.facebook.com' /> },
	// { name: 'YouTube', icon: <YouTubeIcon link='https://www.youtube.com' /> },
	// { name: 'Threads', icon: <ThreadsIcon link='https://www.threads.com' /> },
	// { name: 'LinkedIn', icon: <LinkedInIcon link='https://www.linkedin.com' /> },
	// { name: 'Dribbble', icon: <DribbbleIcon link='https://www.dribbble.com' /> },
	// { name: 'TikTok', icon: <TikTokIcon link='https://www.tiktok.com' /> },
]

