import { Outlet } from 'react-router-dom'
import DocsSideMenu from './components/DocsSideMenu'
import HeaderV2 from '../web-layout/components/Header'
import Footer from '../web-layout/components/Footer'
import DocsMobileMenu from './components/DocsMobileMenu'
import TableOfContents from './components/TableOfContents'

const DocsLayout = () => {
	const contents = [
		{ id: 'installation', title: 'Installation', level: 0 },
		{ id: 'basic-usage', title: 'Basic usage', level: 0 },
		{ id: 'configuration', title: 'Configuration', level: 0 },
		{ id: 'next-steps', title: 'Next Steps', level: 0 },
	]

	return (
		<>
			<HeaderV2 />
			<DocsMobileMenu />
			<div className='flex min-h-screen container max-w-screen-2xl relative gap-10'>
				<DocsSideMenu />
				<div className='flex-1 py-10'>
					<Outlet />
				</div>
				<TableOfContents contents={contents} />
			</div>
			<Footer />
		</>
	)
}

export default DocsLayout
