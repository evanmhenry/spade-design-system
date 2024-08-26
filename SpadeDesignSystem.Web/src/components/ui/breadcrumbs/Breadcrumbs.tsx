import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './Breadcrumb'

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs()

	// Filter out breadcrumbs before the organization level
	const filteredBreadcrumbs = breadcrumbs.filter(({ match }) => {
		// Include breadcrumbs that are at or after the organization level
		return match.pathname.includes('/organizations/')
	})

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{filteredBreadcrumbs.map(({ breadcrumb, match }, index) => {
					const isLast = index === filteredBreadcrumbs.length - 1
					return (
						<BreadcrumbItem key={match.pathname}>
							<Link to={match.pathname}>
								<BreadcrumbLink className={isLast ? 'text-primary font-semibold' : ''}>{breadcrumb}</BreadcrumbLink>
							</Link>
							{!isLast && <BreadcrumbSeparator />}
						</BreadcrumbItem>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default Breadcrumbs

