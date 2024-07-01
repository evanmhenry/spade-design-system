const EMAIL = 'support@spadehq.com'
const SUBJECT = 'PayGrids Sales Inquiry'

export const PrimaryCta = 'Contact Sales'
export const SecondaryCta = 'View Demo'

// eslint-disable-next-line react-refresh/only-export-components
export const handlePrimaryCtaClick = () => {
	window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`
}

// eslint-disable-next-line react-refresh/only-export-components
export const handleSecondaryCtaClick = () => {
	console.log('View demo')
}

export const HeroTitle = 'Tip distribution made easy'
export const HeroDescription = 'PayGrids is a tip distribution platform that makes it easy to import, configure, and export your tip data.'

export const FeaturesDescription = 'PayGrids makes it easy to import, configure, and export your tip data.'
export const FeatureList = [
	{
		name: 'POS Import',
		title: 'Import you time and tip data with ease',
		description: 'Connect directly to your POS System or use file uploads to import your time and tip data with ease. No more manual entry of data in spreadsheets.',
		// image: Placeholder,
	},
	{
		name: 'Tip Pool Configuration',
		title: 'Configure custom distributions',
		description: 'Configure contributions and distributions to custom tip pools based on time sheet job codes. No more manual calculations.',
		// image: Placeholder,
	},
	{
		name: 'Audit History',
		title: 'Keep detailed history of your tip distributions',
		description: 'See the in depth calculations behind each shift processed. Keep a detailed history of all tip distributions for your records.',
		// image: Placeholder,
	},
	{
		name: 'Payroll Export',
		title: 'Export directly to your payroll software',
		description: 'Export via file or direct connection to your payroll software. No more manual entry of tip data into your payroll software each week.',
		// image: Placeholder,
	},
]

export const PricingOptions = [
	{
		name: 'Free Trial',
		price: '$0',
		description: 'Get started with a setup and product demo',
		bullets: ['30-day free trial', 'Platform setup', 'Payroll system integration', 'POS system integration'],
		cta: PrimaryCta,
		primary: false,
		action: handlePrimaryCtaClick,
	},
	{
		name: 'Premium',
		price: undefined,
		description: 'Perfect for businesses with one or more venues',
		bullets: ['Effortlessly process shifts', 'Manage multiple tip pools', 'Seamlessly export to payroll software', 'Custom integration options', 'Dedicated support'],
		cta: PrimaryCta,
		primary: true,
		action: handlePrimaryCtaClick,
	},
]

export const FaqDescription = 'Everything you need to know about PayGrids and billing'
export const FaqList = [
	{
		question: 'How does PayGrids work?',
		answer:
			'PayGrids takes in data either manually or automated form your POS system and allows you to configure tip distributions before sending the data to your payroll software.',
	},
	{
		question: 'What platforms are supported?',
		answer: 'Currently, PayGrids supports integrations with Toast and Paycor. If you use a different platform, please reach out to us and we will work with you to integrate.',
	},
	{
		question: 'How do I get started?',
		answer: 'Reach out to us to get started. We will help you configure your account and get you up and running.',
	},
	{
		question: 'How much does PayGrids cost?',
		answer: 'PayGrids has a base cost of $100 per venue per month, with additional costs based on quantity of records processed. See the pricing section for more information.',
	},
]

export const GetStartedTitle = 'Tip distributions simplified'

export const FooterSections = [
	{
		title: 'Product',
		items: [
			// { label: 'Change Log', link: '/change-log' },
			{ label: 'Support', link: `mailto:${EMAIL}` },
		],
	},
	// {
	// 	title: 'Resources',
	// 	items: [
	// 		{ label: 'Terms of Use', link: '/terms-of-use' },
	// 		{ label: 'Privacy Policy', link: '/privacy-policy' },
	// 	],
	// },
]
