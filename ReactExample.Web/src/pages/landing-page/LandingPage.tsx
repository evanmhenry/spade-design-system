import { Button } from '@/components/ui/Button'
import { BoxIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuButton = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
	<button onClick={() => setIsOpen(!isOpen)} className='flex flex-col w-6 h-6 justify-center items-center gap-2'>
		<div className={`w-5 h-[2px] rounded bg-primary transition-transform duration-200 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
		<div className={`w-5 h-[2px] rounded bg-primary transition-transform duration-200 ${isOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></div>
	</button>
)

const LandingPage = () => {
	const [isOpen, setIsOpen] = useState(false)

	const menuItems = [
		{ name: 'Buttons', icon: BoxIcon, path: '/buttons' },
		{ name: 'Charts', icon: BoxIcon, path: '/charts' },
		{ name: 'Data Table', icon: BoxIcon, path: '/data-table' },
		{ name: 'Cards', icon: BoxIcon, path: '/cards' },
		{ name: 'Inputs', icon: BoxIcon, path: '/inputs' },
	]

	const docsItems = [
		{ name: 'Getting Started', icon: BoxIcon, path: '/getting-started' },
		{ name: 'Project Structure', icon: BoxIcon, path: '/project-structure' },
		{ name: 'Routing', icon: BoxIcon, path: '/routing' },
		{ name: 'State Management', icon: BoxIcon, path: '/state-management' },
		{ name: 'Hooks', icon: BoxIcon, path: '/hook' },
	]

	return (
		<div className='h-dvh'>
			<header className={`fixed top-0 w-full container border-b transition-all py-4 duration-300 backdrop-blur-xl ${isOpen ? 'h-screen' : 'h-16'}`}>
				<div id='menu' className='flex justify-between w-full items-center'>
					<h1 className='text-2xl font-bold text-primary'>React Pattern</h1>
					<MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-full' : 'max-h-0'} w-full gap-4 pt-6`}>
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-sm text-muted-foreground'>Docs</h3>
							{docsItems.map((item, index) => (
								<div key={index} className='flex gap-2 items-center'>
									<item.icon size={24} />
									<Link to={item.path}>{item.name}</Link>
								</div>
							))}
						</div>
						<div className='flex flex-col gap-4'>
							<h3 className='text-sm text-muted-foreground'>Components</h3>
							{menuItems.map((item, index) => (
								<div key={index} className='flex gap-2 items-center'>
									<item.icon size={24} />
									<Link to={item.path}>{item.name}</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</header>
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
			<footer className='relative border-t z-10'>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-lg'>
					<div className='text-center'>
						<p className='text-sm text-muted-foreground'>React Pattern</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default LandingPage
