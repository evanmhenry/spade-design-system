import { Outlet } from 'react-router-dom'
import DocsSideMenu from './DocsSideMenu'

const DocsLayout = () => {
	return (
		<div className='flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
			<DocsSideMenu />
            <Outlet />
		</div>
	)
}

export default DocsLayout
