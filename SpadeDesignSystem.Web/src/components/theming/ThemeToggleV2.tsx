import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTheme } from './ThemeProviderV2'

const ThemeToggleV2 = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button variant='ghost' size='icon' onClick={toggleTheme}>
			<Sun className={`h-5 w-5 transition-all ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
			<Moon className={`absolute h-5 w-5 transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}

export default ThemeToggleV2
