import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const LandingPage = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='h-dvh flex flex-col items-center'>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='pt-16 bg-background h-dvh'>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h2 className='text-3xl font-extrabold text-primary sm:text-4xl'>Welcome to React Pattern</h2>
						<p className='mt-4 text-lg leading-6 text-muted-foreground'>This is an example project to demonstrate react conventions.</p>
						<div className='mt-6'>
							<Link to='/buttons'>
								<Button>Go to dashboard</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<footer className='relative border-t z-10 w-full'>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<p className='text-sm text-muted-foreground'>React Pattern</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default LandingPage
