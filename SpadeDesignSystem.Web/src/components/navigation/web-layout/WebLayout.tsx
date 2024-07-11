import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import HeaderV2 from './components/HeaderV2'

const WebLayout = () => {
	return (
		<>
			<HeaderV2 />
			<div className='flex flex-col flex-1 items-center w-screen overflow-auto bg-background'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default WebLayout
