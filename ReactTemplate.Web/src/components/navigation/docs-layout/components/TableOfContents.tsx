import { useEffect, useState } from 'react'

// TODO: make this work / populate based on the current page
const TableOfContents = ({ contents }) => {
	const [activeId, setActiveId] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			const sections = contents.map((section) => document.getElementById(section.id))
			const offset = window.innerHeight / 3

			const activeSection = sections.find((section) => section && section.getBoundingClientRect().top < offset)

			if (activeSection) {
				setActiveId(activeSection.id)
			}
		}

		document.addEventListener('scroll', handleScroll)
		return () => document.removeEventListener('scroll', handleScroll)
	}, [contents])

	const handleLinkClick = (e, id) => {
		e.preventDefault()
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<div className='hidden xl:block overflow-y-auto flex-shrink-0 max-w-xs h-screen sticky top-16 w-64 scrollbar-thin py-10'>
			<div className='mb-6'>On this page</div>
			{contents.map((content) => (
				<div key={content.id} className={`pl-${content.level * 4} mb-2`}>
					<a
						href={`#${content.id}`}
						onClick={(e) => handleLinkClick(e, content.id)}
						className={`hover:text-brand ${activeId === content.id ? 'font-semibold' : 'text-muted-foreground'}`}
					>
						{content.title}
					</a>
				</div>
			))}
		</div>
	)
}

export default TableOfContents

