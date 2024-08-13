/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom'
import { GitHubIcon, InstagramIcon, TwitterIcon } from '@/components/icons/SocialIcon'

export const SITE_NAME = 'Spade UI'

const EMAIL = 'info@placeholder.com'

export const PrimaryCta = 'Contact Us'
export const SecondaryCta = 'Learn More'

export const handlePrimaryCtaClick = () => {
	// window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`
}

export const handleSecondaryCtaClick = () => {
	console.log('Learn more')
}

export const NavMenuOptions = [
	{ name: 'Docs', path: '/docs', type: Link },
	{ name: 'Blog', path: '/blog', type: Link },
	{ name: 'Showcase', path: '/showcase', type: Link },
]

export const HeroTitle = () => (
	<div>
		This is a <span className='text-brand-gradient'>hero title</span>
	</div>
)

export const HeroDescription = 'We provide a comprehensive platform to manage and streamline your operations.'

export const FeaturesDescription = 'Our platform offers a variety of features to help you manage and streamline your data.'
export const FeatureList = [
	{
		name: 'Data Import',
		title: 'Easily Import Data',
		description: 'Connect to your system or upload files to import data effortlessly. Avoid manual data entry in spreadsheets.',
		// image: Placeholder,
	},
	{
		name: 'Custom Setup',
		title: 'Configure Custom Settings',
		description: 'Customize configurations and distributions based on your needs. No more manual calculations.',
		// image: Placeholder,
	},
	{
		name: 'History Tracking',
		title: 'Maintain Detailed Records',
		description: 'Keep detailed records of all your operations. Easily review past data.',
		// image: Placeholder,
	},
	{
		name: 'Export Options',
		title: 'Seamless Export',
		description: 'Export data directly to your preferred software. Simplify your workflow.',
		// image: Placeholder,
	},
]

export const PricingOptions = [
	{
		name: 'Free Trial',
		price: 'Free',
		description: 'Start with a free trial to explore our platform.',
		bullets: ['30-day free trial', 'Platform setup', 'System integration', 'Customer support'],
		cta: PrimaryCta,
		primary: false,
		action: handlePrimaryCtaClick,
	},
	{
		name: 'Premium',
		price: 'Contact Us',
		description: 'Ideal for businesses with multiple locations.',
		bullets: ['Advanced features', 'Multiple configurations', 'Priority support', 'Custom integrations'],
		cta: PrimaryCta,
		primary: true,
		action: handlePrimaryCtaClick,
	},
]

export const FaqDescription = 'Frequently Asked Questions'
export const FaqList = [
	{
		question: 'How does your platform work?',
		answer: 'Our platform allows you to import data, configure settings, and export to your preferred software seamlessly.',
	},
	{
		question: 'Which systems are supported?',
		answer: 'We support integrations with various systems. Contact us to discuss specific integrations.',
	},
	{
		question: 'How can I start?',
		answer: 'Contact us to set up your account and begin using our platform.',
	},
	{
		question: 'What are the costs?',
		answer: 'Pricing varies based on usage and features. Refer to the pricing section or contact us for more details.',
	},
]

export const GetStartedTitle = 'Simplify Your Operations'

export const FooterSlogan = 'Simplify your operations with our platform.'

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

