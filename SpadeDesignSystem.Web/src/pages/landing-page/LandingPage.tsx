import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const LandingPage = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='h-dvh flex flex-col items-center'>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='pt-16 bg-background h-dvh bg-orange-100'>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h2 className='text-3xl font-extrabold text-primary sm:text-4xl'>Spade Design System</h2>
						<p className='mt-4 text-lg leading-6 text-muted-foreground'>Example project, components, and patterns using React, TailwindCSS, and Framer Motion.</p>
						<div className='mt-6'>
							<Link to='/buttons'>
								<Button>Go to dashboard</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='container flex justify-center'>
				<div className='border rounded aspect-video w-full max-w-7xl flex justify-center items-center bg-secondary text-muted-foreground'>MOCKUP</div>
			</div>
			{/* <section className='bg-primary w-full py-10 flex flex-col gap-4'>
				<div className='text-secondary flex justify-center '>Trust by hundreds of companies worldwide</div>
				<div className='flex justify-center flex-wrap'>
					{['Company1.svg', 'Company2.svg', 'Company3.svg'].map((companyLogo, index) => (
						<img key={index} src={`/path/to/${companyLogo}`} alt='Company logo' className='mx-2' />
					))}
				</div>
			</section> */}
			<footer className='relative border-t z-10 w-full'>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<p className='text-sm text-muted-foreground'>Spade Design System</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default LandingPage
