import { Outlet } from 'react-router-dom'
import DocsSideMenu from './components/DocsSideMenu'
import HeaderV2 from '../web-layout/components/HeaderV2'
import Footer from '../web-layout/components/Footer'
import DocsMobileMenu from './components/DocsMobileMenu'

const DocsLayout = () => {
	return (
		<>
			<HeaderV2 />
			<DocsMobileMenu />
			<div className='flex min-h-screen container max-w-screen-2xl relative gap-10'>
				<DocsSideMenu />
				<div className='flex-1 py-10'>
					<Outlet />
				</div>
				<div className='hidden xl:block overflow-y-auto flex-shrink-0 max-w-xs h-screen sticky top-16 w-64 scrollbar-thin bg-red-300 py-10'>Table of Contents</div>
			</div>
			<Footer />
		</>
	)
}

export default DocsLayout
