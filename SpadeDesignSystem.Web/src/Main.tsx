import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './components/theming/ThemeProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import BrowserRouter from './components/navigation/BrowserRouter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
		<RouterProvider router={BrowserRouter} />
	</ThemeProvider>,
)
