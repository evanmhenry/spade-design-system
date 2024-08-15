import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './app-layout/AppLayout'
import ErrorPage from '@/pages/ErrorPage'
import DashboardPage from '@/pages/DashboardPage'

const BrowserRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '',
				element: <DashboardPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default BrowserRouter
