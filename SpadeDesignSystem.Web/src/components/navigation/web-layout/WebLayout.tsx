import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const WebLayout = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='h-dvh flex flex-col items-center'>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='container flex-grow mt-16 max-w-screen-2xl'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default WebLayout
