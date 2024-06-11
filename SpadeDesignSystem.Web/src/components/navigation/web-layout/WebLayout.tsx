import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'

const WebLayout = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='h-dvh flex flex-col items-center'>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='container flex-grow mt-16 max-w-screen-2xl'>
				<Outlet />
			</div>
			<footer className='relative border-t w-full'>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<p className='text-sm text-muted-foreground'>Spade Design System</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default WebLayout
