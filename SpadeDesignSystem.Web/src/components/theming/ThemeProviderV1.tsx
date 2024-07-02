import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderV1Props = {
	children: React.ReactNode
	defaultTheme?: Theme
	storageKey?: string
}

type ThemeProviderV1State = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderV1State = {
	theme: 'system',
	setTheme: () => null,
}

const ThemeProviderV1Context = createContext<ThemeProviderV1State>(initialState)

export function ThemeProviderV1({ children, defaultTheme = 'system', storageKey = 'vite-ui-theme', ...props }: ThemeProviderV1Props) {
	const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('light', 'dark')

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

			root.classList.add(systemTheme)
			return
		}

		root.classList.add(theme)
	}, [theme])

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme)
			setTheme(theme)
		},
	}

	return (
		<ThemeProviderV1Context.Provider {...props} value={value}>
			{children}
		</ThemeProviderV1Context.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeProviderV1Context)

	if (context === undefined) throw new Error('useTheme must be used within a ThemeProviderV1')

	return context
}
