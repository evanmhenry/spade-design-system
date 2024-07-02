import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTheme } from './ThemeProviderV2'

// Needs to use ThemeProviderV2
const ThemeToggleV3 = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button variant='outline' onClick={toggleTheme}>
			<div className='flex'>
				<Sun className={`h-5 w-5 transition-all ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
				<Moon className={`absolute h-5 w-5  transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
			</div>
			<span className='ml-2'> Switch Theme</span>
		</Button>
	)
}

export default ThemeToggleV3
