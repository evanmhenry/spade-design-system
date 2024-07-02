import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import HeaderV2 from './components/HeaderV2'

const WebLayout = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex flex-col flex-1 items-center w-screen overflow-auto bg-background'>
				<HeaderV2 />
				<div className='mt-16'>
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default WebLayout
